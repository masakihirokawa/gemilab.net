"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI3 — Gemini 3 ファミリー正式リリース、3 Pro が推論/マルチモーダル/コーディングで前世代を凌駕、AI Studio・Vertex AI から利用可能（5/20）",
    "GEMINI3FLASH — Gemini 3 Flash がプレビュー提供、AI Mode in Search や Gemini App にも段階展開、開発者向けは無償アクセス開始（5/20）",
    "AISTUDIO — Google AI Studio に Android ネイティブアプリ生成機能、Jetpack Compose + Kotlin をプロンプトから数分でビルド（5/19）",
    "DEEPTHINK — Gemini 3 Deep Think は安全性評価を経て Google AI Ultra 加入者向けに数週間以内に提供開始（5/20）",
    "MANAGED — Managed Agents in Gemini API、isolated Linux 環境でエージェントを 1 API コール起動 / 推論・ツール・コード実行を完結（5月）",
    "PARTNERS — Cursor / GitHub / JetBrains / Manus / Replit / Antigravity が Gemini 3 統合を同時アナウンス（5/20）",
  ],
  en: [
    "GEMINI3 — Gemini 3 family officially released; 3 Pro beats the previous generation in reasoning, multimodality, and coding; available via AI Studio and Vertex AI (5/20)",
    "GEMINI3FLASH — Gemini 3 Flash enters preview, rolling out to AI Mode in Search and the Gemini App; free developer access begins (5/20)",
    "AISTUDIO — Google AI Studio now builds native Android apps with Jetpack Compose + Kotlin straight from a prompt, in minutes (5/19)",
    "DEEPTHINK — Gemini 3 Deep Think clears safety evaluations and ships to Google AI Ultra subscribers in the coming weeks (5/20)",
    "MANAGED — Managed Agents in the Gemini API: spin up an agent in an isolated Linux sandbox with a single API call (May)",
    "PARTNERS — Cursor, GitHub, JetBrains, Manus, Replit, and Antigravity all announce Gemini 3 integrations simultaneously (5/20)",
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
