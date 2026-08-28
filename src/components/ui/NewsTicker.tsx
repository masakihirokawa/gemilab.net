"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GA — Gemini Omni Flash が8月27日に一般提供へ入りました。モデル ID は gemini-omni-1.1-flash で、会話形式の動画生成と編集を担います",
    "EXTEND — 既存クリップの末尾に続きを生成してつなげられます。extend タスクでもプロンプトの直接指示でも指定でき、短い尺の制約を継ぎ足しで越えていく設計です",
    "RESOLUTION — video_config に resolution が加わり 360p・720p・1080p・4k を選べます。1080p と 4K はアップスケール出力のため、素材によって仕上がりに差が出ます",
    "DEPRECATION — gemini-omni-flash-preview は9月30日に廃止されます。プレビュー版のエンドポイントを本番で参照しているコードは差し替えが必要です",
    "TRANSCRIBE — Gemini 3.5 Transcribe と Transcribe Live が8月26日に GA となりました。85言語以上の言語検出、話者分離、単語単位のタイムスタンプに対応します",
    "SHUTDOWN — gemini-robotics-er-1.6-preview が8月31日に停止します。残り2日で、移行先は7月30日から公開プレビューの ER 2 系です",
  ],
  en: [
    "GA — Gemini Omni Flash reached general availability on August 27 as gemini-omni-1.1-flash, the conversational video generation and editing model",
    "EXTEND — You can now continue an existing clip by generating past its end, either through the extend task or straight from a prompt, working around the short duration limit",
    "RESOLUTION — video_config gains a resolution parameter offering 360p, 720p, 1080p, and 4k. The two highest tiers are produced by upscaling, so results vary with the source",
    "DEPRECATION — gemini-omni-flash-preview shuts down on September 30, so any production code still pointing at the preview endpoint needs to move over",
    "TRANSCRIBE — Gemini 3.5 Transcribe and Transcribe Live went GA on August 26 with language detection across 85+ languages, speaker diarization, and word-level timestamps",
    "SHUTDOWN — gemini-robotics-er-1.6-preview retires on August 31, two days from now, with the ER 2 line in public preview since July 30 as the migration path",
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
