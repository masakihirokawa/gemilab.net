"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "HYDROGEN — Gemini 4 Hydrogen が GA になりました（11/12）。無料枠あり、有料は $1.50／$7.50 per 1M。thinking に xhigh が加わりました",
    "CARBON — Gemini 4 Carbon が GA になりました（11/10）。導入価格 $2.00／$10.00 は 11/30 までです",
    "LIVE — Live と TTS のプレビュー版は最短 11/17 に停止します（残り4日）。移行先は gemini-3.8-live と 3.8 系 TTS です",
    "CLI — Gemini CLI で、/model には出るモデルが gemini models の一覧に出ないという報告があります",
    "AGY — Antigravity アプリでも Gemini 4 Carbon と Hydrogen が選べるようになりました",
    "NEW — 自分のモデル名がどこに書いてあるか分からないときの辿り方",
  ],
  en: [
    "HYDROGEN — Gemini 4 Hydrogen is generally available (11/12): free tier included, $1.50/$7.50 per 1M on paid, plus a new xhigh thinking level",
    "CARBON — Gemini 4 Carbon is generally available (11/10) at introductory pricing of $2.00/$10.00 through 11/30",
    "LIVE — Live and TTS preview models shut down as early as 11/17 (4 days left). Move to gemini-3.8-live and the 3.8 TTS models",
    "CLI — Users report models that appear in /model missing from the gemini models list in Gemini CLI",
    "AGY — Gemini 4 Carbon and Hydrogen are now selectable in the Antigravity app too",
    "NEW — Finding Your Model Name: Settings, Env Vars, No-Code",
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
