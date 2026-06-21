"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 FlashがGA。エージェント・コーディングで持続的なフロンティア性能を狙う最も賢いモデルです",
    "AGENTS — Gemini APIにManaged Agentsがパブリックプレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを構築できます",
    "IMAGE — Nano Banana 2（Gemini 3.1 Flash Image）とNano Banana Pro（Gemini 3 Pro Image）がGAになりました",
    "IMAGE — 動画→画像生成に対応。動画を文脈に渡しサムネイル・ポスター・インフォグラフィックを生成できます（3.1 Flash Image限定）",
    "DEPRECATION — gemini-3.1-flash-image-previewとgemini-3-pro-image-previewは6/25に停止。GA版へ移行してください",
    "STUDIO — Gemini 3はGeminiアプリ・AI Studio・Vertex AIで利用できます",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash is GA, Google's most intelligent model for sustained frontier performance on agentic and coding tasks",
    "AGENTS — Managed Agents in the Gemini API enter public preview, running autonomous agents in Google-hosted isolated Linux sandboxes",
    "IMAGE — Nano Banana 2 (Gemini 3.1 Flash Image) and Nano Banana Pro (Gemini 3 Pro Image) are now GA",
    "IMAGE — Video-to-image generation arrives: pass a video as context to create thumbnails, posters, and infographics (3.1 Flash Image only)",
    "DEPRECATION — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down on June 25; migrate to GA",
    "STUDIO — Gemini 3 is available across the Gemini app, AI Studio, and Vertex AI",
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
