"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — Gemini 3.5 Flashが一般提供（GA）に。エージェントやコーディングで持続的なフロンティア性能をうたいます",
    "AGENTS — Gemini APIにManaged Agentsがパブリックプレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを実行できます",
    "WEBHOOK — イベント駆動のWebhooksが追加され、Batch APIや長時間処理のポーリングを置き換えられます",
    "SEARCH — File Searchがマルチモーダル対応に。gemini-embedding-2で画像も埋め込んで検索できます",
    "SUNSET — gemini-3.1-flash-image-preview・3-pro-image-previewは6/25に停止予定です",
    "ANTIGRAVITY — Antigravity Agentのマネージドエージェント（antigravity-preview-05-2026）がプレビュー提供されています",
  ],
  en: [
    "FLASH — Gemini 3.5 Flash is now generally available, billed as the most intelligent model for agentic and coding tasks",
    "AGENTS — Managed Agents arrive in public preview, running autonomous agents in Google-hosted isolated Linux sandboxes",
    "WEBHOOK — Event-driven webhooks now replace polling for the Batch API and long-running operations",
    "SEARCH — File Search goes multimodal, embedding and searching images via gemini-embedding-2",
    "SUNSET — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down on June 25",
    "ANTIGRAVITY — The Antigravity Agent managed agent (antigravity-preview-05-2026) is available in public preview",
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
