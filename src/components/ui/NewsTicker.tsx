"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "OMNI — Gemini Omniが18歳以上の全Google AI加入者へグローバル展開されています。テキスト・写真・動画を組み合わせ、会話するように動画を作成・編集できます",
    "SPARK — Gemini SparkがmacOS版Geminiアプリに登場しました。Google AI Ultra加入者向けに英語で提供が始まっています",
    "AGENT — 汎用マネージドエージェントantigravity-preview-05-2026が公開プレビューになりました。サンドボックス内で自律的に計画・コード実行・ウェブ閲覧まで行えます",
    "SHEETS — 7月15日からAI Expanded AccessライセンスでSheetsのFill with GeminiとAI関数の利用上限が引き上げられています",
    "STUDENT — 日本を含む4カ国の学生向けGemini無償アップグレードは7月までです。対象の方は今月中の登録をおすすめします",
    "IMGEND — 旧来の画像生成モデルは8月17日に停止されます。残り28日です。Nano Banana 2 Liteなど新モデルへの移行をおすすめします",
  ],
  en: [
    "OMNI — Gemini Omni is rolling out globally to all Google AI subscribers 18 and over, letting you create and edit video as easily as having a conversation",
    "SPARK — Gemini Spark has arrived in the Gemini app for macOS, available in English for Google AI Ultra subscribers",
    "AGENT — The general-purpose managed agent antigravity-preview-05-2026 is in public preview, autonomously planning, running code, and browsing the web inside its sandbox",
    "SHEETS — Since July 15, AI Expanded Access licenses get higher limits for Fill with Gemini and the AI function in Sheets",
    "STUDENT — The free Gemini upgrade for students in Japan, Indonesia, the UK, and Brazil runs through July — sign up this month if you're eligible",
    "IMGEND — Legacy image generation models shut down on August 17, 28 days away. Now is a good time to migrate to newer models like Nano Banana 2 Lite",
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
