"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CHAT — 明日8月26日から Google Chat が Ask Gemini のハブになります。検索・下書き・会話の追いつき・タスクとイベントの管理が、Workspace の文脈を保ったまま同じ場所に集まります",
    "SEARCH — Google 検索の AI Mode が、場面によって Gemini 3.7 Flash で動くようになりました。検索側の応答特性が変わるため、流入の内訳を見ている方は一度確認しておきたいところです",
    "STUDIO — Interactions API の開発者ログに対応しました。対象の呼び出しは AI Studio のダッシュボードからログを追えます。手元にログ基盤を持たない段階の切り分けが楽になります",
    "TTS — gemini-3.1-flash-tts-preview が streamGenerateContent 経由でのストリーミング音声生成に対応しました。生成が終わるまで待たずに再生を始められます",
    "ROBOTICS — gemini-robotics-er-1.6-preview は8月31日で停止します。残り6日です。後継の ER 2 系は空間推論・多段のツール連携・複数ロボットの協調に対応しています",
    "STUDENT — 学生向けのハブ・スタディノートブック・対話的な可視化・Gemini Live での Deep Research が追加され、対象の学生は Google AI プランを1年間無料で使えます",
  ],
  en: [
    "CHAT — Tomorrow, August 26, Google Chat becomes the Ask Gemini hub: searching, drafting, catching up on threads, and managing tasks and events all land in one place with Workspace context intact",
    "SEARCH — AI Mode in Google Search is now sometimes served by Gemini 3.7 Flash. Response characteristics on the search side shift with it, which is worth checking if you watch your traffic mix",
    "STUDIO — Developer logs now cover the Interactions API. Supported calls can be traced from the AI Studio dashboard, which makes triage easier before you have logging of your own",
    "TTS — gemini-3.1-flash-tts-preview now supports streaming speech generation through streamGenerateContent, so playback can start before generation finishes",
    "ROBOTICS — gemini-robotics-er-1.6-preview shuts down on August 31, six days out. The ER 2 line succeeds it with spatial reasoning, multi-step tool orchestration, and multi-robot coordination",
    "STUDENT — Gemini added a student hub, study notebooks, interactive visualizations, and Deep Research in Gemini Live, with a free year of Google AI plans for eligible students",
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
