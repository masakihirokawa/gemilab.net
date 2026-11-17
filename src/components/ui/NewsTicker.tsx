"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI 0.68 — Gemini CLI の安定版は v0.68.0（11/10）のまま。aistudio の changelog も 11/12 以降の新規はありません",
    "HYDROGEN — 11/12 に GA の Gemini 4 Hydrogen は、入力 100 万トークンあたり $1.50・出力 $7.50 です",
    "GEMINI 2.5 — gemini-2.5-pro と gemini-2.5-flash の API 停止は 12/1、残り13日です",
    "MCP — gemini mcp add の --include-tools がカンマで分かれず、絞り込みが逆に効く、という報告が出ています",
    "IMAGE — Gemini が「画像が見えない」と返すときは、アプリ・API・CLI のどこで起きているかを先に分けると早く片づきます",
    "GROUNDING — Google 検索のグラウンディングは、出典が要る問いかどうかで付ける・付けないを決めると費用を抑えられます",
  ],
  en: [
    "CLI 0.68 — Gemini CLI stable is still v0.68.0 (11/10), and the AI Studio changelog has nothing new since 11/12",
    "HYDROGEN — Gemini 4 Hydrogen, GA since 11/12, costs $1.50 input / $7.50 output per 1M tokens",
    "GEMINI 2.5 — gemini-2.5-pro and gemini-2.5-flash shut down on the API on 12/1, 13 days left",
    "MCP — Users report that gemini mcp add --include-tools doesn't split on commas, so the filter works backwards",
    "IMAGE — When Gemini says it can't see your image, first pin down whether it happens in the app, the API or the CLI",
    "GROUNDING — Turn on Google Search grounding only for questions that need sources, and the bill stays smaller",
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
