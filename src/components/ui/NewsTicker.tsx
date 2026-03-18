"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "Gemini — Gemini 3 Pro Preview リリース：高度な推論・マルチモーダル・エージェント対応モデル",
    "NEW — Gemini 3 Flash Preview 公開：大規模モデル級の性能を低コストで実現",
    "API — Computer Use ツールが Gemini 3 Pro / Flash Preview で利用可能に",
    "Pixel — Gemini スクリーン自動化を Pixel 10 に展開：アプリ操作をAIが代行（3月 Feature Drop）",
    "Smart Home — Gemini for Home が 40% 高速化：カナダ・欧州・アジアなどへ展開拡大",
    "Workspace — Docs/Sheets/Slides の AI 自動化ベータ開始：AI Ultra/Pro ユーザーが先行利用",
  ],
  en: [
    "Gemini — Gemini 3 Pro Preview released: Advanced reasoning, multimodal & agentic capabilities",
    "NEW — Gemini 3 Flash Preview: Frontier-class performance at a fraction of larger model costs",
    "API — Computer Use tool now available in Gemini 3 Pro Preview and Gemini 3 Flash Preview",
    "Pixel — Gemini screen automation rolls out to Pixel 10: AI handles in-app tasks on command",
    "Smart Home — Gemini for Home 40% faster; expanding to Canada, Europe & Asia",
    "Workspace — Gemini automates Docs, Sheets & Slides in beta for AI Ultra/Pro subscribers",
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
