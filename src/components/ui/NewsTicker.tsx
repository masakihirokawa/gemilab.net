"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI4 — Google I/O 2026（5/19）で Gemini 4 発表予告、コンテキスト 2M トークン・統合画像/動画生成を搭載へ（5/11）",
    "REMY — Gemini の新エージェント「Remy」: 仕事・学習・日常を 24/7 サポートするパーソナルアシスタント（5/11）",
    "OMNI — Gemini UI 内に未発表の動画モデル「Omni」が検出、I/O 2026 での発表を示唆（5/11）",
    "NOTEBOOKLM — Gemini 3.1 Pro が NotebookLM に展開、Pro / Ultra プラン限定で利用可能に（5月）",
    "FIREBASE — Firebase Studio がエージェント型にアップグレード、自律マルチファイル編集・テスト・デプロイが可能に（5月）",
    "GOOGLEIO — Google I/O 2026 が Shoreline で 5/19〜20 開催、Agentic AI と Android 17 の全貌が明らかに（5/19〜）",
  ],
  en: [
    "GEMINI4 — Gemini 4 expected at Google I/O 2026 (5/19): 2M token context and integrated image/video generation (5/11)",
    "REMY — Meet Remy, Gemini's new 24/7 personal agent for work, school, and daily life (5/11)",
    "OMNI — Leaked 'Omni' video model spotted inside Gemini UI, likely to debut at I/O 2026 (5/11)",
    "NOTEBOOKLM — Gemini 3.1 Pro rolls out to NotebookLM for Pro / Ultra subscribers (May)",
    "FIREBASE — Firebase Studio gets an agentic upgrade: autonomous multi-file editing, testing, and deployment (May)",
    "GOOGLEIO — Google I/O 2026 runs May 19-20 at Shoreline: Agentic AI, Android 17, and Aluminium OS revealed (5/19-)",
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
