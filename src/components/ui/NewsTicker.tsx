"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini CLIとGemini Code Assist IDE拡張は6/18でリクエスト受付を終了しました。移行先はAntigravity、ターミナル派にはGo製のAntigravity CLIです",
    "FLASH — Gemini 3.5 Flashが一般提供（GA）に。エージェントとコーディング用途で持続的にフロンティア性能を出す最も賢いモデルと位置づけられています",
    "IMAGE — gemini-3.1-flash-image-previewとgemini-3-pro-image-previewが非推奨となり、6/25にシャットダウン予定です。参照コードは後継へ切替を",
    "AGENTS — Managed Agentsが公開プレビューに。Googleがホストする隔離Linuxサンドボックスでステートフルな自律エージェントを動かせます",
    "SEARCH — File Searchがgemini-embedding-2による画像のマルチモーダル検索に対応しました",
    "MIGRATE — 期限つきの非推奨や停止が続くため、CLIや旧モデルを組み込んだ自動化は移行状況の記録が欠かせません",
  ],
  en: [
    "CLI — Gemini CLI and the Gemini Code Assist IDE extensions stopped serving requests on Jun 18; migrate to Antigravity or the new Go-based Antigravity CLI",
    "FLASH — Gemini 3.5 Flash is now generally available, billed as the smartest model for sustained frontier performance on agentic and coding tasks",
    "IMAGE — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview are deprecated and shut down on Jun 25; move to the successor models",
    "AGENTS — Managed Agents is in public preview, running stateful autonomous agents in secure, isolated Google-hosted Linux sandboxes",
    "SEARCH — File Search now supports multimodal image search natively via the gemini-embedding-2 model",
    "MIGRATE — With deadline-bound deprecations piling up, any automation built on the CLI or old models needs a tracked migration",
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
