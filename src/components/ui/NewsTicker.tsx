"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 Flashが一般提供。3.1 Proをほぼ全ベンチで上回りつつ高速に動きます",
    "API — Interactions APIがGAに到達。Geminiモデルとエージェントを扱う主要APIになりました",
    "AGENTS — Managed Agentsが公開プレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを動かせます",
    "COST — Project Spend Capsでプロジェクト単位のGemini API月額上限を設定できます",
    "SHEETS — Gemini in Sheetsが周辺データを解析し、数式エラーをワンクリックで診断・修正します",
    "STUDIO — Google AI Studioが刷新され、スターターアプリのギャラリーが拡充されました",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash is generally available, beating 3.1 Pro on nearly all benchmarks while running faster",
    "API — The Interactions API reaches GA as the primary way to work with Gemini models and agents",
    "AGENTS — Managed Agents enter public preview, running autonomous agents in Google-hosted isolated Linux sandboxes",
    "COST — Project Spend Caps let you set a monthly dollar limit on Gemini API usage per project",
    "SHEETS — Gemini in Sheets diagnoses and fixes formula errors in one click by analyzing surrounding data",
    "STUDIO — Google AI Studio gets a developer-first refresh with an expanded gallery of starter apps",
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
