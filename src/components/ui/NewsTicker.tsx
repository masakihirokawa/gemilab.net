"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 Flashが一般提供となり、gemini-flash-latestの実体になりました",
    "API — Interactions APIが一般提供となり、Geminiモデルとエージェントを扱う主要APIになりました",
    "AGENT — Managed Agentsが公開プレビューで提供され、隔離Linux環境で自律エージェントを動かせます",
    "API — バックグラウンド実行が加わり、長時間処理を投げて結果を後から受け取れます",
    "SEARCH — File Searchがgemini-embedding-2で画像もそのまま検索できるようになりました",
    "NOTICE — 6/19以降、未制限APIキーからのリクエストが遮断されるようになりました",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash reaches general availability and becomes gemini-flash-latest",
    "API — The Interactions API hits GA as the primary way to work with Gemini models and agents",
    "AGENT — Managed Agents enter public preview, running stateful agents in isolated Linux sandboxes",
    "API — Background execution lands, letting you fire long-running jobs and collect results later",
    "SEARCH — File Search now embeds and searches images natively via gemini-embedding-2",
    "NOTICE — Since June 19, requests from unrestricted API keys are blocked",
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
