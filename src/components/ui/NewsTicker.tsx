"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "LOGS — Interactions APIの開発者ログがAI Studioダッシュボードで確認できるようになりました。対応する呼び出しの実行ステップを追え、デバッグと挙動確認がしやすくなっています",
    "OMNI — Gemini Omni Flash（public preview）は、テキストから3〜10秒・720pの動画生成、静止画のアニメ化に対応し、生成した動画を会話でそのまま編集・洗練できます",
    "INTERACT — Interactions APIがGAとなり、全ての新規プロジェクトで推奨されています。テキスト生成からマルチモーダル理解・ツール連携・エージェントまでを単一のインターフェースで扱えます",
    "STATE — previous_interaction_idを使うとサーバー側に会話状態を保持できます。実行ステップは観測可能で、長時間タスクはバックグラウンド実行に対応します",
    "NOTEBOOK — NotebookLMがGemini Notebookに改称されました。3,000万人・60万組織以上が利用しているとされています",
    "MODEL — 広く提供されている最新はGemini 3.5 Flashです。旗艦のGemini 3.5 Proは公式発表が未確認で、報道ベースの情報は慎重に扱うのが安全です",
  ],
  en: [
    "LOGS — Developer logs for the Interactions API are now viewable in the AI Studio dashboard, so you can trace each execution step for supported calls",
    "OMNI — Gemini Omni Flash (public preview) generates 3–10s, 720p videos from text or animates a still image, then lets you refine the result conversationally",
    "INTERACT — The Interactions API is GA and recommended for all new projects — one interface for text, multimodal understanding, tool use, and agentic workflows",
    "STATE — Use previous_interaction_id to keep conversation state server-side. Execution steps are observable, and long-running tasks support background execution",
    "NOTEBOOK — NotebookLM has been renamed Gemini Notebook, reportedly used by over 30M people and 600K organizations",
    "MODEL — Gemini 3.5 Flash is the widely available latest model. The flagship Gemini 3.5 Pro remains unconfirmed officially — treat reports cautiously",
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
