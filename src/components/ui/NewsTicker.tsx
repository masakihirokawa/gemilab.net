"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "3.8LIVE — Gemini 3.8 Live と 3.8 Live Extended Thinking が一般提供になりました。低遅延の音声エージェントが既定で、非同期の function calling も既定で使えます",
    "LYRIA3.5 — Lyria 3.5 が一般提供になりました。テキストと画像を入力にして、44.1kHz ステレオのフルレングス楽曲を生成します",
    "09/30 — gemini-omni-flash-preview の停止まで残り10日です。後継の gemini-omni-1.1-flash では解像度の指定と動画の延長が使えるようになっています",
    "402 — プリペイド残高が尽きたときの応答が 429 から 402 に変わりました。本文の status は従来のままなので、文字列で分岐している実装は取りこぼします",
    "NEW — 「大きすぎます」と言われた PDF を分ける前に、確かめておきたい3つの上限です",
    "2.5 — 公式の廃止表から「10月16日」という日付が消えました。2.5 の3モデルはいずれも停止日が未公表のままです",
  ],
  en: [
    "3.8LIVE — Gemini 3.8 Live and 3.8 Live Extended Thinking are generally available. Low-latency voice agents are the default, and asynchronous function calling now comes on by default too",
    "LYRIA3.5 — Lyria 3.5 is generally available: full-length music from text and image input, rendered at 44.1kHz in stereo",
    "09/30 — Ten days until gemini-omni-flash-preview shuts down. Its successor, gemini-omni-1.1-flash, adds resolution selection and a task for extending an existing video",
    "402 — Depleted prepay credits now return HTTP 402 instead of 429. The status field in the body is unchanged, so anything branching on that string will miss it",
    "NEW — Three limits worth checking before you split a PDF that came back as too large",
    "2.5 — The October 16 date has quietly left the official deprecation table. All three Gemini 2.5 models now show no announced shutdown date",
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
