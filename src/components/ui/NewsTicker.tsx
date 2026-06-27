"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Event-driven WebhooksでBatch APIや長時間処理の完了を通知受信。ポーリングが不要になります",
    "SEARCH — File Searchがgemini-embedding-2に対応し、画像もネイティブに埋め込み・検索できます",
    "SECURITY — 6/19以降、未制限APIキーからのリクエストが遮断されました。キー制限の点検を",
    "MODEL — Gemini 3.5 Flashが一般提供。gemini-flash-latestの本体になりました",
    "AGENT — Managed AgentsがGemini APIで公開プレビュー。隔離サンドボックスで自律エージェントを実行できます",
    "DEPRECATED — 画像プレビュー2モデルが6/25で停止。preview依存の処理は確認しておきましょう",
  ],
  en: [
    "API — Event-driven webhooks deliver Batch API and long-running completions, removing the need to poll",
    "SEARCH — File Search now supports gemini-embedding-2, embedding and searching images natively",
    "SECURITY — Since June 19, requests from unrestricted API keys are blocked — review your key limits",
    "MODEL — Gemini 3.5 Flash is generally available and now powers gemini-flash-latest",
    "AGENT — Managed Agents hit public preview in the Gemini API, running in isolated sandboxes",
    "DEPRECATED — Two image-preview models shut down June 25 — check any preview-dependent flows",
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
