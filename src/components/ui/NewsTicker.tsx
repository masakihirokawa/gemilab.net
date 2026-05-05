"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IO2026 — Google I/O 2026（5/19〜20）: Gemini 4.0 で 200 万トークンコンテキスト・クロスセッションメモリが期待",
    "REMY — Google が社内版 Gemini に「Remy」を開発中、24 時間稼働するパーソナル AI エージェントとして設計",
    "REDESIGN — Gemini アプリが大規模 UI リデザイン、カラフルな脈動グラジエント背景に刷新（iOS 先行・5/4）",
    "WORKSPACE — Gemini Workspace Intelligence が提供開始、Gmail・Calendar・Drive のリアルタイムデータを自動参照",
    "MAC — Gemini アプリが macOS ネイティブデスクトップアプリとして公開、ブラウザ不要で AI 支援",
    "EMBEDDING2 — Gemini Embedding 2 が Gemini API と Vertex AI で一般提供（GA）開始",
  ],
  en: [
    "IO2026 — Google I/O 2026 (May 19-20): Gemini 4.0 expected with 2M token context & cross-session memory",
    "REMY — Google builds 'Remy' inside staff Gemini: a 24/7 personal AI agent that acts on your behalf",
    "REDESIGN — Gemini app gets massive UI overhaul: colorful pulsating gradient background rolls out on iOS (5/4)",
    "WORKSPACE — Gemini Workspace Intelligence launches: real-time context from Gmail, Calendar & Drive",
    "MAC — Gemini now available as a native macOS desktop app — no browser required",
    "EMBEDDING2 — Gemini Embedding 2 reaches general availability on Gemini API and Vertex AI",
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
