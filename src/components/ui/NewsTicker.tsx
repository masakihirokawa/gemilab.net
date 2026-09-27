"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "TTS — Gemini 3.8 Flash TTS と Flash-Lite TTS が GA（9/22）。声の複製に対応するのは Flash だけで、Lite に渡すと 400 が返ります",
    "2.5 — 2.5 系モデルのアクセスは、過去に利用実績のあるユーザーに限定されました（9/18）。廃止ではなく、新規は 3.5 Flash-Lite か 3.8 Flash へ",
    "9/30 — gemini-omni-flash-preview の提供終了まで残り2日、10/2 には gemini-2.5-flash-image も停止。後者の実務上の差し替え先は gemini-3.1-flash-image です",
    "AUTH — 「Workspace の Enterprise アカウントだけ Gemini CLI の認証が通らない」という報告が続いています。個人アカウントとの切り分けが焦点",
    "NEW — 3.8 Flash-Lite TTS への置き換えで、案内音声の声を選び直した記録",
    "429 — 新規プロジェクトが Free tier 表示なのに limit: 0 で 429 が返る。最初の1時間で確かめる点を整理しています",
  ],
  en: [
    "TTS — Gemini 3.8 Flash TTS and Flash-Lite TTS are GA as of September 22. Voice replication works on Flash only; Flash-Lite returns a 400",
    "2.5 — Access to the 2.5 models is now limited to accounts with prior active usage (September 18). Not a deprecation: new projects should start on 3.5 Flash-Lite or 3.8 Flash",
    "9/30 — Two days until gemini-omni-flash-preview shuts down, and gemini-2.5-flash-image follows on October 2. In practice the replacement for the latter is gemini-3.1-flash-image",
    "AUTH — Reports continue of Gemini CLI sign-in failing only for Workspace Enterprise accounts while personal accounts work. Isolating the two is the current focus",
    "NEW — Moving to 3.8 Flash-Lite TTS meant re-picking the voice for our guidance audio",
    "429 — A brand-new project shows Free tier yet returns 429 with limit: 0. Here is what to check in the first hour",
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
