"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PENTAGON — Google が米国防総省と Gemini AI の機密環境への展開を協議中と報道（4/16）",
    "GEMMA4ANDROID — Gemma 4 が Android AICore デベロッパープレビューに登場、Gemini Nano 4 の基盤に（4月）",
    "AIPRO — Google AI Pro / Ultra サブスクリプション開始、Gemini 3.1 Pro が Pro・Ultra 専用に（4月）",
    "PERSONAL — Gemini Personal Intelligence が米国全土に展開拡大、Gmail・写真・YouTube を統合（3月〜4月）",
    "ADSAFETY — Gemini AI が有害広告検出に本格活用、誤審査停止を 80% 削減（4月）",
    "750M — Gemini が月間アクティブユーザー 7.5 億人を突破、3月時点（3月）",
  ],
  en: [
    "PENTAGON — Google in talks with U.S. DoD to deploy Gemini AI in classified environments (4/16)",
    "GEMMA4ANDROID — Gemma 4 lands in Android AICore Developer Preview as foundation for Gemini Nano 4 (Apr)",
    "AIPRO — Google AI Pro / Ultra subscriptions launched; Gemini 3.1 Pro exclusive to subscribers (Apr)",
    "PERSONAL — Gemini Personal Intelligence expands US-wide, integrating Gmail, Photos & YouTube (Mar-Apr)",
    "ADSAFETY — Gemini AI deployed for harmful ad detection, cutting incorrect suspensions by 80% (Apr)",
    "750M — Gemini hits 750M monthly active users as of March 2026 (Mar)",
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
