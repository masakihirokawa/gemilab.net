"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NIGHTLY — CLI の安定版は v0.70.0 のままです。v0.71.0 は nightly（11/23 版）として試せます",
    "CARBON — Gemini 4 Carbon の導入価格は 11/30 まで、残り6日です",
    "OAUTH — MCP サーバーの URL を差し替えても、保存済みの OAuth トークンがそのまま送られるという報告が出ています",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8 Flash、2.5-flash は 3.5 Flash-Lite へ自動で回ります。残り7日です",
    "OMNI 1.2 — 12/3 に gemini-omni-1.1-flash は 1.2 へ自動で切り替わります。残り9日です",
    "SCHEDULED — 毎朝のニュース要約のような定型の頼みごとは、スケジュール設定したアクションに任せられます",
  ],
  en: [
    "NIGHTLY — The stable CLI is still v0.70.0; v0.71.0 is available as a nightly build (11/23)",
    "CARBON — Gemini 4 Carbon launch pricing ends 11/30, 6 days left",
    "OAUTH — Report: after repointing an MCP server URL, the CLI still sends the stored OAuth token without asking",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro reroutes to 3.8 Flash and 2.5-flash to 3.5 Flash-Lite. 7 days left",
    "OMNI 1.2 — On 12/3, gemini-omni-1.1-flash switches to 1.2 automatically. 9 days left",
    "SCHEDULED — Routine asks like a morning news digest can run as a scheduled action",
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
