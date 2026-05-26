"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 Flash 提供開始、Antigravity 2.0 のエージェント実行エンジンとして Gemini API・AI Studio・Vertex AI で利用可能（5/27）",
    "AGENTBENCH — Gemini 3.5 Flash が Terminal-Bench 2.1 で 76.2%、MCP Atlas で 83.6%、CharXiv Reasoning で 84.2% を記録（5/27）",
    "OMNI — Gemini Omni シリーズ発表、image / audio / video / text 入力から現実世界に根拠付けされた動画を出力（5月）",
    "MANAGED — Managed Agents in Gemini API が公開プレビュー、isolated Linux サンドボックスで stateful autonomous agent を実行（5月）",
    "FILESEARCH — File Search が gemini-embedding-2 でマルチモーダル検索対応、画像をネイティブに埋め込み・検索可能に（5月）",
    "AIMODE — Search の AI Mode が Gemini 3.5 Flash 駆動に、入力に応じて拡張する新検索ボックスと AI 提案を提供（5月）",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash launches as the agent execution engine for Antigravity 2.0, available via Gemini API, AI Studio, and Vertex AI (May 27)",
    "AGENTBENCH — Gemini 3.5 Flash posts 76.2% on Terminal-Bench 2.1, 83.6% on MCP Atlas, and 84.2% on CharXiv Reasoning (May 27)",
    "OMNI — The new Gemini Omni series accepts image, audio, video, and text input and outputs video grounded in real-world knowledge (May)",
    "MANAGED — Managed Agents in the Gemini API enter public preview, running stateful autonomous agents in isolated Linux sandboxes (May)",
    "FILESEARCH — File Search now supports multimodal search with gemini-embedding-2, letting you natively embed and search across images (May)",
    "AIMODE — AI Mode in Search is now powered by Gemini 3.5 Flash, with an expanding search box and AI-driven query suggestions (May)",
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
