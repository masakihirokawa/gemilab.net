"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PRO35 — Gemini 3.5 Proのリリース目標が7月17日と報じられています。ただし日付・コンテキスト長・価格のいずれもGoogleの公式発表ではありません",
    "REBUILD — 2.5 Proのアーキテクチャを白紙化した全面再設計とされ、再帰的なツール呼び出しとSVG生成での構造的な失敗が理由と報じられています",
    "FLASH35 — 広く提供中の最新リリースはGemini 3.5 Flash。コーディング・エージェント・マルチモーダル・長文書処理を高速かつ低コストで担います",
    "SAATHI — Gemini 3.5 Flashを核にしたATL Saathiが、インドの100校でパイロット開始。教員向けに24時間対応の授業計画・研修アシスタントを提供します",
    "SEA — 東南アジアレポートでは、プロンプトの約70%が現地語（ベトナム89%・タイ87%・インドネシア84%）。リクエストの約4分の3がモバイル発です",
    "SHEETS — 7月15日から、AI Expanded Accessライセンス保有者はFill with GeminiとSheetsのAI関数の利用上限が引き上げられました",
  ],
  en: [
    "PRO35 — Gemini 3.5 Pro is reported to target July 17, though the date, context window, and pricing all remain unconfirmed by Google",
    "REBUILD — The model is said to be a ground-up rebuild after the 2.5 Pro architecture was scrapped over structural failures in recursive tool-calling and SVG generation",
    "FLASH35 — Gemini 3.5 Flash is the newest broadly available release, tuned for faster, lower-cost coding, agents, multimodal, and long-document work",
    "SAATHI — ATL Saathi, built on Gemini 3.5 Flash, begins piloting in 100 Indian schools as a 24/7 planning and training assistant for Tinkering Lab educators",
    "SEA — In Southeast Asia, nearly 70% of prompts arrive in native languages — Vietnam 89%, Thailand 87%, Indonesia 84% — and 3 in 4 requests come from mobile",
    "SHEETS — From July 15, AI Expanded Access licenses raise the usage limits for Fill with Gemini and the AI function in Sheets",
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
