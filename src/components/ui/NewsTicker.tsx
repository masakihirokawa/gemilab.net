"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SUNSET — 画像生成モデルの停止は本日8月17日です。imagen-4.0-generate-001・ultra・fast と Gemini 3 Image 系が対象で、以降の呼び出しはハードエラーになります",
    "SCALE — 8月11日に Gemini の月間アクティブユーザーが10億に到達しました",
    "ASSISTANT — 9月4日から Android と Wear OS で Google アシスタントが Gemini へ置き換わります。完了まで数週間かかる見込みで、一度切り替わると元には戻せません",
    "DEVICES — 対象は Android スマートフォン・タブレット、Wear OS、アシスタント対応ヘッドフォン、投影型 Android Auto です。Google ビルトイン搭載車は継続します",
    "SPARK — 8月13日から Gemini 3.7 Flash が Gemini Spark のエンジンになりました。AI Pro・Ultra 契約者向けに160か国超で提供されています",
    "PRICE — Gemini 3.7 Flash の導入価格は100万トークンあたり入力 0.75ドル・出力 3.75ドルで、12月31日までです。以後は 1.50ドル・7.50ドル になります",
  ],
  en: [
    "SUNSET — The image generation models shut down today, August 17: imagen-4.0-generate-001, ultra, fast, and the Gemini 3 Image family, and calls after that fail with a hard error",
    "SCALE — Gemini crossed one billion monthly active users on August 11",
    "ASSISTANT — Starting September 4, Gemini replaces Google Assistant on Android and Wear OS, a rollout expected to take several weeks and one you cannot reverse on a device",
    "DEVICES — The change covers Android phones and tablets, Wear OS watches, Assistant-enabled headphones, and phone-projected Android Auto; cars with Google built-in keep working",
    "SPARK — Since August 13, Gemini 3.7 Flash has powered Gemini Spark for AI Pro and Ultra subscribers across more than 160 countries",
    "PRICE — Gemini 3.7 Flash carries introductory pricing of $0.75 per million input tokens and $3.75 output through December 31, moving to $1.50 and $7.50 after that",
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
