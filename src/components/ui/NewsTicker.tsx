"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "LOGS — Interactions API の開発者ログが AI Studio のダッシュボードから見えるようになりました（7月6日）。対応する呼び出しの記録を後から追えます",
    "OMNIFL — gemini-omni-flash-preview は Interactions API 経由で 720p・3〜10秒の動画を生成し、そのまま会話で編集できます",
    "NANOLITE — gemini-3.1-flash-lite-image（Nano Banana 2 Lite）が GA になりました。低遅延と低コストに振った画像生成・編集向けです",
    "COMPUSE — Computer Use ツールが Gemini 3.5 Flash で公開プレビューに入りました。ブラウザ・モバイル・デスクトップに対応し、安全ポリシーとプロンプトインジェクション検知を備えます",
    "AGENTS — Managed Agents が公開プレビューです。Google がホストする隔離 Linux サンドボックスで、状態を持つエージェントを動かせます",
    "VIDS — Google Vids に Omni が直接組み込まれ、テキスト指示だけで動画の質感や文字表現を調整できるようになりました",
  ],
  en: [
    "LOGS — Developer logs for the Interactions API became viewable in the AI Studio dashboard on July 6, so supported calls can be traced after the fact",
    "OMNIFL — gemini-omni-flash-preview generates 3 to 10 second 720p videos through the Interactions API and lets you refine them conversationally",
    "NANOLITE — gemini-3.1-flash-lite-image, known as Nano Banana 2 Lite, reached general availability for ultra-low-latency, cost-effective image generation and editing",
    "COMPUSE — The Computer Use tool entered public preview on Gemini 3.5 Flash with browser, mobile, and desktop support, configurable safety policies, and prompt injection detection",
    "AGENTS — Managed Agents are in public preview, running stateful autonomous agents inside isolated Google-hosted Linux sandboxes",
    "VIDS — Omni is now built directly into Google Vids, bringing higher-quality video generation and text-driven edits to realism, text rendering, and physics",
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
