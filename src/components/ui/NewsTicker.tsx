"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 Flashが一般提供となり、gemini-flash-latestが指す実体になりました。日常的な生成を速く安価にこなせます",
    "AGENTS — Gemini APIのManaged Agentsがpublic previewに。Google管理の隔離Linuxサンドボックスで自律的なエージェントを構築できます",
    "MEDIA — Nano Banana 2 Lite（画像）とGemini Omni Flash（動画・会話的編集）がAI Studio・API・Enterprise Agent Platformで利用可能に",
    "TTS — gemini-3.1-flash-tts-previewの音声生成がstreamGenerateContent経由でストリーミング対応になりました",
    "TRANSLATE — 新しい音声モデルが70以上の言語を自動判別し、話者の自然な抑揚を保ったままライブ音声翻訳を行います",
    "SPENDCAP — AI Studioにプロジェクト単位の費用上限が導入され、支出を安全側に抑えられるようになりました",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash is now GA and powers gemini-flash-latest, making everyday generation faster and more affordable",
    "AGENTS — Managed Agents launch in public preview in the Gemini API, running in secure, isolated Google-hosted Linux sandboxes",
    "MEDIA — Nano Banana 2 Lite and Gemini Omni Flash bring faster image and high-quality video generation across AI Studio and the API",
    "TTS — Streaming speech generation is now supported for gemini-3.1-flash-tts-preview via streamGenerateContent",
    "TRANSLATE — A new audio model detects 70+ languages for live speech-to-speech translation while preserving natural intonation",
    "SPENDCAP — Project-level spend caps for billing have been added in Google AI Studio to keep costs under control",
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
