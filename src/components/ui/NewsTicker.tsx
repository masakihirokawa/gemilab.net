"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA 4 — Google DeepMindがGemma 4ファミリーを公開、256Kコンテキスト・ネイティブビジョン・140言語対応のオープンモデル（4/2）",
    "ANDROID — Gemma 4がAICore Developer Previewに登場、オンデバイスでエージェンティックAIを実現（4月）",
    "GEMINI 3.1 PRO — グローバル展開開始、推論能力が大幅向上しGemini app・API・Vertex AIで利用可能（4/12）",
    "CODING — Android BenchでGeminiとGPT-5.4がトップ争い、コーディングAIの最新ランキング更新（4/9）",
    "WORKSPACE — Gemini for WorkspaceがFortune 500の企業AIクエリの45%を処理（4月時点）",
    "GROWTH — Geminiの月間アクティブユーザーが7.5億人に到達、エンゲージメント戦略が課題に（3月時点）",
  ],
  en: [
    "GEMMA 4 — Google DeepMind releases Gemma 4 family with 256K context, native vision/audio, 140+ languages (4/2)",
    "ANDROID — Gemma 4 arrives in AICore Developer Preview, bringing agentic AI capabilities to on-device Android (Apr)",
    "GEMINI 3.1 PRO — Global rollout begins with enhanced reasoning for complex coding and data analysis tasks (4/12)",
    "CODING — Android Bench updated: Gemini tied with GPT-5.4 for top spot in AI coding model rankings (4/9)",
    "WORKSPACE — Gemini for Workspace now handles 45% of all enterprise AI queries among Fortune 500 companies (Apr)",
    "GROWTH — Gemini hits 750M monthly active users but faces engagement challenges as users split across AI platforms (Mar)",
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
