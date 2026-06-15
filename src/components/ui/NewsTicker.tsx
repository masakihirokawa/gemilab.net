"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini CLI・Code Assist IDE拡張が6/18に無料個人・AI Pro/Ultra向けでリクエスト停止（残り2日）。Antigravity CLIへの移行が案内されています",
    "GA — Gemini 3.5 FlashがGAに。6/8以降Gemini Enterpriseアプリでは既定で有効化され、オフにできなくなりました",
    "AGENTS — Managed Agentsがパブリックプレビュー。Googleホストの隔離Linuxサンドボックスで自律エージェントを構築・デプロイできます",
    "IMAGE — gemini-3.1-flash-image-preview・gemini-3-pro-image-previewが6/25に停止。OGP画像生成の依存先は後継への切替が必要です",
    "PRO — Gemini 3.5 Proは5/19のI/Oで予告も6/15時点で未公開。6/23・6/30が有力な公開時期と見られています",
    "API — v1beta Interactions APIに破壊的変更。mid-flightステアリングや非同期ツール呼び出しに向けてAPI形状が再構成されています",
  ],
  en: [
    "CLI — Gemini CLI and the Code Assist IDE extensions stop serving free, AI Pro, and Ultra users on Jun 18 (two days out), with users directed to the Antigravity CLI",
    "GA — Gemini 3.5 Flash is now generally available and, since Jun 8, enabled by default and non-removable in the Gemini Enterprise app",
    "AGENTS — Managed Agents entered public preview, letting you build and deploy stateful autonomous agents inside Google-hosted, isolated Linux sandboxes",
    "IMAGE — gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down on Jun 25; OGP image pipelines should move to successors",
    "PRO — Gemini 3.5 Pro, previewed at I/O on May 19, had not shipped as of Jun 15, with Jun 23 and Jun 30 seen as the likeliest release windows",
    "API — The v1beta Interactions API has breaking changes, reshaping the API to support mid-flight steering and asynchronous tool calls",
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
