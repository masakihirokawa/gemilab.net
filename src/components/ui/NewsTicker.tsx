"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SPARK — 8月13日から Gemini Spark のエンジンが Gemini 3.7 Flash になりました。エージェント用途に推論の深さより往復の速さを選んだ構成で、自作エージェントのモデル選定の参考になります",
    "AGENT — Spark は権限を与えたうえで複数ステップの作業を自律的に進めます。予約の取得やフォーム入力など、単発の命令に応答する従来型の音声アシスタントとは設計思想が違います",
    "ASSISTANT — 9月4日の Google アシスタント置き換えまで残り14日です。移行が完了した端末では旧アシスタントへ戻せません。Google ビルトイン搭載車は引き続きアシスタントが動きます",
    "EDUCATION — 8月10日から Gemini in Classroom が、管理者の許可を受けた K-12 および高等教育の学生であれば年齢を問わず利用できるようになりました",
    "SCALE — Gemini アプリの画像生成は1日あたり1億5,000万枚に達しています。生成量そのものより、これが常時稼働の負荷としてどう捌かれているかが設計の参考になります",
    "MODELS — 深い推論は Gemini 3.1 Pro、速度とコストを優先する本番処理は Flash 系という棲み分けが定着しました。同一処理を両者で流して実測すると差が見えます",
  ],
  en: [
    "SPARK — Gemini 3.7 Flash became the engine behind Gemini Spark on August 13. Choosing round-trip speed over reasoning depth for agent work is a useful signal when picking your own model",
    "AGENT — Spark carries out multi-step tasks autonomously once granted permission, handling things like booking appointments and filling forms rather than answering one command at a time",
    "ASSISTANT — Fourteen days until Gemini replaces Google Assistant on September 4. Once a device migrates there is no going back, though cars with Google Built-in keep Assistant for now",
    "EDUCATION — Since August 10, Gemini in Classroom is available to K-12 and higher-education students of any age, provided their administrator has granted access",
    "SCALE — The Gemini app now generates 150 million images a day. The interesting part is less the volume than how that sustained load is absorbed in practice",
    "MODELS — The split has settled: Gemini 3.1 Pro for deep reasoning, the Flash line for production work where speed and cost matter. Running the same job through both makes the gap concrete",
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
