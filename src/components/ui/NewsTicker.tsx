"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026 が 5/19 開幕、Gemini Omni・Android 17・Android XR グラスの発表に期待集まる",
    "GEMINI — Gemini Omni リーク：テキスト・画像・動画生成を単一パイプラインに統合した次世代モデルが登場予定",
    "ANDROID — Gemini Intelligence for Android 発表（5/12）、複数アプリをまたぐタスク自動化・フォーム入力が可能に",
    "BOOKS — Google が Googlebooks（Gemini 専用ノートPC）を秋に発売、Acer・ASUS・Dell など主要メーカーと共同開発",
    "AUTO — Android Auto が Gemini 連携で大型アップデート、運転中の夕食予約・情報検索を音声+Geminiで完結",
    "MODEL — Google が I/O 直前に新 Gemini モデルを準備中、GPT-5.5 対抗として Gemini 4.0 相当の性能向上が見込まれる",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 opens May 19: Gemini Omni, Android 17 & Android XR glasses all expected to debut",
    "GEMINI — Gemini Omni leaked: next-gen model unifies text, image & video generation into a single pipeline",
    "ANDROID — Gemini Intelligence for Android announced (May 12): cross-app task automation & form-filling now possible",
    "BOOKS — Google unveils Googlebooks, Gemini-native laptops launching this fall with Acer, ASUS & Dell",
    "AUTO — Android Auto gets major Gemini upgrade: voice + AI handles dinner reservations while you drive",
    "MODEL — Google readying new Gemini model before I/O to rival GPT-5.5, with Gemini 4.0-level improvements expected",
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
