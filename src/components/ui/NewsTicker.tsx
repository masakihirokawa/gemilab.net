"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Gemini 3.5 Flashが一般提供。gemini-flash-latestの実体となり、エージェント・コーディングで持続的に高性能を出します",
    "AGENT — Managed Agentsが公開プレビュー。Googleホストの隔離Linuxサンドボックスでステートフルな自律エージェントを構築できます",
    "SEARCH — File Searchがマルチモーダル対応。gemini-embedding-2で画像をそのまま埋め込み・検索できます",
    "RESEARCH — Deep Researchの新版が協調プランニング・可視化・MCPサーバー連携・File Searchに対応しました",
    "SHEETS — Gemini in Sheetsが周辺データ構造を解析し、数式エラーを1クリックで診断・修正します",
    "ROADMAP — Gemini 3.5 Proは品質調整のため7月へ延期。最新の主力はFlash系です",
  ],
  en: [
    "API — Gemini 3.5 Flash is generally available and now powers gemini-flash-latest for sustained agentic and coding performance",
    "AGENT — Managed Agents enter public preview, running stateful autonomous agents in Google-hosted isolated Linux sandboxes",
    "SEARCH — File Search adds multimodal search, embedding and searching images natively with gemini-embedding-2",
    "RESEARCH — A new Deep Research agent adds collaborative planning, visualization, MCP server integration, and File Search",
    "SHEETS — Gemini in Sheets analyzes surrounding data to diagnose and fix formula errors in one click",
    "ROADMAP — Gemini 3.5 Pro slips to July for refinement; the Flash line leads for now",
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
