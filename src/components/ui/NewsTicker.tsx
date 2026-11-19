"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GENIE 4 — 11/19 に Genie 4 が GA。操作できる映像を生成し、映像出力は1秒あたり約 $0.10 です",
    "RETRIEVAL — 同じ日に tool retrieval（Preview）が登場。道具が多くても、定義を毎回まるごと送らずに済みます",
    "CARBON — Gemini 4 Carbon の導入価格は 11/30 まで、残り10日です",
    "HEAP — Gemini CLI を長く動かすとメモリ不足で落ちる、という報告が出ています",
    "CLI 0.70 — Gemini CLI の安定版 v0.70.0 が 11/19 に出ました。認証をやり直しても worktree の選択が残ります",
    "ZDR — 「学習に使わない」とデータを残さない ZDR は別の約束です。自分の設定がどちらかを確かめておくと安心です",
  ],
  en: [
    "GENIE 4 — Genie 4 went GA on 11/19, generating steerable worlds, with video output at about $0.10 per second",
    "RETRIEVAL — Tool retrieval (Preview) arrived the same day, so large tool sets no longer go out in full on every request",
    "CARBON — Gemini 4 Carbon's launch pricing ends on 11/30, 10 days left",
    "HEAP — Users report Gemini CLI crashing with out-of-memory errors after long runs",
    "CLI 0.70 — Gemini CLI v0.70.0 stable shipped on 11/19 and keeps your worktree choice across sign-in restarts",
    "ZDR — \"Not used for training\" and Zero Data Retention are different promises. Check which one your setup has",
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
