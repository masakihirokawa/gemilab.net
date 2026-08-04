"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PRICE — Gemini 3.6 Flash は出力トークンが $9.00/1M から $7.50/1M へ下がりました。入力は $1.50/1M で据え置きのため、長い出力を伴う処理ほど差が出ます",
    "DEFAULT — Managed Agents の Antigravity エージェントを動かす既定モデルが 3.6 Flash になりました。モデルを明示していない構成は挙動が変わり得ます",
    "VERBOSE — 3.6 Flash は「出力が冗長すぎる」という 3.5 Flash への指摘に応える形で、トークン効率とエージェント的な計画立案を改善しています",
    "GROK — Gemini Enterprise Agent Platform 上の Grok 4.1 モデルファミリーが非推奨となり、8月20日に停止します",
    "CLASSROOM — 8月10日から、管理者が許可済みであれば K-12 と高等教育の全学齢の学生が Gemini in Classroom を使えます。教材をフラッシュカードや練習クイズへ変換できます",
    "PIXEL — 8月12日のイベントで Pixel 11 のハードウェア詳細と、エコシステム全体の AI 機能に関する発表が見込まれています",
  ],
  en: [
    "PRICE — Gemini 3.6 Flash drops output tokens from $9.00 to $7.50 per million while input holds at $1.50, so verbose workloads feel the difference most",
    "DEFAULT — The Antigravity agent in Managed Agents now runs on 3.6 Flash by default. Setups that never pinned a model may behave differently",
    "VERBOSE — 3.6 Flash answers the developer complaint that 3.5 Flash rambled, tightening token efficiency and agentic planning at the same time",
    "GROK — The Grok 4.1 model family on the Gemini Enterprise Agent Platform is deprecated and shuts down on August 20",
    "CLASSROOM — From August 10, students of all ages in K-12 and higher education can use Gemini in Classroom where admins have granted access, turning materials into flashcards and quizzes",
    "PIXEL — Google's August 12 event is expected to fill in the Pixel 11 hardware details along with AI features across the wider ecosystem",
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
