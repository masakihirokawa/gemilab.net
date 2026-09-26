"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "9/30 — gemini-omni-flash-preview は9月30日に提供終了です。残り3日です。後継は gemini-omni-1.1-flash です",
    "IMAGE — 10月2日に止まる gemini-2.5-flash-image の推奨先は、廃止表では6月に終了した preview のままです。実際の差し替え先は gemini-3.1-flash-image です",
    "FLASHLITE — gemini-3.1-flash-lite の提供終了日は 2027年5月7日と公示され、後継は gemini-3.5-flash-lite です",
    "MEMORY — Gemini CLI の Auto Memory が、意味の薄いセッションを何度も読み直し続ける、という報告が出ています",
    "NEW — 3.8 Flash-Lite TTS へ置き換え、案内音声の声を選び直すまで",
    "JA — Claude Code の日本語まわりの処理だけを Gemini 3.8 に任せる、という併用の記録が共有されています",
  ],
  en: [
    "9/30 — gemini-omni-flash-preview shuts down on September 30, three days from now. Its successor is gemini-omni-1.1-flash",
    "IMAGE — The deprecations table still points gemini-2.5-flash-image, which ends on October 2, to a preview that itself shut down in June. The working replacement is gemini-3.1-flash-image",
    "FLASHLITE — gemini-3.1-flash-lite now has a published shutdown date of May 7, 2027, with gemini-3.5-flash-lite as its successor",
    "MEMORY — Users report that Gemini CLI's Auto Memory keeps re-reading low-signal sessions over and over",
    "NEW — Switching to 3.8 Flash-Lite TTS and choosing a new voice for app guidance",
    "JA — One developer shares how they hand only the Japanese-language work in Claude Code to Gemini 3.8",
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
