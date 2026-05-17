"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IO — Google I/O 2026 は 5/19〜20 開催、Gemini 3.5 / Gemini Spark など新モデル発表が濃厚、GPT-5.5 対抗アップデートに期待（5/18）",
    "ANDROID — Gemini Intelligence for Android: アプリを横断して複雑タスクを自動化、Gmail・カレンダー・ショッピングに対応（5/13）",
    "GBOARD — Gboard に Rambler 統合、口語・フィラーワード・多言語混在発話を自然な文章に自動変換（Android Show 2026）",
    "PRICE — Google が「AI Ultra Lite」プランを検討中、Gemini をより低価格帯で提供へ（9to5Google 5/5）",
    "ANDROID17 — Android 17 + Android XR グラスも I/O で発表予定、Gemini を中心とした新 UI パラダイムへ（AndroidCentral）",
    "RACE — Google が Apple の iOS 27 AI 刷新に対抗し Android への Gemini 統合を加速（CNBC 5/12）",
  ],
  en: [
    "IO — Google I/O 2026 runs May 19–20; Gemini 3.5 / Gemini Spark new models expected as GPT-5.5 rivals (May 18)",
    "ANDROID — Gemini Intelligence for Android: cross-app task automation across Gmail, Calendar & Shopping (May 13)",
    "GBOARD — Gboard gets Rambler integration: converts casual multilingual speech into polished text automatically (Android Show 2026)",
    "PRICE — Google reportedly preparing 'AI Ultra Lite' plan to offer Gemini at lower price tiers (9to5Google, May 5)",
    "ANDROID17 — Android 17 + Android XR glasses also expected at I/O, marking a new Gemini-centric UI paradigm (AndroidCentral)",
    "RACE — Google accelerates Gemini integration into Android core ahead of Apple's iOS 27 AI overhaul (CNBC, May 12)",
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
