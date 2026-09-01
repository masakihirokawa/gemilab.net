"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "ROBOTICS — 8月31日に停止した ER 1.6 preview には後継があります。Gemini Robotics ER 2 が公開プレビュー中で、通常版とストリーミング版の2種類が提供されています",
    "VIDEO — ER 2 の成功・失敗判定は静止画ではなく生の映像フィード上で動きます。こぼれ・滑り・位置ずれのような、実行の途中で起きる失敗を捉えられる設計です",
    "DEADLINE — 次の期限は9月30日、gemini-omni-flash-preview の廃止です。移行先は8月27日に GA になった gemini-omni-1.1-flash で、残り4週間を切りました",
    "APIKEY — 残りの標準 API キーは、制限付きのものも含めて9月中に全面停止します。移行先は Google Cloud サービスアカウントに紐付く auth キー形式です",
    "PRICE — Gemini 3.7 Flash の導入価格 $0.75/$3.75 per 1M は12月31日までです。2027年1月1日から $1.50/$7.50 になるため、年を跨ぐ見積もりは2本立てが要ります",
    "AUDIO — Gemini 3.5 Transcribe は85言語以上の言語検出、話者ダイアライゼーション、単語単位タイムスタンプ、最大1,000語のカスタム語彙バイアスに対応しています",
  ],
  en: [
    "ROBOTICS — The ER 1.6 preview that shut down on August 31 does have a successor. Gemini Robotics ER 2 is in public preview, in both standard and streaming variants",
    "VIDEO — ER 2 judges success and failure from live video rather than still snapshots, which is what lets it catch spills, slips, and misalignments while a task is still running",
    "DEADLINE — Next up is September 30, when gemini-omni-flash-preview is retired. The target is gemini-omni-1.1-flash, GA since August 27, and there are now under four weeks left",
    "APIKEY — Every remaining standard API key, restricted ones included, stops working during September. The replacement is an auth key bound to a Google Cloud service account",
    "PRICE — Gemini 3.7 Flash keeps its introductory $0.75/$3.75 per 1M through December 31, then moves to $1.50/$7.50 on January 1, 2027. Any estimate crossing the year needs both figures",
    "AUDIO — Gemini 3.5 Transcribe handles language detection across 85+ languages, speaker diarization, word-level timestamps, and custom vocabulary biasing of up to 1,000 terms",
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
