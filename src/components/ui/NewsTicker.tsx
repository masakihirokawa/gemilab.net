"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI 0.71 — Gemini CLI v0.71.0 のプレビュー版が公開されました。安定版は v0.70.0 のままです",
    "TOOL RETR — Tool retrieval（Preview）で、道具の定義を必要なときだけモデルに読ませられるようになりました",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8 Flash へ、2.5-flash は 3.5 Flash-Lite へ自動で回り、料金も移行先になります（残り9日）",
    "OAUTH — 保存済みの MCP の OAuth トークンが、URL を差し替えた先にも確認なしで送られる、という報告が出ています",
    "PICK — Gemini 4 のどのモデルを日常に使うかは、推論・長文・価格の3つで比べると迷いにくくなります",
    "AG NEON — Antigravity の App v2.34.0 で、Gemini API キーからも Gemini 4 Neon を選べるようになりました",
  ],
  en: [
    "CLI 0.71 — Gemini CLI v0.71.0 is out as a preview. The stable release is still v0.70.0",
    "TOOL RETR — Tool retrieval (Preview) lets the model load tool definitions only when it needs them",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro routes to 3.8 Flash and 2.5-flash to 3.5 Flash-Lite, billed at the new rates (9 days left)",
    "OAUTH — Users report a stored MCP OAuth token being sent to a repointed server URL without asking",
    "PICK — Choosing a daily Gemini 4 model gets easier when you weigh reasoning, long context and price",
    "AG NEON — Antigravity App v2.34.0 adds Gemini 4 Neon for Gemini API keys",
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
