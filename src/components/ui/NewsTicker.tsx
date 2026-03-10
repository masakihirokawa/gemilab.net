"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NEW — Gemini が Firefox の脆弱性を22件発見、うち14件が高重大度",
    "Enterprise — セルフサーブ購入が可能に、営業不要で即日導入",
    "Gemini in Excel — Opus 4.6 対応、ピボットテーブル・条件付き書式をネイティブサポート",
    "Sonnet 4.6 — コーディング・長文推論・エージェント計画が大幅強化、100万トークン対応",
    "Cowork — macOS デスクトッププレビュー公開、ローカルVM でエージェント作業",
    "Gemini Lab — 初級〜上級の日英ナレッジベース 40+ 記事公開中",
  ],
  en: [
    "NEW — Gemini discovers 22 Firefox vulnerabilities, 14 high-severity",
    "Enterprise — Self-serve purchase now available, no sales call needed",
    "Gemini in Excel — Opus 4.6 powered, native pivot table & conditional formatting",
    "Sonnet 4.6 — Major upgrades in coding, long-context reasoning & agent planning, 1M tokens",
    "Cowork — macOS desktop preview launched with local VM agentic capabilities",
    "Gemini Lab — 40+ articles in Japanese & English, beginner to advanced",
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
        paddingTop: 1,
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
