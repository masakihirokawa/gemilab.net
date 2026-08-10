"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — 画像生成モデルの停止まで残り6日です。imagen-4.0 系と Gemini 3 Image 系が8月17日に止まります",
    "MIGRATE — 移行先として gemini-3.1-flash-image が案内されています。generate_images から generate_content への書き換えが必要です",
    "CHECK — 移行後に同じプロンプトで同じ絵が出る保証はありません。必要な生成物は停止前に確保しておく判断が要ります",
    "CLASSROOM — 8月17日は Gemini in Classroom のモバイル提供が始まる日でもあります。web は8月10日に全年齢の学生へ広がりました",
    "DEPRECATION — Grok 4.1 ファミリーの停止は8月20日、gemini-robotics-er-1.6-preview は8月31日で、後継は er-2 系です",
    "CHANGELOG — Gemini API の changelog は7月30日が最新のままです。直近の大きな変更は Gemini 3.6 Flash と 3.5 Flash-Lite の GA です",
  ],
  en: [
    "SUNSET — Six days until the image generation models shut down: the imagen-4.0 family and Gemini 3 Image models stop on August 17",
    "MIGRATE — gemini-3.1-flash-image is the recommended replacement, and it means rewriting generate_images calls as generate_content",
    "CHECK — The same prompt will not necessarily produce the same picture after migrating, so secure any images you still need before the cutoff",
    "CLASSROOM — August 17 is also the day Gemini in Classroom arrives on mobile; the web rollout to students of all ages began on August 10",
    "DEPRECATION — The Grok 4.1 family shuts down on August 20, and gemini-robotics-er-1.6-preview on August 31, succeeded by the er-2 models",
    "CHANGELOG — The Gemini API changelog still ends at July 30. The most recent major change remains the GA of Gemini 3.6 Flash and 3.5 Flash-Lite",
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
