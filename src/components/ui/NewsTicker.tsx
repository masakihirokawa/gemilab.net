"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA4 — Google が Gemma 4 オープンモデルを公開、Apache 2.0 ライセンスで 2B〜31B の4サイズを提供、140言語対応（4/2）",
    "AICORE — Android AICore 開発者プレビューに Gemma 4 が搭載、次世代 Gemini Nano 4 のベースモデルとして機能（4/2）",
    "GEMINI3PRO — Gemini 3 Pro Preview が推論・マルチモーダル・エージェント機能を統合、企業向け複合タスク対応（4/3）",
    "FLASHLIVE — Gemini 3.1 Flash Live がリアルタイム音声対話に対応、感情認識と自然な会話リズムで体験向上（4/3）",
    "VEO3LITE — Veo 3.1 Lite Preview がコスト最適化動画生成を提供、低予算のコンテンツ制作が可能に（4/3）",
    "BILLING — Gemini API が月額上限制度を導入、Tier 1 $250・Tier 2 $2000・Tier 3 $20000-$100000+ で使用量制御（4/1）",
  ],
  en: [
    "GEMMA4 — Google releases Gemma 4 open models under Apache 2.0: four sizes from 2B to 31B, supporting over 140 languages with agentic capabilities (4/2)",
    "AICORE — Gemma 4 lands in Android AICore Developer Preview, serving as the foundation for the upcoming Gemini Nano 4 on-device experience (4/2)",
    "GEMINI3PRO — Gemini 3 Pro Preview integrates advanced reasoning, multimodal understanding, and agent capabilities for complex enterprise workflows (4/3)",
    "FLASHLIVE — Gemini 3.1 Flash Live delivers real-time voice conversations with emotion recognition and natural conversational rhythm (4/3)",
    "VEO3LITE — Veo 3.1 Lite Preview offers cost-efficient video generation, opening up budget-friendly content creation for developers (4/3)",
    "BILLING — Gemini API introduces monthly spend caps: Tier 1 at $250, Tier 2 at $2,000, Tier 3 from $20,000-$100,000+ for usage control (4/1)",
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
