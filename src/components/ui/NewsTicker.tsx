"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH36 — 7月21日公開のGemini 3.6 Flashは出力トークンが約17%少なく、3.5 Flashより低価格です。コード編集の余計な書き換えや実行ループも減っています",
    "CYBER — Gemini 3.5 Flash Cyberは脆弱性の発見・検証・修正パッチ作成に絞った軽量モデルです",
    "COMPUTER — Computer UseがGemini APIとGemini Enterpriseの組み込みクライアントサイドツールとして利用できるようになりました",
    "SPARK — Gemini Sparkの日本語提供が7月16日に始まりました。Google AI Ultraプランのユーザーから順次展開されています",
    "PARALLEL — Sparkが複数の参照ソースを並行処理できるようになり、Docs・Sheets・Slidesでの画像追加や編集を代行できる範囲も広がりました",
    "STUDENT — 日本を含む4か国で18歳以上の学生向け無料アップグレードが提供され、Google AI ProとNotebookLM、2TBのストレージが使えます",
  ],
  en: [
    "FLASH36 — Gemini 3.6 Flash, shipped July 21, uses about 17% fewer output tokens than 3.5 Flash at a lower price, with fewer stray code edits and execution loops",
    "CYBER — Gemini 3.5 Flash Cyber is a lightweight model focused on finding, validating, and patching vulnerabilities",
    "COMPUTER — Computer use is now available as a built-in client-side tool through the Gemini API and Gemini Enterprise",
    "SPARK — Gemini Spark began rolling out in Japanese on July 16, starting with Google AI Ultra subscribers",
    "PARALLEL — Spark now processes multiple reference sources in parallel, and handles a wider range of image edits across Docs, Sheets, and Slides",
    "STUDENT — Students 18 and older in four countries, Japan included, get a free upgrade to Google AI Pro with NotebookLM and 2TB of storage",
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
