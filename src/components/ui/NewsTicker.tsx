"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DEADLINE — gemini-robotics-er-1.6-preview は昨日8月31日でシャットダウンされました。今日からエラーが出るコードがあれば、原因はまずこの停止を疑ってください",
    "NEXT — 次の期限は9月30日です。gemini-omni-flash-preview エンドポイントが廃止され、移行先は8月27日に GA になった gemini-omni-1.1-flash になります",
    "APIKEY — Gemini API は9月中に標準 API キーからのリクエストを拒否し始めます。auth キーへの移行がまだの場合、今月が実質の移行期限です",
    "SHEETS — Gemini を組み込んだ Sheets canvas が8月31日から Scheduled Release ドメインへ段階展開されています。表示まで最大15日の時間差があります",
    "MEET — Google Meet ハードウェアのタッチコントローラから「Take notes for me」の開始・停止・管理ができる展開が8月31日に始まりました",
    "PARAMS — temperature・top_p・top_k は受理されたまま無視される「静かな非推奨」が続いています。決定性を前提にしたコードは実測での確認が必要です",
  ],
  en: [
    "DEADLINE — gemini-robotics-er-1.6-preview shut down yesterday, August 31. If code started erroring today, this retirement is the first thing to check",
    "NEXT — The next deadline is September 30, when the gemini-omni-flash-preview endpoint is retired. The migration target is gemini-omni-1.1-flash, GA since August 27",
    "APIKEY — The Gemini API begins rejecting requests from standard API keys during September. If you have not moved to auth keys yet, this month is the real deadline",
    "SHEETS — Sheets canvas, a Gemini-powered feature, began a gradual rollout to Scheduled Release domains on August 31, with up to 15 days before it becomes visible",
    "MEET — Starting August 31, Google Meet hardware touch controllers can start, stop, and manage the Take notes for me feature directly from the in-room screen",
    "PARAMS — temperature, top_p, and top_k remain silently deprecated: requests are accepted and the values ignored. Code that assumes determinism needs to be verified by measurement",
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
