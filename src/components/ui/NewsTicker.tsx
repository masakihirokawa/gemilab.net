"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 FlashがGA（正式版）となり、gemini-flash-latestの実体になりました",
    "AGENT — Managed AgentsがGemini APIで公開プレビュー入り。分離されたGoogleホストのLinuxサンドボックスで自律エージェントを動かせます",
    "SEARCH — File Searchがマルチモーダル検索に対応し、gemini-embedding-2で画像も直接埋め込み・検索できます",
    "WEBHOOK — Batch APIや長時間処理向けにイベント駆動のWebhookが追加され、ポーリングを置き換えられます",
    "EMBED — gemini-embedding-2がGAとなり、埋め込みの本番利用が安定しました",
    "DEPRECATION — 一部の画像生成モデルが8月17日に提供終了となるため、移行の準備が必要です",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash reaches GA and now powers gemini-flash-latest",
    "AGENT — Managed Agents enter public preview in the Gemini API, running in isolated Google-hosted Linux sandboxes",
    "SEARCH — File Search adds multimodal search, embedding and searching images natively via gemini-embedding-2",
    "WEBHOOK — Event-driven webhooks arrive for the Batch API and long-running operations, replacing polling",
    "EMBED — gemini-embedding-2 is now generally available for production embeddings",
    "DEPRECATION — Several image generation models shut down on August 17, so plan migrations now",
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
