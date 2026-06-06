"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SIRI — WWDC 2026（6/8）で刷新Siriのクラウド機能をGeminiが担うと報道、Appleは約1.2兆パラメータのカスタムGeminiモデルに年間約10億ドルとも",
    "API — Interactions APIの旧スキーマが6/8に削除（outputs→steps・response_format変更）、未移行のコードは動かなくなります（6/8）",
    "CLI — 6/18にGemini CLIとCode Assist IDE拡張がPro・Ultra・個人向けの提供を終了、Antigravityへの移行が案内されています（6/18）",
    "IMAGE — 画像モデルgemini-3.1-flash-image-previewとgemini-3-pro-image-previewが6/25にシャットダウン（6/25）",
    "GEMINI3.5 — Gemini 3.5 FlashがGA、エージェント/コーディングで最も賢く約4倍高速、Antigravity・API・AI Studio等で利用可能（6月）",
    "VIDEO2IMAGE — 動画を入力に高品質なサムネイル・ポスター・インフォグラフィックを生成する動画→画像生成に対応（gemini-3.1-flash-image）",
  ],
  en: [
    "SIRI — At WWDC 2026 (Jun 8), Siri's cloud features are reportedly powered by Gemini, with Apple said to pay Google about $1B a year for a custom ~1.2T-parameter model",
    "API — The Interactions API legacy schema is removed on Jun 8 (outputs to steps, response_format changes); unmigrated code will break (Jun 8)",
    "CLI — On Jun 18, Gemini CLI and Code Assist IDE extensions stop serving the Pro, Ultra, and individual tiers, pointing developers to Antigravity (Jun 18)",
    "IMAGE — The gemini-3.1-flash-image-preview and gemini-3-pro-image-preview models shut down on Jun 25 (Jun 25)",
    "GEMINI3.5 — Gemini 3.5 Flash is GA: the most intelligent model for agentic and coding work, about 4x faster, across Antigravity, the API, AI Studio and more (Jun)",
    "VIDEO2IMAGE — Video-to-image generation arrives on gemini-3.1-flash-image, turning a video into high-quality thumbnails, posters, and infographics",
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
