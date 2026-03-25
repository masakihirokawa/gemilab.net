"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CANVAS — Gemini Canvas が Google Search AI Mode に統合、対話型ワークスペースに進化（3/24）",
    "PERSONAL — Personal Intelligence が全米展開、Gmail・Photos 連携で文脈理解が向上（3/22）",
    "MODEL — Gemini 3.1 Pro / Flash が正式 GA：Computer Use ツールも対応（3/20）",
    "STUDIO — Google AI Studio 大幅刷新：統合 Playground で Veo 3.1・TTS も利用可能に（3/19）",
    "750M — Gemini 月間アクティブユーザー7.5億人突破、API リクエスト月850億件達成（3/18）",
    "HOME — Gemini for Home：応答速度 40% 向上＆カナダ（フランス語含む）に拡大（3/17）",
  ],
  en: [
    "CANVAS — Gemini Canvas integrated into Google Search AI Mode as interactive workspace (3/24)",
    "PERSONAL — Personal Intelligence rolls out to all US users with Gmail & Photos context (3/22)",
    "MODEL — Gemini 3.1 Pro / Flash now generally available with Computer Use tool (3/20)",
    "STUDIO — Google AI Studio overhaul: unified Playground with Veo 3.1 & TTS support (3/19)",
    "750M — Gemini surpasses 750M monthly active users, 85B API requests per month (3/18)",
    "HOME — Gemini for Home: 40% faster responses & expansion to Canada incl. French (3/17)",
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
