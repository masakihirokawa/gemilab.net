"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.8 Flash が9月2日に一般提供へ移りました。6週間で3本目の Flash になります。価格は 3.7 Flash と同じ $0.75 入力 / $3.75 出力 per MTok に据え置きです",
    "PRICE — この導入価格は12月31日までです。2027年1月1日からは $1.50 / $7.50 per MTok に変わりますので、来期の見積もりを立てる方は先に織り込んでおきたいところです",
    "BENCH — HLE-Verified で 54.9%、DeepSWE v1.1 では自分より大きなモデルを上回ったと説明されています。金融の Vals Finance Agent V2、法務の Harvey Legal Agent Benchmark でも改善しています",
    "EFFORT — 3.8 Flash は難しい課題ほど手数をかけます。推論の段階を増やしツールを繰り返し呼ぶため、トークンが伸びることがあります。効率を優先する用途には 3.7 Flash が引き続き使えます",
    "CYBER — 同時に Gemini 3.8 Flash Cyber が公開されました。脆弱性の発見と修正に振った変種で、Fairwind Program を通じて信頼できる防御側にのみ提供されます",
    "AUDIO — 9月3日には Lyria 3.5 が公開プレビューに入りました。テキストと画像を入力に、44.1kHz ステレオでフルレングスの楽曲を生成できます",
  ],
  en: [
    "MODEL — Gemini 3.8 Flash reached general availability on September 2, the third Flash release in six weeks. Pricing holds at 3.7 Flash levels: $0.75 input and $3.75 output per MTok",
    "PRICE — That introductory rate runs through December 31. From January 1, 2027 it becomes $1.50 and $7.50 per MTok, which is worth folding into next year's estimates now",
    "BENCH — Google reports 54.9% on HLE-Verified and, on DeepSWE v1.1, results ahead of most larger frontier models, along with gains on the Vals Finance Agent V2 and Harvey Legal Agent benchmarks",
    "EFFORT — 3.8 Flash works harder on hard problems, taking extra reasoning steps and calling tools iteratively, so token counts can rise. Where efficiency comes first, 3.7 Flash remains fully supported",
    "CYBER — Gemini 3.8 Flash Cyber launched alongside it, tuned for vulnerability discovery and automated patching, and offered only to trusted defenders through the Fairwind Program",
    "AUDIO — Lyria 3.5 entered public preview on September 3. It takes text and images as input and generates full-length tracks in 44.1 kHz stereo",
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
