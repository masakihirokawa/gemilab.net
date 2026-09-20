"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "V0.60.0 — gemini-cli の安定版は v0.60.0 のままです。中身は web fetch の宛先検証や MCP OAuth の issuer 検証など、ほとんどがセキュリティ修正でした",
    "9/30 — gemini-omni-flash-preview が9月30日に止まります。残り9日。置き換え先は gemini-omni-1.1-flash です",
    "CODE13 — 同じ動画を続けて上げると、成功と code 13 の失敗が交互に返るという報告が出ています。再現条件が見えないため、再試行の設計を決めておきたいところです",
    "NEW — Gemini アプリの画像機能を分ける、13歳・18歳・管理者という三本の線",
    "2.5GA — Gemini 2.5 の Pro・Flash・Flash-Lite は、いまも shutdown date が公表されていません。廃止表の表記は No shutdown date announced のままです",
    "3.8FLASH — Gemini 3.8 Flash の価格は導入価格です。2026年12月31日までで、2027年1月1日から入力も出力も倍になります",
  ],
  en: [
    "V0.60.0 — The gemini-cli stable release is still v0.60.0. Almost all of it is security work: web fetch destination checks, MCP OAuth issuer validation, sandbox isolation",
    "9/30 — gemini-omni-flash-preview shuts down on September 30, nine days from now. The replacement is gemini-omni-1.1-flash",
    "CODE13 — Uploading the same video repeatedly returns success and a code 13 failure in turn. With no visible trigger, it is worth deciding your retry policy up front",
    "NEW — Three lines that decide image features in the Gemini app: thirteen, eighteen, and your administrator",
    "2.5GA — Gemini 2.5 Pro, Flash and Flash-Lite still have no announced shutdown date. The deprecation table reads No shutdown date announced",
    "3.8FLASH — Gemini 3.8 Flash pricing is introductory. It holds until December 31, 2026, and both input and output double on January 1, 2027",
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
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
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
