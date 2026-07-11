"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SHEETS — Fill with Geminiが28言語に拡大しました。中国語・トルコ語ほか各言語のまま自然文で表を組めます",
    "ALPHAEVOLVE — Gemini Enterpriseに、コードをAIが自律的に最適化するAlphaEvolveが一般提供されました",
    "SPARK — macOS向けの個人AIエージェントGemini Sparkが、フォルダ整理やWorkspace横断の作業を代行します",
    "OMNI — Gemini Omniがテキスト・写真・動画を掛け合わせた高品質な動画作成と、自分に似たAIアバターに対応します",
    "GEMINI35 — Gemini 3.5 Proがアーキテクチャ刷新のため7月17日へ延期。200万トークンとDeep Thinkを導入予定です",
    "DEEPTHINK — 3.5 Proは数学的推論・SVGシーン生成・画像品質の改善を狙って再設計されています",
  ],
  en: [
    "SHEETS — Fill with Gemini expands to 28 more languages, so you can build spreadsheets in your own language with natural prompts",
    "ALPHAEVOLVE — Gemini Enterprise makes AlphaEvolve generally available, autonomously discovering optimized code solutions",
    "SPARK — Gemini Spark, a personal AI agent for macOS, organizes folders and runs workflows across Workspace",
    "OMNI — Gemini Omni blends text, photos, and video for high-quality creation, plus custom AI avatars of you",
    "GEMINI35 — Gemini 3.5 Pro slips to July 17 for a full rebuild, introducing a 2M-token context and Deep Think",
    "DEEPTHINK — The 3.5 Pro rebuild targets better math reasoning, SVG scene generation, and image quality",
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
