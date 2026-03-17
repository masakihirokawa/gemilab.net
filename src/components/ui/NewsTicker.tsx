"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "3.1 Pro — Gemini 3.1 Pro がリリース、ARC-AGI-2 で 77.1% を記録し推論能力が大幅向上",
    "API — thinking_level パラメータ・Thought Signatures・Interactions API（Beta）が追加",
    "Flash-Lite — Gemini 3.1 Flash-Lite が Preview 公開、コスト効率重視の軽量モデル（3/3）",
    "Workspace — Docs/Sheets/Drive/Gmail を横断する複数文書 Q&A が AI Ultra/Pro ユーザーに提供開始",
    "ADK — Agent Development Kit × Live API Toolkit で双方向音声 AI エージェント開発が可能に",
    "Personal AI — Gemini アプリの無料ユーザーにも Personal Intelligence が拡大（3/17）",
  ],
  en: [
    "3.1 Pro — Gemini 3.1 Pro released with 77.1% on ARC-AGI-2, major reasoning improvements",
    "API — New thinking_level parameter, Thought Signatures & Interactions API (Beta) added",
    "Flash-Lite — Gemini 3.1 Flash-Lite now in Preview; cost-efficient lightweight model (3/3)",
    "Workspace — Multi-doc Q&A across Docs, Sheets, Drive & Gmail now live for AI Ultra/Pro users",
    "ADK — Agent Development Kit × Live API Toolkit enables bidirectional voice AI agent dev",
    "Personal AI — Personal Intelligence expands to free-tier Gemini app users (3/17)",
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
