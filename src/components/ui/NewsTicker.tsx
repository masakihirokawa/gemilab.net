"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "OUTAGE — Geminiが過去最大級の障害（error 1076/1099）から回復へ。エンジニアリングチームの緩和策で影響は縮小中",
    "DAILY-BRIEF — 新エージェント「Daily Brief」が登場。夜間にinbox・カレンダー・タスクを分析し、朝のパーソナルダイジェストを生成",
    "GEMINI-OMNI — Geminiと生成メディアモデルを統合した動画AI「Gemini Omni」。プロンプトから一貫性のある高品質動画を生成",
    "ENTERPRISE — Gemini Enterpriseで3.5 Flashが6/8からデフォルト固定に。機能管理トグルは廃止され全ユーザーで有効",
    "DEPRECATION — 画像previewモデル（3.1-flash-image/3-pro-image）は6/25に停止。GA版への移行はお早めに",
    "FILE-SEARCH — File Searchがマルチモーダル検索に対応。gemini-embedding-2で画像をネイティブに埋め込み・検索",
  ],
  en: [
    "OUTAGE — Gemini recovers from one of its biggest outages (errors 1076/1099) as engineering mitigations take effect",
    "DAILY-BRIEF — The new Daily Brief agent works overnight, analyzing your inbox, calendar, and tasks into a personalized morning digest",
    "GEMINI-OMNI — Gemini Omni combines Gemini with Google's generative media models to produce consistent, high-quality video from a single prompt",
    "ENTERPRISE — Gemini 3.5 Flash is enabled by default in Gemini Enterprise as of Jun 8 and can no longer be turned off",
    "DEPRECATION — Image preview models (3.1-flash-image / 3-pro-image) shut down Jun 25; migrate to the GA versions now",
    "FILE-SEARCH — File Search now supports multimodal search, natively embedding and searching images via gemini-embedding-2",
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
