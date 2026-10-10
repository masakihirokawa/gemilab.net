"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — 3.7 Flash と 3.5 Flash が非推奨に。旧名への要求は 3.8／3.6 Flash へ自動で回されます",
    "NANO 2.1 — gemini-nano-banana-2.1 が GA。gemini-3.1-flash-image は非推奨で停止日は未発表",
    "DEADLINE — veo-3.1 の preview と gemini-omni-flash-preview は 10/22、Deep Research の旧エージェントは 10/23 に停止（残り11〜12日）",
    "Q&A — Gemini CLI でツールを 128 個超で渡すと 400 エラーになる、という報告が出ています",
    "TTS 3.8 — Gemini 3.8 Flash TTS と Flash-Lite TTS が GA。Voices エンドポイントも追加されました",
    "NEW — 家計や健康の相談を履歴に残さない。一時チャットと設定の確認",
  ],
  en: [
    "FLASH — 3.7 Flash and 3.5 Flash are deprecated. Requests to the old names are routed to 3.8 / 3.6 Flash automatically",
    "NANO 2.1 — gemini-nano-banana-2.1 is GA. gemini-3.1-flash-image is deprecated with no shutdown date yet",
    "DEADLINE — veo-3.1 previews and gemini-omni-flash-preview shut down Oct 22; the old Deep Research agent follows Oct 23 (11-12 days left)",
    "Q&A — Users report Gemini CLI returns a 400 error when you pass more than 128 tools",
    "TTS 3.8 — Gemini 3.8 Flash TTS and Flash-Lite TTS are GA, with a new Voices endpoint",
    "NEW — Keep money and health talk off your history: check temporary chat and settings",
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
