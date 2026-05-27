"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 Flash が AI Studio / Antigravity / Vertex AI で一般提供、フロンティア比 4 倍高速（5/19）",
    "PRICING — Gemini 3.5 Flash 価格 $1.50/M input・$9/M output で 3.1 Pro に肉薄、コスト効率重視（5月）",
    "PRO35 — Gemini 3.5 Pro が来月リリース予告、社内では既に稼働中（2026/6 展開）",
    "FILESEARCH — File Search マルチモーダル化、gemini-embedding-2 で画像のネイティブ検索に対応（5/5）",
    "WEBHOOKS — Event-driven Webhooks が Batch API と long-running operations のポーリングを置換（5月）",
    "INFOAGENT — AI Pro / Ultra 加入者向けに 24/7 Information Agents が今夏ローンチ予定（5月）",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash now GA on AI Studio, Antigravity & Vertex AI, 4x faster than frontier models (5/19)",
    "PRICING — Gemini 3.5 Flash priced at $1.50/M input & $9/M output, close to 3.1 Pro (May)",
    "PRO35 — Gemini 3.5 Pro coming next month, already running internally (June 2026)",
    "FILESEARCH — File Search goes multimodal with native image embedding via gemini-embedding-2 (5/5)",
    "WEBHOOKS — Event-driven Webhooks replace polling for Batch API & long-running operations (May)",
    "INFOAGENT — 24/7 Information Agents for AI Pro / Ultra subscribers launching this summer (May)",
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
