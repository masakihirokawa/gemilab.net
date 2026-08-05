"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "TOKENS — Gemini 3.6 Flash は 3.5 Flash より約17%少ないトークンで同じ仕事をこなし、不要なコード編集と実行ループも減っています",
    "CUTOFF — 知識のカットオフが2025年1月から2026年3月へ前進しました。直近1年の事情を前提にした質問の当たり方が変わります",
    "BREAKING — 3.6 Flash では temperature・top-K・top-P のカスタム値が無視され、frequency penalty と presence penalty の指定は API エラーになります",
    "LITE — Gemini 3.5 Flash-Lite が GA になりました。低レイテンシで単価の低い選択肢として、大量の自動化処理に向きます",
    "ROBOTICS — gemini-robotics-er-1.6-preview は8月31日に停止します。preview 版を組み込んでいる箇所は移行先の確認が必要です",
    "DOCS — Google Docs の Gemini 執筆・書式ツールが8月1日から Scheduled Release ドメインへ段階展開されています。Google Vids では Gemini Omni が直接使えます",
  ],
  en: [
    "TOKENS — Gemini 3.6 Flash does the same work on roughly 17% fewer tokens than 3.5 Flash, with fewer unwanted code edits and shorter execution loops",
    "CUTOFF — The knowledge cutoff moves forward from January 2025 to March 2026, which changes how questions about the last year land",
    "BREAKING — On 3.6 Flash, custom temperature, top-K, and top-P values are ignored, and frequency or presence penalty values now return an API error",
    "LITE — Gemini 3.5 Flash-Lite reaches general availability as the low-latency, low-cost option aimed at high-volume automation",
    "ROBOTICS — The gemini-robotics-er-1.6-preview model shuts down on August 31, so anything still pinned to the preview needs a migration target",
    "DOCS — Gemini writing and formatting tools began a gradual rollout to Scheduled Release domains in Docs on August 1, and Gemini Omni is now available inside Google Vids",
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
