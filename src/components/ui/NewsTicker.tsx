"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "BUILT-IN+CUSTOM — Gemini API で Google 検索 grounding やコード実行を custom function calling と 1 リクエストで併用可能に（5月）",
    "MAPS GROUNDING — Gemini 3 系で Google Maps grounding 解禁、地理データ・営業時間・経路を citations 付きで取得（5月）",
    "3.5 PRO — Gemini 3.5 Pro は 6 月一般公開予定、Google 社内で既に稼働中（5/27）",
    "MULTIMODAL RAG — File Search が画像対応、media_id と page-level citations で verifiable RAG を構築可能（5/5）",
    "WEBHOOKS — Batch API / long-running operations の状態通知が webhook ベースに統一、ポーリング不要に（5月）",
    "WWDC × GEMINI — 新 Siri は Gemini ベースのカスタムモデル + Apple Private Cloud Compute で動作との報道（5月）",
  ],
  en: [
    "BUILT-IN+CUSTOM — Gemini API now combines built-in tools (search grounding, code exec) with custom function calls in one request (May)",
    "MAPS GROUNDING — Gemini 3 models gain Google Maps grounding: geo data, hours, routes with citations (May)",
    "3.5 PRO — Gemini 3.5 Pro arrives in June, already used internally at Google (5/27)",
    "MULTIMODAL RAG — File Search goes multimodal: media_id + page-level citations for verifiable RAG (5/5)",
    "WEBHOOKS — Batch API and long-running operations now notify via webhooks; goodbye polling (May)",
    "WWDC × GEMINI — New Siri reportedly runs on a custom Gemini-based model via Apple's Private Cloud Compute (May)",
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
