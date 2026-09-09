"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — Gemini API のリリースノートは9月3日の Lyria 3.5 が最新のままです。9月10日時点で新しい項目はありませんでした",
    "CLI — Gemini CLI の v0.47.0 nightly に、Antigravity CLI への移行コマンドとドキュメントが入りました。nightly である点は忘れずに",
    "GARDEN — Gemini Enterprise Agent Platform の Model Garden に Claude Fable 5.1 が加わりました。埋め込み SKU とエージェント計測の価格も更新されています",
    "DEPRECATION — gemini-omni-flash-preview の廃止は9月30日、あと20日です。移行先は8月27日に GA となった gemini-omni-1.1-flash になります",
    "SIRI — iOS 27 が9月14日に配信されます。刷新された Siri は Google の Gemini モデルの協力で開発されたと報じられていますが、詳細は未確認です",
    "PRICE — Gemini 3.8 Flash と 3.7 Flash の 0.75 ドル / 3.75 ドルは導入価格です。2027年1月1日から 1.50 ドル / 7.50 ドルへ変わります",
  ],
  en: [
    "API — The Gemini API release notes still end at Lyria 3.5 on September 3. Nothing new had appeared as of September 10",
    "CLI — Gemini CLI v0.47.0 nightly adds documentation and migration commands for the Antigravity CLI. Worth remembering that this is a nightly build",
    "GARDEN — Claude Fable 5.1 has joined Model Garden on the Gemini Enterprise Agent Platform, alongside updated embedding SKUs and agent metering prices",
    "DEPRECATION — gemini-omni-flash-preview retires on September 30, twenty days out. The path forward is gemini-omni-1.1-flash, which reached GA on August 27",
    "SIRI — iOS 27 ships on September 14. Its rebuilt Siri was reportedly developed with help from Google's Gemini models, though the specifics remain unconfirmed",
    "PRICE — The $0.75 / $3.75 per MTok on Gemini 3.8 Flash and 3.7 Flash is introductory. From January 1, 2027 it becomes $1.50 / $7.50",
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
