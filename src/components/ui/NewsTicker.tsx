"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Gemini APIのスループットが毎分160億トークン超となり、OpenAIとほぼ肩を並べる規模になりました",
    "ENTERPRISE — Gemini Enterpriseの有料シートが800万を超え、導入企業は2,800社超に拡大しています",
    "AGENT — Claude Opus 4.8がGemini Enterprise Agent Platformで利用可能になり、マルチベンダー化が進んでいます",
    "SPEECH — gemini-3.1-flash-tts-previewがstreamGenerateContentでストリーミング音声生成に対応しました",
    "DATA — CrossbeamデータストアをGemini Enterpriseへ接続できる公開プレビューが始まりました",
    "MODEL — Gemini 3.5 FlashのGAとGemma 4の提供で、エージェント用途と軽量用途の選択肢が揃いました",
  ],
  en: [
    "API — The Gemini API now processes over 16 billion tokens per minute, roughly on par with OpenAI",
    "ENTERPRISE — Gemini Enterprise passes 8 million paid seats across more than 2,800 companies",
    "AGENT — Claude Opus 4.8 arrives on Gemini Enterprise Agent Platform, expanding multi-vendor choices",
    "SPEECH — gemini-3.1-flash-tts-preview adds streaming speech generation via streamGenerateContent",
    "DATA — Crossbeam data stores can now connect to Gemini Enterprise in public preview",
    "MODEL — Gemini 3.5 Flash GA and Gemma 4 round out options for agentic and lightweight workloads",
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
