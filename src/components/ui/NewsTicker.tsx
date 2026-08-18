"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — gemini-robotics-er-1.6-preview は8月31日に停止します。残り12日となり、移行を後ろ倒しできる余地はほぼなくなりました",
    "MIGRATION — 移行先は7月30日にパブリックプレビューとなった Gemini Robotics ER 2 です。空間推論・エージェント的なコード実行・多段のツール連携に対応します",
    "PRICING — 8月13日に一般提供となった Gemini 3.7 Flash の導入価格は100万トークンあたり入力0.75ドル・出力3.75ドルです。2026年12月31日までで、従来の Flash 系のおよそ半額にあたります",
    "PRICING — 2027年1月1日から標準価格の入力1.50ドル・出力7.50ドルへ倍額になります。年をまたぐワークロードは、いま二段構えで試算しておくと年明けに慌てずに済みます",
    "AVAILABILITY — Gemini 3.7 Flash は Gemini API と Google AI Studio に加え、Android Studio、Google Antigravity、Gemini Enterprise Agent Platform でも使えます",
    "DEPRECATION — サンプリングパラメータの temperature・top_p・top_k は非推奨のままです。明示指定しているコードは、指定を外した場合の出力差分を今のうちに測っておくと安全です",
  ],
  en: [
    "SUNSET — gemini-robotics-er-1.6-preview shuts down on August 31. Twelve days out, there is not much room left to push the migration back",
    "MIGRATION — The replacement is Gemini Robotics ER 2, in public preview since July 30, with spatial reasoning, agentic code execution, and multi-step tool orchestration",
    "PRICING — Gemini 3.7 Flash went GA on August 13 at $0.75 per million input tokens and $3.75 output, roughly half what Flash models have cost, holding through December 31, 2026",
    "PRICING — List prices double to $1.50 and $7.50 on January 1, 2027. Anything running across the new year deserves a two-stage estimate now rather than a surprise in January",
    "AVAILABILITY — Beyond the Gemini API and Google AI Studio, 3.7 Flash is live in Android Studio, Google Antigravity, and the Gemini Enterprise Agent Platform",
    "DEPRECATION — The temperature, top_p, and top_k sampling parameters remain deprecated. If your code sets them explicitly, measure the output difference without them while there is still time",
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
