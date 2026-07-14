"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 Flashが一般提供に。gemini-flash-latestが指す実体となり、エージェント処理とコーディングで持続的な性能を発揮します",
    "AGENTS — Gemini APIのManaged Agentsが公開プレビューに。Googleがホストする隔離Linuxサンドボックスで状態を保持する自律エージェントを構築できます",
    "ANTIGRAV — 汎用マネージドエージェントantigravity-preview-05-2026が公開プレビュー。計画・推論・コード実行・ファイル操作・ウェブ閲覧をこなします",
    "TTS — gemini-3.1-flash-tts-previewがstreamGenerateContent経由の音声生成ストリーミングに対応しました",
    "NANO — Nano Banana 2 Liteが最速・最省コストのGemini画像モデルとして利用可能になりました",
    "DEPRECATE — 旧世代の画像生成モデルは2026年8月17日に停止予定です。移行の段取りを早めに固めておきたいところです",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash is GA and now powers gemini-flash-latest, delivering sustained frontier performance on agentic and coding tasks",
    "AGENTS — Managed Agents launch in public preview in the Gemini API, running stateful autonomous agents in isolated Google-hosted Linux sandboxes",
    "ANTIGRAV — The general-purpose managed agent antigravity-preview-05-2026 enters public preview: it plans, reasons, runs code, manages files, and browses the web",
    "TTS — Streaming speech generation is now supported for gemini-3.1-flash-tts-preview via streamGenerateContent",
    "NANO — Nano Banana 2 Lite arrives as the fastest, most cost-efficient Gemini Image model",
    "DEPRECATE — Legacy image generation models are deprecated and shut down on August 17, 2026; plan your migration early",
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
