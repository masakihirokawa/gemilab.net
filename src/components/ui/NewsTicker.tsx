"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "TTS — Gemini 3.8 Flash TTS と 3.8 Flash-Lite TTS が9月22日に一般提供になりました。Flash-Lite TTS は 3.1 Flash TTS preview の置き換えです",
    "GEMINI2.5 — 2.5 系モデルは過去に使っていた利用者に限られるようになりました。非推奨ではなく、新しい開発には 3.5 Flash-Lite か 3.8 Flash が案内されています",
    "9/30 — gemini-omni-flash-preview は9月30日に非推奨になります。残り5日です",
    "SANDBOX — サンドボックスで動かす Gemini CLI が v0.60.0 以降は毎回ログインを求め、過去のセッションも再開できない、という報告が出ています",
    "NEW — Gemini の下書きを送る前に、オレンジの文だけ見直す",
    "CONFIG — Antigravity 2.17.0 はリポジトリ設定を .gemini/config.json から読むようになり、Gemini CLI と置き場所を共有する形になりました",
  ],
  en: [
    "TTS — Gemini 3.8 Flash TTS and 3.8 Flash-Lite TTS became generally available on September 22. Flash-Lite TTS replaces the 3.1 Flash TTS preview",
    "GEMINI2.5 — Access to the 2.5 models is now limited to people who already used them. They are not deprecated; new projects are pointed to 3.5 Flash-Lite or 3.8 Flash",
    "9/30 — gemini-omni-flash-preview is deprecated on September 30, five days from now",
    "SANDBOX — Users report that since v0.60.0, a sandboxed Gemini CLI asks for sign-in every time and can no longer resume past sessions",
    "NEW — Review only the orange sentences before sending a Gemini draft",
    "CONFIG — Antigravity 2.17.0 now reads repository settings from .gemini/config.json, the same place Gemini CLI looks",
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
