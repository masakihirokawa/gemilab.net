"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI 0.71 — CLI の安定版が v0.71.0 になり、同じ 11/24 にパッチの v0.71.1 も出ました",
    "CARBON — Gemini 4 Carbon の導入価格は 11/30 まで、残り5日です",
    "CANCEL — MCP のツール実行中に Ctrl-C すると、取り消していないのに「取り消し」と伝わるという報告が出ています",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8 Flash、2.5-flash は 3.5 Flash-Lite へ自動で回ります。残り6日です",
    "OMNI 1.2 — 12/3 に gemini-omni-1.1-flash は 1.2 へ自動で切り替わります。残り8日です",
    "IMAGE — 画像が読めないと返るときは、形式・サイズ・送り方の順に確かめると切り分けやすくなります",
  ],
  en: [
    "CLI 0.71 — The stable CLI is now v0.71.0, with a v0.71.1 patch out the same day (11/24)",
    "CARBON — Gemini 4 Carbon launch pricing ends 11/30, 5 days left",
    "CANCEL — Report: pressing Ctrl-C during an MCP tool call tells the model the operation was cancelled when it wasn't",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro reroutes to 3.8 Flash and 2.5-flash to 3.5 Flash-Lite. 6 days left",
    "OMNI 1.2 — On 12/3, gemini-omni-1.1-flash switches to 1.2 automatically. 8 days left",
    "IMAGE — Gemini says it can't see your image? Check the format, then the size, then how you sent it",
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
