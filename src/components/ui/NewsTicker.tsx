"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IO2026 — Google I/O 2026 開幕（5/19）、Gemini 新モデルと Android Intelligence を発表予定",
    "INTELLIGENCE — Gemini Intelligence が Android に到来、画面理解とアプリ横断タスク自動化（5月）",
    "ANDROID17 — Android 17 は Gemini Intelligence をコアに、フォーム入力や要約をネイティブ統合（5月）",
    "GPT55RIVAL — 新 Gemini モデルが GPT-5.5 級の推論性能を狙うと報道（5月）",
    "WAVES — Galaxy / Pixel から段階展開、夏以降に時計・車・グラス・ラップトップに拡張（5月）",
    "ALUMINIUM — Aluminium OS を新しいラップトップ プラットフォームとして I/O で発表予定（5月）",
  ],
  en: [
    "IO2026 — Google I/O 2026 kicks off (5/19) with a new Gemini model and Android Intelligence announcements",
    "INTELLIGENCE — Gemini Intelligence arrives on Android with screen understanding and cross-app task automation (May)",
    "ANDROID17 — Android 17 builds on Gemini Intelligence with native form-fill, summarization, and proactive AI (May)",
    "GPT55RIVAL — Reports point to a new Gemini model targeting GPT-5.5-class reasoning performance (May)",
    "WAVES — Rollout begins on Galaxy / Pixel, expanding to watches, cars, glasses, and laptops later this year",
    "ALUMINIUM — Google to unveil Aluminium OS as a new laptop platform at I/O 2026 (May)",
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
