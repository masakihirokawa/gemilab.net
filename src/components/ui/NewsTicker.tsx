"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SHUTDOWN — gemini-robotics-er-1.6-preview は本日8月31日で停止します。preview 接尾辞のモデルに依存したコードは、今日を境に動かなくなります",
    "DEPRECATION — 次の期限は9月30日です。gemini-omni-flash-preview エンドポイントが廃止され、8月27日に GA となった gemini-omni-1.1-flash への差し替えが必要になります",
    "VIDEO — Omni 1.1 Flash の GA には extend タスクによる動画の延長と、image_to_video に画像を2枚渡して間を補間する生成が入りました。始点と終点を先に決められます",
    "VIDEO — video_config の resolution が 360p・720p（既定）・1080p・4k に対応しました。1080p と 4K はアップスケールによる出力だと明記されています",
    "SPEECH — gemini-3.5-transcribe が8月26日に GA。85言語以上の発話単位の言語検出、話者ダイアライゼーション、単語レベルのタイムスタンプ、最大1,000語のカスタム語彙に対応します",
    "SPEECH — gemini-3.5-transcribe-live は Live API 上の WebSocket 双方向ストリーミングです。暫定と確定の文字起こしイベント、Smart transcription、複数の VAD 設定を持ちます",
  ],
  en: [
    "SHUTDOWN — gemini-robotics-er-1.6-preview retires today, August 31. Any code still pointing at that preview model stops working from here on",
    "DEPRECATION — September 30 is the next date to watch: the gemini-omni-flash-preview endpoint goes away and needs swapping for gemini-omni-1.1-flash, which reached GA on August 27",
    "VIDEO — The Omni 1.1 Flash GA adds video extension through the extend task, and interpolation by passing two images to image_to_video so you can fix the first and last frame up front",
    "VIDEO — A resolution parameter in video_config now accepts 360p, 720p as the default, 1080p, and 4k, with the note that 1080p and 4K outputs are produced by upscaling",
    "SPEECH — gemini-3.5-transcribe reached GA on August 26 with utterance-level language detection across 85+ languages, speaker diarization, word-level timestamps, and up to 1,000 custom vocabulary terms",
    "SPEECH — gemini-3.5-transcribe-live streams both ways over WebSockets on the Live API, with interim and finalized transcription events, a Smart transcription mode, and several VAD settings",
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
