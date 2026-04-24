"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DROPS10 — Gemini Drops第10弾: macOSネイティブアプリ・Lyria 3 Pro音楽生成・Personal Intelligenceグローバル展開（4/25）",
    "CHROME — Gemini in Chrome が日本を含むAPAC 7カ国へ展開、デスクトップ・iOS対応（4/20）",
    "GEMINI3 — Gemini 3 Flash が Geminiアプリの新デフォルトモデルに、次世代の高速インテリジェンスを実現",
    "SIRI — Siri を Gemini で再構築とGoogleが確認、2026年中にGemini搭載Siriが登場（4/22）",
    "EMBEDDING2 — Gemini Embedding 2 GA: 高精度RAG・検索向け次世代埋め込みモデルが一般提供開始",
    "CLOUDNEXT — Google Cloud Next 2026開催、TPU v7・Gemini 3.2・エージェントAIがエンタープライズを加速（4/22）",
  ],
  en: [
    "DROPS10 — Gemini Drops #10: native macOS app, Lyria 3 Pro music creation & Personal Intelligence goes global (4/25)",
    "CHROME — Gemini in Chrome expands to Japan and 6 other APAC countries on desktop & iOS (4/20)",
    "GEMINI3 — Gemini 3 Flash becomes the new default in the Gemini app with next-gen speed and intelligence",
    "SIRI — Google confirms Gemini-powered context-aware Siri is coming to iPhone in 2026 (4/22)",
    "EMBEDDING2 — Gemini Embedding 2 now GA: next-gen semantic embeddings for RAG and search applications",
    "CLOUDNEXT — Google Cloud Next 2026: TPU v7, Gemini 3.2 & agentic AI accelerate enterprise transformation (4/22)",
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
