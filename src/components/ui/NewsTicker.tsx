"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — Gemini 3.5 FlashがGAとなり、gemini-flash-latestの実体として利用できます",
    "AGENTS — Gemini APIのManaged Agentsがパブリックプレビューとなり、Googleホストの隔離Linuxサンドボックスで自律実行できます",
    "STUDIO — Google AI Studioにプロジェクト単位の支出上限（spend caps）が追加され、ネイティブAndroid vibe codingにも対応しました",
    "LIVE — 音声対音声でリアルタイム対話するGemini 3.1 Flash Live Previewが公開されました",
    "IMAGE — 最速・低コストの画像モデルNano Banana 2 Liteが提供され、Gemini Omni FlashもAPIでプレビュー公開されています",
    "LYRIA — 音楽生成モデルLyria 3（clip-preview / pro-preview）が新たに利用できます",
  ],
  en: [
    "FLASH — Gemini 3.5 Flash is now generally available and powers gemini-flash-latest",
    "AGENTS — Managed Agents in the Gemini API enter public preview, running autonomously in Google-hosted isolated Linux sandboxes",
    "STUDIO — Google AI Studio adds project-level spend caps and native Android vibe coding",
    "LIVE — Gemini 3.1 Flash Live Preview, an audio-to-audio model for real-time dialogue, is now available",
    "IMAGE — Nano Banana 2 Lite arrives as the fastest, most cost-efficient image model, and Gemini Omni Flash is in API preview",
    "LYRIA — Lyria 3 music generation models (clip-preview and pro-preview) are now available",
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
