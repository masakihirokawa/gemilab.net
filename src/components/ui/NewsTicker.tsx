"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Interactions APIが一般提供になりました。Google AI Studio・Gemini API・公式ドキュメントの既定がこちらへ切り替わり、レガシー形式に戻すトグルも用意されています",
    "AGENTS — Interactions APIのGAでスキーマが安定し、Managed Agentsとバックグラウンド実行が加わりました。長時間バッチの組み方を見直す好機です",
    "TRANSLATE — 70以上の言語を自動検出する音声間のほぼリアルタイム翻訳が、Live API・AI Studio・Google翻訳アプリへ展開されました。話者の抑揚を保つ設計です",
    "NOTEBOOK — NotebookLMが「Gemini Notebook」に改称されました。3,000万人・60万組織以上が利用しているとされます",
    "MODEL — 広く提供されている最新はGemini 3.5 Flashです。旗艦のGemini 3.5 Proはコーディング能力の改善に時間をかけており、数ヶ月の遅れが伝えられています",
    "SIRI — Appleは新しいSiriに1.2兆パラメータのカスタムGeminiモデルを採用し、iOS 27での搭載を予定しています",
  ],
  en: [
    "API — The Interactions API is now generally available and is the default for Google AI Studio, the Gemini API, and the docs, with a toggle back to the legacy format",
    "AGENTS — With GA, the Interactions API schema is stable and adds Managed Agents and background execution — a good moment to revisit how you run long batches",
    "TRANSLATE — Near-real-time speech-to-speech translation across 70+ auto-detected languages is rolling out in the Live API, AI Studio, and the Google Translate app",
    "NOTEBOOK — NotebookLM has been renamed Gemini Notebook, now used by over 30 million people and 600,000+ organizations",
    "MODEL — Gemini 3.5 Flash is the newest broadly available release. The flagship Gemini 3.5 Pro is running months behind while its coding ability is improved",
    "SIRI — Apple picked a custom 1.2-trillion-parameter Gemini model to power the rebuilt Siri, shipping with iOS 27 later this year",
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
