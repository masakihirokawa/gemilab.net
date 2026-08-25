"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHAT — Ask Gemini in Chat が本日8月26日から使えるようになりました。検索・下書き・会話の追いつき・タスク管理が Google Chat の中で完結します",
    "LIMITS — Ask Gemini in Chat は10月1日まで上限が優遇されています。それ以降は通常の使用量上限が適用されます",
    "SHEETS — Sheets canvas が公開されました。自然言語のプロンプトから、スプレッドシートを読み書き可能な対話型アプリケーションへ変換できます",
    "MEET — Google Meet のメモ機能をホーム画面から直接開始できるようになりました。対面の会議でも要約・アクションアイテム・全文書き起こしが Google ドキュメントにまとまります",
    "MODELS — Gemini 3.7 Flash が8月13日に一般提供となりました。導入価格は2026年12月31日までです",
    "DEPRECATION — gemini-robotics-er-1.6-preview が8月31日に停止します。残り5日で、移行先は7月30日から公開プレビューの ER 2 系です",
  ],
  en: [
    "CHAT — Ask Gemini in Chat goes live today, August 26, turning Google Chat into a single command line for search, drafting, catching up, and task management",
    "LIMITS — Ask Gemini in Chat comes with promotional higher limits through October 1, after which standard usage limits apply",
    "SHEETS — Sheets canvas turns a spreadsheet into an interactive, read-write application from a plain-language prompt",
    "MEET — You can now start a Gemini note-taking session straight from the Google Meet home screen, including for in-person meetings, with the summary, action items, and full transcript saved to a Google Doc",
    "MODELS — Gemini 3.7 Flash reached general availability on August 13, with introductory pricing running through December 31, 2026",
    "DEPRECATION — gemini-robotics-er-1.6-preview shuts down on August 31, five days from now. The ER 2 endpoints have been in public preview since July 30",
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
