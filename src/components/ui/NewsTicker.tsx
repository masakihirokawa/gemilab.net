"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 Flashが一般提供（GA）、agentic/コーディングで持続的フロンティア性能（6月）",
    "AGENTS — Managed Agentsが公開プレビュー、Googleホストの隔離Linuxサンドボックスで自律実行（6月）",
    "SCHEMA — Interactions APIのレガシースキーマが6/8に廃止、outputs→stepsへの移行が必須（6月）",
    "SEARCH — Gemini 3.5 FlashがSearchのAI Modeとアプリで全世界展開、誰でも利用可能に（6月）",
    "FILESEARCH — File Searchがマルチモーダル化、gemini-embedding-2で画像をネイティブに検索（6月）",
    "DEPRECATE — gemini-3.1-flash-image-previewとgemini-3-pro-image-previewが6/25にシャットダウン（6月）",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash is now GA, built for sustained frontier performance on agentic and coding tasks (Jun)",
    "AGENTS — Managed Agents launch in public preview, running in Google-hosted isolated Linux sandboxes (Jun)",
    "SCHEMA — The Interactions API legacy schema is removed on June 8; migrate from outputs to steps now (Jun)",
    "SEARCH — Gemini 3.5 Flash rolls out globally across Search AI Mode and the Gemini app for everyone (Jun)",
    "FILESEARCH — File Search goes multimodal, embedding and searching images natively via gemini-embedding-2 (Jun)",
    "DEPRECATE — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down on June 25 (Jun)",
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
