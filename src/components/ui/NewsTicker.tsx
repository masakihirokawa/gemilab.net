"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "3.8 FLASH — 3.7 Flash は 10/08 に非推奨に。旧モデルへの要求は 3.8 Flash へ自動で回されます",
    "NANO 2.1 — gemini-nano-banana-2.1 が GA。gemini-3.1-flash-image は非推奨で停止日は未発表",
    "DEADLINE — veo-3.1 の preview と gemini-omni-flash-preview は 10/22、Deep Research エージェントは 10/23 に停止（残り12〜13日）",
    "Q&A — Gemini CLI でサブエージェントが MAX_TURNS で止まっても成功と報告される、という報告が出ています",
    "TTS/LIVE — 2.5 系の音声・TTS 系プレビューは 11/17 に停止、残り38日",
    "NEW — 停止日のない非推奨をどう扱うか。画像モデルの移行先を3つの条件で選び直す",
  ],
  en: [
    "3.8 FLASH — 3.7 Flash was deprecated on Oct 8. Requests to the old model are routed to 3.8 Flash automatically",
    "NANO 2.1 — gemini-nano-banana-2.1 is GA. gemini-3.1-flash-image is deprecated with no shutdown date yet",
    "DEADLINE — veo-3.1 previews and gemini-omni-flash-preview shut down Oct 22; the Deep Research agent follows Oct 23 (12-13 days left)",
    "Q&A — Users report Gemini CLI marks a subagent run as a success even after it stops at MAX_TURNS",
    "TTS/LIVE — 2.5-era audio and TTS previews shut down Nov 17, 38 days left",
    "NEW — Deprecated with no shutdown date? Re-pick your image-model target with three conditions",
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
