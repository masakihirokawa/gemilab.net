"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "NANOLITE — Nano Banana 2 Liteが登場しました。Googleで最も速く、最もコスト効率の高いGemini Imageモデルで、軽量な画像生成を安く回したい用途に向いています",
    "OMNIFLASH — Gemini Omni Flashがpublic previewになりました。ネイティブにマルチモーダルなモデルで、企業や開発者が独自の動的な動画ワークフローを構築できます",
    "AGENTS — Managed Agentsが拡張されました。background: trueでサーバー側の非同期実行とポーリング、リモートMCPサーバー連携、対話をまたぐ認証情報のリフレッシュに対応します",
    "MEMORY — Memory BankのIngestEvents APIが一般提供になりました。イベントの取り込みとメモリ生成を分離し、コンテンツを継続的にストリームできます",
    "THROUGHPUT — Provisioned Throughputで、同一モデル・同一リージョンに対して最大7件の保留オーダーを提出できるようになりました",
    "DEPRECATE — 画像生成モデルは8月17日に、Gemini Enterprise Agent PlatformのGrok 4.1系は8月20日に停止される予定です",
  ],
  en: [
    "NANOLITE — Nano Banana 2 Lite is here: Google's fastest and most cost-efficient Gemini Image model, made for running lightweight image generation cheaply",
    "OMNIFLASH — Gemini Omni Flash is in public preview, a natively multimodal model that lets enterprises and developers build custom, dynamic video workflows",
    "AGENTS — Managed Agents expand with background: true for async server-side runs and polling, remote MCP server integration, and refreshing credentials across interactions",
    "MEMORY — The Memory Bank IngestEvents API is generally available, decoupling event ingestion from memory generation so you can stream content continuously",
    "THROUGHPUT — Provisioned Throughput now lets you submit up to seven pending orders for the same model and region",
    "DEPRECATE — Image generation models shut down on August 17, and the Grok 4.1 family on the Gemini Enterprise Agent Platform on August 20",
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
