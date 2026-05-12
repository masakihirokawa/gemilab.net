"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026 は 5/19 開幕。Gemini 次世代バージョン・Android XR・Aluminum OS の大型発表に期待",
    "REMY — 「Remy」開発中：仕事・ルーティン・アプリ連携をこなす 24 時間対応アンビエント AI エージェント",
    "ULTRALITE — Google が「AI Ultra Lite」新プランを準備中、$20 Pro と $250 Ultra の中間帯に新サブスク層",
    "ANDROID — Gemini が Android に深化（5/12 CNBC）、画面コンテキストを理解し複数アプリをまたぐタスクを完遂",
    "AGENT — Google が Gemini をフルエージェント化計画、チャットボックスから脱却し汎用 AI エージェントへ進化",
    "HOME — Google Home の 2026年5月更新、Gemini AI 連携でオートメーション条件・アクションがさらに拡充",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 kicks off May 19: next-gen Gemini, Android XR & Aluminum OS all expected",
    "REMY — 'Remy' in development: a 24/7 ambient AI agent handling errands, routines & connected-app tasks",
    "ULTRALITE — Google quietly preps 'AI Ultra Lite' tier to slot between $20 Pro and $250 Ultra plans",
    "ANDROID — Gemini deepens Android integration (CNBC 5/12): understands screen context, completes cross-app tasks",
    "AGENT — Google plans to evolve Gemini into a full AI agent, breaking out of the chatbox entirely",
    "HOME — Google Home May 2026 update expands Gemini AI with more automation conditions and actions",
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
