"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "API — Gemini 3.8 Flash TTS と Flash-Lite TTS が一般提供になりました（9月22日）。Voices エンドポイントで 150 以上の音声を引けます",
    "10/22 — Veo 3.1 の3モデルの提供終了まで残り16日。移行先は gemini-omni-1.1-flash です",
    "TMP — Gemini CLI が一時スクリプトを思わぬ場所に作る、という Issue が上がっています。置き場所の決め方が論点です",
    "NEW — 年末の価格切り替えに備え、Sheets に Gemini 呼び出しの台帳を作って月額を見積もりました",
    "CLAUDE — Claude Code から Gemini 3.8 へ日本語処理を振る併用が Zenn で読まれています。振る仕事と振らない仕事の線引きが論点です",
    "2.5 — Gemini 2.5 系は新規プロジェクトでは使わない方針です（9月18日）。API では引き続き提供されますが、過去に使った利用者に限られます",
  ],
  en: [
    "API — Gemini 3.8 Flash TTS and Flash-Lite TTS are generally available (Sep 22). The Voices endpoint lets you query over 150 voices",
    "10/22 — 16 days until the three Veo 3.1 models shut down. The place to move is gemini-omni-1.1-flash",
    "TMP — An issue reports Gemini CLI creating temporary scripts in unexpected places. Where to put them is the real question",
    "NEW — To prepare for the year-end price switch, I built a Gemini call ledger in Sheets and estimated the monthly cost",
    "CLAUDE — Handing Claude Code's Japanese-text work to Gemini 3.8 is a pairing getting read on Zenn. The real question is which jobs to hand over and which to keep",
    "2.5 — Skip the Gemini 2.5 family for new projects (Sep 18). The API still serves it, but access is limited to past users",
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
