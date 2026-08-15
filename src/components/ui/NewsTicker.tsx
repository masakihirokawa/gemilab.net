"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — 画像生成モデルの停止は明日8月17日です。imagen-4.0-generate-001・ultra・fast と Gemini 3 Image 系が止まり、当日はハードエラーになります",
    "GA — 8月13日に Gemini 3.7 Flash が一般提供となりました。ソフトウェア開発・Web 実装・エージェント用途が強化され、12月31日までは導入価格です",
    "APPS — 8月12日、Gemini に接続できるアプリが広がりました。Granola・Otter.ai・Wix に加え、OpenTable・Ticketmaster・iHeartRadio・Pandora なども対象です",
    "SAMPLING — temperature・top_p・top_k のサンプリングパラメータは非推奨になっています。新しいモデルへ移すときは前提から見直してください",
    "ROBOTICS — Gemini Robotics ER 2 が公開プレビュー中です。旧 gemini-robotics-er-1.6-preview は8月31日に停止します",
    "NOTEBOOK — NotebookLM Enterprise は Gemini Notebook Enterprise に改称され、Gemini Enterprise のモバイルアプリも一般提供に入りました",
  ],
  en: [
    "SUNSET — The image generation models shut down tomorrow, August 17: imagen-4.0-generate-001, ultra, fast, and the Gemini 3 Image family, and calls will fail with a hard error",
    "GA — Gemini 3.7 Flash reached general availability on August 13, with substantial gains in software engineering, web development, and agentic work at an introductory price through December 31",
    "APPS — On August 12 Google widened the set of apps you can connect to Gemini, adding Granola, Otter.ai, and Wix alongside OpenTable, Ticketmaster, iHeartRadio, and Pandora",
    "SAMPLING — The temperature, top_p, and top_k sampling parameters are now deprecated, so migrating to a newer model means revisiting those assumptions",
    "ROBOTICS — Gemini Robotics ER 2 is in public preview, and the older gemini-robotics-er-1.6-preview shuts down on August 31",
    "NOTEBOOK — NotebookLM Enterprise has been renamed Gemini Notebook Enterprise, and the Gemini Enterprise mobile app is now generally available",
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
