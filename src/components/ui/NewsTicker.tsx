"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH3.5 — Gemini 3.5 Flashが一般提供に、エージェント・コーディングで持続的なフロンティア性能（6月）",
    "MANAGED-AGENTS — Gemini APIでManaged Agentsが公開プレビュー、Googleホストの隔離Linuxサンドボックスで自律エージェントを構築（6月）",
    "ANTIGRAVITY-AGENT — 汎用Antigravity Agent（Managed Agent）が公開プレビュー、計画・コード実行・ファイル管理・Web閲覧を自律実行（6月）",
    "SCHEMA — Interactions APIのスキーマがoutputs→stepsへ、旧スキーマは6/8に削除（破壊的変更）（6月）",
    "DEPRECATION — gemini-3.1-flash-image-preview／gemini-3-pro-image-previewが6/25に停止（6月）",
    "FILESEARCH — File Searchがマルチモーダル対応（gemini-embedding-2）、イベント駆動Webhooksも追加（6月）",
  ],
  en: [
    "FLASH3.5 — Gemini 3.5 Flash reaches general availability for sustained frontier performance on agentic and coding tasks (Jun)",
    "MANAGED-AGENTS — Managed Agents launch in public preview on the Gemini API, running in secure Google-hosted Linux sandboxes (Jun)",
    "ANTIGRAVITY-AGENT — A general-purpose Antigravity Agent ships in public preview, autonomously planning, coding, managing files, and browsing the web (Jun)",
    "SCHEMA — The Interactions API schema moves from outputs to steps; the legacy schema is removed on Jun 8 (Jun)",
    "DEPRECATION — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down on Jun 25 (Jun)",
    "FILESEARCH — File Search adds multimodal support via gemini-embedding-2, plus event-driven webhooks (Jun)",
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
