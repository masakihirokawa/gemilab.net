import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { STRIPE_PRICE_IDS, CAMPAIGN } from "@/config/pricing";

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
  "price_1TFRyMEGB5g6A54o4j3brkd6": "Gemini Lab Premium（感謝価格 ¥980）",
  // EN
  "price_1TCQyXEGB5g6A54okNKaZiad": "Gemini Lab Tip ($1.50)",
  "price_1TCQymEGB5g6A54oyBTnCcRh": "Gemini Lab Pro (Monthly)",
  "price_1TCQyzEGB5g6A54odkusafTp": "Gemini Lab Premium (Lifetime)",
  "price_1TFRyMEGB5g6A54ocVmrC9gS": "Gemini Lab Premium (Thank You Price $7)",
};

// Tip price IDs — these should NOT grant premium access
const TIP_PRICE_IDS = new Set([
  "price_1TCQyPEGB5g6A54oqVrc9ron", // ¥150 JPY
  "price_1TCQyXEGB5g6A54okNKaZiad", // $1.50 USD
]);

// ── Locale-aware product names for Stripe Checkout ─────────────
const PRODUCT_NAMES: Record<string, Record<string, string>> = {
  tip: { ja: "Gemini Lab チップ", en: "Gemini Lab Tip" },
  pro: { ja: "Gemini Lab Pro（月額プラン）", en: "Gemini Lab Pro (Monthly)" },
  premium: { ja: "Gemini Lab プレミアム（永久アクセス）", en: "Gemini Lab Premium (Lifetime)" },
};

// Map priceId → { amount, currency, recurring? } for price_data
const PRICE_CONFIG: Record<string, { amount: number; currency: string; recurring?: { interval: "month" } }> = {
  [STRIPE_PRICE_IDS.ja.tip]: { amount: 150, currency: "jpy" },
  [STRIPE_PRICE_IDS.ja.pro]: { amount: 380, currency: "jpy", recurring: { interval: "month" } },
  [STRIPE_PRICE_IDS.ja.premium]: { amount: 1480, currency: "jpy" },
  [STRIPE_PRICE_IDS.en.tip]: { amount: 150, currency: "usd" },
  [STRIPE_PRICE_IDS.en.pro]: { amount: 300, currency: "usd", recurring: { interval: "month" } },
  [STRIPE_PRICE_IDS.en.premium]: { amount: 1000, currency: "usd" },
  ...(CAMPAIGN.enabled ? {
    [CAMPAIGN.priceIds.ja]: { amount: 980, currency: "jpy" },
    [CAMPAIGN.priceIds.en]: { amount: 700, currency: "usd" },
  } : {}),
};

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { locale, priceId, mode, cancelUrl, returnUrl } = await request.json();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemilab.net";
    const prefix = locale === "en" ? "en/" : "";
    const fallbackCancel = `${baseUrl}/${prefix}support`;
    const planName = PLAN_NAMES[priceId] || "Gemini Lab Membership";

    // Determine plan type for verify-session to handle correctly
    const planType = mode === "subscription" ? "pro" : TIP_PRICE_IDS.has(priceId) ? "tip" : "premium";

    const session = await stripe.checkout.sessions.create({
      mode: mode || "payment",
      line_items: [
        PRICE_CONFIG[priceId]
          ? {
              price_data: {
                currency: PRICE_CONFIG[priceId].currency,
                product_data: {
                  name: PRODUCT_NAMES[planType]?.[locale] || PRODUCT_NAMES[planType]?.en || planName,
                },
                unit_amount: PRICE_CONFIG[priceId].amount,
                ...(PRICE_CONFIG[priceId].recurring && { recurring: PRICE_CONFIG[priceId].recurring }),
              },
              quantity: 1,
            }
          : { price: priceId, quantity: 1 },
      ],
      metadata: { plan_type: planType, ...(returnUrl && { return_url: returnUrl }) },
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
