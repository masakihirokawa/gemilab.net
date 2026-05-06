"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026が5月19日開幕、Gemini 4・Veo 4・Android XR発表予定（5月）",
    "FLASH2.5 — Gemini 2.5 Flash改善版プレビュー公開、トークン消費20〜30%削減・推論精度向上（5月）",
    "TTS — Gemini 2.5 Flash TTS/Pro TTSプレビュー、低遅延&高品質な音声合成に対応（5月）",
    "GEMINIAPP — GeminiアプリがAndroid/iOS向け大規模リデザイン、新ホーム画面UIを近日展開（5/5）",
    "MCP — Gemini API と SDK でMCPツール連携が正式サポート、オープンソースツールへのアクセス拡大（5月）",
    "DEEPRESEARCH — Deep Research が2.5 Flash上で全ユーザー無料提供開始、ファイルアップロードも対応（5月）",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 kicks off May 19 with Gemini 4, Veo 4 & Android XR expected",
    "FLASH2.5 — Gemini 2.5 Flash preview: 20-30% fewer tokens, stronger reasoning & multimodality (May)",
    "TTS — Gemini 2.5 Flash TTS & Pro TTS preview: low-latency & high-quality voice synthesis (May)",
    "GEMINIAPP — Gemini app major redesign for Android & iOS rolling out soon (5/5)",
    "MCP — MCP tool support officially added to Gemini API & SDK for open-source integrations (May)",
    "DEEPRESEARCH — Deep Research now free for all on Gemini 2.5 Flash with file upload support (May)",
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
