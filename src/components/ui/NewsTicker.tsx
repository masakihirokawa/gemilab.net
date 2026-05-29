"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI35FLASH — Gemini 3.5 Flash 発表、Terminal-Bench 2.1 で 76.2% を達成しエージェント・コーディング特化（5/19）",
    "PRO35NEXT — Gemini 3.5 Pro が来月（6月）一般提供予定、Google が既に内部運用中",
    "FLASHLITE — gemini-3.1-flash-lite GA、速度・スケール・コスト最適化の安価モデル（5/7）",
    "FILESEARCH — File Search がマルチモーダル化、gemini-embedding-2 で画像をネイティブ embed & search（5/5）",
    "WEBHOOKS — Gemini API に Webhooks サポート追加、Batch API の polling を置換（5/4）",
    "MANAGEDAGT — Managed Agents が Gemini API に登場、1 API コールで Antigravity エージェントの Linux sandbox を provision",
  ],
  en: [
    "GEMINI35FLASH — Gemini 3.5 Flash announced with 76.2% on Terminal-Bench 2.1, tuned for agents & coding (5/19)",
    "PRO35NEXT — Gemini 3.5 Pro rolling out next month (June), already in use internally at Google",
    "FLASHLITE — gemini-3.1-flash-lite hits GA, optimized for speed, scale, and cost efficiency (5/7)",
    "FILESEARCH — File Search goes multimodal with gemini-embedding-2 for native image embed & search (5/5)",
    "WEBHOOKS — Gemini API adds Webhooks support, replacing polling for Batch API & long-running ops (5/4)",
    "MANAGEDAGT — Managed Agents land in Gemini API: one call provisions an Antigravity agent in a Linux sandbox",
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
