"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "VIDS — Gemini OmniがGoogle Vidsに直接組み込まれました。テキストで指示するだけでスタイル変更・カラーグレーディング・背景ノイズ除去まで扱えます",
    "HOME — Gemini for Homeの会話メモリ保持が15分に延びました。直前の指示を言い直さずに追加の依頼ができます",
    "LIVE — Gemini Liveが第1世代のGoogle Home MiniとNest Hubでも使えるようになりました。Nest Camの7月アップデートも順次展開中です",
    "DOCS — Google DocsのGeminiによる文書作成・編集が11言語追加されました。Workspaceのデータを踏まえた文脈つきの支援が受けられます",
    "LOGS — 7月6日から、対応するInteractions API呼び出しの開発者ログをAI Studioのダッシュボードで確認できるようになりました",
    "SAATHI — Geminiを用いた教育者向けWebアプリATL Saathiが、インドの100校でパイロット提供されています",
  ],
  en: [
    "VIDS — Gemini Omni is now built directly into Google Vids, so a text prompt can change style, color grading, or strip background noise",
    "HOME — The Gemini for Home conversation memory window stretched to 15 minutes, so follow-ups no longer need the full context repeated",
    "LIVE — Gemini Live reached the first-generation Google Home Mini and Nest Hub, and the July Nest Cam update is rolling out alongside it",
    "DOCS — Gemini-powered document creation and editing in Google Docs added 11 more languages, with context drawn from your Workspace data",
    "LOGS — Since July 6, developer logs for supported Interactions API calls are viewable right in the AI Studio dashboard",
    "SAATHI — ATL Saathi, a Gemini-powered web app for educators, is piloting across 100 schools in India",
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
