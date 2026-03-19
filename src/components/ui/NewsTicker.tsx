"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "Workspace — Gemini が Docs/Sheets/Slides/Drive に深く統合、パーソナライズ文書作成に対応（3月）",
    "Pixel Drop — 3月の Pixel アップデート：Gemini によるエージェント型タスク実行・Magic Cue 追加",
    "Smart Home — Gemini for Home が応答速度 40% 向上、スマートオートメーション機能を強化",
    "Sheets — Gemini の Sheets タスク処理が成功率 70.48% に到達、複雑な実務処理に対応",
    "Chrome — Gemini in Chrome がカナダ・NZ・インドに展開、50以上の新言語をサポート",
    "OpenClaw — NVIDIA NemoClaw 発表：OpenClaw をエンタープライズ対応に（GTC 2026）",
  ],
  en: [
    "Workspace — Gemini deeply integrated into Docs, Sheets, Slides & Drive with personalized docs (Mar)",
    "Pixel Drop — March Pixel update: Agentic AI tasks in Gemini, Magic Cue suggestions in chats",
    "Smart Home — Gemini for Home gets 40% faster response time, smarter automation features",
    "Sheets — Gemini achieves 70.48% success rate on complex real-world spreadsheet tasks",
    "Chrome — Gemini in Chrome rolls out to Canada, NZ, India with 50+ new languages",
    "OpenClaw — NVIDIA announces NemoClaw: enterprise-grade AI agents at GTC 2026",
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
