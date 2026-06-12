"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHROME — Gemini in ChromeがAndroidに6月下旬展開。Nano Bananaとauto browseを同梱し、RAM 4GB以上・en-USの端末から段階提供",
    "OMNI-FLASH — Gemini Omni FlashがAI Plus/Pro/Ultraの全サブスクライバーへロールアウト。YouTube Shorts RemixとCreateでは18歳以上に無料開放",
    "DEADLINE — 画像previewモデル（gemini-3.1-flash / 3-pro image-preview）の停止まで残り12日（6/25）。GA版への移行はお早めに",
    "SCHEMA — Interactions APIの旧スキーマは6/8に削除済み。steps配列と新response_formatへの移行が完了しているか要確認です",
    "FLASH-GA — Gemini 3.5 Flashが一般提供。Antigravity・Gemini API・AI Studio・Android Studioから利用できます",
    "SUITE — Deep Think・Deep Research・Gemini Live・Gemini Omniが出揃い、「考える→調べる→話す→作る」が一つの流れに",
  ],
  en: [
    "CHROME — Gemini in Chrome lands on Android in late June with Nano Banana and auto browse, rolling out first to 4GB+ RAM devices set to en-US",
    "OMNI-FLASH — Gemini Omni Flash rolls out to all AI Plus, Pro, and Ultra subscribers, and is free for adults in YouTube Shorts Remix and YouTube Create",
    "DEADLINE — 12 days until the image preview models shut down on Jun 25 — migrate gemini-3.1-flash and 3-pro image-preview workloads to GA versions now",
    "SCHEMA — The legacy Interactions API schema was removed on Jun 8; double-check your migration to the steps array and the new response_format",
    "FLASH-GA — Gemini 3.5 Flash is generally available via Antigravity, the Gemini API, AI Studio, and Android Studio",
    "SUITE — Deep Think, Deep Research, Gemini Live, and Gemini Omni now form one flow: reason, research, talk, and create",
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
