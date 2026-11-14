"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "TTS — TTS プレビュー3種の停止日は 12/18 です（deprecations 本文）。11/17 ではありません",
    "CLI 0.68 — Gemini CLI は安定版 v0.68.0、プレビュー v0.69.0-preview.0（11/10）が最新です",
    "GEMINI 2.5 — gemini-2.5-pro と 2.5-flash は 12/1 に API で停止、残り16日。移行先は 3.8 Flash と 3.5 Flash-Lite",
    "NODE 26 — Node 26 で Gemini CLI のタイムアウト設定が効かない、という報告が出ています",
    "OMNI 1.1 — gemini-omni-1.1-flash への要求は、12/3 から 1.2 Flash へ自動で振り分けられます",
    "NEW — OpenAI 互換で JSON の形が揃わないときの3段階",
  ],
  en: [
    "TTS — The three TTS preview models shut down on 12/18 per the deprecations page, not 11/17",
    "CLI 0.68 — Gemini CLI stable is v0.68.0, with v0.69.0-preview.0 (11/10) on the preview channel",
    "GEMINI 2.5 — gemini-2.5-pro and 2.5-flash shut down on the API on 12/1, 16 days left. Move to 3.8 Flash or 3.5 Flash-Lite",
    "NODE 26 — On Node 26, Gemini CLI's timeout settings reportedly stop applying to model requests",
    "OMNI 1.1 — From 12/3, requests to gemini-omni-1.1-flash are routed to 1.2 Flash automatically",
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
