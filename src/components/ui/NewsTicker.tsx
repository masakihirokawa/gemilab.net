"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "VEO 3.1 — veo-3.1 の preview 3モデルは 10/22 に停止、残り13日。移行先は gemini-omni-1.1-flash",
    "OMNI — gemini-omni-flash-preview の停止も 10/22。表の日付に合わせて確認を",
    "NANO 2.1 — gemini-nano-banana-2.1 が GA。gemini-3.1-flash-image は非推奨で停止日は未発表",
    "Q&A — Gemini CLI でツールを 128 個超えて載せると 400 になる、という報告が出ています",
    "TTS/LIVE — 2.5 系の音声・TTS 系プレビューは 11/17 に停止、残り39日",
    "NEW — Free tier 表示なのに 429「limit: 0」になるとき、最初の1時間で見る点",
  ],
  en: [
    "VEO 3.1 — The three veo-3.1 preview models shut down Oct 22, 13 days left. Move to gemini-omni-1.1-flash",
    "OMNI — gemini-omni-flash-preview also shuts down Oct 22. Check the deprecations table",
    "NANO 2.1 — gemini-nano-banana-2.1 is GA. gemini-3.1-flash-image is deprecated with no shutdown date yet",
    "Q&A — Users report Gemini CLI returns a 400 error once more than 128 tools are loaded",
    "TTS/LIVE — 2.5-era audio and TTS previews shut down Nov 17, 39 days left",
    "NEW — Free tier shown but 429 \"limit: 0\"? What to check in the first hour",
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
