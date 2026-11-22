"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHANGELOG — Gemini API の changelog は 11/19 が最新で、週末の新規はありません。CLI の安定版は v0.70.0 です",
    "2.5 ROUTE — 12/1 から gemini-2.5-pro は 3.8 Flash、2.5-flash は 3.5 Flash-Lite へ自動で回ります。残り8日です",
    "SPEND CAP — API に「ここで止める」支出の上限が無い、という声が出ています。予算アラートとキーの止め方を先に決めておくと安心です",
    "CARBON — Gemini 4 Carbon の導入価格は 11/30 まで、残り7日です",
    "OMNI 1.2 — 12/3 に gemini-omni-1.1-flash は 1.2 へ自動で切り替わります",
    "/SHELLS — 文書にある /shells は削除済みのコマンドです。動かないときは削除の有無から確かめます",
  ],
  en: [
    "CHANGELOG — No new Gemini API changelog entries since 11/19; the stable CLI is still v0.70.0",
    "2.5 ROUTE — From 12/1, gemini-2.5-pro reroutes to 3.8 Flash and 2.5-flash to 3.5 Flash-Lite. 8 days left",
    "SPEND CAP — Developers are asking for a hard spend limit on the API. Set budget alerts and decide how you would pause a key",
    "CARBON — Gemini 4 Carbon launch pricing ends 11/30, 7 days left",
    "OMNI 1.2 — On 12/3, gemini-omni-1.1-flash switches to 1.2 automatically",
    "/SHELLS — /shells still appears in the docs but was removed. If a command fails, check whether it still exists",
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
