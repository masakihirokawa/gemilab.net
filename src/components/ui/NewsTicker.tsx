"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI35FLASH — Gemini 3.5 Flash 一般提供、3.1 Pro 超えで他 frontier 比 4倍速度、3.5 Pro は来月テスト展開（5/19 I/O）",
    "ANDROIDINT — Gemini Intelligence が Android 端末でフォーム自動入力・Web 要約・複雑タスク自動化、Samsung/Pixel に夏先行（5/12）",
    "DAILYBRIEF — Gemini App の Daily Brief、メール/カレンダー/タスクを朝に統合し次アクションまで提案（5月）",
    "OMNI — Gemini Omni 公開、画像/音声/動画/テキスト入力から動画生成までマルチモーダル一体対応（5月）",
    "SPARK — Gemini Spark 24/7 稼働パーソナルAIエージェント、AI Ultra 米国版から段階展開（5月）",
    "NEURAL — Gemini App が Neural Expressive デザインへ刷新、流体アニメ＋触覚フィードバック搭載（5/19）",
  ],
  en: [
    "GEMINI35FLASH — Gemini 3.5 Flash now GA, beats 3.1 Pro and runs 4x faster than other frontier models; 3.5 Pro in testing next month (5/19 I/O)",
    "ANDROIDINT — Gemini Intelligence brings form autofill, web summarization, and complex task automation to Android, Samsung/Pixel get it this summer (5/12)",
    "DAILYBRIEF — Gemini App's Daily Brief unifies email, calendar, and tasks each morning with prioritized next actions (May)",
    "OMNI — Gemini Omni released, multimodal across image/audio/video/text input through to video output (May)",
    "SPARK — Gemini Spark 24/7 personal AI agent rolling out to AI Ultra users in the US (May)",
    "NEURAL — Gemini App redesigned with Neural Expressive language: fluid motion, vibrant color, haptics (5/19)",
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
