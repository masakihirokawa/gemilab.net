"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NEW — Gemini、Docs/Sheets/Drive/Gmail を横断した複数文書 Q&A・文書生成が正式公開（3/10）",
    "UPDATE — Sheets「Fill with Gemini」、既存セルや Google 検索からデータを自動予測・補完",
    "API — gemini-3-pro-preview が 3/9 廃止、Gemini 3.1 Pro Preview への移行が必須",
    "Pixel — 3月 Drop：食料品注文・レストラン検索などエージェント AI タスクが Pixel で可能に",
    "UPDATE — Computer Use ツールが gemini-3-pro-preview と flash-preview に正式対応",
    "Workspace — Gemini が複雑なスプレッドシートタスクで 70.48% の成功率を達成（新ベンチマーク）",
  ],
  en: [
    "NEW — Gemini synthesizes info across Docs, Sheets, Drive & Gmail for multi-doc Q&A (3/10)",
    "UPDATE — Sheets 'Fill with Gemini' predicts & auto-fills data from existing cells or Search",
    "API — Gemini 3 Pro Preview discontinued 3/9; migrate to Gemini 3.1 Pro Preview now",
    "Pixel — March Drop: Gemini handles agentic tasks like ordering groceries & finding restaurants",
    "UPDATE — Computer Use tool now supported in gemini-3-pro-preview and flash-preview",
    "Workspace — Gemini achieves 70.48% success rate on complex real-world spreadsheet tasks",
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
