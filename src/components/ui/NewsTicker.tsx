"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI35F — Gemini 3.5 Flash 正式リリース、3.1 Pro 超えの性能と4倍速、Antigravity 2.0 と Gemini API へ即時展開（5/19）",
    "GEMINI35P — Gemini 3.5 Pro は現在テスト中、来月（6月）リリース予定とアナウンス（5/19）",
    "OMNI — Gemini Omni が登場、画像/音声/動画/テキストの任意入力から動画生成、AI Plus/Pro/Ultra に世界展開（5月）",
    "SPARK — Gemini Spark が個人エージェントとして 24/7 稼働、Workspace + Canva/OpenTable/Instacart 連携、Daily Brief 配信（5月）",
    "NEURALEX — Gemini app が Neural Expressive リデザイン、3.5 Flash 搭載で表現力豊かな音声対話に（5月）",
    "VOICEWORK — Gmail Live / Docs Live / Keep voice notes が登場、音声ベースの Workspace 作業が本格化（5/19）",
  ],
  en: [
    "GEMINI35F — Gemini 3.5 Flash launches with above-3.1-Pro benchmarks, 4x faster output, available in Antigravity 2.0 and Gemini API (5/19)",
    "GEMINI35P — Gemini 3.5 Pro is currently in testing and rolls out next month (June), per Google's I/O announcement (5/19)",
    "OMNI — Gemini Omni debuts, generating video from any combination of images, audio, video, and text for AI Plus/Pro/Ultra worldwide (May)",
    "SPARK — Gemini Spark becomes a 24/7 personal agent across Workspace plus Canva, OpenTable, and Instacart, with a new Daily Brief (May)",
    "NEURALEX — The Gemini app rolls out a Neural Expressive redesign with 3.5 Flash for more natural voice conversations (May)",
    "VOICEWORK — Gmail Live, Docs Live, and Keep voice notes arrive, making voice-first Workspace workflows mainstream (5/19)",
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
