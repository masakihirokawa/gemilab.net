"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "OMNI — ネイティブマルチモーダルのGemini Omni FlashがAPIでパブリックプレビューとなり、独自の動画ワークフローを組み立てられるようになりました",
    "NANO — Nano Banana 2 Liteが登場し、これまでで最速かつ最も低コストなGemini画像モデルとして提供されています",
    "FLASH — Gemini 3.5 Flashが一般提供となり、エージェント処理やコーディングで持続的な高性能を発揮します",
    "AGENTS — Managed AgentsがGemini APIでパブリックプレビューとなり、Googleが隔離管理するLinuxサンドボックスで自律・状態保持型エージェントを動かせます",
    "MEMORY — Memory BankのIngestEvents APIが一般提供となり、イベント取り込みとメモリ生成を分離して継続的にストリーミングできます",
    "THROUGHPUT — プロビジョンドスループットで、同一モデル・同一リージョンに最大7件までの発注をまとめて申請できるようになりました",
  ],
  en: [
    "OMNI — Gemini Omni Flash, a natively multimodal model, enters API public preview for building custom video workflows",
    "NANO — Nano Banana 2 Lite arrives as the fastest and most cost-efficient Gemini image model yet",
    "FLASH — Gemini 3.5 Flash reaches general availability with sustained frontier performance on agentic and coding tasks",
    "AGENTS — Managed Agents enter public preview in the Gemini API, running autonomous, stateful agents in isolated Google-hosted Linux sandboxes",
    "MEMORY — The Memory Bank IngestEvents API is GA, decoupling event ingestion from memory generation for continuous streaming",
    "THROUGHPUT — Provisioned throughput now accepts up to seven pending model orders for the same model and region",
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
