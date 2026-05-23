"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI35FLASH — Gemini 3.5 Flash リリース、3.1 Pro 超え＆他 frontier 比 4倍速度（5/19 I/O）",
    "DAILYBRIEF — Gemini App に Daily Brief 追加、メール/カレンダー/タスクを朝の1画面に集約（5月）",
    "SPARK — Gemini Spark 24/7 稼働パーソナルAIエージェント、AI Ultra 米国版から段階展開（5月）",
    "OMNI — Gemini Omni 公開、画像/音声/動画/テキスト入力から動画生成までシームレス対応（5月）",
    "AISTUDIO — Google AI Studio が native Android アプリ生成に対応、Compose+Kotlin で数分（5/19）",
    "ULTRA100 — AI Ultra 新プラン $100 登場、既存 Ultra は $250→$200 に値下げ（5月）",
  ],
  en: [
    "GEMINI35FLASH — Gemini 3.5 Flash launched, beats 3.1 Pro at 4x faster than other frontier models (5/19 I/O)",
    "DAILYBRIEF — Gemini App adds Daily Brief unifying email, calendar, and tasks each morning (May)",
    "SPARK — Gemini Spark 24/7 personal AI agent rolls out to AI Ultra users in US (May)",
    "OMNI — Gemini Omni released, accepting image/audio/video/text input with video output (May)",
    "AISTUDIO — Google AI Studio now generates native Android apps with Compose & Kotlin (5/19)",
    "ULTRA100 — New AI Ultra plan at $100, existing Ultra dropped from $250 to $200 (May)",
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
