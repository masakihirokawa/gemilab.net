"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NEW — Gemini、Google Docs/Sheets/Drive を横断した質問応答・文書生成が可能に",
    "UPDATE — Sheets「Fill with Gemini」、既存セルやGoogle検索からデータを自動予測・補完",
    "Pixel — 3月アップデートでエージェントAIタスク・Circle to Search強化・Now Playingアプリ追加",
    "UPDATE — Google Home、Gemini音声の途切れ問題を大幅改善、会話の自然な切り替えを実現",
    "API — gemini-2.5-flash-lite-preview が3/31廃止、Gemini 3.1 Proへの移行を推奨",
    "NEW — Gemini in Drive、複数ドキュメント横断の質問応答がAI Pro/UltraでBeta公開",
  ],
  en: [
    "NEW — Gemini now synthesizes info across Docs, Sheets & Drive for cross-file Q&A",
    "UPDATE — Sheets 'Fill with Gemini' predicts & fills data from existing cells or Google Search",
    "Pixel — March drop adds agentic AI tasks, smarter Circle to Search, standalone Now Playing app",
    "UPDATE — Google Home significantly reduces Gemini voice cutoffs for smoother conversations",
    "API — gemini-2.5-flash-lite-preview retiring 3/31, migrate to Gemini 3.1 Pro now",
    "NEW — Gemini in Drive multi-doc Q&A now in beta for Google AI Pro & Ultra subscribers",
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
