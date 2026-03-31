"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GMAIL — Gmail が Gemini 3 時代に突入、AIスレッド要約・Help Me Write・校正機能が全ユーザーに展開（4/1）",
    "INBOX — Gmail 新 AI Inbox でメール自動フィルタリング、重要なメールだけを最優先表示（1月〜順次展開）",
    "IMPORT — Gemini にチャット履歴インポート機能、ChatGPT・Claude からワンクリック移行が公式サポートに（3/28）",
    "FREE — Personal Intelligence が全米無料化、Gmail・Photos・YouTube 横断の個人 AI アシスタントをゼロコストで（3/27）",
    "STUDIO — Google AI Studio に Antigravity full-stack 統合、Firebase + Next.js 対応でリアルタイムアプリが即構築可能（3月）",
    "GROWTH — Gemini が 7.5 億 MAU を達成、API リクエストは月 850 億件と最速成長の AI プラットフォームに（2026 Q1）",
  ],
  en: [
    "GMAIL — Gmail enters the Gemini 3 era: AI thread summaries, Help Me Write, and Proofread rolling out to all users (4/1)",
    "INBOX — Gmail's new AI Inbox filters clutter automatically, surfacing only the most important messages first (rolling out)",
    "IMPORT — Gemini officially supports chat history import from ChatGPT and Claude with one-click migration (3/28)",
    "FREE — Personal Intelligence now free for all US users, connecting Gemini across Gmail, Photos & YouTube (3/27)",
    "STUDIO — Google AI Studio integrates Antigravity full-stack with Firebase and Next.js for real-time app building (March)",
    "GROWTH — Gemini hits 750M MAU with 85B monthly API requests, making it the fastest-growing AI platform in Q1 2026 (2026 Q1)",
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
