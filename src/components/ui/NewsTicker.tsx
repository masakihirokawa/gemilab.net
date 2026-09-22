"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "2.5ONLY — 9月18日の公式更新です。2.5 系モデルへのアクセスは、過去に実際に使ってきた利用者に限られます。非推奨ではなく API では提供が続き、新規プロジェクトは 3.5 Flash-Lite か 3.8 Flash が案内されています",
    "3.8LIVE — 9月15日に Gemini 3.8 Live と 3.8 Live Extended Thinking が GA になりました。Live API 向けの音声対音声モデルで、後者は応答の裏で推論を続けます",
    "09/30 — gemini-omni-flash-preview が9月30日に止まります。残り7日で、後継は8月27日に GA した gemini-omni-1.1-flash です",
    "ONCE — 「このセッションでは許可」がパスを含むコマンドでは1回しか効かない、という報告にコメントが159件付いています。承認の設計そのものが問われている形です",
    "NEW — 関数呼び出しが平文に化けるとき、疑うのはツール宣言のプロパティ名",
    "HISTORY — モデルが選べなくなっても過去のやり取りを失わないよう、決めたこと・使った指示・やり直した理由の3つだけでも外に書き出しておくと安心です",
  ],
  en: [
    "2.5ONLY — From the September 18 changelog: access to the 2.5 models is now limited to people who have actively used them. They are not deprecated and the API keeps serving them, while new projects are pointed at 3.5 Flash-Lite or 3.8 Flash",
    "3.8LIVE — Gemini 3.8 Live and 3.8 Live Extended Thinking went GA on September 15. Both are audio-to-audio models for the Live API, and the second keeps reasoning in the background during the call",
    "09/30 — gemini-omni-flash-preview shuts down on September 30, seven days away. Its successor, gemini-omni-1.1-flash, went GA on August 27",
    "ONCE — A report that \"allow for this session\" only lasts one call when the command contains a path has drawn 159 comments. The question underneath is how approvals should be scoped at all",
    "NEW — When a function call comes back as plain text, suspect the property names in your tool declaration first",
    "HISTORY — Writing just three things outside the tool — what you settled on, the instructions you used, and why you redid something — keeps past work from disappearing with a model",
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
