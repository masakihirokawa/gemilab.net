"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "IMGEOL — 旧来の画像生成モデルが非推奨となり8月17日に停止します。新しい stable もしくは preview のエンドポイントへ移行してください",
    "REGION — Gemini Enterprise アプリの global リージョンから、8月4日に Gemini 3.5 Flash が選択肢として外れます。リージョンとモデルを組で管理している構成は要確認です",
    "GROK — Gemini Enterprise Agent Platform 上の Grok 4.1 モデルファミリが非推奨となり、8月20日に停止します",
    "FSMM — File Search が gemini-embedding-2 によるマルチモーダル検索に対応しました。テキストへ書き起こす前処理を挟まずに画像を検索対象へ入れられます",
    "FLASH36 — Gemini 3.6 Flash と 3.5 Flash-Lite が GA になりました。3.6 Flash はトークン効率と計画能力を上げつつ 3.5 Flash より安い価格帯に置かれています",
    "SAMPLING — サンプリング引数の temperature・top_p・top_k が非推奨になりました。これらを前提にした出力制御は別の手段へ置き換える設計変更が要ります",
  ],
  en: [
    "IMGEOL — The older image generation models are deprecated and shut down on August 17. Move to the newer stable or preview endpoints before then",
    "REGION — Gemini 3.5 Flash disappears from the global region in the Gemini Enterprise app on August 4, so check any config that pins region and model together",
    "GROK — The Grok 4.1 model family on the Gemini Enterprise Agent Platform is deprecated and will be shut down on August 20",
    "FSMM — File Search now handles multimodal search through gemini-embedding-2, letting you index and query images natively instead of transcribing them first",
    "FLASH36 — Gemini 3.6 Flash and 3.5 Flash-Lite are generally available. 3.6 Flash improves token efficiency and agentic planning while sitting below 3.5 Flash on price",
    "SAMPLING — The temperature, top_p, and top_k sampling parameters are now deprecated, so any output control built on them needs a different approach",
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
