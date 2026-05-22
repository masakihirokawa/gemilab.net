"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH35 — Gemini 3.5 Flash が最強の agentic / coding モデルとして公開、Gemini 3.1 Pro を主要ベンチで上回る性能（5/19）",
    "OMNI — Gemini Omni 発表、ビデオを起点に any input → any output のマルチモーダル新モデルへ進化（I/O 2026）",
    "SPARK — Gemini Spark が登場、24時間稼働の常駐パーソナル AI エージェントが指示通りに自律実行",
    "DAILYBRIEF — Gemini アプリが Daily Brief を搭載、UI 刷新と Gemini Omni / Spark の統合で全面刷新（5/19）",
    "MANAGEDAG — Managed Agents in the Gemini API が public preview、Google ホスト Linux サンドボックスで自律実行可能に",
    "CODEMENDER — AI セキュリティエージェント CodeMender が Agent Platform で提供開始、脆弱性の発見と修正を自動化",
  ],
  en: [
    "FLASH35 — Gemini 3.5 Flash launches as the strongest agentic and coding model yet, outperforming Gemini 3.1 Pro on key benchmarks (May 19)",
    "OMNI — Gemini Omni debuts, generating any output from any input starting with video at Google I/O 2026",
    "SPARK — Gemini Spark arrives as a 24/7 personal AI agent that takes autonomous action on your behalf",
    "DAILYBRIEF — The Gemini app rolls out Daily Brief, a refreshed UI, and built-in access to Gemini Omni and Spark (May 19)",
    "MANAGEDAG — Managed Agents in the Gemini API hit public preview, running autonomously in secure Google-hosted Linux sandboxes",
    "CODEMENDER — CodeMender, an AI security agent on Agent Platform, automatically finds and fixes vulnerabilities in source code",
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
