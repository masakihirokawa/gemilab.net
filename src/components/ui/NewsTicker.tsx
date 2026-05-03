"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CARSGEMINI — Gemini が Google Built-in 搭載カーに展開開始、米国英語から順次グローバル拡大（5月）",
    "WORKTOOL — Gemini がチャットからワークツールへ進化、ファイル生成・書類草案・タスク自動化を担う（5月）",
    "PROACTIVE — Gemini ベータ版にプロアクティブ機能追加、Gmail・Calendar を分析しリアルタイム提案（5月）",
    "CLOUDNEXT — Google Cloud Next 2026 開催、第8世代 TPU と Gemini Enterprise Agent Platform 発表",
    "APRIL26DROP — Gemini アプリ 4月アップデート公開、複数機能改善＆ UI 強化（4月）",
    "GEMINI3.1PRO — Gemini 3.1 Pro リリース、コード＆データ分析の推論能力を大幅強化（4月）",
  ],
  en: [
    "CARSGEMINI — Gemini rolls out to Google Built-in vehicles starting in the US (May)",
    "WORKTOOL — Gemini evolves from chatbot to work layer: file creation, drafting & task automation (May)",
    "PROACTIVE — Gemini beta gains Proactive Assistance, analyzing Gmail & Calendar for real-time suggestions (May)",
    "CLOUDNEXT — Google Cloud Next 2026: 8th-gen TPUs & Gemini Enterprise Agent Platform unveiled",
    "APRIL26DROP — Gemini app April 2026 Drop: multiple feature improvements & UI enhancements (Apr)",
    "GEMINI3.1PRO — Gemini 3.1 Pro released with major reasoning upgrades for coding & data analysis (Apr)",
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
