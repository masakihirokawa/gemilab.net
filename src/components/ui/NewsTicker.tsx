"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHAT — 8月26日から Google Chat が Gemini のハブになります。検索・下書き・会話の追いつき・タスクとイベントの管理を、Workspace の文脈を持ったまま行えるようになります。残り3日です",
    "ANDROID — 9月4日から Android の Google アシスタントを Gemini が置き換えます。残り12日です。アシスタント前提で組んだ音声ショートカットは、置き換え後の挙動を確認しておきたいところです",
    "SCALE — Gemini アプリが8月11日に月間10億ユーザーへ到達しました",
    "ROBOTICS — gemini-robotics-er-1.6-preview は8月31日で停止します。残り8日です。後継は ER 2 系で、空間推論・多段のツール連携・複数ロボットの協調に対応します",
    "FLASH — Gemini 3.7 Flash は8月13日に GA となり、AI Pro と Ultra 向けの Gemini Spark のエンジンとして160か国以上で動いています。導入価格は12月31日までです",
    "CLASSROOM — Gemini in Classroom が8月10日から全年齢の学生へ開放されました。フラッシュカード・練習問題・学習ガイド・ガイド付きプロンプトが使えます",
  ],
  en: [
    "CHAT — From August 26, Google Chat becomes a Gemini hub for searching, drafting, catching up on threads, and managing tasks and events with full Workspace context. Three days out",
    "ANDROID — Gemini replaces Google Assistant on Android from September 4, twelve days from now. Worth checking any voice shortcuts you built on Assistant before the switch",
    "SCALE — The Gemini app crossed one billion monthly users on August 11",
    "ROBOTICS — gemini-robotics-er-1.6-preview shuts down on August 31, eight days out. The ER 2 preview models succeed it, adding spatial reasoning, multi-step tool orchestration, and multi-robot coordination",
    "FLASH — Gemini 3.7 Flash went GA on August 13 and now powers Gemini Spark for AI Pro and Ultra subscribers in 160-plus countries. Introductory pricing runs through December 31",
    "CLASSROOM — Gemini in Classroom opened to students of all ages on August 10, with flashcards, practice quizzes, study guides, and guided prompts",
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
