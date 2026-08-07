"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "ROBOTICS — Gemini Robotics ER 2 が公開プレビューになりました。空間推論・エージェント的なコード実行・複数ロボットの協調に対応します",
    "STREAMING — gemini-robotics-er-2-streaming-preview は Live API による実時間ストリーミング向けで、音声と映像の双方向入力を扱えます",
    "SUNSET — 停止日が近づいています。8月17日に Imagen 系（移行先は gemini-3.1-flash-image）、20日に Grok 4.1 ファミリー、31日に gemini-robotics-er-1.6-preview です",
    "SAMPLING — temperature・top_p・top_k が非推奨になりました。これらを設定として公開しているアプリケーションは、扱いの見直しが要ります",
    "LOGS — Interactions API の開発者ログに対応し、AI Studio のダッシュボードから閲覧できるようになりました",
    "MODELS — Gemini 3.1 Pro は依然プレビューです。3.6 Flash は7月21日に GA、3.5 Flash-Lite は大量処理のサブエージェント用途に向きます",
  ],
  en: [
    "ROBOTICS — Gemini Robotics ER 2 is in public preview, covering spatial reasoning, agentic code execution, and multi-robot coordination",
    "STREAMING — gemini-robotics-er-2-streaming-preview targets real-time streaming over the Live API, with bidirectional audio and video input",
    "SUNSET — Shutdown dates are close: Imagen models on August 17 (gemini-3.1-flash-image is the successor), the Grok 4.1 family on the 20th, and gemini-robotics-er-1.6-preview on the 31st",
    "SAMPLING — temperature, top_p, and top_k are now deprecated. If your app exposes them as user settings, that surface needs rethinking",
    "LOGS — The Interactions API now supports developer logs, viewable from the AI Studio dashboard",
    "MODELS — Gemini 3.1 Pro remains in preview. 3.6 Flash reached GA on July 21, and 3.5 Flash-Lite suits high-volume subagent work",
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
