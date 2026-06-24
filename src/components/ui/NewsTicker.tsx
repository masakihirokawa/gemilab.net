"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DEPRECATION — 画像プレビューモデル2種が本日6/25に停止。利用中の自動化・スクリプトは本日中の移行が必須です",
    "GA — 入れ替わりでgemini-3.1-flash-imageとgemini-3-pro-imageがネイティブ画像モデルの正式版になりました",
    "MEDIA — 動画→画像生成に対応。動画を文脈として渡し高品質なサムネイル等を生成できます（3.1 flash image限定）",
    "AUDIO — Gemini 3.1 Flash TTSプレビューが追加。低コストで表情豊か、制御しやすい音声合成です",
    "MODEL — Gemini 3.5 Flashは一般提供済み。3.1 Proをほぼ全ベンチで上回りつつ4倍高速に動作します",
    "SEARCH — File Searchはマルチモーダル検索に対応。gemini-embedding-2で画像をネイティブに埋め込み・検索できます",
  ],
  en: [
    "DEPRECATION — The two image preview models shut down today, June 25; automations using them must migrate immediately",
    "GA — In their place, gemini-3.1-flash-image and gemini-3-pro-image are now the generally available native image models",
    "MEDIA — Video-to-image generation arrives: pass a video as context to create high-quality thumbnails (3.1 flash image only)",
    "AUDIO — Gemini 3.1 Flash TTS preview lands: a low-cost, expressive, steerable text-to-speech model",
    "MODEL — Gemini 3.5 Flash is GA, beating 3.1 Pro on nearly every benchmark while running about 4x faster",
    "SEARCH — File Search now supports multimodal search, embedding and searching images natively via gemini-embedding-2",
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
