"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DESKTOP — Gemini の Windows デスクトップ版が出ました。Windows 10 以降に対応し、Alt + Space でどの画面からでも呼び出せます",
    "0.59.0 — Gemini CLI の現在の安定版はこれです。v0.60 と v0.61 は nightly と preview だけで、安定版タグはまだ出ていません",
    "9/30 — gemini-omni-flash-preview の停止まで残り16日です。後継の gemini-omni-1.1-flash は video_config に resolution が加わっており、ID を差し替えるだけでは済まない場合があります",
    "429 — fileData に外部 URL の画像や PDF を渡すと、クォータを 0.03% しか使っていなくても 429 が返る報告が続いています。テキストだけなら通ります",
    "NEW — Drive の原稿を直して聞き直したら、Gemini が直す前の文を返してきました。取り込みの癖と、再添付を決める基準を書きました",
    "SAFETY — 小説の翻訳で PROHIBITED_CONTENT が続くとき、閾値を下げれば通る話と、下げても通らない話があります。その境目を先に見分けたいところです",
  ],
  en: [
    "DESKTOP — Gemini now has a Windows desktop app. It runs on Windows 10 and later, and Alt + Space brings it up from anywhere",
    "0.59.0 — This is the current stable Gemini CLI. Versions 0.60 and 0.61 exist only as nightly and preview builds, with no stable tag yet",
    "SEPT 30 — Sixteen days left before gemini-omni-flash-preview shuts down. Its successor adds a resolution field to video_config, so swapping the model ID may not be enough",
    "429 — Passing an external image or PDF URL through fileData keeps returning 429 for some users at 0.03% of quota. The same request succeeds with text alone",
    "NEW — We edited a draft in Drive, asked again, and Gemini answered from the version before the edit. Here is how its file intake behaves and when to re-attach",
    "SAFETY — When translating fiction keeps hitting PROHIBITED_CONTENT, some cases clear with a lower threshold and some never will. Telling the two apart first saves the afternoon",
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
