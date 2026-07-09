"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Interactions APIが一般提供となり、Geminiモデルとエージェントを扱う主要APIとしてスキーマが安定しました",
    "AGENTS — Interactions APIのGAでManaged Agentsとバックグラウンド実行が正式対応となり、Gemini Omniも追って対応予定です",
    "LIVE — Live APIとAI Studioに多言語リアルタイム音声翻訳が加わり、70以上の言語を自動検出して話者の抑揚を保ちます",
    "OMNI — ネイティブマルチモーダルのGemini Omni FlashがAPIでパブリックプレビューとなり、動画ワークフローを自作できます",
    "SPARK — 個人向けエージェントGemini SparkがmacOSに対応し、ローカルファイルやWorkspaceをまたいだ処理を自律実行します",
    "PRO — Gemini 3.5 Proは7月17日に延期と報じられ、200万トークンとDeep Think Reasoning Layerが焦点とされています",
  ],
  en: [
    "API — The Interactions API reaches general availability as the primary API for Gemini models and agents, with a stable schema",
    "AGENTS — With GA, the Interactions API formally supports Managed Agents and background execution, with Gemini Omni coming soon",
    "LIVE — The Live API and AI Studio add real-time speech-to-speech translation, auto-detecting 70+ languages while preserving intonation",
    "OMNI — Gemini Omni Flash, a natively multimodal model, enters API public preview for building custom video workflows",
    "SPARK — Gemini Spark, Google's personal agent, arrives on macOS to work across local files and Google Workspace on your behalf",
    "PRO — Gemini 3.5 Pro is reported to be delayed to July 17, centered on a 2M-token context and a Deep Think Reasoning Layer",
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
