"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "HOME AI — GeminiがGoogle Homeに深く統合、複雑な音声命令と自然な会話パターンの認識が大幅に向上（4/14）",
    "EMBEDDING — gemini-embedding-2-previewが公開、テキスト・画像・動画・音声・PDFを統一埋め込み空間でマルチモーダル処理（4月）",
    "AI TIERS — Google AI Plus・Pro・Ultraの機能詳細が明確化、各プランで利用できるGemini機能の全体像が判明（4/11）",
    "SLIDES — GeminiがAIによるプレゼンテーション自動生成に対応、ドキュメントや研究論文から完全なスライドを即座に作成（4/11）",
    "GEMMA 4 — 256Kコンテキスト・ネイティブビジョン・140言語対応のオープンモデルファミリーをリリース（4/2）",
    "ENTERPRISE — Gemini for WorkspaceがFortune 500企業の企業AIクエリの45%を担う、エンタープライズ市場で存在感拡大（4月）",
  ],
  en: [
    "HOME AI — Gemini deepens Google Home integration with smarter complex instruction handling and natural speech recognition (4/14)",
    "EMBEDDING — gemini-embedding-2-preview released: first multimodal embedding supporting text, images, video, audio, and PDF in one space (Apr)",
    "AI TIERS — Google clarifies AI Plus, Pro & Ultra feature breakdown: what each Gemini plan actually includes (4/11)",
    "SLIDES — Gemini now generates full presentations instantly from topics, documents, or research papers with themes and images (4/11)",
    "GEMMA 4 — Open model family released with 256K context, native vision/audio, 140+ languages on AI Studio and Gemini API (4/2)",
    "ENTERPRISE — Gemini for Workspace handles 45% of enterprise AI queries among Fortune 500 Google Workspace users (Apr)",
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
