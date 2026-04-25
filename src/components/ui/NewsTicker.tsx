"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLOUDNEXT26 — Google Cloud Next '26 で Gemini Enterprise Agent Platform GA、Agent Studio・A2Aプロトコル・第8世代TPU発表（4/22-25）",
    "GEMINI31PRO — Gemini 3.1 Pro プレビュー公開: 100万トークン・高度推論・マルチモーダル対応の最上位モデル（Vertex AI）",
    "AGENTSTUDIO — Agent Studio: プロンプトから複雑なエージェントまでローコードで構築・デプロイ可能に",
    "DROPS10 — Gemini Drops第10弾: macOSネイティブアプリ・Lyria 3 Pro音楽生成・Personal Intelligenceグローバル展開（4/25）",
    "SIRI — Siri を Gemini で再構築とGoogleが確認、2026年中にGemini搭載Siriが登場（4/22）",
    "CHROME — Gemini in Chrome が日本を含むAPAC 7カ国へ展開、デスクトップ・iOS対応（4/20）",
  ],
  en: [
    "CLOUDNEXT26 — Google Cloud Next '26: Gemini Enterprise Agent Platform GA, Agent Studio, A2A Protocol & 8th-gen TPU announced (4/22-25)",
    "GEMINI31PRO — Gemini 3.1 Pro in preview on Vertex AI: 1M-token context, advanced reasoning, full multimodal support",
    "AGENTSTUDIO — Agent Studio: low-code platform to build and deploy agents from simple prompts to complex workflows",
    "DROPS10 — Gemini Drops #10: native macOS app, Lyria 3 Pro music creation & Personal Intelligence goes global (4/25)",
    "SIRI — Google confirms Gemini-powered context-aware Siri is coming to iPhone in 2026 (4/22)",
    "CHROME — Gemini in Chrome expands to Japan and 6 other APAC countries on desktop & iOS (4/20)",
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
        background: "color-mix(in srgb, var(--accent-teal) 4%, transparent)",
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
            <span style={{ color: "var(--accent-teal)", fontSize: 8 }}>●</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
