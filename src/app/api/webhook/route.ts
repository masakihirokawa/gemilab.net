import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const sig = request.headers.get("stripe-signature");

    if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
      httpClient: Stripe.createFetchHttpClient(),
    });

    let event: Stripe.Event;
    try {
      // Use constructEventAsync with SubtleCryptoProvider for Cloudflare Workers (Web Crypto API)
      event = await stripe.webhooks.constructEventAsync(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET,
        undefined,
        Stripe.createSubtleCryptoProvider()
      );
    } catch {
      return NextResponse.json({ error: "Webhook signature invalid" }, { status: 400 });
    }

    let kv: KVNamespace | null = null;
    try {
      kv = (() => { try { const { env } = getCloudflareContext(); return (env as Record<string, unknown>).PREMIUM_ACCESS as KVNamespace; } catch { return null; } })();
    } catch {
      // KV not available
    }

    if (!kv) {
      return NextResponse.json({ received: true, note: "KV not available" });
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as Stripe.Checkout.Session;
          // Tip / single-article purchases must never grant site-wide membership.
          // plan_type metadata is set by /api/checkout (tip / article / pro / premium).
          const planTypeMeta = session.metadata?.plan_type;
          if (planTypeMeta === "tip") break;
          if (planTypeMeta === "article") {
            const articleSlugMeta = session.metadata?.article_slug;
            const articleEmail = session.customer_details?.email?.trim().toLowerCase();
            if (articleSlugMeta && articleEmail) {
              const ARTICLE_TTL = 10 * 365 * 24 * 3600; // 10 years
              const articleKey = `site:gemilab:article:${articleEmail}:${articleSlugMeta}`;
              const existingArticle = await kv.get(articleKey);
              if (!existingArticle) {
                await kv.put(articleKey, JSON.stringify({
                  type: "article",
                  slug: articleSlugMeta,
                  stripe_session_id: session.id,
                  purchased_at: new Date().toISOString(),
                  expires_at: new Date(Date.now() + ARTICLE_TTL * 1000).toISOString(),
                }), { expirationTtl: ARTICLE_TTL });
              }
            }
            break;
          }
          const rawEmail = session.customer_details?.email;
          const email = rawEmail?.trim().toLowerCase();
          if (email) {
            const kvKey = `site:gemilab:email:${email}`;
            const now = new Date();
            let plan: string;
            let ttlSeconds: number;

            if (session.mode === "subscription") {
              // Pro monthly plan
              plan = "pro";
              ttlSeconds = 31 * 24 * 3600;
            } else if ((session.amount_total ?? 0) >= 500) {
              // Premium lifetime
              plan = "premium";
              ttlSeconds = 10 * 365 * 24 * 3600; // 10 years
            } else {
              // Tip / supporter
              plan = "supporter";
              ttlSeconds = 365 * 24 * 3600; // 1 year
            }

            const record = {
              plan,
              granted_at: now.toISOString(),
              expires_at: new Date(now.getTime() + ttlSeconds * 1000).toISOString(),
              source: "checkout",
            };
            await kv.put(kvKey, JSON.stringify(record), { expirationTtl: ttlSeconds });
          }
          break;
        }
        case "customer.subscription.updated": {
          const sub = event.data.object as Stripe.Subscription;
          const rawEmail = (sub as unknown as { customer_email?: string }).customer_email;
          const email = rawEmail?.trim().toLowerCase();
          if (email) {
            const kvKey = `site:gemilab:email:${email}`;
            const existing = await kv.get(kvKey);
            if (existing) {
              const record = JSON.parse(existing);
              record.expires_at = new Date(Date.now() + 31 * 24 * 3600 * 1000).toISOString();
              await kv.put(kvKey, JSON.stringify(record), { expirationTtl: 31 * 24 * 3600 });
            }
          }
          break;
        }
        case "customer.subscription.deleted": {
          const sub = event.data.object as Stripe.Subscription;
          const rawEmail = (sub as unknown as { customer_email?: string }).customer_email;
          const email = rawEmail?.trim().toLowerCase();
          if (email) {
            await kv.delete(`site:gemilab:email:${email}`);
          }
          break;
        }
      }
    } catch {
      // KV operation failed — still acknowledge the webhook to prevent retries
      return NextResponse.json({ received: true, note: "KV operation error" });
    }

    return NextResponse.json({ received: true });
  } catch {
    // Top-level catch to prevent unhandled errors returning 500
    return NextResponse.json({ received: true, note: "Internal error" });
  }
}
