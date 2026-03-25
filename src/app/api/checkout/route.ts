import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover",
    httpClient: Stripe.createFetchHttpClient(),
  });
}

const PLAN_NAMES: Record<string, string> = {
  // JA
  "price_1TCQyPEGB5g6A54oqVrc9ron": "Gemini Lab チップ（¥150）",
  "price_1TCQykEGB5g6A54oRZa4faF7": "Gemini Lab Pro（月額プラン）",
  "price_1TCQyxEGB5g6A54o56MtETkI": "Gemini Lab Premium（永久アクセス）",
  // EN
  "price_1TCQyXEGB5g6A54okNKaZiad": "Gemini Lab Tip ($1.50)",
  "price_1TCQymEGB5g6A54oyBTnCcRh": "Gemini Lab Pro (Monthly)",
  "price_1TCQyzEGB5g6A54odkusafTp": "Gemini Lab Premium (Lifetime)",
};

// Tip price IDs — these should NOT grant premium access
const TIP_PRICE_IDS = new Set([
  "price_1TCQyPEGB5g6A54oqVrc9ron", // ¥150 JPY
  "price_1TCQyXEGB5g6A54okNKaZiad", // $1.50 USD
]);

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { locale, priceId, mode, cancelUrl } = await request.json();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemilab.net";
    const prefix = locale === "en" ? "en/" : "";
    const fallbackCancel = `${baseUrl}/${prefix}support`;
    const planName = PLAN_NAMES[priceId] || "Gemini Lab Membership";

    // Determine plan type for verify-session to handle correctly
    const planType = mode === "subscription" ? "pro" : TIP_PRICE_IDS.has(priceId) ? "tip" : "premium";

    const session = await stripe.checkout.sessions.create({
      mode: mode || "payment",
      line_items: [
        {
          price: priceId || process.env.STRIPE_TIP_PRICE_ID!,
          quantity: 1,
        },
      ],
      metadata: { plan_type: planType },
      // Pro（月額）のみ初月無料トライアルを付与
      ...(mode === "subscription" && {
        subscription_data: { trial_period_days: 30, description: planName },
      }),
      ...(mode === "payment" && {
        payment_intent_data: { description: planName },
      }),
      success_url: `${baseUrl}/${prefix}api/verify-session?session_id={CHECKOUT_SESSION_ID}&locale=${locale}`,
      cancel_url: cancelUrl || fallbackCancel,
      locale: locale === "en" ? "en" : "ja",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Checkout failed: ${message}` },
      { status: 500 }
    );
  }
}
