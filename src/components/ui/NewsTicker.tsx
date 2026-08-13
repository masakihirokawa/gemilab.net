"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — 画像生成モデルの停止まで残り3日です。8月17日に Imagen 4 系と Gemini 3 Image 系が止まります",
    "MIGRATE — 移行先は gemini-3.1-flash-image が推奨されています。停止後に generate_images() を呼ぶとエラーで止まるため、猶予はありません",
    "FLASH — Gemini 3.6 Flash が GA になりました。トークン効率とコード・エージェント計画が改善し、3.5 Flash より低い価格帯に置かれています",
    "LITE — Gemini 3.5 Flash-Lite も GA です。低遅延で費用を抑えたサブエージェント向けとして、大量処理の自動化に向いています",
    "PARAMS — サンプリングパラメータ temperature・top_p・top_k が非推奨になりました。既存の呼び出しは見直しておきたいところです",
    "ROBOTICS — gemini-robotics-er-1.6-preview の停止は8月31日です。移行の予定を立てておく時期になりました",
  ],
  en: [
    "SUNSET — Three days until the image models shut down: Imagen 4 and the Gemini 3 Image family stop on August 17",
    "MIGRATE — gemini-3.1-flash-image is the recommended target; calls to generate_images() fail hard after the cutoff, so there is no grace period",
    "FLASH — Gemini 3.6 Flash is generally available, with better token efficiency and stronger code and agentic planning at a lower price than 3.5 Flash",
    "LITE — Gemini 3.5 Flash-Lite also reached GA as a low-latency, cost-conscious subagent option aimed at high-volume automation",
    "PARAMS — The sampling parameters temperature, top_p, and top_k are now deprecated, so existing calls are worth revisiting",
    "ROBOTICS — gemini-robotics-er-1.6-preview shuts down on August 31, so this is the window to plan the migration",
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
