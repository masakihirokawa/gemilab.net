"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 FlashがGA、agentic/コーディングで高速かつフロンティア級の性能（2026）",
    "OMNI — Gemini Omniが登場、動画起点であらゆる入力からあらゆる出力を生成（2026）",
    "AGENTS — Gemini APIのManaged Agentsがpublic preview、隔離Linuxサンドボックスで自律エージェント（2026）",
    "FILESEARCH — File Searchがマルチモーダル検索対応、gemini-embedding-2で画像をネイティブ埋め込み（2026）",
    "WEBHOOK — イベント駆動WebhookがBatch API・長時間処理のポーリングを置換（2026）",
    "DEPRECATE — gemini-3.1-flash-image-previewとgemini-3-pro-image-previewが6/25に停止、移行を前倒し推奨（2026）",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash reaches GA with fast, frontier-grade agentic and coding performance (2026)",
    "OMNI — Gemini Omni arrives, generating any output from any input starting with video (2026)",
    "AGENTS — Gemini API Managed Agents enter public preview with isolated Linux sandboxes (2026)",
    "FILESEARCH — File Search adds multimodal search, embedding images natively via gemini-embedding-2 (2026)",
    "WEBHOOK — Event-driven webhooks replace polling for the Batch API and long-running operations (2026)",
    "DEPRECATE — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down June 25 — migrate early (2026)",
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
