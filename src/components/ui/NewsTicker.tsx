"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DROPS — Gemini Drop 3 月まとめ：5 大機能を一挙公開、AI プラットフォーム最速成長を維持（3/27）",
    "IMPORT — Import Memory to Gemini：ChatGPT・Claude からのチャット履歴移行がワンクリックで可能に（3/26）",
    "FREE — Personal Intelligence が全米で無料化、Gmail・Photos・YouTube と連携した個人 AI アシスタント（3/27）",
    "LYRIA — Lyria 3 Pro で最大 3 分の本格楽曲生成、写真からの音楽生成にも対応（3/25）",
    "LIVE — Gemini 3.1 Flash Live：応答速度が大幅向上、コンテキスト保持量 2 倍で自然な対話を実現（3/27）",
    "750M — Gemini が月間 7.5 億アクティブユーザー突破、API は月間 850 億リクエストを処理（3/28）",
  ],
  en: [
    "DROPS — March Gemini Drop recap: 5 major features released, cementing fastest-growing AI platform (3/27)",
    "IMPORT — Import Memory to Gemini: one-click chat history migration from ChatGPT & Claude (3/26)",
    "FREE — Personal Intelligence now free for all US users, connecting Gmail, Photos & YouTube (3/27)",
    "LYRIA — Lyria 3 Pro enables 3-minute tracks with lyrics, plus photo-to-music generation (3/25)",
    "LIVE — Gemini 3.1 Flash Live: faster responses and doubled context retention for natural conversations (3/27)",
    "750M — Gemini surpasses 750M monthly active users, API processing 85B+ requests per month (3/28)",
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
