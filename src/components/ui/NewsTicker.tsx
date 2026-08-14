"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — 画像生成モデルの停止まで残り2日です。8月17日に imagen-4.0-generate-001・ultra・fast と Gemini 3 Image 系が止まります",
    "BREAKING — 単なるモデル差し替えでは済みません。generate_images() というメソッド自体が消え、画像生成はテキストと同じ generate_content() を通す形に変わります",
    "HARD — 停止日は非推奨の警告ではなくハードエラーで止まります。期日をまたいで様子を見る運用は成立しません",
    "MIGRATE — 非推奨表では移行先として gemini-3.1-flash-image が示されています",
    "ROBOTICS — Gemini Robotics ER 2 が一般公開されました。動画理解・タスクの統括・複数ロボットの協調・安全性が強化されています",
    "LOGS — Interactions API の開発者ログが AI Studio のダッシュボードから閲覧できるようになりました",
  ],
  en: [
    "SUNSET — Two days until the image models shut down: imagen-4.0-generate-001, ultra, fast, and the Gemini 3 Image family stop on August 17",
    "BREAKING — This is not a drop-in swap. The generate_images() method disappears entirely, and image generation moves to generate_content(), the same call used for text",
    "HARD — On the cutoff date, calls fail with a hard error rather than a deprecation warning, so waiting it out is not an option",
    "MIGRATE — The deprecations table points to gemini-3.1-flash-image as the recommended replacement",
    "ROBOTICS — Gemini Robotics ER 2 is now publicly available, with stronger video understanding, task orchestration, multi-robot collaboration, and safety",
    "LOGS — Developer logs for the Interactions API can now be viewed from the AI Studio dashboard",
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
