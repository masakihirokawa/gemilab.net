"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Interactions APIが一般提供となり、GeminiモデルとエージェントのためのAI Studio・APIの既定APIになりました",
    "AGENT — Managed Agentsがパブリックプレビューとなり、Googleホストの隔離Linuxサンドボックスで自律エージェントを動かせます",
    "SECURITY — 6月19日以降、制限なしのAPIキーからのリクエストが拒否され、キーへの制限付与が前提になりました",
    "CLI — Gemini CLIが6月18日にEOLとなり、Agentic 2.0（Antigravity CLI）へ置き換わりました",
    "MODEL — Gemini 3.5 FlashがGAとなり、エージェント処理やコーディングで持続的な高性能を発揮します",
    "UPDATE — 旧画像プレビューモデル（gemini-3.1-flash-image-preview等）が6月25日に廃止されました",
  ],
  en: [
    "API — The Interactions API reaches general availability as the default API for Gemini models and agents",
    "AGENT — Managed Agents enter public preview, running autonomous agents in Google-hosted isolated Linux sandboxes",
    "SECURITY — From June 19, requests from unrestricted API keys are rejected, so keys now need restrictions",
    "CLI — Gemini CLI reaches end-of-life on June 18, replaced by the Agentic 2.0 Antigravity CLI",
    "MODEL — Gemini 3.5 Flash is generally available for sustained frontier performance on agentic and coding tasks",
    "UPDATE — Older image preview models such as gemini-3.1-flash-image-preview were shut down on June 25",
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
