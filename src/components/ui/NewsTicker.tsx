"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026が5月19日開幕、Gemini 4・Veo 4・Android XR・Aluminum OS発表予定（5月）",
    "FILEGEN — Geminiがチャットから直接Docs・PDF・Excel・CSV等を生成・ダウンロード、ワーク層に進化（5月）",
    "WORKSPACE — Workspace Intelligence登場、Gmail・Chat・Calendar・Driveをリアルタイム参照して生成（5月）",
    "GMVEHICLE — 2022年以降のGM車400万台にGeminiを展開、業界最大規模の車載AI統合（4月）",
    "FLASH2.5 — Gemini 2.5 Flash改善版プレビュー、トークン20〜30%削減・推論強化・6月正式GA予定（5月）",
    "MCP — Gemini API と SDK でMCPツール連携が正式サポート、オープンソースツールへのアクセス拡大（5月）",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 kicks off May 19: Gemini 4, Veo 4, Android XR & Aluminum OS expected",
    "FILEGEN — Gemini now generates Docs, PDFs, Excel & CSV directly in chat — evolving into a work layer (May)",
    "WORKSPACE — Workspace Intelligence: Gemini reads Gmail, Chat, Calendar & Drive in real time (May)",
    "GMVEHICLE — Gemini rolling out to 4M GM vehicles (2022+): industry's largest automotive AI deployment (Apr)",
    "FLASH2.5 — Gemini 2.5 Flash preview: 20-30% fewer tokens, stronger reasoning, GA in early June (May)",
    "MCP — MCP tool support officially added to Gemini API & SDK for open-source integrations (May)",
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
