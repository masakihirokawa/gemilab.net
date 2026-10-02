"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini CLI の nightly（10月2日）で、チャット記録を追記専用にして履歴の窓幅を絞る修正が入りました。長い会話の重さに効く変更です",
    "12/31 — 導入価格の終了まで残り89日。3.8 / 3.7 / 3.6 Flash は入力 $0.75→$1.50、出力 $3.75→$7.50 になります",
    "ACP — MCP ツールの許可要求が、どのサーバーからのものか表示されないという報告（#29595）が出ています。許可の読み方が論点です",
    "NEW — 3月に増えた Docs・Sheets・Slides・Drive の Gemini 機能、半年後に残したものと外したもの",
    "WINDOWS — Windows で GIT_CONFIG_GLOBAL=NUL が固定され、Git が失敗するという報告（#29614）があります。Windows で CLI を使う方は要確認です",
    "LITE — gemini-3.1-flash-lite は2027年5月7日に停止予定で、後継は gemini-3.5-flash-lite です。急ぎではありませんが、移行表を作っておく題材です",
  ],
  en: [
    "CLI — Gemini CLI's nightly (Oct 2) makes chat recording append-only and bounds the history window. It should help with the weight of long sessions",
    "12/31 — 89 days left until the introductory pricing ends. 3.8 / 3.7 / 3.6 Flash move to $1.50 input and $7.50 output, from $0.75 and $3.75",
    "ACP — A report (#29595) says MCP tool permission requests do not show which server they come from. How to read the prompt is the open question",
    "NEW — Docs, Sheets, Slides and Drive gained Gemini features in March. Here is what I kept and what I switched off six months later",
    "WINDOWS — A report (#29614) says Windows pins GIT_CONFIG_GLOBAL=NUL and breaks Git. Worth checking if you run the CLI on Windows",
    "LITE — gemini-3.1-flash-lite is scheduled to shut down on May 7, 2027, with gemini-3.5-flash-lite as the successor. No rush, but a good moment to draft a migration table",
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
