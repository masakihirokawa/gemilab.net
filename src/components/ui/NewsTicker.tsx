"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — imagen-4.0 系の停止まで残り5日です。8月17日に imagen-4.0-generate-001 ほか3モデルが止まります",
    "SAMPLING — 7月21日から temperature・top_p・top_k が非推奨になっています。停止日は示されていませんが、実装を点検しておく段階です",
    "API — Interactions API が GA になり、最新の機能とモデルを使う際はこちらを推奨すると案内されています",
    "ROBOTICS — gemini-robotics-er-1.6-preview の停止は8月31日です。後継の ER 2 は7月30日から公開プレビューになっています",
    "ENTERPRISE — サードパーティの ID プロバイダを使う組織向けに、Gemini Enterprise のモバイルアプリが GA になりました",
    "RENAME — NotebookLM Enterprise は Gemini Notebook Enterprise へ改称されています。資料を探すときの語も変わります",
  ],
  en: [
    "SUNSET — Five days until the imagen-4.0 family shuts down: imagen-4.0-generate-001 and two sibling models stop on August 17",
    "SAMPLING — Since July 21 the temperature, top_p, and top_k parameters are deprecated; no shutdown date yet, but worth auditing your calls",
    "API — The Interactions API is now generally available and is the recommended path to the latest models and features",
    "ROBOTICS — gemini-robotics-er-1.6-preview shuts down on August 31; its successor, ER 2, has been in public preview since July 30",
    "ENTERPRISE — The Gemini Enterprise mobile app reached GA for organizations authenticating through third-party identity providers",
    "RENAME — NotebookLM Enterprise is now Gemini Notebook Enterprise, so the term to search the docs for has changed too",
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
