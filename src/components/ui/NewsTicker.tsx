"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH36 — Gemini 3.6 Flashが、派手な発表を伴わない形で既存Flashの刷新として投入されました。日常的に使われているモデルが静かに入れ替わるため、レイテンシとコストは測り直す価値があります",
    "VIDS — Google VidsからGemini Omniを直接呼べるようになりました。従来モデルより動画生成の品質が明確に上がり、会話しながらの編集にも対応します",
    "AGENT — Daily Brief・Gemini Spark・Gemini Liveにより、Geminiはチャットボットから毎朝の文脈を引き継ぐ作業レイヤーへ位置づけを移しています",
    "RENAME — 企業向けがGemini Notebook Enterpriseへ改称されました。Webアプリと管理コンソールの表記も更新済みです",
    "DELAY — 旗艦のGemini 3.5 Proは、特にコーディング性能の改善に時間をかけているため予定より遅れていると報じられています",
    "SSRF — 7月1日以前にAgent Studioで作成したWebアプリの自動生成/api-proxyにSSRF脆弱性が見つかりました。該当アプリは再生成と再デプロイが必要です",
  ],
  en: [
    "FLASH36 — Gemini 3.6 Flash landed quietly as a refresh of the Flash model millions already use daily. When a default swaps out this quietly, it's worth re-measuring latency and cost",
    "VIDS — Gemini Omni is now available directly inside Google Vids, with noticeably higher video quality than previous models and conversational editing",
    "AGENT — With Daily Brief, Gemini Spark, and Gemini Live, Gemini is shifting from chatbot toward an operating layer that carries context from one morning to the next",
    "RENAME — The enterprise edition is now Gemini Notebook Enterprise, with the change reflected across the web app and admin console",
    "DELAY — The flagship Gemini 3.5 Pro is reportedly running behind schedule while Google works to improve its coding capabilities",
    "SSRF — An SSRF vulnerability was found in the auto-generated /api-proxy endpoint of web apps built in Agent Studio before July 1. Affected apps need regenerating and redeploying",
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
