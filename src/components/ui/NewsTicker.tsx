"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLETV — Google TV に Gemini 本格展開、Nano Banana・Veo を TV から起動して画像/動画生成（4/29）",
    "PHOTOSEARCH — Google Photos が Gemini 検索に対応、自然言語で写真をテレビから即座に発見（4/29）",
    "ROBOTICSEND — gemini-robotics-er-1.5-preview が 4/30 9AM PST にシャットダウン、後継版へ移行を（4/30）",
    "GMVEHICLES — GM 車4百万台に Gemini 展開、Cadillac/Chevrolet/Buick/GMC の2022年式以降が対象（4/28）",
    "FLASH3GA — Gemini 3 Flash 一般提供開始、SWE-bench 78% で 3 Pro を上回る効率性とコストを実現",
    "PERSONAL — Personal Intelligence が AI Pro / AI Ultra 加入者に米国 Web/Android/iOS で順次提供開始",
  ],
  en: [
    "GOOGLETV — Gemini comes to Google TV with Nano Banana and Veo, generate images and videos from your couch (4/29)",
    "PHOTOSEARCH — Google Photos gains Gemini search on Google TV, find memories in seconds with natural language (4/29)",
    "ROBOTICSEND — gemini-robotics-er-1.5-preview shuts down on 4/30 at 9AM PST, migrate to the production successor (4/30)",
    "GMVEHICLES — Gemini rolls out to ~4M GM vehicles (Cadillac/Chevrolet/Buick/GMC, 2022 and later) (4/28)",
    "FLASH3GA — Gemini 3 Flash GA delivers Pro-grade reasoning at Flash speed, hits 78% on SWE-bench Verified",
    "PERSONAL — Personal Intelligence rolls out to Google AI Pro and AI Ultra subscribers across Web, Android, and iOS in the US",
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
