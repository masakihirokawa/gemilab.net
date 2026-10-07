"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "VEO 3.1 — veo-3.1 の preview 3モデルは 10/22 に停止、残り14日。移行先は gemini-omni-1.1-flash",
    "OMNI — gemini-omni-flash-preview の停止も 10/22。9/30 ではなく表の日付に合わせて確認を",
    "NANO 2.1 — 画像モデル gemini-nano-banana-2.1 が GA。gemini-3.1-flash-image は非推奨で停止日は未発表",
    "CLI 0.63 — Gemini CLI 安定版 v0.63.0。接続回復時のリトライ表示などを改善",
    "TTS/LIVE — 2.5 系の音声・TTS 系プレビューは 11/17 に停止、残り40日",
    "NEW — Veo 3.1 preview の 10/22 停止、差し替え前の棚卸し手順",
  ],
  en: [
    "VEO 3.1 — The three veo-3.1 preview models shut down Oct 22, 14 days left. Move to gemini-omni-1.1-flash",
    "OMNI — gemini-omni-flash-preview also shuts down Oct 22, not Sep 30. Check the deprecations table",
    "NANO 2.1 — gemini-nano-banana-2.1 is GA. gemini-3.1-flash-image is deprecated with no shutdown date yet",
    "CLI 0.63 — Gemini CLI stable is v0.63.0, with clearer retry progress on reconnect",
    "TTS/LIVE — 2.5-era audio and TTS previews shut down Nov 17, 40 days left",
    "NEW — Veo 3.1 previews stop Oct 22: take inventory before you swap",
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
