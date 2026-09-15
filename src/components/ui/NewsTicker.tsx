"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "3.8LIVE — gemini-3.8-live と extended-thinking 版が GA になりました。低遅延の音声エージェント向けで、非同期の function calling が既定です",
    "2.5FLASH — 二次情報で広まっている「2.5 系は10月16日に停止」は、公式の廃止予定表に記載がありません。3モデルとも停止日は未告知のままです",
    "09/30 — gemini-omni-flash-preview の停止まで残り14日です。GA 版は延長やフレーム補間、解像度指定が増えているため、モデル ID の置換だけでは済みません",
    "BATCH — バッチジョブは成功で終わるのに、中のレスポンスだけが権限エラーで返る報告が出ています。同期呼び出しと同じファイルでも起きるところが厄介です",
    "NEW — 3.8 Flash と 3.7 Flash のどちらに寄せるか。手元の20問を毎回通して決めている方法を書きました",
    "SHEETS — スプレッドシートの AI 関数が反応しないとき、24時間の回数上限なのか、ファイルの置き場所と開き方なのかを先に切り分けます",
  ],
  en: [
    "3.8LIVE — gemini-3.8-live and its extended-thinking variant are now generally available. Both target low-latency voice agents, with async function calling on by default",
    "2.5FLASH — The widely repeated claim that the 2.5 models shut down on October 16 does not appear in the official deprecation table. All three still show no announced date",
    "09/30 — Fourteen days left before gemini-omni-flash-preview shuts down. The GA model adds extension, frame interpolation and resolution options, so this is more than an ID swap",
    "BATCH — Batch jobs are completing successfully while the responses inside come back as permission errors. The same file works fine through a synchronous call",
    "NEW — Choosing between 3.8 Flash and 3.7 Flash by running the same twenty questions every time, and what that set is made of",
    "SHEETS — When an AI function in Sheets stops responding, separate the daily usage cap from where the file lives and how it was opened before changing anything else",
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
