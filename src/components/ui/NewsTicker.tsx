"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLOUDNEXT — Google Cloud Next 2026 ラスベガス開催、TPU v7 と Gemini 3.2、Agentic AI を企業向けコア機能として発表（4/22）",
    "TTS31 — Gemini 3.1 Flash TTS プレビュー公開、70 以上の言語と audio tags、SynthID ウォーターマーク対応（4月）",
    "MACAPP — Gemini ネイティブ macOS アプリが macOS 15 以上で全世界無料公開、gemini.google/mac から入手可能（4月）",
    "AISTUDIO — Google AI Studio が AI Pro／Ultra 向けに利用上限を拡張、Nano Banana Pro と Gemini Pro モデルへのアクセスも追加（4月）",
    "GEMMA4 — Gemma 4 が AI Studio と Gemini API に到着、次世代 Gemini Nano の基盤モデル（4月）",
    "CHROME7 — Gemini in Chrome がアジア太平洋 7 カ国へ展開（日本含む）、Agentic Features は AI Pro／Ultra 向けに US でテスト中（4月）",
  ],
  en: [
    "CLOUDNEXT — Google Cloud Next 2026 opens in Las Vegas spotlighting TPU v7, Gemini 3.2 and Agentic AI as enterprise pillars (4/22)",
    "TTS31 — Gemini 3.1 Flash TTS preview launches with 70+ languages, audio tags and SynthID watermarking (Apr)",
    "MACAPP — Gemini native macOS app rolls out free to all users on macOS 15+, globally at gemini.google/mac (Apr)",
    "AISTUDIO — Google AI Studio raises limits for AI Pro/Ultra subscribers and unlocks Nano Banana Pro & Gemini Pro access (Apr)",
    "GEMMA4 — Gemma 4 arrives on AI Studio & Gemini API as foundation for next-gen Gemini Nano (Apr)",
    "CHROME7 — Gemini in Chrome expands to seven APAC countries; agentic features in US test for AI Pro/Ultra (Apr)",
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
