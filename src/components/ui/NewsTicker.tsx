"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "3.8LIVE — Live API 向けの audio-to-audio が 2 種 GA になりました。低遅延の既定が gemini-3.8-live、ライブ音声中の背景推論が -extended-thinking です",
    "09/30 — gemini-omni-flash-preview のシャットダウンまで残り 13 日です。後継は gemini-omni-1.1-flash で、差し替え前に呼び出し箇所を数え直しておきます",
    "MCP — 拡張側に 10 分と書いたタイムアウトが 1 分で切れる、という報告が出ています。長い処理を MCP に任せている場合はそのまま踏みます",
    "NEW — Sheets の AI 関数が生成できないときは、24 時間の上限より先にファイルの置き場所を疑います",
    "GEM — 社内で作った Gem が共有できないときは、管理者設定と Drive の共有設定を決まった順で確認していきます",
    "10/16 — Gemini 2.5 の Pro / Flash / Flash-Lite が揃って停止するまで残り 29 日です。移行先は 3.5 Flash 系になります",
  ],
  en: [
    "3.8LIVE — Two audio-to-audio models reached GA for the Live API: gemini-3.8-live as the low-latency default, and -extended-thinking for background reasoning mid-conversation",
    "09/30 — Thirteen days until gemini-omni-flash-preview shuts down. The replacement is gemini-omni-1.1-flash, so count your call sites before you swap",
    "MCP — A timeout written as ten minutes on the extension side is reportedly cutting out at one. Anyone handing long work to an MCP server runs straight into it",
    "NEW — When an AI function in Sheets refuses to generate, suspect where the file lives before you blame the 24-hour cap",
    "GEM — When a Gem built for your team will not share, walk the admin settings and the Drive sharing settings in a set order",
    "10/16 — Twenty-nine days until Gemini 2.5 Pro, Flash and Flash-Lite shut down together. The path forward is the 3.5 Flash line",
  ],
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
