"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA4 — Google が Gemma 4 オープンモデルを公開、Apache 2.0 ライセンスで 2B〜31B の4サイズを提供、140言語対応（4/2）",
    "AICORE — Android AICore 開発者プレビューに Gemma 4 が搭載、次世代 Gemini Nano 4 のベースモデルとして機能（4/4）",
    "FLASHLITE — Gemini 3.1 Flash-Lite が GA、速度 2.5 倍・出力 45% 向上で入力 $0.25/1M トークンの最安値モデルに（4/4）",
    "REFERRAL — Google AI が Perplexity を抜いて Web 参照ソース世界第 2 位に浮上、8.65% シェアで前年比 4 倍成長（4/3）",
    "GEMINI3PRO — Gemini 3 Pro Preview が推論・マルチモーダル・エージェント機能を統合、企業向け複合タスク対応（4/3）",
    "FLASHLIVE — Gemini 3.1 Flash Live がリアルタイム音声対話に対応、低遅延・長文コンテキストで自然な会話を実現（4/3）",
  ],
  en: [
    "GEMMA4 — Google releases Gemma 4 open models under Apache 2.0: four sizes from 2B to 31B, supporting over 140 languages with agentic capabilities (4/2)",
    "AICORE — Gemma 4 lands in Android AICore Developer Preview, serving as the foundation for the upcoming Gemini Nano 4 on-device experience (4/4)",
    "FLASHLITE — Gemini 3.1 Flash-Lite hits GA: 2.5x faster, 45% higher output speed, and just $0.25/1M input tokens — the most cost-efficient Gemini model yet (4/4)",
    "REFERRAL — Google AI overtakes Perplexity to become the world's No. 2 web referral source at 8.65% share, growing 4x year-over-year (4/3)",
    "GEMINI3PRO — Gemini 3 Pro Preview integrates advanced reasoning, multimodal understanding, and agent capabilities for complex enterprise workflows (4/3)",
    "FLASHLIVE — Gemini 3.1 Flash Live delivers real-time voice conversations with reduced latency and longer context for more natural interactions (4/3)",
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
