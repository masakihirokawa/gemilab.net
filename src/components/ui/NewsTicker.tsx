"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "AUDIO — Gemini 2.5 Flash Native Audio更新：ライブ音声エージェントが複雑なワークフロー・自然な会話に対応強化（4/9）",
    "REDESIGN — Gemini Android UIがリデザイン：コンパクトオーバーレイ＋Liveフローティングウィンドウで操作性向上（4/10）",
    "SAFETY — GoogleがGemini安全機能を強化、メンタルヘルス関連クエリでヘルプライン情報を優先表示（4/9）",
    "FORMS — Google FormsがGemini AIで質問自動生成に対応、アンケート作成が自然言語で可能に（4/8）",
    "TRANSLATE — Gemini音声翻訳ベータがGoogle翻訳に展開、AI Studio・Vertex AI・Gemini Live・Search Liveで利用可能（4/9）",
    "LIFECYCLE — Gemini 2.5 Pro・Flash・Flash-Liteの廃止日が2026年10月16日に更新、移行計画の確認を推奨（4/10）",
  ],
  en: [
    "AUDIO — Gemini 2.5 Flash Native Audio updated: live voice agents now handle complex workflows & natural conversations better (4/9)",
    "REDESIGN — Gemini gets a sleek Android redesign with compact overlay and floating Live window for smoother interactions (4/10)",
    "SAFETY — Google enhances Gemini safety features, prioritizing helpline info for mental health & distress-related queries (4/9)",
    "FORMS — Google Forms now auto-generates survey questions with Gemini AI — describe your goal, get a full question set (4/8)",
    "TRANSLATE — Gemini live speech translation beta rolls out to Google Translate, AI Studio, Vertex AI & Search Live (4/9)",
    "LIFECYCLE — Gemini 2.5 Pro, Flash & Flash-Lite retirement dates updated to October 16, 2026 — plan your migration now (4/10)",
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
