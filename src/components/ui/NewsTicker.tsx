"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "HYDROGEN — 週末の新規はなく、changelog の最新は 11/12 の Gemini 4 Hydrogen GA です",
    "DECISIONS — 11/11 公開の Decisions API は、二値・カテゴリ・ルーブリックの判定に絞った API です",
    "GEMINI 2.5 — gemini-2.5-pro と 2.5-flash は 12/1 に API で停止、残り15日です",
    "MAX TURNS — サブエージェントが MAX_TURNS で止まっても成功と報告される、という報告が出ています",
    "CLI 0.68 — Gemini CLI は安定版 v0.68.0、プレビュー v0.69.0-preview.0 が最新です",
    "NEW — OpenAI 互換で JSON の形が揃わないときの3段階",
  ],
  en: [
    "HYDROGEN — Nothing new over the weekend; the latest changelog entry is Gemini 4 Hydrogen GA on 11/12",
    "DECISIONS — The Decisions API (11/11) is built just for binary, categorical and rubric judgments",
    "GEMINI 2.5 — gemini-2.5-pro and 2.5-flash shut down on the API on 12/1, 15 days left",
    "MAX TURNS — Users report subagents stopped by MAX_TURNS still being reported as a success",
    "CLI 0.68 — Gemini CLI stable is v0.68.0, with v0.69.0-preview.0 on the preview channel",
    "NEW — Getting Consistent JSON Through the OpenAI-Compatible Layer, in Three Steps",
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
