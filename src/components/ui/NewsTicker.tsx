"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini CLI の nightly（10月3日）で、選択リストの Enter と Space が確実に効く修正が入りました（prerelease）",
    "12/31 — 導入価格の終了まで残り88日。3.8 / 3.7 / 3.6 Flash は入力 $0.75→$1.50、出力 $3.75→$7.50 になります",
    "NEW — Sheets から呼ぶ Gemini の月額を、年末の値上げ日をまたいで見積もる",
    "AGENT — サブエージェントが回数上限で止まったのに「成功」と表示されるという報告（#22323）。完了の見分け方が論点です",
    "LITE — gemini-3.1-flash-lite は2027年5月7日に停止予定です。後継は gemini-3.5-flash-lite。急ぎではありませんが、移行表の題材です",
    "SAFE — nightly（10月2日）で、状態の原子的な保存と破損時のバックアップ復旧が入りました。長い作業中の落ち方に備える修正です",
  ],
  en: [
    "CLI — Gemini CLI's nightly (Oct 3) fixes Enter and Space so they reliably confirm options in selection lists (prerelease)",
    "12/31 — 88 days left until the introductory pricing ends. 3.8 / 3.7 / 3.6 Flash move to $1.50 input and $7.50 output, from $0.75 and $3.75",
    "NEW — Estimating a Sheets-Driven Gemini Bill Across the Year-End Price Switch with Apps Script",
    "AGENT — A report (#22323) says a subagent that stopped at its turn limit is shown as a success. How to tell real completion is the open question",
    "LITE — gemini-3.1-flash-lite is scheduled to shut down on May 7, 2027, with gemini-3.5-flash-lite as the successor. No rush, but a good topic for a migration table",
    "SAFE — The Oct 2 nightly saves state atomically and recovers from a backup if it gets corrupted. A fix for how long sessions fail",
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
