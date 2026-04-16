"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DEFAULT — Gemini 3 FlashがGeminiアプリのデフォルトモデルに昇格、2.5 Flash比で回答の知性と速度が大幅向上（4月）",
    "GLOBAL — Personal IntelligenceがAI Plus/Pro/Ultra加入者向けにグローバル展開、Gmail・Drive・Calendar・Photos横断（4/14）",
    "IMPORT — 他社AIサービスのチャット履歴をZIPでアップロードし、会話を途切れずGeminiへ移行できる機能が追加（4月）",
    "GEMMA 4 — gemma-4-26b-a4b-itとgemma-4-31b-itを公開、AICore Developer PreviewとAI Studioで無料利用可能（4月）",
    "WORKSPACE — Docsが文書を自動生成、Sheetsが自然言語でスプレッドシートを構築、Driveにセマンティック検索（4月）",
    "PENTAGON — Googleが米国防総省とGemini AIの機密領域展開について協議を開始、AI政府契約の風向きが変化（4月）",
  ],
  en: [
    "DEFAULT — Gemini 3 Flash is now the default model in the Gemini app, a major upgrade over 2.5 Flash in both intelligence and speed (Apr)",
    "GLOBAL — Personal Intelligence rolls out globally for AI Plus/Pro/Ultra subscribers, spanning Gmail, Drive, Calendar and Photos (4/14)",
    "IMPORT — New feature lets you upload a ZIP of chat history from other AI providers and resume right where you left off in Gemini (Apr)",
    "GEMMA 4 — gemma-4-26b-a4b-it and gemma-4-31b-it launch free on AICore Developer Preview and AI Studio (Apr)",
    "WORKSPACE — Docs auto-generates formatted documents, Sheets builds spreadsheets from plain prompts, Drive adds semantic AI Overviews (Apr)",
    "PENTAGON — Alphabet is in talks with the US Department of Defense to deploy Gemini in classified environments (Apr)",
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
