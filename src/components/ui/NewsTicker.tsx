"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "APPLE — Apple と Google の AI 提携の詳細判明：Gemini モデルからオンデバイス小型モデルを蒸留可能に（3/25）",
    "PIXEL — March Pixel Drop：Gemini App Actions で自然言語操作＆Circle to Search 強化（3/25）",
    "TV — Google TV に Gemini 搭載：ビジュアル応答・Deep Dives・Sports Briefs の3機能追加（3/24）",
    "CANVAS — Gemini Canvas が Google Search AI Mode に統合、対話型ワークスペースに進化（3/24）",
    "GA — Gemini 3.1 Pro / Flash が正式 GA：customtools エンドポイントも新設（3/20）",
    "STUDIO — Google AI Studio 大幅刷新：統合 Playground で Veo 3.1・TTS・Live モデル対応（3/19）",
  ],
  en: [
    "APPLE — Apple-Google AI deal details revealed: Apple can distill on-device models from Gemini (3/25)",
    "PIXEL — March Pixel Drop: Gemini App Actions for natural language control & smarter Circle to Search (3/25)",
    "TV — Google TV gets Gemini: visual responses, Deep Dives & Sports Briefs added (3/24)",
    "CANVAS — Gemini Canvas integrated into Google Search AI Mode as interactive workspace (3/24)",
    "GA — Gemini 3.1 Pro / Flash now generally available with new customtools endpoint (3/20)",
    "STUDIO — Google AI Studio overhaul: unified Playground with Veo 3.1, TTS & Live models (3/19)",
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
