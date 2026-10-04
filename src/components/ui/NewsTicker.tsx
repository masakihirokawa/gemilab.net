"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini CLI の安定版は v0.62.0（9月29日）。nightly は v0.64.0（10月3日・prerelease）まで進んでいます",
    "10/22 — veo-3.1 の preview 3種の停止まで残り17日。後継は gemini-omni-1.1-flash です",
    "AUTH — 企業の Workspace アカウントで Gemini CLI の認証が通らないという報告（#29101）にコメント55件。切り分けの手順が求められています",
    "NEW — Sheets から呼ぶ Gemini の月額を、年末の値上げ日をまたいで見積もる",
    "TTS — gemini-3.8-flash-tts と gemini-3.8-flash-lite-tts が GA になりました（9月22日）。Voices エンドポイントも加わっています",
    "12/31 — 導入価格の終了まで残り87日。3.8 / 3.7 / 3.6 Flash は入力 $0.75→$1.50、出力 $3.75→$7.50 になります",
  ],
  en: [
    "CLI — Gemini CLI's stable release is v0.62.0 (Sep 29). The nightly has reached v0.64.0 (Oct 3, prerelease)",
    "10/22 — 17 days left until the three veo-3.1 preview models shut down. The successor is gemini-omni-1.1-flash",
    "AUTH — A report (#29101) of Gemini CLI auth failing for enterprise Workspace accounts has 55 comments. People want a way to isolate the cause",
    "NEW — Estimating a Sheets-Driven Gemini Bill Across the Year-End Price Switch with Apps Script",
    "TTS — gemini-3.8-flash-tts and gemini-3.8-flash-lite-tts are generally available (Sep 22), along with a Voices endpoint",
    "12/31 — 87 days left until the introductory pricing ends. 3.8 / 3.7 / 3.6 Flash move to $1.50 input and $7.50 output, from $0.75 and $3.75",
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
