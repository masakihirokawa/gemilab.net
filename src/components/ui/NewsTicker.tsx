"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IMPORT — Gemini にチャット履歴インポート機能が登場、ChatGPT・Claude からワンクリックで移行可能に（3/26）",
    "FREE — Personal Intelligence が全米で無料化、Gmail・Photos・YouTube と連携した個人 AI アシスタント（3/27）",
    "WORKSPACE — Gemini in Docs・Sheets・Slides が強化、Drive 検索に AI Overview が追加（3/27）",
    "3.1 PRO — Gemini 3.1 Pro Preview が正式公開、complex tasks 向け推論能力が大幅向上（3/30）",
    "PIXEL — Pixel Drop 3 月版：Gemini App Actions でエージェント操作が日常に（食料品注文・配車・スマートホーム）（3/26）",
    "750M — Gemini が月間 7.5 億ユーザー突破、API リクエスト月 850 億件で AI 最速成長を維持（3/28）",
  ],
  en: [
    "IMPORT — Gemini adds chat history import: migrate from ChatGPT & Claude in one click (3/26)",
    "FREE — Personal Intelligence now free for all US users, connecting Gmail, Photos & YouTube (3/27)",
    "WORKSPACE — Gemini in Docs, Sheets & Slides enhanced; Drive search gains AI Overview (3/27)",
    "3.1 PRO — Gemini 3.1 Pro Preview launches with major reasoning improvements for complex tasks (3/30)",
    "PIXEL — March Pixel Drop: Gemini App Actions bring agentic control to daily tasks (3/26)",
    "750M — Gemini hits 750M monthly active users, API processing 85B+ requests per month (3/28)",
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
