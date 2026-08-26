"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "API — temperature・top_p・top_k の非推奨は、エラーではなく無言の no-op です。リクエストは 200 で通り、値だけが受け取られたうえで無視されます",
    "AUDIT — 実行時に検知する手段がないため、コードベースを静的に検索して指定を洗い出すしかありません。監査の方法が開発者フォーラムで議論になっています",
    "CHECK — 同じプロンプトを temperature 0 と 1 で複数回投げ、出力の分散が変わらないことを実測すれば、効いていないことを自分の目で確認できます",
    "MODELS — Gemini 3.7 Flash は DeepSWE v1.1 で 65.3%、FrontierCode 1.1 Main で 43.6% を記録しています。導入価格は2026年12月31日までです",
    "SEARCH — File Search が gemini-embedding-2 によるマルチモーダル検索に対応しました。画像を書き起こさずに、そのまま埋め込んで検索できます",
    "DEPRECATION — gemini-robotics-er-1.6-preview が8月31日に停止します。残り4日で、移行先は7月30日から公開プレビューの ER 2 系です",
  ],
  en: [
    "API — The deprecation of temperature, top_p, and top_k is a silent no-op rather than an error: requests still return 200 and the values are simply ignored",
    "AUDIT — There is no runtime signal to catch it, so auditing means searching your codebase statically for the parameters, a gap developers are actively discussing",
    "CHECK — Send the same prompt several times at temperature 0 and again at 1, then compare the spread of the outputs, and you can confirm for yourself that nothing changes",
    "MODELS — Gemini 3.7 Flash scores 65.3% on DeepSWE v1.1 and 43.6% on FrontierCode 1.1 Main, with introductory pricing available through December 31, 2026",
    "SEARCH — File Search now supports multimodal search through gemini-embedding-2, so images can be embedded and searched directly without a transcription step",
    "DEPRECATION — gemini-robotics-er-1.6-preview shuts down on August 31, four days from now, with the ER 2 line in public preview since July 30 as the migration path",
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
