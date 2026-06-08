"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SIRI — WWDC 2026で刷新版SiriがGoogle Geminiモデルで動くと確定。ただしEUではDMAによりiOS 27時点で提供されません",
    "FLASH3.5 — Gemini 3.5 FlashがGA。エージェント・コーディングで持続的なフロンティア性能を発揮する最上位Flashモデルです",
    "IMAGE-GA — Gemini 3.1 Flash Image / 3.1 Pro Imageがネイティブ視覚モデルとしてGA。preview版は6/25に終了予定",
    "MANAGED-AGENTS — Gemini APIでManaged Agentsが公開プレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを構築できます",
    "FILE-SEARCH — File Searchがマルチモーダル対応。gemini-embedding-2で画像のネイティブ埋め込み・検索が可能になりました",
    "DEPRECATION — gemini-3.1-flash-image-preview / gemini-3-pro-image-previewは6/25に停止。GA版への移行をお早めに",
  ],
  en: [
    "SIRI — WWDC 2026 confirms the revamped Siri runs on a Google Gemini model, though it won't ship in the EU at iOS 27 due to the DMA",
    "FLASH3.5 — Gemini 3.5 Flash is now GA, the top Flash model for sustained frontier performance on agentic and coding tasks",
    "IMAGE-GA — Gemini 3.1 Flash Image and 3.1 Pro Image are GA as native visual models; the preview versions shut down Jun 25",
    "MANAGED-AGENTS — Managed Agents launch in public preview in the Gemini API, running autonomous agents in Google-hosted isolated Linux sandboxes",
    "FILE-SEARCH — File Search now supports multimodal search, with native image embedding and retrieval via gemini-embedding-2",
    "DEPRECATION — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down Jun 25 — migrate to the GA models soon",
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
