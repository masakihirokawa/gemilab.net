"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NOTEBOOKLM — Gemini 3.1 Pro が NotebookLM に展開、Pro / Ultra プラン限定で利用可能に（5月）",
    "FLASH3X — 匿名 Gemini Flash 3.x が LM Arena 登場、3.1 Pro と互角の性能と早期評価（5月）",
    "EMBEDDING2 — Gemini API File Search が gemini-embedding-2 でマルチモーダル対応、画像＋テキスト統合検索（5月）",
    "HOME31 — Google Home が Gemini 3.1 を統合、複雑な多段階音声コマンドが扱えるように（5月）",
    "GOOGLEIO — Google I/O 2026 が Shoreline で 5/19〜20 開催、Gemini OS 統合の披露へ秒読み（5月）",
    "ANDROIDSHOW — The Android Show I/O Edition が 5/12 プレ配信、Android 17 と Gemini OS 統合を披露（5月）",
  ],
  en: [
    "NOTEBOOKLM — Gemini 3.1 Pro rolls out to NotebookLM for Pro / Ultra subscribers (May)",
    "FLASH3X — Anonymous Gemini Flash 3.x candidate appears on LM Arena, early reviews call it on par with 3.1 Pro (May)",
    "EMBEDDING2 — Gemini API File Search adds gemini-embedding-2 for native image + text multimodal search (May)",
    "HOME31 — Google Home integrates Gemini 3.1, enabling complex multi-step voice commands (May)",
    "GOOGLEIO — Google I/O 2026 runs May 19-20 at Shoreline, Gemini OS integration is up next (May)",
    "ANDROIDSHOW — Android Show I/O Edition airs May 12 with Android 17 preview and Gemini OS integration (May)",
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
