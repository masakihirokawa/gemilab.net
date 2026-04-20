"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA4API — Gemma 4（26b-a4b-it / 31b-it）が Google AI Studio と Gemini API で利用可能に、次世代 Nano の基盤（4月）",
    "FLASHLITE — Gemini 3.1 Flash-Lite 登場、応答 2.5x 高速・出力 45% 高速化・$0.25/M input で低コスト運用（4月）",
    "TTS30 — Gemini 3.1 Flash TTS が Google Vids に 30 ボイス × 24 言語のナレーションを展開（4月）",
    "MACAPP — Gemini macOS アプリが全ユーザー無料公開、macOS 15 以上で gemini.google/mac から入手（4月）",
    "NANOBANANA2 — Nano Banana 2 が Google Photos と連携、家族や日常を反映したパーソナライズ画像を生成（4月）",
    "PENTAGON — Alphabet が米国防総省と Gemini の機密環境展開を交渉中（4月）",
  ],
  en: [
    "GEMMA4API — Gemma 4 (26b-a4b-it / 31b-it) now on Google AI Studio & Gemini API, foundation for next-gen Nano (Apr)",
    "FLASHLITE — Gemini 3.1 Flash-Lite launches with 2.5x faster response, 45% faster output, $0.25/M input pricing (Apr)",
    "TTS30 — Gemini 3.1 Flash TTS brings 30 new conversational voices in 24 languages to Google Vids (Apr)",
    "MACAPP — Gemini macOS app now free for all users on macOS 15+, globally at gemini.google/mac (Apr)",
    "NANOBANANA2 — Nano Banana 2 integrates with Google Photos to generate personalized images from your library (Apr)",
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
