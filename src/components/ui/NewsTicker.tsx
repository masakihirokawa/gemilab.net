"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI 0.62.0 — Gemini CLI v0.62.0（9月29日）に Gemini 3.8 Flash と 3.5 Flash-Lite の対応が入りました。OAuth の更新トークンを保持する修正も入っています",
    "10/02 — 本日、gemini-2.5-flash-image が提供終了日を迎えました。移行先は gemini-3.1-flash-image で、差し替え漏れの洗い出しが今週の作業です",
    "TOOLS — Gemini CLI で MCP のツールが128個を超えると 400 エラーになる、という Issue が上がっています。ツール数の絞り方が論点です",
    "NEW — 3月に増えた Docs・Sheets・Slides・Drive の Gemini 機能、半年後に残したものと外したもの",
    "CLAUDE — Claude Code から Gemini 3.8 へ日本語処理を振る併用が Zenn で読まれています。振る仕事と振らない仕事の線引きが論点です",
    "12/31 — 3.8 / 3.7 / 3.6 Flash と robotics-er-2 の導入価格終了まで残り90日。3.5 Flash は据え置きです",
  ],
  en: [
    "CLI 0.62.0 — Gemini CLI v0.62.0 (Sep 29) adds Gemini 3.8 Flash and 3.5 Flash-Lite support, along with a fix that keeps the OAuth refresh token",
    "10/02 — gemini-2.5-flash-image reaches its shutdown date today. The place to move is gemini-3.1-flash-image, and sweeping for leftover references is this week's job",
    "TOOLS — An issue reports that Gemini CLI returns a 400 once MCP tools exceed 128. How you trim the tool count is the real question",
    "NEW — The Gemini features that landed in Docs, Sheets, Slides and Drive in March: what I kept and what I dropped six months later",
    "CLAUDE — Handing Claude Code's Japanese-text work to Gemini 3.8 is a pairing getting read on Zenn. The real question is which jobs to hand over and which to keep",
    "12/31 — 90 days left until the introductory pricing ends for 3.8 / 3.7 / 3.6 Flash and robotics-er-2. 3.5 Flash stays as is",
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
        background: "color-mix(in srgb, var(--accent-coral) 4%, transparent)",
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
