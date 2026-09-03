"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.8 Flash が9月2日に一般提供へ移りました。API のモデル ID は gemini-3.8-flash です。3.7 Flash の一般提供が8月13日でしたから、わずか3週間での更新になります",
    "PRICE — 価格は $0.75 入力 / $3.75 出力 per MTok で 3.7 Flash から据え置きです。速度と価格はそのままに、推論とコーディングだけを上げた世代交代という位置づけになっています",
    "BENCH — コーディング系で差が出ています。Terminal-Bench 2.1 が 3.7 Flash の 81.6% に対して 90.8%。金融や法務のエージェント評価でも上回ったと説明されています",
    "REACH — 提供範囲が広いのが今回の特徴です。AI Studio と Gemini API に加え、Antigravity では既定モデルになり、Android Studio・Stitch・AI Mode・スプレッドシートでも使えます",
    "ASSISTANT — 本日9月4日から Android の Google アシスタント撤去が始まります。数週間かけて順次適用され、届いた端末では元に戻せません。通訳モードなど未実装の機能が残っている点は先に知っておきたいところです",
    "CODE — Gemini Advanced でコードリポジトリを端末から丸ごとアップロードできるようになりました。1会話につき1フォルダ、最大1,000ファイル・100MB という上限です",
  ],
  en: [
    "MODEL — Gemini 3.8 Flash reached general availability on September 2 under the API model ID gemini-3.8-flash. With 3.7 Flash having gone GA on August 13, that is a three-week turnaround",
    "PRICE — Pricing holds at $0.75 input and $3.75 output per MTok, unchanged from 3.7 Flash. Speed and cost stay put; reasoning and coding are what moved",
    "BENCH — The gap shows up in coding. Terminal-Bench 2.1 goes from 81.6% on 3.7 Flash to 90.8%, and Google reports gains on finance and legal agent benchmarks as well",
    "REACH — Distribution is unusually broad. Beyond AI Studio and the Gemini API, it is now the default model in Antigravity, and it ships in Android Studio, Stitch, AI Mode, and Sheets",
    "ASSISTANT — Google begins removing Assistant from Android today, September 4. The rollout takes a few weeks and cannot be undone once it reaches a device; Interpreter mode is among the pieces Gemini still lacks",
    "CODE — Gemini Advanced can now take a whole code repository uploaded from your device, capped at one folder per conversation with up to 1,000 files or 100MB",
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
