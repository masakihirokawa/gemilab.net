"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 Flashが一般提供。エージェント・コーディング向けの最有力モデルとして公開されました",
    "AGENT — Managed AgentsがGemini APIで公開プレビュー。隔離されたLinuxサンドボックスで自律エージェントを実行できます",
    "WEBHOOK — Event-driven WebhooksがBatch APIと長時間処理に対応し、ポーリングが不要になりました",
    "SECURITY — 6/19以降、未制限APIキーからのリクエストが遮断されます。キーの制限設定を見直しましょう",
    "DEPRECATED — 画像プレビュー2モデルが6/25で停止します。preview依存のフローは早めに移行を",
    "CODEASSIST — 6/18より個人向けCode Assist拡張とCLIが、AI Pro/Ultra層への提供を停止しました",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash is generally available as Google's top pick for agentic and coding tasks",
    "AGENT — Managed Agents enter public preview in the Gemini API, running in isolated Linux sandboxes",
    "WEBHOOK — Event-driven webhooks now cover the Batch API and long-running ops, removing polling",
    "SECURITY — From June 19, requests from unrestricted API keys are blocked — review your key limits",
    "DEPRECATED — Two image-preview models shut down June 25 — migrate any preview-dependent flows",
    "CODEASSIST — Since June 18, individual Code Assist extensions and CLI stopped serving Pro/Ultra tiers",
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
