"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NOTEBOOKS — Gemini に Notebooks 機能追加、NotebookLM と双方向シンクで PDF・チャット・リサーチを一元管理（4/24）",
    "MACOS — Gemini app の macOS ネイティブ版が登場、Mac 15 以上対応で Dock からワンタップ起動（4月）",
    "PERSONAL — Personal Intelligence で Gmail・Drive・Photos・Calendar 連携、自分専用のコンテキストを活用（4月）",
    "WORKSPACE — Workspace Intelligence が Gmail・Chat・Calendar・Drive にリアルタイムアクセス、AI生成タスクが業務データを直接参照（4月）",
    "SHEETS — Google Sheets に Fill with Gemini 機能、ドラッグ＆ドロップで列補完・空白範囲をプロンプトで一括生成（4月）",
    "SIRI — Gemini-powered Siri が2026年後半に正式リリース、Apple-Google提携でコンテキスト対応 Siri 実現（4/22）",
  ],
  en: [
    "NOTEBOOKS — Gemini adds Notebooks with two-way NotebookLM sync, organize chats, PDFs, and research in one place (4/24)",
    "MACOS — Gemini app for macOS launches, native Mac 15+ build with one-tap access from the Dock (April)",
    "PERSONAL — Personal Intelligence connects Gmail, Drive, Photos, and Calendar for context tailored to your life (April)",
    "WORKSPACE — Workspace Intelligence brings real-time Gmail, Chat, Calendar, and Drive context to AI tasks (April)",
    "SHEETS — Google Sheets adds Fill with Gemini, drag-and-drop column inference and prompt-based bulk fills (April)",
    "SIRI — Gemini-powered Siri confirmed for late 2026, Apple-Google partnership delivers context-aware Siri (4/22)",
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
