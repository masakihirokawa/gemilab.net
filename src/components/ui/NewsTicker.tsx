"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "FLASH — 3.7 Flash と 3.5 Flash が非推奨に。旧名への要求は 3.8／3.6 Flash へ自動で回されます",
    "NANO 2.1 — gemini-nano-banana-2.1 が GA。gemini-3.1-flash-image は非推奨で停止日は未発表",
    "DEADLINE — Deep Research の旧エージェント deep-research-pro-preview-12-2025 は 10/23 に停止、残り10日。移行先は 04-2026 版",
    "Q&A — GAS と Gemini で3,000行を整形したとき、詰まった3点を共有した記事が出ています",
    "ADK — MCP の結果が 8.5 万トークンになる場面を、FunctionTool で包んで 310 トークンにした実測が共有されています",
    "NEW — 家計や健康の相談を履歴に残さない。一時チャットと設定の確認",
  ],
  en: [
    "FLASH — 3.7 Flash and 3.5 Flash are deprecated; requests to the old names are routed to 3.8 / 3.6 Flash",
    "NANO 2.1 — gemini-nano-banana-2.1 is GA. gemini-3.1-flash-image is deprecated with no shutdown date yet",
    "DEADLINE — The old Deep Research agent deep-research-pro-preview-12-2025 shuts down Oct 23, 10 days left. Move to the 04-2026 versions",
    "Q&A — A write-up lists the three snags hit while formatting 3,000 rows with GAS and Gemini",
    "ADK — One write-up wraps an 85k-token MCP result in a FunctionTool and gets it down to 310 tokens",
    "NEW — Keep money and health questions out of your history: temporary chat and the setting to check",
  ]
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
        background: "color-mix(in srgb, var(--accent-coral) 4%, var(--bg-primary))", // 2026-10-09: 不透明に（固定バーの下を流れる本文が透けて重なっていた）
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
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
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
