"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "CLI 0.63.0 — Gemini CLI 0.63.0（10月6日）。接続回復時の再試行表示、MCP 設定の欠落と JSON 破損の見分け、長いエージェントループでのツール出力の上限を直しました",
    "10/29 — 画像モデル gemini-3.1-flash-image のシャットダウンまで残り22日。10月6日に加わった gemini-nano-banana-2.1 へ移します",
    "10/22 — Veo 3.1 の3モデルの提供終了まで残り15日。移行先は gemini-omni-1.1-flash です",
    "NOTICE — AI のモデルが提供終了しても、プラグインの管理画面は何も言わなかった、という報告が Zenn に出ています。見落とさない仕組みが論点です",
    "NEW — Veo 3.1 の preview 3種が 10/22 に止まります。差し替えの前に、呼び出し箇所を棚卸しする手順をまとめました",
    "CLAUDE — Codex や Claude Code の文章を Gemini に任せる仕組みが Zenn で続けて出ています。振る仕事と振らない仕事の線引きが論点です",
  ],
  en: [
    "CLI 0.63.0 — Gemini CLI 0.63.0 (Oct 6) shows retry progress on reconnect, tells a missing MCP config from broken JSON, and caps tool output in long agent loops",
    "10/29 — 22 days until the image model gemini-3.1-flash-image shuts down. Move to gemini-nano-banana-2.1, added on Oct 6",
    "10/22 — 15 days until the three Veo 3.1 models shut down. The place to move is gemini-omni-1.1-flash",
    "NOTICE — A Zenn post reports that a plugin's admin screen said nothing when an AI model was retired. How to avoid missing such notices is the real question",
    "NEW — Three Veo 3.1 previews stop on 10/22. Before swapping them, here is how to inventory every place that calls them",
    "CLAUDE — Zenn keeps getting posts on handing Codex or Claude Code writing to Gemini. The real question is which jobs to hand over and which to keep",
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
