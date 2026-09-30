"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHANGELOG — Gemini API changelog の最新は 9月22日（3.8 Flash TTS / Flash-Lite TTS GA）のまま。9月23日から10月1日までの追加はありません",
    "10/02 — gemini-2.5-flash-image の終了まで残り1日。実務の移行先は gemini-3.1-flash-image です",
    "TOOLS — Gemini CLI で MCP のツールが128個を超えると 400 エラーになる、という Issue が上がっています。ツール数の絞り方が論点です",
    "NEW — Gemini CLI に新しいキーを渡しても「API key not valid」。読まれていたのは三か所目の古いキーでした",
    "CLAUDE — Claude Code から Gemini 3.8 へ日本語処理を振る併用が Zenn で読まれています。振る仕事と振らない仕事の線引きが論点です",
    "12/31 — 3.8 / 3.7 / 3.6 Flash と robotics-er-2 の導入価格終了まで残り91日。3.5 Flash は据え置きです",
  ],
  en: [
    "CHANGELOG — The latest Gemini API changelog entry is still Sep 22 (3.8 Flash TTS and Flash-Lite TTS GA). Nothing new from Sep 23 through Oct 1",
    "10/02 — 1 day left for gemini-2.5-flash-image. In practice the place to move is gemini-3.1-flash-image",
    "TOOLS — An open Gemini CLI Issue reports a 400 error once MCP exposes more than 128 tools. How to trim the tool list is the real question",
    "NEW — Gemini CLI kept saying API key not valid after a new key. It was reading a stale key from a third location",
    "CLAUDE — Sending Japanese-text work from Claude Code to Gemini 3.8 is a pairing getting read on Zenn. Deciding which jobs to hand over is the hard part",
    "12/31 — 91 days until the introductory pricing ends for 3.8 / 3.7 / 3.6 Flash and robotics-er-2. 3.5 Flash stays as is",
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
