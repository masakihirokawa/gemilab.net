"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 FlashがGemini Enterpriseアプリで既定モデルに（6/8〜）。無効化はできません",
    "APP — I/O 2026でGeminiアプリを刷新。1日の要点をまとめる「Daily Brief」、新UI、動画モデル「Gemini Omni」を追加",
    "SPARK — パーソナルAIエージェント「Gemini Spark」が登場。チャットボットから連携作業システムへの転換が鮮明に",
    "CHROME — Gemini in Chrome on Android（Nano Banana・auto browse）が6月下旬から。メモリ4GB以上・English-US設定の端末から順次",
    "DEEPTHINK — Gemini 3 Deep ThinkがAPI経由でも一部の研究者・企業に開放。科学・研究向けの高度推論モードです",
    "MODELS — Gemini 3世代を軸に3.1 Pro / 3.1 Flash-Lite / 3.5 Flashを展開。速度・推論深度・コストで使い分けます",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash is the default model in the Gemini Enterprise app (since Jun 8) and cannot be turned off",
    "APP — At I/O 2026 the Gemini app gains a Daily Brief, a redesigned UI, and a new video model called Gemini Omni",
    "SPARK — Gemini Spark, a personal AI agent, debuts as Google turns Gemini from a chatbot into a connected work system",
    "CHROME — Gemini in Chrome on Android (Nano Banana, auto browse) rolls out in late June, starting on 4GB+ devices set to English-US",
    "DEEPTHINK — Gemini 3 Deep Think reaches the Gemini API for select researchers and enterprises — advanced reasoning for science and research",
    "MODELS — Across the Gemini 3 generation, 3.1 Pro, 3.1 Flash-Lite, and 3.5 Flash trade off speed, reasoning depth, and cost",
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
