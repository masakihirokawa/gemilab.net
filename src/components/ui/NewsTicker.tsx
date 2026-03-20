"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "Gemini 3.1 — Gemini 3.1 Pro Preview リリース：推論・マルチモーダル・エージェント性能が大幅向上",
    "Workspace — Gemini が Docs/Sheets/Slides/Drive を横断して AI 文書作成を自動化（3月更新）",
    "API — Gemini API が 2026年1月に 850億リクエスト突破、前年比 142% 成長",
    "Home — Gemini for Home が応答速度 40% 改善、カナダ・欧州・アジアに展開拡大",
    "BILLING — Gemini API に課金上限制度を 4月導入、プロジェクト単位で月額制御が可能に",
    "TOOLS — Gemini 3 で Computer Use・Maps 対応、関数呼び出しとの同時利用が可能に",
  ],
  en: [
    "Gemini 3.1 — Gemini 3.1 Pro Preview released: major reasoning, multimodal & agent upgrades",
    "Workspace — Gemini automates AI document creation across Docs, Sheets, Slides & Drive (Mar)",
    "API — Gemini API hits 85B requests in Jan 2026, up 142% year-over-year growth",
    "Home — Gemini for Home gets 40% faster responses, expanding to Canada, Europe & Asia",
    "BILLING — Gemini API introducing billing caps in April, per-project monthly spend control",
    "TOOLS — Gemini 3 adds Computer Use & Maps tools, combinable with function calling",
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
