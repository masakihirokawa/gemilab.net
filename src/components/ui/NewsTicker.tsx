"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026 は 5/19 開幕。Gemini 4・Android 17・Aluminium OS・XR の発表に注目（5/19-20）",
    "ANDROIDSHOW — The Android Show I/O Edition が本日 5/12 に配信開始、Android 17 を先行プレビュー",
    "GEMINI4 — Gemini 4：2Mトークンコンテキスト・統合画像/動画生成・Veo 4 同時発表予定（5/19）",
    "REMY — 「Remy」24時間パーソナルAIエージェント：仕事・学習・日常生活を包括サポートへ（Google I/O 予定）",
    "OMNI — Gemini アプリ UI に未発表の「Omni」動画モデルがリーク、Veo 3.1 と並行展開予定（5月）",
    "NOTEBOOKLM — Gemini 3.1 Pro が NotebookLM に展開、Pro/Ultra ユーザー向けに全面提供（5月）",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 opens May 19: Gemini 4, Android 17, Aluminium OS & XR all expected (5/19-20)",
    "ANDROIDSHOW — The Android Show I/O Edition airs today May 12 with early Android 17 preview",
    "GEMINI4 — Gemini 4: 2M token context, integrated image/video gen & Veo 4 debut expected (5/19)",
    "REMY — 'Remy' 24/7 personal AI agent: work, learning & daily life support all-in-one (Google I/O expected)",
    "OMNI — 'Omni' video model leaks in Gemini UI ahead of I/O, set to launch alongside Veo 3.1 (May)",
    "NOTEBOOKLM — Gemini 3.1 Pro rolls out to NotebookLM for Pro/Ultra users globally (May)",
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
