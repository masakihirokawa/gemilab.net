"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "ASSISTANT — 9月4日から Google アシスタントの提供終了が始まります。Android のスマートフォンとタブレット、Wear OS、Android Auto で Gemini が後継になります",
    "MIGRATION — 段階的なロールアウトで、全ユーザーに届くまで数週間かかります。切り替わったあとはアシスタントが動かなくなり、戻す手段は用意されていません",
    "SURFACES — 見落とされがちなのが Wear OS と Android Auto です。画面を見られない場面での音声操作は、机の前でスマートフォンに話しかけるのとは要求が違います",
    "DROP — 9月の Android Drop では、トラッカータグのない持ち物も記録できる Find Hub の Remembered リストが入りました。Motion Assist と Google メッセージの Keep 連携も同時です",
    "CODE — Gemini Advanced で複数のコードファイルをまとめてアップロードできるようになりました。単一ファイルを貼り付ける運用から、リポジトリの一部を渡す運用へ移れます",
    "ROLE — Gemini の説明のされ方が、チャットツールから監督付きのデジタルワーカーへ寄ってきています。ファイル・画面・ドキュメント・コードを扱う存在として語られる文脈です",
  ],
  en: [
    "ASSISTANT — Google Assistant begins shutting down on September 4, with Gemini taking over on Android phones and tablets, Wear OS, and Android Auto",
    "MIGRATION — The rollout is staged and may take several weeks to reach everyone. Once it lands, Assistant stops working and there is no way to switch back",
    "SURFACES — Wear OS and Android Auto are easy to overlook here. Voice control when you cannot look at a screen asks something rather different from talking to a phone at your desk",
    "DROP — The September Android Drop adds a Remembered list in Find Hub for items without a tracker tag, along with Motion Assist and Keep inside Google Messages",
    "CODE — Gemini Advanced now accepts multiple code files in one upload, so you can hand over part of a repository instead of pasting a single file at a time",
    "ROLE — The framing around Gemini keeps shifting from chat tool toward a supervised digital worker that handles files, screens, documents, and code",
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
