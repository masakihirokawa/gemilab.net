"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "REDESIGN — Gemini アプリが大規模 UI リデザイン、カラフルな脈動グラジエント背景に刷新（iOS 先行・5/4）",
    "IO2026 — Google I/O 2026 が 5/19〜20 開催、Gemini 4.0 と Android 17 との深い統合が期待される",
    "WORKSPACE — Gemini Workspace Intelligence が提供開始、Gmail・Calendar・Drive のリアルタイムデータを自動参照",
    "MAC — Gemini アプリが macOS ネイティブデスクトップアプリとして公開、ブラウザ不要で AI 支援",
    "EMBEDDING2 — Gemini Embedding 2 が Gemini API と Vertex AI で一般提供（GA）開始",
    "CARSGEMINI — Gemini が Google Built-in 搭載カーで提供開始、GM の数百万台に展開（4/28）",
  ],
  en: [
    "REDESIGN — Gemini app gets massive UI overhaul: colorful pulsating gradient background rolls out on iOS (5/4)",
    "IO2026 — Google I/O 2026 on May 19-20: Gemini 4.0 and deep Android 17 integration expected",
    "WORKSPACE — Gemini Workspace Intelligence launches: real-time context from Gmail, Calendar & Drive",
    "MAC — Gemini now available as a native macOS desktop app — no browser required",
    "EMBEDDING2 — Gemini Embedding 2 reaches general availability on Gemini API and Vertex AI",
    "CARSGEMINI — Gemini rolls out to Google Built-in vehicles in GM's millions of cars (4/28)",
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
