"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IO — Google I/O 2026 は 5/19〜20 開催、Gemini 4.0（Omni）・Android 17・Android XR グラス・Aluminium OS に期待（5/17）",
    "MODEL — Gemini Omni: テキスト・画像・動画生成を単一パイプラインに統合した新モデルが I/O で正式発表予定（5/17）",
    "FLASH — Gemini 3.2 Flash が先行リリース、GPT-5.5 の 92% 性能を 1/15 コストで実現、Google AI Studio で利用中（5/5）",
    "ANDROID — Gemini Intelligence for Android 発表、アプリをまたいだ複雑タスクを自動化（5/12 The Android Show）",
    "RACE — Google が Apple の iOS 27 AI 刷新に対抗、Android での Gemini 中核化を加速（CNBC 5/12）",
    "CREATIVE — I/O 2026 で Veo（動画生成）・Lyria（音楽生成）の大幅アップデートが発表される見通し（Google 公式予告）",
  ],
  en: [
    "IO — Google I/O 2026 runs May 19–20; expect Gemini 4.0 (Omni), Android 17, Android XR glasses & Aluminium OS (May 17)",
    "MODEL — Gemini Omni: unified text, image & video generation pipeline to debut at Google I/O 2026 (May 2026)",
    "FLASH — Gemini 3.2 Flash now available in Google AI Studio; 92% of GPT-5.5 performance at 1/15 the cost (May 5)",
    "ANDROID — Gemini Intelligence for Android announced: cross-app task automation across Gmail, Shopping & more (May 12)",
    "RACE — Google accelerates Gemini integration into Android core ahead of Apple's iOS 27 AI overhaul (CNBC, May 12)",
    "CREATIVE — I/O 2026 expected to unveil major updates to Veo (video) and Lyria (music) generation (Google preview)",
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
