"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemma 4がGoogle AI StudioとGemini APIで利用可能になりました",
    "AGENT — Managed Agentsが公開プレビューとなり、隔離サンドボックスで自律エージェントを構築できます",
    "MODEL — Gemini 3.5 FlashがGAとなり、エージェントとコーディング用途に対応します",
    "STUDIO — Google AI StudioにWorkspace連携とCloud Runへのワンクリックデプロイが加わりました",
    "STUDIO — AI StudioのbuildタブでネイティブAndroidアプリを生成できるようになりました",
    "MIGRATE — Gemini Code Assistの個人向けIDE拡張・CLIは6月18日で終了し、Antigravityへ移行します",
  ],
  en: [
    "MODEL — Gemma 4 is now available in Google AI Studio and the Gemini API",
    "AGENT — Managed Agents enter public preview, running autonomous agents in isolated sandboxes",
    "MODEL — Gemini 3.5 Flash reaches GA for agentic and coding tasks",
    "STUDIO — Google AI Studio adds Workspace integrations and one-click deploy to Cloud Run",
    "STUDIO — You can now build native Android apps in the AI Studio build tab",
    "MIGRATE — Gemini Code Assist IDE extensions and CLI ended for individuals on June 18; move to Antigravity",
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
