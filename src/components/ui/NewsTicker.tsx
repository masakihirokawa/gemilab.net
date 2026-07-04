"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "TTS — gemini-3.1-flash-tts-previewが音声生成のストリーミングに対応し、streamGenerateContentから逐次再生できます",
    "TRANSLATE — Gemini 3.5 Live Translateが登場。70以上の言語を自動判定し、話者の抑揚を保ったまま音声から音声へ翻訳します",
    "IMAGE — Nano Banana 2 Liteが提供開始となり、最も高速かつ低コストなGemini画像モデルになりました",
    "OMNI — Gemini Omni Flashが公開プレビュー入りし、動画ワークフローを組めるネイティブマルチモーダルモデルとして使えます",
    "MODEL — Gemini 3.5 FlashがGA（正式版）となり、gemini-flash-latestの実体になりました",
    "AGENT — Managed AgentsがGemini APIで公開プレビュー入り。分離されたGoogleホストのLinuxサンドボックスで自律エージェントを動かせます",
  ],
  en: [
    "TTS — gemini-3.1-flash-tts-preview now streams speech generation via streamGenerateContent for lower latency",
    "TRANSLATE — Gemini 3.5 Live Translate arrives, auto-detecting 70+ languages for speech-to-speech while preserving intonation",
    "IMAGE — Nano Banana 2 Lite launches as the fastest and most cost-efficient Gemini image model",
    "OMNI — Gemini Omni Flash enters public preview as a natively multimodal model for custom video workflows",
    "MODEL — Gemini 3.5 Flash reaches GA and now powers gemini-flash-latest",
    "AGENT — Managed Agents enter public preview in the Gemini API, running in isolated Google-hosted Linux sandboxes",
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
