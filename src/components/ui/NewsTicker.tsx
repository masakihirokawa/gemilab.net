"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHAT — 8月26日から Google Chat が Ask Gemini のハブになります。検索・下書き・会話の追いつき・タスクとイベントの管理を Workspace の文脈のまま扱えます。残り2日です",
    "ANDROID — 9月4日から Android の Google アシスタントを Gemini が置き換えます。残り11日です。アシスタント前提の音声ショートカットは、いま挙動を確かめておきたいところです",
    "ROBOTICS — gemini-robotics-er-1.6-preview は8月31日で停止します。残り7日です。後継の ER 2 系は空間推論・多段のツール連携・複数ロボットの協調に対応します",
    "PRICE — Gemini 3.7 Flash の導入価格は100万トークンあたり入力0.75ドル・出力3.75ドルで、12月31日までです。2027年1月1日から入力1.50ドル・出力7.50ドルへ倍になります",
    "FREE — Google AI Studio には1日あたりのリクエスト上限つきの無料 API ティアがあり、クレジットカードなしで試せます。3.7 Flash の挙動を確かめるだけなら、まずここで足ります",
    "SCALE — Gemini アプリは8月11日に月間10億ユーザーへ到達しました。深い推論は 3.1 Pro、速度と単価が要る本番処理は Flash 系という住み分けが定着しつつあります",
  ],
  en: [
    "CHAT — From August 26, Google Chat becomes the Ask Gemini hub for searching, drafting, catching up on threads, and managing tasks and events with Workspace context intact. Two days out",
    "ANDROID — Gemini replaces Google Assistant on Android from September 4, eleven days from now. Now is the time to check any voice shortcuts you built on Assistant",
    "ROBOTICS — gemini-robotics-er-1.6-preview shuts down on August 31, seven days out. The ER 2 line succeeds it with spatial reasoning, multi-step tool orchestration, and multi-robot coordination",
    "PRICE — Gemini 3.7 Flash introductory pricing is $0.75 input and $3.75 output per million tokens through December 31. From January 1, 2027 it doubles to $1.50 and $7.50",
    "FREE — Google AI Studio still offers a free API tier with daily request limits and no credit card. If you only want to see how 3.7 Flash behaves, that is enough to start",
    "SCALE — The Gemini app crossed one billion monthly users on August 11. The split is settling in: 3.1 Pro for deep reasoning, the Flash line for production work where speed and unit cost decide",
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
