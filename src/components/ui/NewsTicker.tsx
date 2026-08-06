"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "EXTENSIONS — Vertex AI Extensions が非推奨となり、2026年11月26日以降に停止します。移行先は Agent Platform です",
    "PLATFORM — Vertex AI は Gemini Enterprise Agent Platform の一部になりました。機能は名前を変えて移っているため、旧名でのドキュメント検索は当たりにくくなっています",
    "SUNSET — 8月は停止日が4つ並びます。17日に Imagen 系、20日に Grok 4.1 ファミリー、23日に Claude 3 Haiku、31日に gemini-robotics-er-1.6-preview です",
    "IMAGE — Imagen 4.0 の GA エンドポイントは8月17日に停止し、移行先は gemini-3.1-flash-image です。同じプロンプトでの出力差を先に測っておく必要があります",
    "FLASH — Gemini 3.6 Flash は7月21日に GA となり、入力は $1.50/1M、出力は $9.00/1M から $7.50/1M へ下がっています",
    "REGION — Gemini Enterprise が日本（asia-northeast1）と英国（europe-west2）で GA になりました。allowlist ベースでの提供です",
  ],
  en: [
    "EXTENSIONS — Vertex AI Extensions is deprecated and shuts down after November 26, 2026. Agent Platform is the migration target",
    "PLATFORM — Vertex AI is now part of the Gemini Enterprise Agent Platform, and features have moved under new names — worth knowing when old doc searches come up empty",
    "SUNSET — Four shutdown dates land in August: Imagen models on the 17th, the Grok 4.1 family on the 20th, Claude 3 Haiku on the 23rd, and gemini-robotics-er-1.6-preview on the 31st",
    "IMAGE — Imagen 4.0 GA endpoints shut down August 17, with gemini-3.1-flash-image as the successor. Measure how the same prompts render before you switch",
    "FLASH — Gemini 3.6 Flash reached GA on July 21 at $1.50/1M input, with output pricing down from $9.00/1M to $7.50/1M",
    "REGION — Gemini Enterprise is generally available in Japan (asia-northeast1) and the UK (europe-west2), on an allowlist basis",
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
