"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "BILLING — Gemini API が月額上限制度を導入、Tier 1 $250・Tier 2 $2000・Tier 3 $20000-$100000+ で使用量制御（4/1）",
    "GEMINI3PRO — Gemini 3 Pro Preview が推論・マルチモーダル・エージェント機能を統合、企業向け複合タスク対応（4/3）",
    "FLASHLIVE — Gemini 3.1 Flash Live がリアルタイム音声対話に対応、感情認識と自然な会話が実現（4/3）",
    "VEO3LITE — Veo 3.1 Lite Preview がコスト最適化動画生成を提供、低予算のコンテンツ制作が可能に（4/3）",
    "FIREBASE — Firebase Studio が Imagen 3 統合で画像生成、Gemini Live API サポートで会話型アプリ構築（4月）",
    "APPTEST — App Testing Agent が Android 自動テストをプレビュー、Android Studio で自然言語テスト記述（4月）",
  ],
  en: [
    "BILLING — Gemini API introduces monthly spend caps: Tier 1 at $250, Tier 2 at $2,000, Tier 3 from $20,000-$100,000+ (4/1)",
    "GEMINI3PRO — Gemini 3 Pro Preview combines advanced reasoning, multimodal understanding, and agentic capabilities for complex enterprise tasks (4/3)",
    "FLASHLIVE — Gemini 3.1 Flash Live enables real-time voice conversations with emotion recognition for natural dialogue (4/3)",
    "VEO3LITE — Veo 3.1 Lite Preview delivers cost-efficient video generation, enabling budget-friendly content creation (4/3)",
    "FIREBASE — Firebase Studio integrates Imagen 3 for image generation, with Gemini Live API support for conversational app building (April)",
    "APPTEST — App Testing Agent previews Android automation, allowing natural language test case generation in Android Studio (April)",
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
