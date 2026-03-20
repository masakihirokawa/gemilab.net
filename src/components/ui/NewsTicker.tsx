"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.1 Flash-Lite Preview・Nano Banana 2 が登場（3/19）",
    "WORKSPACE — Gemini が Docs・Sheets・Slides・Drive に拡張、AI Overview 追加（3/17）",
    "CHROME — Gemini in Chrome がカナダ・NZ・インドに展開、50+ 言語対応（3/15）",
    "PIXEL — March Pixel Drop：Gemini で食料品注文・レストラン検索が可能に（3/13）",
    "HOME — Gemini for Home：音声コマンドの認識精度と機器制御が向上（3/10）",
    "PLAN — Google AI Pro $19.99/月 & Ultra プランで新機能にアーリーアクセス（3/8）",
  ],
  en: [
    "MODEL — Gemini 3.1 Flash-Lite Preview and Nano Banana 2 arrive (3/19)",
    "WORKSPACE — Gemini expands to Docs, Sheets, Slides & Drive with AI Overview (3/17)",
    "CHROME — Gemini in Chrome launches in Canada, NZ & India with 50+ languages (3/15)",
    "PIXEL — March Pixel Drop: grocery ordering and restaurant search via Gemini (3/13)",
    "HOME — Gemini for Home: improved voice recognition accuracy and device control (3/10)",
    "PLAN — Google AI Pro $19.99/month & Ultra plan with early feature access (3/8)",
  ],
};

export function NewsTicker() {
  const locale = useLocale();
  const items = NEWS_ITEMS[locale] || NEWS_ITEMS.en;
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        position: "fixed",
        top: 64,
        left: 0,
        width: "100%",
        zIndex: 99,
        height: 35,
        background: "color-mix(in srgb, var(--accent-coral) 4%, transparent)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 2,
      }}
    >
      <div
        className="animate-ticker"
        style={{
          display: "flex",
          gap: 60,
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((text, i) => (
          <span
            key={i}
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.03em",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ color: "var(--accent-coral)", fontSize: 8 }}>●</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
