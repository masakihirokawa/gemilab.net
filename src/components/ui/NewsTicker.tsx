"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "A2A — 安定版 v0.71.1 は、A2A サーバーに bearer トークン認証と入力の検証を必須にする修正1件です",
    "CARBON — Gemini 4 Carbon の導入価格は 11/30 まで、残り4日です",
    "WINDOWS — Windows で ProgramData に置いた system 設定が、常に読み飛ばされるという報告が出ています",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8 Flash、2.5-flash は 3.5 Flash-Lite へ自動で回ります。残り5日です",
    "OMNI 1.2 — 12/3 に gemini-omni-1.1-flash は 1.2 へ自動で切り替わります。残り7日です",
    "DEVCON — Dev Containers の中で Gemini CLI を動かし、手元を汚さずに試す手順が Zenn に出ています",
  ],
  en: [
    "A2A — Stable v0.71.1 is a single fix: the A2A server now requires bearer-token auth and validates input",
    "CARBON — Gemini 4 Carbon launch pricing ends 11/30, 4 days left",
    "WINDOWS — Report: on Windows, system settings in ProgramData are always skipped",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro reroutes to 3.8 Flash and 2.5-flash to 3.5 Flash-Lite. 5 days left",
    "OMNI 1.2 — On 12/3, gemini-omni-1.1-flash switches to 1.2 automatically. 7 days left",
    "DEVCON — A Zenn walkthrough runs Gemini CLI inside Dev Containers to keep your machine clean",
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
