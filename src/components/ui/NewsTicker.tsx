"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GENIE 4 — 11/19 に GA した Genie 4 は、映像出力が1秒あたり約 $0.10 です",
    "RETRIEVAL — Tool retrieval（Preview）なら、道具の定義を必要なときだけ読ませられます",
    "CARBON — Gemini 4 Carbon の導入価格は 11/30 まで、残り9日です",
    "SSH — Gemini CLI の git push が「unable to fork」で止まる、という報告が出ています",
    "LEARN — 授業で使う前に、「答えを先に出さない」使い方を先生自身が一度試しておくと安心です",
    "SCHEDULE — 毎朝の要約のような決まった作業は、スケジュール設定で Gemini に任せられます",
  ],
  en: [
    "GENIE 4 — Genie 4, GA since 11/19, costs about $0.10 per second of video output",
    "RETRIEVAL — Tool retrieval (Preview) loads tool definitions only when they are needed",
    "CARBON — Gemini 4 Carbon's launch pricing ends on 11/30, 9 days left",
    "SSH — Users report git push failing with \"unable to fork\" in Gemini CLI",
    "LEARN — Before class, try the guided, answer-last way of learning with Gemini yourself",
    "SCHEDULE — Routine jobs like a morning digest can run on a schedule in Gemini",
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
        background: "color-mix(in srgb, var(--accent-coral) 4%, var(--bg-primary))", // 2026-10-09: 不透明に（固定バーの下を流れる本文が透けて重なっていた）
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
