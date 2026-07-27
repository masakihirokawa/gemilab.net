"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PRICE — Gemini 3.6 Flash は出力トークンを約17%削減し、価格も 100万トークンあたり入力$1.50・出力$7.50 に下がりました（3.5 Flash は出力$9）",
    "LITE — Gemini 3.5 Flash-Lite は 100万入力トークンあたり$0.3 で、高スループットの処理に振った選択肢です",
    "CYBER — Gemini 3.5 Flash Cyber は Google の CodeMender エージェントの中で、脆弱性の検出とパッチ作成を担います",
    "GEMINI4 — Google は「これまでで最も野心的な事前学習を Gemini 4 に向けて開始した」と述べています。3.5 Pro の遅延と合わせて動向が注目されます",
    "SUNSET — Imagen 4 系と Gemini 3 Image 系の画像生成モデルは 2026年8月17日に停止します。新しい安定版・プレビュー版への移行が必要です",
    "STUDIO — Gemini Omni Flash が Google AI Studio で初めて使えるようになりました。動画生成と会話型編集を低コストで試せます",
  ],
  en: [
    "PRICE — Gemini 3.6 Flash consumes about 17% fewer output tokens and costs less at $1.50 per 1M input and $7.50 per 1M output, against $9 output for 3.5 Flash",
    "LITE — Gemini 3.5 Flash-Lite targets high-throughput work at $0.3 per million input tokens",
    "CYBER — Gemini 3.5 Flash Cyber powers vulnerability detection and patching inside Google's CodeMender agent",
    "GEMINI4 — Google says it has already begun its most ambitious pre-training run yet, for Gemini 4, even as 3.5 Pro slips",
    "SUNSET — The Imagen 4 and Gemini 3 Image generation models shut down on August 17, 2026, so integrations need moving to newer stable or preview endpoints",
    "STUDIO — Gemini Omni Flash is available in Google AI Studio for the first time, putting cost-efficient video generation and conversational editing within reach",
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
