"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MANAGEDAG — Gemini API に Managed Agents 追加、API 1コールで Linux 隔離環境のエージェントを起動可能に（Antigravity ハーネス採用）",
    "INTERACTAPI — Interactions API のスキーマ刷新、レガシースキーマは 2026-06-08 で廃止予定",
    "GEMINI35P — Gemini 3.5 Pro は社内で稼働中、6月に一般公開予定とアナウンス、Deep Think 強化版搭載見込み（5/19）",
    "NANO4 — Gemini Nano 4 プレビュー版を Android 17 向けに公開、要約や情報抽出をオンデバイス処理",
    "AISTUDIOAPP — Google AI Studio がテキストプロンプトから Jetpack Compose ネイティブ Android アプリを自動生成（5/19）",
    "ULTRAPRICE — Google AI Ultra が $249→$99/月に値下げ、20x Pro 限度のプロプランは $200/月で継続",
  ],
  en: [
    "MANAGEDAG — Gemini API adds Managed Agents — spin up agents in an isolated Linux sandbox with a single API call (powered by the Antigravity harness)",
    "INTERACTAPI — Interactions API ships breaking schema changes; legacy schema is sunset on 2026-06-08",
    "GEMINI35P — Gemini 3.5 Pro is already in internal use and rolls out to everyone next month, with enhanced Deep Think on board (5/19)",
    "NANO4 — Gemini Nano 4 preview is available for Android 17 on-device summarization and information extraction",
    "AISTUDIOAPP — Google AI Studio now generates native Jetpack Compose Android apps from a text prompt (5/19)",
    "ULTRAPRICE — Google AI Ultra drops from $249 to $99/month; a $200/month plan retains 20x Pro usage limits for power users",
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
