"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "LYRIA — 9月3日に Lyria 3.5 がパブリックプレビューになりました。ループ素材ではなくフルレングスの楽曲を、長さと構成を指定しながら生成できます",
    "INPUT — モデルID は lyria-3.5。テキストだけでなく画像も入力に取れます。「この写真の雰囲気で」という指定ができるということで、設計の考え方が変わります",
    "SPEC — 出力は 44.1kHz ステレオ、入力の上限は 131,072 トークン、歌詞の生成にも対応します。数値を引くときはこの単位を添えてください",
    "VIDEO — 9月1日のエージェント型動画理解は、モデルが動画のタイムラインを自分で辿り、必要に応じて文字起こしやフレームを要求します。長尺で最大88%のトークン削減です",
    "QUIET — API のリリースノートは9月3日以降、新しい項目が載っていません。動きがなかったことも記録に値すると考えています",
    "DICTATION — アプリ側では Fn キーを押しているあいだだけ話しかけると、カーソル位置に整形済みのテキストが差し込まれる入力が届いています",
  ],
  en: [
    "LYRIA — Lyria 3.5 entered public preview on September 3. It generates full-length songs rather than loops, with fine-grained control over duration and structure",
    "INPUT — The model ID is lyria-3.5, and it accepts images alongside text. Being able to say make it feel like this photo changes how you approach the prompt",
    "SPEC — Output is 44.1kHz stereo, the input ceiling is 131,072 tokens, and it can write lyrics. Worth carrying those units whenever you quote the numbers",
    "VIDEO — The agentic video understanding released September 1 lets the model walk a timeline itself, pulling transcripts or frames on demand. Up to 88% fewer tokens on long content",
    "QUIET — Nothing new has landed in the API release notes since September 3. A quiet stretch is still worth recording rather than passing over in silence",
    "DICTATION — On the app side, holding the Fn key now dictates into your active window, dropping cleaned-up text straight at the cursor",
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
