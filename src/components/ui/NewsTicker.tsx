"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI 0.71.1 — Gemini CLI の安定版は v0.71.1、プレビューは v0.72.0-preview.0（ともに 11/24）のままです",
    "CARBON — API の Gemini 4 Carbon は 11/30 で導入価格が終わります。残り2日です",
    "RESTORE — /restore が失敗したのに、会話が古い履歴に置き換わるという報告が出ています",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8-flash、2.5-flash は 3.5-flash-lite へ自動で回ります。残り3日です",
    "IMAGE — 「Gemini が画像を見られないと言う」ときの解説が、よく読まれています",
    "NEW CHAT — 長くなった会話で答えがぶれてきたら、要点をまとめて新しいチャットで始め直すのも手です",
  ],
  en: [
    "CLI 0.71.1 — Gemini CLI stable stays at v0.71.1 and preview at v0.72.0-preview.0 (both 11/24)",
    "CARBON — Introductory pricing for Gemini 4 Carbon on the API ends 11/30. 2 days left",
    "RESTORE — Users report a failed /restore still replacing the conversation with older history",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro reroutes to 3.8-flash and 2.5-flash to 3.5-flash-lite. 3 days left",
    "IMAGE — Our guide to \"Gemini says it can't see your image\" is one of the most-read pages",
    "NEW CHAT — When a long chat starts drifting, summarize it and pick up in a fresh one",
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
