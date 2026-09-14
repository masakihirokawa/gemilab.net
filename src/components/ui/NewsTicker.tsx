"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "3.8FLASH — gemini-3.8-flash が9月2日に一般提供となりました。長く続く開発作業、自律エージェント、企業のワークフロー向けという位置づけです",
    "LYRIA3.5 — 音楽生成の lyria-3.5 がパブリックプレビューに入りました。フル尺の楽曲を 44.1 kHz ステレオで生成でき、テキストと画像の両方を入力に取れます",
    "9/30 — gemini-omni-flash-preview の停止まで残り15日です。後継は gemini-omni-1.1-flash で、8月27日に一般提供が始まっています",
    "CACHE — 暗黙キャッシュの最小トークン数は公式には 4,096 ですが、12k を超えるまで発火しないという実測報告が出ています。効いているかどうかは自分で測るほかありません",
    "NEW — BLOCK_NONE を入れても結果が変わらないとき。閾値で通る話と、下げても通らない話の境目を書きました",
    "403 — models の一覧は 200 で返るのに generateContent だけ 403 で拒まれる、という質問が毎週のように再発しています。課金を有効にした直後でも起こります",
  ],
  en: [
    "3.8 FLASH — gemini-3.8-flash reached general availability on September 2, aimed at long-horizon software work, autonomous agents and complex enterprise workflows",
    "LYRIA 3.5 — The lyria-3.5 music model is in public preview. It generates full-length songs in 44.1 kHz stereo and accepts both text and image input",
    "SEPT 30 — Fifteen days until gemini-omni-flash-preview shuts down. Its successor, gemini-omni-1.1-flash, has been generally available since August 27",
    "CACHE — The documented minimum for implicit caching is 4,096 tokens, but developers report nothing firing until past 12k. Whether it is working is something you have to measure yourself",
    "NEW — When BLOCK_NONE changes nothing. Telling apart the cases a lower threshold clears from the ones it never will",
    "403 — Listing models returns 200 while generateContent alone returns 403. The same question resurfaces weekly, including on projects that have just enabled billing",
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
