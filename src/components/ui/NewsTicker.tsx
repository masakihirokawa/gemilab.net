"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHANGELOG — Gemini API changelog の最新は 9月22日（3.8 Flash TTS / Flash-Lite TTS GA）のまま。9月23〜30日の追加はありません",
    "09/30 — gemini-omni-flash-preview は本日で提供終了（残り0日）。後継は gemini-omni-1.1-flash。呼び出し箇所を今日中に差し替えを",
    "10/02 — gemini-2.5-flash-image の終了まで残り2日。表の推奨先 3.1-flash-image-preview は既に停止済みで、実務は gemini-3.1-flash-image へ",
    "AUTH — 「個人の Gmail は通るのに、Enterprise の Workspace アカウントだけ Gemini CLI の認証で弾かれる」という問いが続いています",
    "NEW — Gemini CLI に新しいキーを渡しても「API key not valid」。読まれていたのは三か所目の古いキーでした",
    "2.5 — 2.5 系モデルは利用実績のあるユーザーに限定。非推奨ではなく API 提供は続きます。新規は 3.5 Flash-Lite か 3.8 Flash へ",
  ],
  en: [
    "CHANGELOG — The latest Gemini API changelog entry is still Sep 22 (3.8 Flash TTS and Flash-Lite TTS GA). Nothing new from Sep 23 to 30",
    "09/30 — gemini-omni-flash-preview shuts down today (0 days left). Its successor is gemini-omni-1.1-flash, so swap every call site before the day ends",
    "10/02 — 2 days left for gemini-2.5-flash-image. The listed replacement, 3.1-flash-image-preview, is already gone; in practice you want gemini-3.1-flash-image",
    "AUTH — A recurring question: personal Gmail signs in fine, but Enterprise Workspace accounts get rejected by Gemini CLI auth",
    "NEW — Gemini CLI kept saying API key not valid after a new key. It was reading a stale key from a third location",
    "2.5 — Access to 2.5 models is now limited to users with prior usage. They aren't deprecated and stay on the API; new projects should use 3.5 Flash-Lite or 3.8 Flash",
  ]
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
