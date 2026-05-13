"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026 は 5/19〜20 開幕、Gemini 4・Android 17・Android XR・Aluminium OS の大型発表に期待（5日後）",
    "GEMINI-INTELLIGENCE — Gemini Intelligence for Android 発表（5/12）、複数アプリをまたぐタスク自動化・Gmail連携・予約を音声で完結",
    "GOOGLEBOOKS — Google が「Googlebooks」ノートPC発表（秋発売予定）、Gemini Intelligence 専用設計・Acer/ASUS/Dell/HP/Lenovo で展開",
    "ANDROID-AUTO — Android Auto 最大アップデート、2.5 億台の車で Gemini 連携・10年ぶりの大幅マップ刷新",
    "ULTRA-LITE — Google が「AI Ultra Lite」プランを準備中、Pro と Ultra の中間価格帯でより多くのユーザーに高機能モデルを提供",
    "REMY — 「Remy」エージェント開発中、仕事・ルーティン・アプリ連携をこなす 24 時間対応アンビエント AI エージェント",
  ],
  en: [
    "GOOGLEIO — Google I/O 2026 opens May 19–20: Gemini 4, Android 17, Android XR & Aluminium OS all expected (5 days away)",
    "GEMINI-INTELLIGENCE — Gemini Intelligence for Android announced (5/12): cross-app task automation, Gmail, shopping & reservations by voice",
    "GOOGLEBOOKS — Google unveils 'Googlebooks' laptops (fall 2026): built ground-up for Gemini Intelligence with Acer, ASUS, Dell, HP & Lenovo",
    "ANDROID-AUTO — Android Auto gets biggest maps update in a decade plus Gemini-powered in-car assistance for 250M+ cars",
    "ULTRA-LITE — Google readies 'AI Ultra Lite' plan: new mid-tier subscription bringing advanced Gemini to more users",
    "REMY — 'Remy' ambient AI agent in development: handles work routines and cross-app tasks around the clock",
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
        background: "color-mix(in srgb, var(--accent-teal) 4%, transparent)",
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
            <span style={{ color: "var(--accent-teal)", fontSize: 8 }}>●</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
