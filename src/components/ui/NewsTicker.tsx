"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "LYRIA — Lyria 3 Pro で最大 3 分の楽曲生成が可能に：イントロ・ヴァース・コーラスを指定可能（3/25）",
    "DROPS — Gemini Drops 3 月：Personal Intelligence 全米無料化＆チャット履歴インポート追加（3/26）",
    "DARKWEB — Gemini エージェントがダークウェブ監視に進出、1 日 1,000 万件を 98% 精度で分析（3/26）",
    "LIVE — Gemini Live 3.1 に大幅アップグレード：応答速度向上＆コンテキスト保持量が 2 倍に（3/25）",
    "PIXEL — March Pixel Drop：Magic Cue がレストラン提案＆Circle to Search がマルチアイテム対応（3/25）",
    "APPLE — Apple が Gemini から小型オンデバイスモデルを蒸留可能に、AI 提携の詳細が判明（3/25）",
  ],
  en: [
    "LYRIA — Lyria 3 Pro enables up to 3-minute tracks with intro, verse & chorus control (3/25)",
    "DROPS — March Gemini Drop: Personal Intelligence free for all US users & chat history import (3/26)",
    "DARKWEB — Gemini agents enter dark web monitoring, analyzing 10M+ posts daily at 98% accuracy (3/26)",
    "LIVE — Gemini Live 3.1 gets major upgrade: faster responses and doubled context retention (3/25)",
    "PIXEL — March Pixel Drop: Magic Cue suggests restaurants & Circle to Search goes multi-item (3/25)",
    "APPLE — Apple can distill on-device AI models from Gemini, deal details revealed (3/25)",
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
