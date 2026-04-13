"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "AI TIERS — Google AI Plus・Pro・Ultraの機能詳細が明確化、各プランで利用できるGemini機能の全体像が判明（4/11）",
    "SLIDES — GeminiがAIによるプレゼンテーション自動生成に対応、ドキュメントや研究論文から完全なスライドを即座に作成（4/11）",
    "GEMINI 3.1 PRO — グローバル展開開始、複雑なコーディングとデータ分析の推論能力が大幅向上（4月）",
    "IMPORT — GoogleがChatGPTなど他社AIアプリからの会話・設定インポート機能を開始、ユーザー確保戦略を強化（4月）",
    "GEMMA 4 — 256Kコンテキスト・ネイティブビジョン・140言語対応のオープンモデルファミリーをリリース（4/2）",
    "GROWTH — Geminiの月間アクティブユーザーが7.5億人に達するも、Claude・ChatGPTとの競争でセッション時間が月次18%減（3月）",
  ],
  en: [
    "AI TIERS — Google clarifies AI Plus, Pro & Ultra feature breakdown: what each Gemini plan actually includes (4/11)",
    "SLIDES — Gemini now generates full presentations instantly from topics, documents, or research papers with themes and images (4/11)",
    "GEMINI 3.1 PRO — Global rollout begins with major reasoning improvements for complex coding and data analysis (Apr)",
    "IMPORT — Google launches chat and preference import from rival AI apps including ChatGPT, signaling aggressive retention push (Apr)",
    "GEMMA 4 — Open model family released with 256K context, native vision/audio, 140+ languages on AI Studio and Gemini API (4/2)",
    "GROWTH — Gemini hits 750M monthly active users but session duration drops 18% MoM as users split across AI platforms (Mar)",
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
