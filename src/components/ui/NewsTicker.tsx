"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH-GA — Gemini 3.5 Flashが一般提供、agentic/コーディングで高速かつフロンティア性能（6月）",
    "AGENTS — Gemini APIのManaged Agentsが公開プレビュー、隔離Linuxサンドボックスで自律実行（6月）",
    "SCHEMA — Interactions APIの旧スキーマ（outputs→steps）が6/8に撤去、移行猶予わずか（6月）",
    "SUNSET — 画像プレビュー系モデルが6/25にシャットダウン予定（6月）",
    "SEARCH — File Searchがマルチモーダル対応、gemini-embedding-2で画像も検索可能に（6月）",
    "CLI — Gemini Code Assist向けGemini CLIが6/18に個人/Pro/Ultra層で提供終了（6月）",
  ],
  en: [
    "FLASH-GA — Gemini 3.5 Flash reaches general availability with fast frontier performance on agentic and coding tasks (Jun)",
    "AGENTS — Gemini API's Managed Agents enter public preview, running autonomously in isolated Linux sandboxes (Jun)",
    "SCHEMA — The Interactions API legacy schema (outputs→steps) is removed on June 8; the migration window is closing (Jun)",
    "SUNSET — Image-preview models are scheduled to shut down on June 25 (Jun)",
    "SEARCH — File Search goes multimodal, embedding and searching images via gemini-embedding-2 (Jun)",
    "CLI — Gemini CLI stops serving Gemini Code Assist for individual/Pro/Ultra tiers on June 18 (Jun)",
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
