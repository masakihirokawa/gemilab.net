"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI 0.71.1 — Gemini CLI の安定版は v0.71.1（11/24）のままです。nightly は 11/25・11/26 と2日続けてリリースに失敗しています",
    "CARBON — API の Gemini 4 Carbon は 11/30 で導入価格が終わります。残り3日です",
    "CRLF — Windows の CRLF ファイルで、write_file の差分が全行変更に見えるという報告が出ています",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8-flash、2.5-flash は 3.5-flash-lite へ自動で回ります。残り4日です",
    "OMNI 1.2 — gemini-omni-1.1-flash は 12/3 に 1.2 へ切り替わります。残り6日です",
    "GENIE 4 — Genie 4 が GA に。文字や画像から、操作できる映像の世界を Interactions API で作れます",
  ],
  en: [
    "CLI 0.71.1 — Gemini CLI stable stays at v0.71.1 (11/24). Nightly releases failed on both 11/25 and 11/26",
    "CARBON — Introductory pricing for Gemini 4 Carbon on the API ends 11/30. 3 days left",
    "CRLF — Users report write_file diffs showing every line changed for files with CRLF line endings on Windows",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro reroutes to 3.8-flash and 2.5-flash to 3.5-flash-lite. 4 days left",
    "OMNI 1.2 — gemini-omni-1.1-flash switches to 1.2 on 12/3. 6 days left",
    "GENIE 4 — Genie 4 is GA: build steerable video worlds from text or an image through the Interactions API",
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
