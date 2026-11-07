"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "OMNI 1.2 — Gemini Omni 1.2 Flash が GA になりました（11/5）。最長15秒の動画生成と会話での編集に対応し、1.1 Flash は 12/3 に自動で 1.2 へ振り替わります",
    "COMPUTER — Computer Use が Interactions / GenerateContent API で GA になりました（10/30）",
    "LIVE — Live と TTS のプレビュー版は最短 11/17 に停止します（残り10日）。移行先は gemini-3.8-live と 3.8 系 TTS です",
    "CLI — Gemini API CLI（gemini-api）がベータで登場（10/27）。エージェントやCI向けのゼロ依存クライアントです",
    "2.5 PRO — gemini-2.5-pro と 2.5-flash は 12/1 から自動で振り替えられます（残り24日）。移行先は 3.8 Flash と 3.5 Flash-Lite です",
    "NEW — クラッシュ報告を毎回ゼロから読ませない — 既知バグ早見表を先に grep し…",
  ],
  en: [
    "OMNI 1.2 — Gemini Omni 1.2 Flash is generally available (11/5) with up to 15-second video and conversational editing; 1.1 Flash is routed to 1.2 on 12/3",
    "COMPUTER — Computer Use is now generally available in the Interactions and GenerateContent APIs (10/30)",
    "LIVE — Live and TTS preview models shut down as early as 11/17 (10 days left). Move to gemini-3.8-live and the 3.8 TTS models",
    "CLI — Gemini API CLI (gemini-api) is out in beta (10/27): a zero-dependency client for agents and CI",
    "2.5 PRO — gemini-2.5-pro and 2.5-flash are routed automatically on 12/1 (24 days left), to 3.8 Flash and 3.5 Flash-Lite",
    "NEW — Stop Re-Reading Every Crash Report: Gre…"
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
