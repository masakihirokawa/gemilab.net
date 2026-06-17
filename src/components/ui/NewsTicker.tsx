"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — 本日6/18、Gemini CLIとGemini Code Assist IDE拡張がAI Pro/Ultra・無料個人利用向けにリクエスト提供を終了。後継はAntigravity CLIです",
    "FLASH — Gemini 3.5シリーズが始動し3.5 Flashが提供開始。エージェントとコーディング向けにフロンティア級、長時間タスクに強いと説明されています",
    "DEEPTHINK — Gemini 3 Deep ThinkがGoogle AI Ultra向けに展開中。数学・科学・論理・多段推論の最上位モードです",
    "APP — GeminiアプリにDaily Brief、再設計UI、AI動画モデルGemini Omni、個人AIエージェントGemini Sparkが加わりました",
    "DESIGN — 新デザイン言語Neural Expressiveで、よりリッチな視覚出力とモダリティ間の素早い切替に向けて再構築されています",
    "ULTRA — Google AI Ultraはモデル最上位アクセス・Deep Research・Veo 3動画生成・100万トークンコンテキストを束ねるプレミアム枠です",
  ],
  en: [
    "CLI — As of Jun 18, Gemini CLI and the Gemini Code Assist IDE extensions stop serving AI Pro/Ultra and free individual users; Antigravity CLI is the successor",
    "FLASH — The Gemini 3.5 series begins with 3.5 Flash, built for agents and coding with strength on long-horizon tasks",
    "DEEPTHINK — Gemini 3 Deep Think is rolling out to Google AI Ultra as the top reasoning mode for math, science, and logic",
    "APP — The Gemini app gains a Daily Brief, a redesigned interface, the Gemini Omni video model, and a personal agent called Gemini Spark",
    "DESIGN — A new design language, Neural Expressive, rebuilds the experience for richer visuals and faster switching between modalities",
    "ULTRA — Google AI Ultra bundles top model access, Deep Research, Veo 3 video, and a 1M-token context window",
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
