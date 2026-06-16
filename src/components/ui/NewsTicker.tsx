"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini CLIのホスト応答は明日6/18に停止し、後継のAntigravity CLIへ一本化されます。依存スクリプトは本日中に切替確認をおすすめします",
    "PRO — Gemini 3.5 ProがGA間近です。Antigravity 2.0はすでにFlashで稼働し、GA当日にProが加わる見込みです",
    "FLASH — Gemini Enterpriseでは6/8以降、3.5 Flashが既定で有効化され無効化できません。既定モデルが変わると出力の癖も変わります",
    "OMNI — I/O 2026で発表されたGemini Omniは、任意の入力から生成し、会話でそのまま自然に編集できます",
    "SPARK — パーソナルAIエージェントGemini Spark、Daily Brief、再設計されたUIも公開され、チャットから連携型の作業環境へと進んでいます",
    "STACK — Deep Think・Deep Research・Gemini Liveと合わせ、推論・調査・音声・動画を横断する一体運用が前面に出ています",
  ],
  en: [
    "CLI — Gemini CLI stops serving hosted responses tomorrow (Jun 18) and consolidates into its successor, Antigravity CLI; confirm any dependent scripts today",
    "PRO — Gemini 3.5 Pro is close to GA; Antigravity 2.0 already runs Flash and is expected to add Pro on launch day",
    "FLASH — In Gemini Enterprise, 3.5 Flash has been the default since Jun 8 and cannot be turned off; a new default model means new output quirks",
    "OMNI — Gemini Omni, unveiled at I/O 2026, creates from any input and lets you edit naturally through conversation",
    "SPARK — Google also shipped Gemini Spark (a personal AI agent), Daily Brief, and a redesigned UI, moving from chatbot to a connected work system",
    "STACK — Together with Deep Think, Deep Research, and Gemini Live, the lineup spans reasoning, research, voice, and video in one workflow",
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
