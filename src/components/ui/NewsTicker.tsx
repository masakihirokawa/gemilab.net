"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SEARCH — File Searchの根拠情報が強化。視覚引用のmedia_idとページ番号が加わり、どの画像・どのページが根拠か辿れます",
    "API — Webhooksのイベント駆動でBatch APIや長時間処理のポーリングを置き換えられます",
    "DEPRECATION — 画像プレビューモデル2種（gemini-3.1-flash-image-preview等）が6/25に停止。利用中の自動化は即日移行が必要です",
    "MODEL — Gemini 3.5 Flashは一般提供済み。3.1 Proをほぼ全ベンチで上回りつつ4倍高速に動作します",
    "AGENTS — Managed AgentsがGemini APIでパブリックプレビュー。隔離Linuxサンドボックスで自律エージェントを動かせます",
    "STUDIO — Google AI Studioが自然言語からAndroidアプリを生成できるようになりました",
  ],
  en: [
    "SEARCH — File Search grounding now adds media_id for visual citations and page numbers, so you can trace the exact source",
    "API — Event-driven Webhooks replace polling for the Batch API and long-running operations",
    "DEPRECATION — Two image preview models (e.g. gemini-3.1-flash-image-preview) shut down June 25; migrate dependent automation now",
    "MODEL — Gemini 3.5 Flash is GA, beating 3.1 Pro on nearly every benchmark while running 4x faster",
    "AGENTS — Managed Agents are in public preview on the Gemini API, running autonomous agents in isolated Linux sandboxes",
    "STUDIO — Google AI Studio can now generate Android apps from natural-language prompts",
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
