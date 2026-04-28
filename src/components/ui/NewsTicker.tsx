"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH3GA — Gemini 3 Flash 一般提供開始、SWE-bench 78% で 3 Pro を上回る効率性とコストを実現（4/22）",
    "GMVEHICLES — GM 車4百万台に Gemini 展開、Cadillac/Chevrolet/Buick/GMC の2022年式以降が対象（4/28）",
    "NOTEBOOKS — Gemini に Notebooks 機能追加、NotebookLM と双方向シンクで PDF・チャット・リサーチを一元管理（4/24）",
    "MACOS — Gemini app の macOS ネイティブ版が登場、Mac 15 以上対応で Dock からワンタップ起動（4月）",
    "DELOITTE — Deloitte が Google Cloud と提携拡大、Gemini Enterprise 専用エージェント変革プラクティス設立（4/22）",
    "PROACTIVE — Gemini Beta に Proactive Assistance 機能、Gmail・Calendar・画面解析でリアルタイム提案（4月）",
  ],
  en: [
    "FLASH3GA — Gemini 3 Flash GA delivers Pro-grade reasoning at Flash speed, hits 78% on SWE-bench Verified (4/22)",
    "GMVEHICLES — Gemini rolls out to ~4M GM vehicles (Cadillac/Chevrolet/Buick/GMC, 2022 and later) (4/28)",
    "NOTEBOOKS — Gemini adds Notebooks with two-way NotebookLM sync, organize chats, PDFs, and research in one place (4/24)",
    "MACOS — Gemini app for macOS launches, native Mac 15+ build with one-tap access from the Dock (April)",
    "DELOITTE — Deloitte expands Google Cloud alliance with a dedicated Gemini Enterprise agentic transformation practice (4/22)",
    "PROACTIVE — Gemini Beta uncovers Proactive Assistance, real-time suggestions from Gmail, Calendar, and on-screen context (April)",
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
