"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "BENCHES — Gemini 3.5 Flash の主要ベンチマーク詳細公開: Terminal-Bench 2.1 で 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%、CharXiv 84.2%（5/20）",
    "STUDIODEV — Gemini 3.5 Flash が Google AI Studio・Antigravity・Android Studio・Gemini API で開発者向けに即時提供開始（5/19）",
    "GEMINI35P — Gemini 3.5 Pro は社内で稼働中、6月に一般公開予定とアナウンス、Deep Think 強化版搭載見込み（5/19）",
    "SCIDEEP — Gemini for Science を発表、Deep Think + Deep Research で研究者の論文読解・実験設計・データ解析を加速",
    "OMNI — Gemini Omni が登場、画像/音声/動画/テキストの任意入力から動画生成、AI Plus/Pro/Ultra に世界展開（5月）",
    "ENTERPRISE — Gemini Enterprise Agent Platform 経由で 3.5 Flash が企業向けに提供開始、長期タスク・サブエージェント編成対応",
  ],
  en: [
    "BENCHES — Gemini 3.5 Flash benchmark numbers land: 76.2% on Terminal-Bench 2.1, 1656 Elo on GDPval-AA, 83.6% on MCP Atlas, 84.2% on CharXiv (5/20)",
    "STUDIODEV — Gemini 3.5 Flash is live for developers in Google AI Studio, Antigravity, Android Studio, and the Gemini API (5/19)",
    "GEMINI35P — Gemini 3.5 Pro is already in internal use and rolls out to everyone next month, with enhanced Deep Think on board (5/19)",
    "SCIDEEP — Gemini for Science launches, pairing Deep Think and Deep Research to accelerate paper reading, experiment design, and data analysis",
    "OMNI — Gemini Omni debuts, generating video from any combination of images, audio, video, and text for AI Plus/Pro/Ultra worldwide (May)",
    "ENTERPRISE — 3.5 Flash is also live on the Gemini Enterprise Agent Platform with long-horizon task and subagent orchestration support",
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
