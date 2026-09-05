"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DEPRECATION — gemini-omni-flash-preview が9月30日で廃止されます。移行先は8月27日に一般提供へ移った gemini-omni-1.1-flash です。今月中に手を打つ必要があります",
    "MIGRATION — 差し替えはモデル文字列1行で済むことが多いのですが、既定の解像度が 720p に変わっています。プレビュー時代の前提のまま移すと、出力も課金も変わってしまいます",
    "OMNI — 1.1 で埋まった穴は4つです。シーン延長が40秒まで、先頭と末尾のフレーム制御、安価な 360p ドラフト、そして 4K アップスケールが加わりました",
    "COPILOT — 9月3日、Gemini 3.8 Flash が GitHub Copilot でも選べるようになりました。前日の Gemini API・AI Studio・Antigravity に続く配信面の拡大です",
    "PRICE — 3.8 Flash の $0.75 入力 / $3.75 出力 per MTok は導入価格です。12月31日で失効し、2027年1月1日からは $1.50 / $7.50 per MTok になります",
    "SPEECH — Gemini 3.5 Transcribe は音声認識に特化した2モデルです。85言語以上の発話単位の言語検出、話者分離、単語単位のタイムスタンプ、カスタム語彙バイアスに対応します",
  ],
  en: [
    "DEPRECATION — The gemini-omni-flash-preview endpoint retires on September 30. Its replacement, gemini-omni-1.1-flash, reached general availability on August 27, so this one needs attention this month",
    "MIGRATION — The swap is often a single model string, but the default resolution is now 720p. Carry over your preview-era assumptions unchanged and both your output and your bill will shift",
    "OMNI — Version 1.1 closed four gaps: scene extension out to 40 seconds, first-and-last-frame control, a cheap 360p draft mode, and 4K upscaling",
    "COPILOT — Gemini 3.8 Flash became selectable in GitHub Copilot on September 3, widening its reach a day after arriving in the Gemini API, AI Studio, and Antigravity",
    "PRICE — The $0.75 input and $3.75 output per MTok on 3.8 Flash is introductory. It expires December 31, and from January 1, 2027 the rate becomes $1.50 and $7.50 per MTok",
    "SPEECH — Gemini 3.5 Transcribe is a pair of dedicated speech-to-text models, with utterance-level language detection across 85+ languages, speaker diarization, word-level timestamps, and custom vocabulary biasing",
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
