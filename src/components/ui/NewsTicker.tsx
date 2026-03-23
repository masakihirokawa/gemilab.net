"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.1 Pro / Flash が正式 GA：Computer Use ツールも対応（3/20）",
    "STUDIO — Google AI Studio 大幅刷新：統合 Playground で Veo 3.1・TTS も利用可能に（3/19）",
    "HOME — Gemini for Home：応答速度 40% 向上＆カナダ（フランス語含む）に拡大（3/17）",
    "WORKSPACE — Gemini が Sheets タスクを成功率 70% 超で自動処理、Drive 検索も強化（3/15）",
    "COST — Gemini API にプロジェクトごとの月額上限設定＆新 Usage Tier が追加（3/12）",
    "PIXEL — March Pixel Drop：Gemini エージェントタスク＆Magic Cue 搭載（3/10）",
  ],
  en: [
    "MODEL — Gemini 3.1 Pro / Flash now generally available with Computer Use tool (3/20)",
    "STUDIO — Google AI Studio overhaul: unified Playground with Veo 3.1 & TTS support (3/19)",
    "HOME — Gemini for Home: 40% faster responses & expansion to Canada incl. French (3/17)",
    "WORKSPACE — Gemini automates Sheets tasks at 70%+ success rate, enhanced Drive search (3/15)",
    "COST — Gemini API adds per-project monthly spend caps & revamped Usage Tiers (3/12)",
    "PIXEL — March Pixel Drop: Gemini agentic tasks & Magic Cue integration (3/10)",
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
