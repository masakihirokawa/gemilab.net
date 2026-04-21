"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHROME7 — Gemini in Chrome がアジア太平洋 7 カ国（日本・オーストラリア・インドネシア・フィリピン・シンガポール・韓国・ベトナム）に展開（4/20）",
    "GCAAPI — geminicloudassist.googleapis.com API が対象プロジェクトで自動有効化、Gemini Cloud Assist チャット連携が進む（4/16以降）",
    "ROBOT15EOL — gemini-robotics-er-1.5-preview モデルは 4/30 9AM PST でシャットダウン、後継モデルへの移行を推奨（4月）",
    "EXAMAI — Gemini の無料模擬試験が SAT・JEE Main に続いて NEET UG へ拡大、学習サポートを強化（4月）",
    "MACAPP — Gemini macOS アプリが全ユーザー無料公開、macOS 15 以上で gemini.google/mac から入手（4月）",
    "TTS30 — Gemini 3.1 Flash TTS が Google Vids に 30 ボイス × 24 言語のナレーションを展開（4月）",
  ],
  en: [
    "CHROME7 — Gemini in Chrome rolls out to seven APAC countries: Japan, Australia, Indonesia, Philippines, Singapore, South Korea, Vietnam (4/20)",
    "GCAAPI — geminicloudassist.googleapis.com auto-enabled on projects that used Gemini Cloud Assist chat in prior 60 days (4/16+)",
    "ROBOT15EOL — gemini-robotics-er-1.5-preview model shuts down 4/30 9AM PST; plan migration to successor models (Apr)",
    "EXAMAI — Gemini's free full-length practice tests expand from SAT & JEE Main to include NEET UG (Apr)",
    "MACAPP — Gemini macOS app now free for all users on macOS 15+, globally at gemini.google/mac (Apr)",
    "TTS30 — Gemini 3.1 Flash TTS brings 30 new conversational voices in 24 languages to Google Vids (Apr)",
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
