"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SPARK — GoogleのエージェントアシスタントGemini SparkがmacOSのGeminiアプリに登場し、タスクを自律的に代行します",
    "BRIEF — Personal Intelligenceを活用したDaily BriefがGmailやカレンダーから優先事項をまとめ、次の一手を提案します",
    "MODEL — Gemini 3.5 FlashがGA（正式版）となり、100万トークンのコンテキストで低コスト・高速な処理に対応します",
    "GROWTH — Geminiアプリの月間アクティブユーザーが9億人を突破し、1年前の4億人から大きく成長しました",
    "APPS — SparkはGoogle TasksやGoogle Keepと連携し、話題をリアルタイムに追いかけられるようになりました",
    "ENTERPRISE — Gemini 3.5 FlashがGlobal・US・EUのGemini Enterpriseで一般提供されています",
  ],
  en: [
    "SPARK — Gemini Spark, Google's agentic assistant, arrives in the Gemini app for macOS and works on tasks on your behalf",
    "BRIEF — Daily Brief, powered by Personal Intelligence, distills priorities from Gmail and Calendar with suggested next steps",
    "MODEL — Gemini 3.5 Flash reaches GA, offering faster, lower-cost AI with a 1M-token context window",
    "GROWTH — The Gemini app has passed 900 million monthly active users, up from 400 million a year earlier",
    "APPS — Spark now connects to Google Tasks and Google Keep and stays up to date on topics in real time",
    "ENTERPRISE — Gemini 3.5 Flash is generally available across the Global, US, and EU regions on Gemini Enterprise",
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
