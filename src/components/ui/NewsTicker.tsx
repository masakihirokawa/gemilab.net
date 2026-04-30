"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI31PRO — Gemini 3.1 Pro 開発者プレビュー開始、ARC-AGI-2 で 77.1% を達成し推論性能が 3 Pro の 2 倍以上に（4月）",
    "FLASHTTS — Gemini 3.1 Flash TTS 公開、70 言語以上対応のプロンプト制御可能な表現豊かな音声合成（4月）",
    "AISTUDIO — Google AI Pro / Ultra 加入者の AI Studio 利用枠が大幅拡大、Nano Banana Pro まで標準アクセス（4/20）",
    "NANOBANANA2 — Nano Banana 2（Gemini 3.1 Flash Image）が Gemini アプリ・Search AI Mode・Lens のデフォルト画像エンジンに",
    "EMBEDDING — gemini-embedding-2-preview 公開、テキスト・画像・動画・音声・PDF を扱う初の本格マルチモーダル埋め込み",
    "APPLEDEAL — Apple × Google 提携で Siri に Gemini を採用、WWDC 2026 で刷新版が発表予定（6/8〜6/12）",
  ],
  en: [
    "GEMINI31PRO — Gemini 3.1 Pro enters developer preview hitting 77.1% on ARC-AGI-2, more than double 3 Pro reasoning (Apr)",
    "FLASHTTS — Gemini 3.1 Flash TTS lands with 70+ languages and prompt-controlled expressive speech (Apr)",
    "AISTUDIO — Google AI Pro and Ultra subscribers get higher AI Studio limits and Nano Banana Pro access (4/20)",
    "NANOBANANA2 — Nano Banana 2 (Gemini 3.1 Flash Image) becomes the default image engine across Gemini app, Search AI Mode, and Lens",
    "EMBEDDING — gemini-embedding-2-preview launches as the first true multimodal embedding model (text, image, video, audio, PDF)",
    "APPLEDEAL — Apple partners with Google to power Siri with Gemini, revamped Siri expected at WWDC 2026 (Jun 8-12)",
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
