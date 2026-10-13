"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "ARGON — gemini-4-argon が 10/13 に GA。複雑なコーディング、エージェント、数学・科学の用途向けです",
    "NANO 2.1 — gemini-nano-banana-2.1 が GA。gemini-3.1-flash-image は非推奨で停止日は未発表",
    "DEADLINE — Deep Research の旧エージェント deep-research-pro-preview-12-2025 は 10/23 に停止、残り9日。移行先は 04-2026 版",
    "Q&A — MCP の設定を診断するエージェントを Gemini と ADK で作った記録が共有されています",
    "EXPORT — 会話の PDF 保存が3サービスとも無い。資料化の実装差を比べた記事が出ています",
    "NEW — 仕事用アカウントでアクティビティが切り替えられないとき、先に確かめる三つの画面",
  ],
  en: [
    "ARGON — gemini-4-argon reached GA on Oct 13, aimed at complex coding, agentic work, math and science",
    "NANO 2.1 — gemini-nano-banana-2.1 is GA. gemini-3.1-flash-image is deprecated, with no shutdown date announced",
    "DEADLINE — The old Deep Research agent deep-research-pro-preview-12-2025 stops on 10/23, 9 days left. Move to the 04-2026 version",
    "Q&A — A write-up builds an agent that reviews MCP settings, using Gemini and ADK",
    "EXPORT — None of the three services saves a chat as a PDF. A write-up compares how each handles it",
    "NEW — When the activity setting is locked on a work account: three screens to check first"
  ]
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
        background: "color-mix(in srgb, var(--accent-coral) 4%, var(--bg-primary))", // 2026-10-09: 不透明に（固定バーの下を流れる本文が透けて重なっていた）
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
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
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
