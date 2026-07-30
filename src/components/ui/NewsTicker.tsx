"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "G4PRE — 7月21日、Google が Gemini 4 の事前学習開始を明らかにしました。リリース日・モデル ID・価格・仕様はいずれも未発表で、公開最新は 3.6 Flash のままです",
    "ORACLE — 7月30日、Oracle が Google Cloud との提携を拡大しました。Fusion Applications の AI Agent Studio から Gemini を使えるようにし、NetSuite の組み込み AI にも採用する計画です",
    "ROBOT2 — 7月30日、Google DeepMind がヒューマノイド向けの新モデルを発表しました。全身の動きを協調させ、多段のタスクを計画しながら人間の環境へ適応することを狙っています",
    "ENTGA — Gemini Enterprise のワークフローエージェントとスキルが GA になり、Slack 連携も GA へ。Vertex AI は Gemini Enterprise Agent Platform へ改称され、参照先の差し替えが要ります",
    "NBAPP — Gemini Notebook に、取り込んだソースからプロンプト経由で対話的な HTML アプリを生成する App アーティファクトが開発中と伝えられています",
    "SPARK — Gemini Spark に Chrome でのウェブ閲覧が加わり、提供地域が広がりました。複雑なウェブ上の用事を代行する機能も追加されています",
  ],
  en: [
    "G4PRE — Google said on July 21 that pre-training has begun for Gemini 4, with no release date, model ID, pricing, or specs announced — 3.6 Flash remains the latest public model",
    "ORACLE — Oracle expanded its Google Cloud partnership on July 30, bringing Gemini models to AI Agent Studio for Fusion Applications and planning embedded Gemini across Fusion and NetSuite",
    "ROBOT2 — Google DeepMind unveiled a robotics model on July 30 that coordinates whole-body movement, letting humanoids plan multi-step tasks and adapt to human environments",
    "ENTGA — Gemini Enterprise workflow agents and skills reached GA along with the Slack integration, and Vertex AI was renamed the Gemini Enterprise Agent Platform — check your doc links",
    "NBAPP — Gemini Notebook is reportedly gaining an App artifact that generates interactive HTML apps, such as dashboards and small games, from your sources via a prompt",
    "SPARK — Gemini Spark added Chrome web browsing and rolled out to more regions, plus a new capability for handling complex errands on the web",
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
