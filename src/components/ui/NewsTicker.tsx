"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "0918 — Gemini API の changelog は9月18日以降の新規なしです。新規プロジェクトの推奨は引き続き 3.5 Flash-Lite か 3.8 Flash です",
    "09/30 — gemini-omni-flash-preview は9月30日に止まります。残り6日で、後継は gemini-omni-1.1-flash です",
    "ENTCLI — Enterprise の Gemini CLI に 3.5 / 3.6 Flash が来ない、という問いが立っています。個人アカウントとの差がまだ説明されていません",
    "NEW — つないだ MCP を初めて外した日、常時有効にするツールを選ぶ基準",
    "CONFIG — Antigravity 2.17.0 からリポジトリ設定は .gemini/config.json で読まれます。Gemini CLI と同じ .gemini/ を共有する形です",
    "PICKER — 見慣れたモデルが使えないときは、まず自分の画面のピッカーに何が並んでいるかを確かめると、限定措置と故障を取り違えずに済みます",
  ],
  en: [
    "0918 — The Gemini API changelog has no entries after September 18. For new projects the recommendation is still 3.5 Flash-Lite or 3.8 Flash",
    "09/30 — gemini-omni-flash-preview shuts down on September 30, six days away. Its successor is gemini-omni-1.1-flash",
    "ENTCLI — An open question asks why Gemini 3.5 and 3.6 Flash have not reached Gemini CLI on Enterprise accounts, and the gap with personal accounts is still unexplained",
    "NEW — The day I first removed a connected MCP server, and how I now pick the tools that stay on",
    "CONFIG — Since Antigravity 2.17.0, repository settings load from .gemini/config.json, the same .gemini/ folder Gemini CLI already uses",
    "PICKER — When a familiar model disappears, check what your own model picker actually lists first. It keeps an access limit from being mistaken for an outage",
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
