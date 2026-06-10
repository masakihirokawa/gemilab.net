"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI3.5-FLASH — gemini-3.5-flashが一般提供（GA）開始。エージェント・コーディングタスクで持続的なフロンティア性能",
    "MANAGED-AGENTS — Gemini APIのManaged Agentsが公開プレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを構築・実行",
    "INTERACTIONS-API — Interactions APIのスキーマがoutputsからstepsへ。6/8に旧スキーマ廃止のため移行が必要です",
    "FILE-SEARCH — File Searchがマルチモーダル検索に対応。gemini-embedding-2で画像をネイティブに埋め込み・検索",
    "WEBHOOKS — Gemini APIにイベント駆動のWebhooksを追加。Batch APIや長時間処理のポーリングを置き換え",
    "DEEP-RESEARCH — Deep Researchエージェントが協調プランニング・可視化・MCPサーバ連携・File Searchに対応",
  ],
  en: [
    "GEMINI3.5-FLASH — gemini-3.5-flash reaches general availability, Google's most intelligent model for sustained agentic and coding performance",
    "MANAGED-AGENTS — Managed Agents launch in public preview in the Gemini API, running autonomous stateful agents in Google-hosted Linux sandboxes",
    "INTERACTIONS-API — The Interactions API schema moves from outputs to steps; the legacy schema was removed Jun 8, so migrate now",
    "FILE-SEARCH — File Search now supports multimodal search, natively embedding and searching images via gemini-embedding-2",
    "WEBHOOKS — The Gemini API adds event-driven Webhooks to replace polling for the Batch API and long-running operations",
    "DEEP-RESEARCH — New Deep Research agents add collaborative planning, visualization, MCP server integration, and File Search",
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
