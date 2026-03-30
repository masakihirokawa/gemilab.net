"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — Gemini 2.5 Flash-Lite Preview が本日 (3/31) で終了、3.1 Flash-Lite Preview への移行を推奨（3/31）",
    "IMPORT — Gemini にチャット履歴＆メモリーインポート機能が追加、ChatGPT からワンクリック移行が可能に（3/28）",
    "FREE — Personal Intelligence が全米で無料化、Gmail・Photos・YouTube 横断の個人 AI アシスタント（3/27）",
    "LIVE — Gemini Live 3.1 が応答速度向上＋コンテキスト保持量 2 倍、より自然な対話体験へ（3/27）",
    "HOME — Gemini for Home のレスポンスが 40% 高速化、スマートホーム操作がさらに快適に（3/28）",
    "CODE — Gemini Code Assist が個人開発者向けに完全無料化、AI コーディング支援がゼロコストで利用可能（3/31）",
  ],
  en: [
    "FLASH — Gemini 2.5 Flash-Lite Preview sunsets today (3/31), migrate to 3.1 Flash-Lite Preview now (3/31)",
    "IMPORT — Gemini adds chat history & memory import, one-click migration from ChatGPT now available (3/28)",
    "FREE — Personal Intelligence now free for all US users, spanning Gmail, Photos & YouTube (3/27)",
    "LIVE — Gemini Live 3.1 delivers faster responses with 2x longer context retention (3/27)",
    "HOME — Gemini for Home gets 40% faster response time in March update (3/28)",
    "CODE — Gemini Code Assist goes completely free for individual developers (3/31)",
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
