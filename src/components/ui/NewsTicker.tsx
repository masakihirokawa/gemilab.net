"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Google I/O 2026でGemini 3.5 Flashを発表、他フロンティアモデル比4倍高速（5月）",
    "IMAGEGA — gemini-3.1-flash-imageとgemini-3-pro-imageがGA化、ネイティブ画像生成に対応（5/28）",
    "AGENTS — Gemini APIにManaged Agentsが追加、1回のAPIコールで推論・ツール実行するエージェントを起動（5月）",
    "AISTUDIO — Google AI StudioのBuildエージェントがNano Bananaで画像を自動生成（5月）",
    "ANDROID — Google AI Studioがネイティブvibe codingでAndroidアプリ生成に対応（5月）",
    "FLASHLITE — gemini-3.1-flash-liteがGA、速度とコスト効率を最適化（5月）",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash debuts at Google I/O 2026, running 4x faster than other frontier models (May)",
    "IMAGEGA — gemini-3.1-flash-image and gemini-3-pro-image reach GA for native image generation (May 28)",
    "AGENTS — Gemini API adds Managed Agents: spin up a reasoning, tool-using agent in a single API call (May)",
    "AISTUDIO — Google AI Studio's Build agent auto-generates images on the fly with Nano Banana (May)",
    "ANDROID — Google AI Studio adds native vibe coding to build Android apps (May)",
    "FLASHLITE — gemini-3.1-flash-lite reaches GA, optimized for speed and cost efficiency (May)",
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
