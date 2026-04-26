"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINIDROPS — Gemini Drops 4月版公開、Mac版ネイティブアプリ対応＆音楽作成機能追加（4月）",
    "MACAPP — Gemini for MacがmacOSデスクトップから直接AIサポート、よりスピーディな体験（4月）",
    "LYRIA3PRO — Lyria 3 Pro登場、高品質オーディオトラックを無料で作成・カスタマイズ可能（4月）",
    "NOTEBOOKS — NotebookLM統合のNotebooks機能、チャット＆リサーチを一元管理（4月）",
    "CHROMEAPAC — Gemini in ChromeがAPAC 7か国で展開（日本・韓国・豪州・東南アジア・4/20）",
    "ENTERPRISE — DeloitteとAccentureがGemini Enterprise提携拡大、25,000名→100,000名にスケール（4/22）",
  ],
  en: [
    "GEMINIDROPS — Gemini Drops April edition: native Mac app support and music creation features (Apr)",
    "MACAPP — Gemini for Mac brings AI assistance directly to macOS desktop with faster native experience (Apr)",
    "LYRIA3PRO — Lyria 3 Pro arrives — create and customize high-fidelity audio tracks for free (Apr)",
    "NOTEBOOKS — Notebooks with NotebookLM integration unify chats and research in one place (Apr)",
    "CHROMEAPAC — Gemini in Chrome rolls out to 7 APAC markets including Japan, Korea, Australia (4/20)",
    "ENTERPRISE — Deloitte & Accenture expand Gemini Enterprise partnerships, scaling to 100K licenses (4/22)",
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
