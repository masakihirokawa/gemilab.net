"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "HYDROGEN — Gemini 4 Hydrogen は 11/12 に GA。入力 100 万トークンあたり $1.50・出力 $7.50 で、xhigh の思考レベルが加わりました",
    "CLI 0.68 — Gemini CLI の安定版は v0.68.0、プレビューは v0.69.0-preview.0（いずれも 11/10）のままです",
    "GEMINI 2.5 — gemini-2.5-pro と gemini-2.5-flash の API 停止は 12/1、残り14日です",
    "NODE 24 — Node.js 24 で Gemini CLI を入れると、keytar の非推奨と install script の警告が出る、という問いが出ています",
    "DECISIONS — 11/11 公開の Decisions API は、二値・カテゴリ・ルーブリックの判定に特化した呼び出し方です",
    "NEW — OpenAI 互換レイヤーで JSON の形が揃わないとき",
  ],
  en: [
    "HYDROGEN — Gemini 4 Hydrogen went GA on 11/12 at $1.50 input / $7.50 output per 1M tokens, adding an xhigh thinking level",
    "CLI 0.68 — Gemini CLI stable is still v0.68.0, with v0.69.0-preview.0 in preview (both 11/10)",
    "GEMINI 2.5 — gemini-2.5-pro and gemini-2.5-flash shut down on the API on 12/1, 14 days left",
    "NODE 24 — Installing Gemini CLI on Node.js 24 prints keytar deprecation and install-script warnings; users ask if it matters",
    "DECISIONS — The Decisions API (11/11) is built for binary, category and rubric judgments",
    "NEW — When JSON Shapes Drift Through the OpenAI Compatibility Layer",
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
