"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "3.1PRO — Gemini 3.1 Pro が推論能力を2倍に向上、複数の仮説を並行で探索する Deep Think が Ultra プランで利用可能に（4/1）",
    "WORKSPACE — Gemini in Docs・Sheets・Slides が Gmail・Photos・YouTube 履歴を統合、Gmail・チャット・ファイルから情報を自動抽出（3月）",
    "CONTEXTX2 — Gemini Live がコンテキスト長を2倍に延長、長い会話でも文脈を失わず、より自然な対話が実現（4月）",
    "MAPS — Ask Maps 機能で地図と対話型で検索、キーワード入力から自然言語クエリへの進化により UX が向上（4月）",
    "TV — Google TV 向け Gemini が教育コンテンツの音声解説に対応、リアルタイムスポーツ情報も配信開始（3月末）",
    "LIVE — Gemini Live の対話型ニュースサマリー機能で、ニュース記事を深掘り質問可能に進化（4月初旬）",
  ],
  en: [
    "3.1PRO — Gemini 3.1 Pro doubles reasoning capabilities, exploring multiple hypotheses in parallel with Deep Think for Ultra subscribers (4/1)",
    "WORKSPACE — Gemini in Docs, Sheets, Slides integrated with Gmail, Photos, YouTube history for personalized help throughout workflows (March)",
    "CONTEXTX2 — Gemini Live doubles context length, maintaining conversation history twice as long for more natural dialogue without repetition (April)",
    "MAPS — Ask Maps feature enables conversational map exploration, evolving from keyword search to natural language queries (April)",
    "TV — Google TV's Gemini now features narrated deep dives into educational topics with real-time sports updates (late March)",
    "LIVE — Gemini Live upgraded with interactive news summaries, letting users explore stories in detail through follow-up questions (early April)",
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
