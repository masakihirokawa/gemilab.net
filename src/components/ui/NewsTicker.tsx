"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMMA4 — Google が Gemma 4 をリリース。E2B〜31B の4サイズ・256K コンテキスト・140 言語対応、Apache 2.0 で商用利用も可（4/2）",
    "RANK3 — Gemma 4 の 31B Dense モデルが Arena AI テキストリーダーボードで世界第3位のオープンモデルに認定（4/3）",
    "AICORE — Gemma 4 が Android AICore 開発者プレビューに搭載。将来の Gemini Nano 4 搭載デバイスと互換性を確保した設計（4/4）",
    "FLASHLITE — Gemini 3.1 Flash-Lite が GA。速度 2.5 倍・出力 45% 向上で入力 $0.25/1M トークンの最安値クラスを実現（4/4）",
    "REFERRAL — Google AI が Perplexity を抜いて Web 参照ソース世界第 2 位に浮上、8.65% シェアで前年比 4 倍成長（4/3）",
    "FLASHLIVE — Gemini 3.1 Flash Live が低遅延リアルタイム音声対話に対応。ハンズフリーでの自然な長文会話が可能に（4/3）",
  ],
  en: [
    "GEMMA4 — Google releases Gemma 4 open models: E2B to 31B, 256K context, 140+ languages, and Apache 2.0 licensing for commercial use (4/2)",
    "RANK3 — Gemma 4's 31B Dense model earns the #3 spot among all open models worldwide on the Arena AI text leaderboard (4/3)",
    "AICORE — Gemma 4 lands in Android AICore Developer Preview; code written today will automatically work on future Gemini Nano 4 devices (4/4)",
    "FLASHLITE — Gemini 3.1 Flash-Lite hits GA: 2.5x faster responses, 45% higher output speed, at just $0.25/1M input tokens (4/4)",
    "REFERRAL — Google AI overtakes Perplexity as the world's No. 2 web referral source at 8.65% share, growing 4x year-over-year (4/3)",
    "FLASHLIVE — Gemini 3.1 Flash Live enables real-time voice conversations with low latency and long-context support for seamless hands-free use (4/3)",
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
