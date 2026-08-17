"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — gemini-robotics-er-1.6-preview は8月31日に停止します。残り13日となり、移行の実作業に取りかかる時期です",
    "MIGRATION — 移行先は7月30日にパブリックプレビューとなった gemini-robotics-er-2-preview と gemini-robotics-er-2-streaming-preview です。テキスト・画像・動画・音声を入力できます",
    "PRICING — 8月13日に一般提供となった Gemini 3.7 Flash の導入価格は2026年12月31日までです。年をまたぐワークロードは価格改定を織り込んだ試算が要ります",
    "DEPRECATION — サンプリングパラメータの temperature・top_p・top_k が非推奨になりました。明示指定しているコードは、指定を外した場合の出力差分を今のうちに測っておくと安全です",
    "VIDEO — 動画の生成と編集に対応する Gemini Omni Flash が Google AI Studio と Gemini API から利用できます",
    "LOGS — Interactions API が開発者ログに対応し、対象となる API 呼び出しのログを AI Studio のダッシュボードで確認できるようになりました",
  ],
  en: [
    "SUNSET — gemini-robotics-er-1.6-preview shuts down on August 31. Thirteen days out, which makes this the week to actually start the migration",
    "MIGRATION — The replacements are gemini-robotics-er-2-preview and gemini-robotics-er-2-streaming-preview, both in public preview since July 30 and both accepting text, image, video, and audio input",
    "PRICING — Gemini 3.7 Flash went GA on August 13 at an introductory price that runs through December 31, 2026, so anything spanning the new year needs a two-stage cost estimate",
    "DEPRECATION — The temperature, top_p, and top_k sampling parameters are now deprecated. If your code sets them explicitly, measure the output difference without them while there is still time",
    "VIDEO — Gemini Omni Flash, a model for generating and editing video, is available in Google AI Studio and through the Gemini API",
    "LOGS — The Interactions API now supports developer logs, viewable for supported calls from the AI Studio dashboard",
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
