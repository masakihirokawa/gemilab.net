"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GA — Gemini 3.6 Flash が7月21日に一般提供へ移りました。入力 $1.50 / 出力 $7.50 per Mtok で、3.5 Flash の出力 $9.00 から下がっています",
    "TOKENS — 3.6 Flash は Artificial Analysis Index で出力トークンが 3.5 Flash 比17%減。DeepSWE のようなエージェント系では平均 276K から 97K トークンまで縮んだと報告されています",
    "LITE — Gemini 3.5 Flash-Lite も一般提供になりました。$0.30 / $2.50 per Mtok で、低レイテンシと高頻度の自動化に向いた価格帯です",
    "OMNI — gemini-omni-flash-preview が公開プレビューに入りました。720p で3〜10秒の動画を生成し、そのまま対話的に編集できます",
    "SUNSET — 旧来の画像生成モデルは8月17日、Gemini Enterprise Agent Platform の Grok 4.1 系は8月20日、gemini-robotics-er-1.6-preview は8月31日に停止します",
    "COMPUTER — Gemini 3.5 Flash の Computer Use が公開プレビューになりました。ブラウザ・モバイル・デスクトップに対応し、プロンプトインジェクション検出と設定可能な安全ポリシーを備えます",
  ],
  en: [
    "GA — Gemini 3.6 Flash reached general availability on July 21. Pricing is $1.50 input and $7.50 output per million tokens, down from $9.00 output on 3.5 Flash",
    "TOKENS — On the Artificial Analysis Index, 3.6 Flash uses 17% fewer output tokens than 3.5 Flash. On agentic benchmarks like DeepSWE the average reportedly fell from 276K to 97K tokens per task",
    "LITE — Gemini 3.5 Flash-Lite is also generally available at $0.30 / $2.50 per million tokens, aimed at low-latency, high-volume automation",
    "OMNI — gemini-omni-flash-preview entered public preview. It generates 3 to 10 second videos at 720p and lets you refine them conversationally",
    "SUNSET — Older image generation models shut down August 17, the Grok 4.1 family on the Gemini Enterprise Agent Platform on August 20, and gemini-robotics-er-1.6-preview on August 31",
    "COMPUTER — Computer Use is in public preview for Gemini 3.5 Flash, covering browser, mobile, and desktop environments with configurable safety policies and prompt injection detection",
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
