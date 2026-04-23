"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "EMBED2 — Gemini Embedding 2 が GA、Gemini API と Vertex AI の両方で提供開始（4月）",
    "FLASH3 — Gemini 3 Flash が Gemini アプリの新デフォルトに、2.5 Flash から大幅アップグレード（4月）",
    "DEEPRESEARCH — Interactions API に Deep Research / Deep Research Max、3.1 Pro × MCP × ネイティブチャート対応（4月）",
    "AISTUDIO — Google AI Studio が AI Pro／Ultra 向けに利用上限を拡張、Nano Banana Pro と Gemini Pro へアクセス（4月）",
    "VPCSC — Gemini Cloud Assist 調査機能が VPC Service Controls 内で非対応に（4/13 開始）",
    "ERSUN — gemini-robotics-er-1.5-preview が 4/30 にシャットダウン、Robotics-ER 1.6 へ移行を（4/30）",
  ],
  en: [
    "EMBED2 — Gemini Embedding 2 is generally available across the Gemini API and Vertex AI (Apr)",
    "FLASH3 — Gemini 3 Flash becomes the new default model in the Gemini app, a major jump over 2.5 Flash (Apr)",
    "DEEPRESEARCH — Deep Research & Deep Research Max land in the Interactions API with 3.1 Pro, MCP and native charts (Apr)",
    "AISTUDIO — Google AI Studio raises limits for AI Pro/Ultra subscribers and unlocks Nano Banana Pro & Gemini Pro access (Apr)",
    "VPCSC — Gemini Cloud Assist investigations no longer supported inside VPC Service Controls perimeters from 4/13 (4/13)",
    "ERSUN — gemini-robotics-er-1.5-preview shuts down 4/30 — migrate to Gemini Robotics-ER 1.6 (4/30)",
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
              letterSpacing: "0.02em",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
