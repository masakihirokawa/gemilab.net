"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GOOGLEIO — Google I/O 2026 が 5/19 開幕まで4日前、Gemini 3.2 Flash・Android XR グラス・Aluminium OS の正式発表に注目",
    "FLASH — Gemini 3.2 Flash が 5/5 に iOS アプリ・AI Studio で先行公開、GPT-5.5 の 92% の性能をコスト 1/15 で実現",
    "ANDROID — Gemini Intelligence for Android 発表（5/12）、複数アプリをまたぐタスク自動化・フォーム入力が可能に",
    "BOOKS — Google が Googlebook（Gemini 専用ノートPC）を秋に発売、Acer・ASUS・Dell など主要メーカーと共同開発",
    "XR — Android XR グラスが I/O 2026 で初公開予定、Gemini 搭載スマートグラスとして Android エコシステムに統合",
    "OS — Android が「OS からインテリジェンスシステムへ」転換、Samsung・Pixel から順次 Gemini Intelligence を展開",
  ],
  en: [
    "GOOGLEIO — 4 days to Google I/O 2026 (May 19): Gemini 3.2 Flash, Android XR glasses & Aluminium OS expected",
    "FLASH — Gemini 3.2 Flash quietly launched in iOS app & AI Studio on May 5: 92% of GPT-5.5 at 1/15 the cost",
    "ANDROID — Gemini Intelligence for Android (May 12): cross-app task automation & form-filling now possible",
    "BOOKS — Google unveils Googlebook, Gemini-native laptops launching this fall with Acer, ASUS & Dell",
    "XR — Android XR glasses to debut at I/O 2026, integrating Gemini-powered eyewear into the Android ecosystem",
    "OS — Android transitions 'from OS to intelligence system'; Gemini Intelligence rolling out to Samsung & Pixel this summer",
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
