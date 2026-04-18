"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PERSONALAI — Gemini Personal Intelligence が画像生成に対応、Nano Banana で Gmail/Photos と連携した個別最適化（4/17）",
    "AIMODE — Google Search & 広告への AI Mode 拡大、Gemini が検索全体に深く統合（4/17）",
    "3.1PRO — Gemini 3.1 Pro グローバル展開、コーディング＆データ分析の推論能力が大幅強化（4月）",
    "AIPROULTRA — Google AI Pro / Ultra 新サブスク登場、旧 Google One AI Premium から刷新（4月）",
    "750M — Gemini が月間アクティブユーザー 7.5 億人突破、AI 製品史上最速の成長ペース（2025 Q4）",
    "PENTAGON — Alphabet が米国防総省と Gemini の機密環境展開を交渉中（4月）",
  ],
  en: [
    "PERSONALAI — Gemini Personal Intelligence adds image AI via Nano Banana, integrating Gmail & Google Photos (4/17)",
    "AIMODE — Google expands AI Mode in Search & Ads with deep Gemini integration across products (4/17)",
    "3.1PRO — Gemini 3.1 Pro rolls out globally with enhanced reasoning for coding & data analysis (Apr)",
    "AIPROULTRA — Google AI Pro & Ultra subscription tiers launch, replacing Google One AI Premium (Apr)",
    "750M — Gemini surpasses 750M monthly active users — fastest-growing AI product in history (Q4 2025)",
    "PENTAGON — Alphabet in talks with U.S. DoD to deploy Gemini AI in classified environments (Apr)",
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
              letterSpacing: "0.02em",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
