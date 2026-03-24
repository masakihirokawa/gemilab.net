"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "TV — Gemini for Google TV 大幅強化：ビジュアルレスポンス・Deep Dives・スポーツ速報が追加（3/25）",
    "COMMERCE — Gap が Gemini 内で直接チェックアウト可能に、ファッション業界初のAIコマース（3/25）",
    "CHROME — Gemini in Chrome がカナダ・NZ・インドに展開、50以上の言語に対応（3/24）",
    "CANVAS — Gemini Canvas が Google Search AI Mode に統合、対話型ワークスペースに進化（3/24）",
    "PERSONAL — Personal Intelligence が無料ユーザーにも解放、全米展開完了（3/22）",
    "MODEL — Gemini 3.1 Pro / Flash が正式 GA：Computer Use ツールも対応（3/20）",
  ],
  en: [
    "TV — Gemini for Google TV gets richer visuals, Deep Dives & Sports Briefs features (3/25)",
    "COMMERCE — Gap becomes first fashion brand to enable checkout directly within Gemini (3/25)",
    "CHROME — Gemini in Chrome expands to Canada, NZ & India with 50+ language support (3/24)",
    "CANVAS — Gemini Canvas integrated into Google Search AI Mode as interactive workspace (3/24)",
    "PERSONAL — Personal Intelligence now available to free users across the US (3/22)",
    "MODEL — Gemini 3.1 Pro / Flash now generally available with Computer Use tool (3/20)",
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
