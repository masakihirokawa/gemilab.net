"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "VIDEO — 9月1日、エージェント型の動画理解が 3.7 Flash・3.6 Flash・3.5 Flash-Lite に届きました。モデルが動画のタイムラインを自分で辿ります",
    "TOKENS — 必要なときだけ字幕・フレーム・音声を取りに行く方式で、長尺では従来処理に比べて最大88%のトークン削減とされています",
    "SCOPE — 対応は Interactions API と GenerateContent API の両方です。長い動画を扱う見積もりは、この変更で前提が変わります",
    "MUSIC — 9月3日、Lyria 3.5 がパブリックプレビューへ。フルレングスの楽曲生成に対応し、44.1kHz ステレオを出力します",
    "CONTROL — Lyria 3.5 はテキストと画像を入力に取り、音楽的な一貫性、自然なボーカル、尺と構成の細かい制御が改善されました",
    "ROBOTICS — gemini-robotics-er-2-streaming-preview は Live API 上のリアルタイム配信向けで、物理動作に対するブロッキング挙動つきの function calling に対応します",
  ],
  en: [
    "VIDEO — Agentic video understanding reached 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite on September 1. The model navigates the timeline itself rather than sampling frames at a fixed rate",
    "TOKENS — Because it pulls transcripts, frames, or audio only when it needs them, Google measures up to 88% fewer tokens on long-form content",
    "SCOPE — It works across both the Interactions and GenerateContent APIs. If you have costed out long-video work before, the assumptions have moved",
    "MUSIC — Lyria 3.5 entered public preview on September 3, generating full-length songs at 44.1 kHz stereo",
    "CONTROL — Lyria 3.5 accepts text and image inputs, with better musical coherence, more natural vocals, and finer control over duration and structure",
    "ROBOTICS — gemini-robotics-er-2-streaming-preview is tuned for real-time streaming over the Live API, with function calling that blocks on physical robot actions",
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
