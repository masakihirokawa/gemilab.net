"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026 が 5/19〜20 開催、Gemini 3.5・Veo 4・Aluminium OS 発表予測（5月）",
    "ANDROIDSHOW — The Android Show I/O Edition が 5/12 プレ配信、Android 17 と Gemini OS 統合を披露（5月）",
    "GEMINI31PRO — Gemini 3.1 Pro 公開、1M 文脈・customtools 専用エンドポイント・推論強化（4〜5月）",
    "FILEGEN — Gemini チャットから Docs/Sheets/Slides/PDF/DOCX/XLSX/CSV を直接生成可能に（5月）",
    "APPREDESIGN — Gemini アプリ大規模リデザイン、パルセーティング背景・ピル型プロンプト導入（5月）",
    "PERSONALIZATION — Gemini に Personalization（実験的）追加、Search 履歴を回答に反映（5月）",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 runs May 19-20, expected Gemini 3.5, Veo 4, and Aluminium OS reveals (May)",
    "ANDROIDSHOW — Android Show I/O Edition airs May 12 with Android 17 preview and Gemini OS integration (May)",
    "GEMINI31PRO — Gemini 3.1 Pro launches with 1M context, customtools endpoint, and stronger reasoning (Apr-May)",
    "FILEGEN — Gemini now generates Docs, Sheets, Slides, PDF, DOCX, XLSX, CSV directly from chat (May)",
    "APPREDESIGN — Gemini app gets a major redesign with pulsating gradient and pill-shaped prompt box (May)",
    "PERSONALIZATION — Gemini adds experimental Personalization that uses your Search history to refine answers (May)",
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
