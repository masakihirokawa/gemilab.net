"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IO2026 — Google I/O 2026 開幕間近（5/19-20）、基調講演で Gemini 4 / Veo 4 / Project Astra デモが期待される",
    "TV-CREATE — Google TV に Gemini「Create」ボタン搭載、Nano Banana / Veo を音声プロンプトで操作可能に（4/29-30）",
    "GM-AUTO — GM が Google built-in 全車種で Gemini を採用、対象は2022年式以降の Cadillac/Chevy/Buick/GMC 約400万台（4/28）",
    "WORKSPACE — Workspace Gemini が Docs/Sheets/Slides/PDF/DOCX/XLSX/LaTeX 生成に対応、業務エージェント化が本格化",
    "AGENTIC — Google I/O 2026 のテーマはエージェンティック AI とエージェンティックコーディング、Antigravity 関連も期待",
    "NANOBANANA — Nano Banana 2 が Gemini アプリ・Search AI Mode・Lens のデフォルト画像エンジンとして継続展開",
  ],
  en: [
    "IO2026 — Google I/O 2026 kicks off May 19-20, with Gemini 4, Veo 4, and Project Astra demos widely expected",
    "TV-CREATE — Google TV gains a Gemini Create button that drives Nano Banana and Veo through voice prompts (4/29-30)",
    "GM-AUTO — GM adopts Gemini across Google built-in vehicles, covering ~4M Cadillac/Chevy/Buick/GMC cars from MY2022+ (4/28)",
    "WORKSPACE — Workspace Gemini now generates Docs, Sheets, Slides, PDF, DOCX, XLSX, and LaTeX as a true productivity agent",
    "AGENTIC — I/O 2026 leans into agentic AI and agentic coding, with Antigravity-related news anticipated",
    "NANOBANANA — Nano Banana 2 remains the default image engine across the Gemini app, Search AI Mode, and Lens",
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
