"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NANOLITE — 最速・最もコスト効率の高いGemini ImageモデルNano Banana 2 Liteが利用可能になりました",
    "OMNIFLASH — Gemini Omni FlashがAPIにパブリックプレビューで登場。動的な動画ワークフローをカスタムで組めます",
    "AGENTS — Managed AgentsがGemini APIに。GoogleがホストするLinuxサンドボックスで自律エージェントを構築できます",
    "FILESEARCH — File Searchがマルチモーダル検索に対応。gemini-embedding-2で画像を埋め込み・検索でき、視覚引用のmedia_idも加わりました",
    "WEBHOOKS — Webhooksに対応し、Batch APIと長時間オペレーションのポーリングをイベント駆動で置き換えられます",
    "DEPRECATE — 旧画像生成モデルは8/17に停止予定です。移行の準備を進めておきましょう",
  ],
  en: [
    "NANOLITE — Nano Banana 2 Lite is now available as the fastest, most cost-efficient Gemini Image model",
    "OMNIFLASH — Gemini Omni Flash comes to the API in public preview for building custom, dynamic video workflows",
    "AGENTS — Managed Agents arrives in the Gemini API, running autonomous agents in secure Google-hosted Linux sandboxes",
    "FILESEARCH — File Search now supports multimodal search via gemini-embedding-2, with media_id for visual citations",
    "WEBHOOKS — Event-driven Webhooks replace polling for the Batch API and long-running operations",
    "DEPRECATE — Older image generation models are deprecated and shut down on Aug 17, so plan your migration",
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
