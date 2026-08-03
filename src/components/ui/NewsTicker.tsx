"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "REGION — Gemini Enterprise app の global リージョンから Gemini 3.5 Flash が本日除去されます。リージョン指定を明示していない構成ほど、選択肢が黙って変わる形で表面化します",
    "IMAGE — Imagen 4 系と Gemini 3 Image 系の画像生成モデルが8月17日に停止します。移行の猶予は残り2週間です",
    "ROBOTICS — gemini-robotics-er-1.6-preview は8月31日に停止します。プレビュー系は代替経路を用意しておく前提で扱うのが現実的です",
    "SAMPLING — Gemini 3.6 Flash では temperature・top-K・top-P のカスタム値が無視され、frequency penalty と presence penalty は API エラーになります",
    "FLASH — Gemini 3.6 Flash と 3.5 Flash-Lite が一般提供に移りました。3.6 Flash はトークン効率と計画能力が改善し、3.5 Flash より低価格です",
    "AGENTS — Gemini API の Managed Agents に 3.6 Flash と hooks が加わり、エージェントの実行途中に処理を挟む設計が公式にサポートされました",
  ],
  en: [
    "REGION — Gemini 3.5 Flash is being removed from the global region in the Gemini Enterprise app today. Setups that never pinned a region will see the option quietly change",
    "IMAGE — Imagen 4 and Gemini 3 Image generation models shut down on August 17. That leaves about two weeks to migrate",
    "ROBOTICS — The gemini-robotics-er-1.6-preview model shuts down on August 31. Preview models are best treated as needing a fallback path from the start",
    "SAMPLING — On Gemini 3.6 Flash, custom temperature, top-K, and top-P values are ignored, while frequency and presence penalties now raise an API error",
    "FLASH — Gemini 3.6 Flash and 3.5 Flash-Lite reached general availability. 3.6 Flash improves token efficiency and agentic planning at a lower price than 3.5 Flash",
    "AGENTS — Managed Agents in the Gemini API gained 3.6 Flash and hooks, giving official support for injecting logic partway through an agent run",
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
