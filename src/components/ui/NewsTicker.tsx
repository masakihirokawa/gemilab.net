"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PRO35 — Gemini 3.5 Proの報道上の目標日である7月17日を迎えましたが、本日時点でGoogleの公式発表もモデルカードの公開も確認できていません",
    "UNCONFIRMED — 2Mトークンのコンテキストも価格もGoogleは未確認のままです。Vertex AIでの限定的なエンタープライズプレビューにとどまると報じられています",
    "FLASH35 — 一般提供中の最新はgemini-3.5-flash。gemini-flash-latestが指すモデルもこちらに切り替わっています",
    "AGENTS — Gemini APIのManaged Agentsが公開プレビューに。Googleがホストする隔離Linuxサンドボックス上で、状態を持つ自律エージェントを動かせます",
    "SEARCH — File Searchがマルチモーダル検索に対応。gemini-embedding-2で画像をそのまま埋め込んで検索できます",
    "WEBHOOKS — Batch APIと長時間実行オペレーションのポーリングを置き換える、イベント駆動のWebhookが追加されました",
  ],
  en: [
    "PRO35 — July 17, the date reported as Gemini 3.5 Pro's target, has arrived with no official Google announcement or model card confirmed as of today",
    "UNCONFIRMED — The 2M-token context window and pricing both remain unconfirmed by Google; reports place the model in limited enterprise preview on Vertex AI",
    "FLASH35 — gemini-3.5-flash is the current GA release, and is now the model that gemini-flash-latest points to",
    "AGENTS — Managed Agents enter public preview in the Gemini API, running stateful, autonomous agents inside isolated Google-hosted Linux sandboxes",
    "SEARCH — File Search adds multimodal search, letting you natively embed and query images with gemini-embedding-2",
    "WEBHOOKS — Event-driven webhooks arrive to replace polling workflows for the Batch API and long-running operations",
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
