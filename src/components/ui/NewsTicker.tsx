"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 FlashがGA、agentic/codingでGemini 3.1 Proを上回る性能（5/19）",
    "INTERACT — Interactions APIが破壊的変更、outputs→stepsへ。旧スキーマは6/8に削除（5月）",
    "MANAGED — Managed Agentsがpublic preview、Googleホストの隔離Linuxで自律エージェントを実行（5/19）",
    "FLASHLITE — Gemini 3.1 Flash-LiteがGA、速度・スケール・コスト効率を重視（5/7）",
    "FILESEARCH — File Searchがgemini-embedding-2でマルチモーダル検索に対応（5/5）",
    "IO2026 — Google I/O 2026開催、Gemini・Antigravity・AI Studioの大型アップデート（5/19）",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash hits GA, beating Gemini 3.1 Pro on agentic & coding benchmarks (May 19)",
    "INTERACT — Interactions API breaking change: outputs to steps; legacy schema removed June 8 (May)",
    "MANAGED — Managed Agents enter public preview, running autonomous agents in Google-hosted sandboxes (May 19)",
    "FLASHLITE — Gemini 3.1 Flash-Lite reaches GA, tuned for speed, scale and cost efficiency (May 7)",
    "FILESEARCH — File Search adds multimodal search via gemini-embedding-2 (May 5)",
    "IO2026 — Google I/O 2026 brings major updates to Gemini, Antigravity and AI Studio (May 19)",
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
