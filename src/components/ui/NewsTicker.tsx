"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — Gemini 3.5 Flashが一般提供（GA）に。エージェントやコーディングで持続的なフロンティア性能をうたいます",
    "TIER — 3.1 Pro・3.1 Flash-Liteといった新ティアがアプリ・クラウド・業務ツールへ順次展開されています",
    "PIXEL — 6月Pixel DropでGeminiの楽曲生成、AIによる動画・音楽作成、画面録画リアクションが追加されました",
    "OMNI — 生成のGemini Omni、推論の3 Deep Think、調査のDeep Researchが並行して強化されています",
    "LIVE — Gemini Liveのライブやりとりが、Android・検索・YouTube・各Googleアプリへ広がっています",
    "ULTRA — Google AI Ultraは最上位アクセス・Deep Research・Veo 3動画・100万トークン文脈を提供します",
  ],
  en: [
    "FLASH — Gemini 3.5 Flash is now generally available, billed as the most intelligent model for agentic and coding tasks",
    "TIER — New tiers like 3.1 Pro and 3.1 Flash-Lite are rolling into apps, cloud products, and business tools",
    "PIXEL — The June Pixel Drop adds Gemini music generation, AI video and music creation, and screen-recording reactions",
    "OMNI — Gemini Omni (creation), 3 Deep Think (reasoning), and Deep Research (automation) all advance in parallel",
    "LIVE — Gemini Live's real-time interaction is expanding across Android, Search, YouTube, and connected Google apps",
    "ULTRA — Google AI Ultra offers top model access, Deep Research, Veo 3 video, and a 1M-token context window",
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
