"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 Flashが一般提供開始。3.1 Proをほぼ全ベンチで上回りつつ4倍高速に動作します",
    "AGENTS — Managed AgentsがGemini APIでパブリックプレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを動かせます",
    "SEARCH — File Searchがマルチモーダル検索に対応。gemini-embedding-2で画像をネイティブに埋め込み・検索できます",
    "API — Batch APIや長時間処理向けにイベント駆動Webhooksが追加され、ポーリングを置き換えられます",
    "STUDIO — Google AI Studioが自然言語からAndroidアプリを生成。Nano Bananaで画像も自動生成します",
    "MIGRATION — Gemini CLIは6/18でEOL。Agentic 2.0 CLIへの移行が必要です（画像プレビュー2種は6/25停止）",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash is now generally available, beating 3.1 Pro on nearly all benchmarks while running 4x faster",
    "AGENTS — Managed Agents arrive in the Gemini API in public preview, running autonomous agents in isolated Google-hosted Linux sandboxes",
    "SEARCH — File Search adds multimodal search, natively embedding and searching images via gemini-embedding-2",
    "API — Event-driven webhooks now replace polling for the Batch API and long-running operations",
    "STUDIO — Google AI Studio builds Android apps from plain language and generates images on the fly with Nano Banana",
    "MIGRATION — Gemini CLI reaches end-of-life on June 18; migrate to the Agentic 2.0 CLI (two image-preview models retire June 25)",
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
