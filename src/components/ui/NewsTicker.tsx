"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "0.60.0 — Gemini CLI の今回の更新は、ほぼ全件が拡張と MCP の境界の締め直しです。環境変数を変える拡張には同意を求めるようになりました",
    "09/30 — gemini-omni-flash-preview の停止まで残り12日です。後継は gemini-omni-1.1-flash で、呼び出し箇所の棚卸しから始めます",
    "LICENSE — 手順どおりに設定していたのに、ある日から「有効なライセンスがありません」で起動できない、という報告が二つのスレッドで続いています",
    "NEW — Gem が相手の一覧に出ないとき、止まっている場所は三つあります。見る順番を決めておきます",
    "PDF — 大きすぎると言われた資料は、分ける前に何を削るかを決めるほうが早く済みます",
    "ADC — Antigravity の Enterprise では ADC 経由で Gemini 3.8 Flash を選べます。同じモデルでも入口によって扱いが変わります",
  ],
  en: [
    "0.60.0 — Nearly every line of this Gemini CLI release tightens a boundary around extensions and MCP. An extension that changes your environment now has to ask first",
    "09/30 — Twelve days until gemini-omni-flash-preview shuts down. The successor is gemini-omni-1.1-flash, and the work starts with an inventory of your call sites",
    "LICENSE — Two threads are still collecting reports of accounts set up exactly as documented being turned away one day with \"you do not have a valid license of this product\"",
    "NEW — When a Gem never appears in someone else's list, there are three places it can be stuck. Decide the order you check them in",
    "PDF — When a document is refused for being too large, deciding what to cut usually beats deciding where to split",
    "ADC — Antigravity's enterprise accounts can now pick Gemini 3.8 Flash through ADC. The same model is governed differently depending on the door you come in by",
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
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
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
