"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH36 — Gemini 3.6 Flash が7月21日に登場しました。3.5 Flash と比べて出力トークンを17%削減し、価格は入力 $1.50・出力 $7.50 per 1M です",
    "STEPS — 3.6 Flash は多段のワークフローで推論ステップとツール呼び出しの回数が減る方向の改善が入っています",
    "LITE — Gemini 3.5 Flash-Lite は高スループットと低遅延に振ったモデルです。入力 $0.30・出力 $2.50 per 1M で、エージェント検索や文書処理の大量処理に向きます",
    "CYBER — 3.6 Flash と 3.5 Flash-Lite にあわせて 3.5 Flash Cyber も発表され、Gemini 4 が予告されました",
    "WHERE — 3.6 Flash と 3.5 Flash-Lite は Google Antigravity・AI Studio・Android Studio から使えます",
    "HOME — Gemini for Home の会話の文脈を保つ窓が15分に広がり、Gemini Live が第1世代の Google Home Mini と Nest Hub にも届きました",
  ],
  en: [
    "FLASH36 — Gemini 3.6 Flash arrived on July 21, consuming 17% fewer output tokens than 3.5 Flash and priced at $1.50 input and $7.50 output per 1M tokens",
    "STEPS — 3.6 Flash takes fewer reasoning steps and tool calls to finish multi-step workflows, which shows up as lower spend on agentic runs",
    "LITE — Gemini 3.5 Flash-Lite targets high throughput and low latency at $0.30 input and $2.50 output per 1M tokens, aimed at agentic search and document processing at volume",
    "CYBER — Google announced 3.5 Flash Cyber alongside 3.6 Flash and 3.5 Flash-Lite, and teased Gemini 4",
    "WHERE — Both 3.6 Flash and 3.5 Flash-Lite are available through Google Antigravity, AI Studio, and Android Studio",
    "HOME — Gemini for Home now holds conversational context for 15 minutes, and Gemini Live reached the first-generation Google Home Mini and Nest Hub",
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
              fontFamily: "'DM Mono', monospace",
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
