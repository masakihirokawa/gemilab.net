"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NEON — 11/18 に Gemini 4 Neon が GA。有料枠のみで、入力 100 万トークンあたり $3.00・出力 $15.00 です",
    "OFFICE — 同じ日から Word・PowerPoint・Excel を API に直接渡せます。ページやシートを絞れば、その分だけの課金です",
    "GEMINI 2.5 — gemini-2.5-pro と gemini-2.5-flash の API 停止は 12/1、残り12日です",
    "OAUTH — Gemini CLI の以前のサインイン手順が、案内なしに失敗するという報告が出ています",
    "AG IDE — Antigravity では Neon が既定モデルになり、計画を Neon・実装を Hydrogen に分ける使い方が用意されました",
    "STRUCTURED — Structured Output の JSON が崩れるときは、スキーマ・プロンプト・検証の順に見ると早く片づきます",
  ],
  en: [
    "NEON — Gemini 4 Neon went GA on 11/18, paid tier only, at $3.00 input / $15.00 output per 1M tokens",
    "OFFICE — Since the same day you can pass Word, PowerPoint and Excel files straight to the API and pay only for the pages or sheets you pick",
    "GEMINI 2.5 — gemini-2.5-pro and gemini-2.5-flash shut down on the API on 12/1, 12 days left",
    "OAUTH — Users report that Gemini CLI's older sign-in route now fails without telling you why",
    "AG IDE — Neon is now Antigravity's default, with a setup that plans on Neon and builds on Hydrogen",
    "STRUCTURED — When Structured Output JSON breaks, check the schema, then the prompt, then your validator",
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
