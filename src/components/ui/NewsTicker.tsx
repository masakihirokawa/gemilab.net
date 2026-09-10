"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "OMNI — gemini-omni-flash-preview は9月30日で廃止されます。残り19日です。移行を扱う記事を書くなら、実質これが最後の機会になります",
    "MIGRATE — 移行先は8月27日に GA となった gemini-omni-1.1-flash。extend で末尾を延長でき、2枚の画像を渡せばそのあいだを補間します",
    "RESOLUTION — video_config の resolution は 360p / 720p / 1080p / 4k から選べます。1080p と 4K はアップスケーリングによる生成です",
    "SAMPLING — temperature と top_p、top_k は非推奨として整理されました。揺れを抑えたいなら、プロンプトと構造化出力の側で決めることになります",
    "TRANSCRIBE — gemini-3.5-transcribe は85言語以上の発話単位の言語判定、話者分離、単語単位のタイムスタンプ。カスタム語彙は最大1,000語までです",
    "FLASH — Gemini 3.8 Flash は9月2日に GA。9月3日には Lyria 3.5 がパブリックプレビューとなり、テキストと画像から楽曲を生成します",
  ],
  en: [
    "OMNI — The gemini-omni-flash-preview endpoint retires on September 30. Nineteen days left, which makes this the last realistic window for a migration piece",
    "MIGRATE — Its replacement, gemini-omni-1.1-flash, went GA on August 27. An extend task continues a clip, and two images let the model interpolate between them",
    "RESOLUTION — video_config now takes a resolution of 360p, 720p, 1080p or 4k. Worth stating plainly that 1080p and 4K are produced by upscaling",
    "SAMPLING — temperature, top_p and top_k have been folded into the deprecated list. If you want less variance, the lever is now your prompt and structured output",
    "TRANSCRIBE — gemini-3.5-transcribe covers utterance-level language detection across 85+ languages, speaker diarization, word-level timestamps, and up to 1,000 custom terms",
    "FLASH — Gemini 3.8 Flash reached GA on September 2, and Lyria 3.5 opened in public preview a day later, generating full songs from text and image input",
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
