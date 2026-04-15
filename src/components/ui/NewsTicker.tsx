"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA 4 — gemma-4-26b-a4b-itとgemma-4-31b-itが公開、AI StudioとGemini APIで無料利用可能（4/15）",
    "CHROME — GeminiがChromeに統合開始、米国のGoogle AI Pro/Ultraユーザー向けにWindows/Mac対応（4/11）",
    "AI TIERS — Google AI Pro（旧One AI Premium）とGoogle AI Ultraのプラン詳細が正式公開（4/11）",
    "HOME AI — GeminiがGoogle Homeを強化、プレイリスト認識精度向上と保護者向け機能が改善（4/13）",
    "PERSONAL — Personal Intelligenceが米国に拡大展開、Gmail・写真・YouTube・検索を横断したAI回答が可能に（3月）",
    "JULES — JulesコーディングエージェントがBeta版を卒業、Gemini 2.5 Proでより高品質なコード生成を実現（4月）",
  ],
  en: [
    "GEMMA 4 — gemma-4-26b-a4b-it and gemma-4-31b-it released; free to use on AI Studio and Gemini API (4/15)",
    "CHROME — Gemini in Chrome starts rolling out on Windows & Mac for Google AI Pro/Ultra subscribers in the US (4/11)",
    "AI TIERS — Google officially details AI Plus, Pro & Ultra: Gemini 3.1 Pro exclusive to Pro and Ultra tiers (4/11)",
    "HOME AI — Gemini improves Google Home: better playlist recognition, notes & lists, enhanced parental controls (4/13)",
    "PERSONAL — Personal Intelligence expands to US users: AI answers drawn from Gmail, Photos, YouTube & Search (Mar)",
    "JULES — Jules coding agent exits beta, powered by Gemini 2.5 Pro with GitHub issues integration and multimodal support (Apr)",
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
