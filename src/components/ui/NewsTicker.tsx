"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "USERS — Gemini AIユーザーが7億5,000万人突破（2025年Q4）、複数AIプラットフォーム利用の拡大傾向（4/11）",
    "MODEL — Gemini 3シリーズ正式ローンチ、Computer Useツール対応で推論・マルチモーダル理解が大幅向上（4/11）",
    "AUDIO — gemini-3.1-flash-live-preview公開、リアルタイム音声対話とA2A（Audio-to-Audio）変換機能を実装（4/11）",
    "MUSIC — Lyria 3音楽生成モデル（lyria-3-clip-preview / pro-preview）で高品質な楽曲生成を実現（4/11）",
    "DEVELOPERS — Gemini API開発者が240万人突破、2026年1月に850億件のAPIリクエスト処理（4/11）",
    "PERSONAL — Personal Intelligenceが米国全域で拡大、Gmail・Photos連携でパーソナライズ検索体験を提供（4/11）",
  ],
  en: [
    "USERS — Gemini surpasses 750M monthly active users (Q4 2025), with increased multi-AI platform adoption trends (4/11)",
    "MODEL — Gemini 3 series launches with Computer Use support for enhanced reasoning, multimodal understanding & coding (4/11)",
    "AUDIO — gemini-3.1-flash-live-preview now available for real-time voice dialogue and audio-to-audio transformation (4/11)",
    "MUSIC — Lyria 3 music generation models (lyria-3-clip-preview and pro-preview) deliver high-quality AI-generated music (4/11)",
    "DEVELOPERS — Gemini API developer base reaches 2.4M with 85B API requests processed in January 2026 alone (4/11)",
    "PERSONAL — Personal Intelligence expands nationwide in US, integrating Gmail & Photos for personalized search experiences (4/11)",
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
