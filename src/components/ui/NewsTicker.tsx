"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI 3.1 PRO — 高いユーザー数制限でロールアウト、Gemini app・API・Vertex AI・NotebookLMで利用可能（4/12）",
    "REASONING — 複雑な問題解決タスク向けに推論能力を大幅改善、ベンチマークで高スコア達成（4/12）",
    "STUDIO — Google AI Studioの「Vibe Coding」がアップグレード、プロンプトからプロダクション対応アプリへ（4/12）",
    "CODING AGENT — Google Antigravityコーディングエージェント統合、AI Studioで本格的なコード生成（4/12）",
    "MUSIC — Lyria・Lyria 3音楽生成モデルが公開プレビュー開始、Gemini API・AI Studioで利用可（4/12）",
    "SUBSCRIPTION — Google One AI PremiumがGoogle AI Proに改名、新Ultraティア登場＆価格体系を整理（4/12）",
  ],
  en: [
    "GEMINI 3.1 PRO — Rolling out with higher usage limits, available in Gemini app, API, Vertex AI, and NotebookLM (4/12)",
    "REASONING — Enhanced reasoning for complex problem-solving, scores significantly higher on benchmark tests (4/12)",
    "STUDIO — Google AI Studio upgrades 'vibe coding' experience to turn prompts into production-ready applications (4/12)",
    "CODING AGENT — Google Antigravity coding agent integration enables advanced code generation in AI Studio (4/12)",
    "MUSIC — Lyria and Lyria 3 music generation models now in public preview via Gemini API and AI Studio (4/12)",
    "SUBSCRIPTION — Google One AI Premium rebranded as Google AI Pro, new Ultra tier introduced with updated pricing (4/12)",
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
