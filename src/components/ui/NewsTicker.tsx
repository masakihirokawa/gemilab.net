"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IMPORT — Gemini がチャット履歴インポート機能を公式追加：ChatGPT・Claude から ZIP で移行可能に（3/26）",
    "DARKWEB — Gemini エージェントがダークウェブ監視に進出、1日1,000万件を98%精度で分析（3/26）",
    "APPLE — Apple と Google の AI 提携の詳細判明：Gemini からオンデバイス小型モデルを蒸留可能に（3/25）",
    "PIXEL — March Pixel Drop：Gemini App Actions で自然言語操作＆Circle to Search 強化（3/25）",
    "TV — Google TV に Gemini 新機能：ビジュアル応答・Deep Dives・Sports Briefs が展開中（3/24）",
    "CANVAS — Gemini Canvas が Google Search AI Mode で全米展開、対話型ワークスペースに進化（3/24）",
  ],
  en: [
    "IMPORT — Gemini adds official chat history import: migrate from ChatGPT & Claude via ZIP upload (3/26)",
    "DARKWEB — Gemini agents now monitor the dark web, analyzing 10M+ posts daily at 98% accuracy (3/26)",
    "APPLE — Apple-Google AI deal details revealed: Apple can distill on-device models from Gemini (3/25)",
    "PIXEL — March Pixel Drop: Gemini App Actions for natural language control & smarter Circle to Search (3/25)",
    "TV — Google TV gets new Gemini features: visual responses, Deep Dives & Sports Briefs rolling out (3/24)",
    "CANVAS — Gemini Canvas now available to all US users in Google Search AI Mode (3/24)",
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
