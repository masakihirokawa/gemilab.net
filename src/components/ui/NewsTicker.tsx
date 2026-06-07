"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "WWDC — WWDC 2026が6/8開幕。刷新版SiriはGoogle Geminiベースで動くと報じられ、Apple Intelligenceの中核がGeminiに移る動きに注目",
    "API — Interactions APIの旧スキーマが6/8に削除（新スキーマoutputs→steps、response_formatは5/26デフォルト化済み）。移行は本日が最終期限",
    "FLASH3.5 — Gemini 3.5 FlashがGA。1Mトークン・最大64k出力で、Terminal-Bench 2.1 76.2%などエージェント/コーディングで3.1 Pro超え",
    "AGENTS — Managed Agentsが公開プレビュー。API1コールで隔離Linuxサンドボックス付きエージェントを起動し、Bash/Python/Node・ブラウジングに対応",
    "DEPRECATE — gemini-3.1-flash-image-preview／gemini-3-pro-image-previewは6/25に停止予定。早めの移行を",
    "SEARCH — File Searchがマルチモーダル検索に対応。gemini-embedding-2で画像を埋め込み・検索できるように",
  ],
  en: [
    "WWDC — WWDC 2026 opens Jun 8; the revamped Siri is reported to run on Google Gemini, moving the core of Apple Intelligence toward Gemini",
    "API — The legacy Interactions API schema is removed Jun 8 (new outputs->steps schema; response_format defaulted May 26). Today is the migration deadline",
    "FLASH3.5 — Gemini 3.5 Flash is GA: 1M-token context, up to 64k output, beating 3.1 Pro on agentic/coding (Terminal-Bench 2.1 76.2%)",
    "AGENTS — Managed Agents enter public preview: one API call spins up an agent with an isolated Linux sandbox supporting Bash/Python/Node and browsing",
    "DEPRECATE — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down on Jun 25; migrate early",
    "SEARCH — File Search now supports multimodal search, embedding and querying images via gemini-embedding-2",
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
