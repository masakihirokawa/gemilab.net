"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLASSROOM — 本日8月10日から、web で Gemini in Classroom が全年齢の学生へ広がります。モバイルは8月17日からです",
    "STUDY — 学生は授業のコースマテリアルを選び、その授業に合わせたフラッシュカードや練習クイズを Gemini で作れるようになります",
    "PROMPT — 従来のスターター プロンプトが授業内容に紐づいた体験へ置き換わり、Classroom と Gemini を行き来する手間が減ります",
    "SUNSET — 画像生成モデルの停止は8月17日で残り7日です。Grok 4.1 ファミリーは8月20日、gemini-robotics-er-1.6-preview は8月31日です",
    "FLASH — 7月21日に GA となった gemini-3.6-flash は、トークン効率とコード・エージェント計画が改善し、3.5 Flash より低い価格帯です",
    "PARAMS — サンプリングパラメータの temperature・top_p・top_k は非推奨になりました。既存の呼び出しを見直す時期です",
  ],
  en: [
    "CLASSROOM — Starting today, August 10, Gemini in Classroom opens on the web to students of all ages. Mobile follows on August 17",
    "STUDY — Students can pick course materials and have Gemini build flashcards or practice quizzes tailored to that specific class",
    "PROMPT — The old starter prompts become contextualized experiences, so there is less bouncing between Classroom and Gemini to get relevant help",
    "SUNSET — Image generation models shut down on August 17, seven days out. The Grok 4.1 family follows on the 20th and gemini-robotics-er-1.6-preview on the 31st",
    "FLASH — gemini-3.6-flash, GA since July 21, improves token efficiency and agentic planning at a lower price point than 3.5 Flash",
    "PARAMS — The sampling parameters temperature, top_p, and top_k are now deprecated. It is a good moment to revisit existing calls",
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
