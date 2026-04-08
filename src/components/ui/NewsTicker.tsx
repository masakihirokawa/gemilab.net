"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA 4 — Gemma 4リリース：31BモデルがAIランキング世界3位、スマートフォン・Raspberry Piでオフライン動作（4/2）",
    "3.1 PRO — Gemini 3.1 Proがグローバルロールアウト、複雑なコーディング・データ分析の推論能力が大幅向上（4/1）",
    "FLASH LIVE — Gemini 3.1 Flash Liveがリリース：リアルタイム音声対話、ComplexFuncBench Audio 90.8%達成（3/26）",
    "SAFETY — GoogleがGemini安全性機能を強化、センシティブクエリ対応とガードレール改善を実施（4/1）",
    "AICORE — Gemma 4 Android AICore開発者プレビュー公開、エッジデバイスでのエージェントAIが現実に（4/2）",
    "750M — Gemini月間アクティブユーザー7.5億人突破、APIリクエスト月850億件超でAI最速成長を継続（3/28）",
  ],
  en: [
    "GEMMA 4 — Gemma 4 launches: 31B model ranks #3 globally on AI leaderboard, runs offline on smartphones & Raspberry Pi (4/2)",
    "3.1 PRO — Gemini 3.1 Pro rolls out globally with major reasoning improvements for complex coding & data analysis (4/1)",
    "FLASH LIVE — Gemini 3.1 Flash Live launches: real-time audio dialogue, top score of 90.8% on ComplexFuncBench Audio (3/26)",
    "SAFETY — Google strengthens Gemini safety features with improved handling of sensitive queries and stricter guardrails (4/1)",
    "AICORE — Gemma 4 Android AICore Developer Preview enables on-device agentic AI for edge devices (4/2)",
    "750M — Gemini hits 750M monthly active users, processing 85B+ API requests per month (3/28)",
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
        background: "color-mix(in srgb, var(--accent-teal) 4%, transparent)",
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
            <span style={{ color: "var(--accent-teal)", fontSize: 8 }}>●</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
