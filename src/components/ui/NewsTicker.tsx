"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DEEP_RESEARCH — Deep Research エージェント新版が登場、共同プランニング・MCP統合・File Search に対応（4月）",
    "FLASH_TTS — Gemini 3.1 Flash TTS Preview リリース、低コストで表現力ある音声生成を実現",
    "ROBOTICS — gemini-robotics-er-1.6-preview 公開、計器読取と空間・物理推論能力を強化",
    "FILE_GEN — Docs / Sheets / Slides / PDF / DOCX / XLSX / LaTeX 直接生成機能が安定運用フェーズへ",
    "ENTERPRISE — Macquarie Bank が Gemini Enterprise で7ヶ月13万時間削減を達成と発表",
    "IO2026 — Google I/O 2026（5/19-20）目前、Gemini 4 / Veo 4 / Astra デモに期待が集まる",
  ],
  en: [
    "DEEP_RESEARCH — New Deep Research agent ships with collaborative planning, MCP integration, and File Search (Apr)",
    "FLASH_TTS — Gemini 3.1 Flash TTS Preview launches as a cost-efficient, expressive text-to-speech model",
    "ROBOTICS — gemini-robotics-er-1.6-preview adds instrument reading and stronger spatial and physical reasoning",
    "FILE_GEN — Direct generation of Docs, Sheets, Slides, PDF, DOCX, XLSX, and LaTeX moves into stable rollout",
    "ENTERPRISE — Macquarie Bank reports 130,000 hours saved over seven months with Gemini Enterprise",
    "IO2026 — Google I/O 2026 (5/19-20) is imminent, with Gemini 4, Veo 4, and Project Astra demos widely anticipated",
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
