"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "AGENT — Managed AgentsがGemini APIで公開プレビュー入り。分離されたGoogleホストのLinuxサンドボックスで自律・ステートフルなエージェントを動かせます",
    "SEARCH — File Searchがマルチモーダル対応となり、gemini-embedding-2（GA）で画像をネイティブに埋め込み・検索できます",
    "TTS — gemini-3.1-flash-tts-previewが音声生成のストリーミングに対応し、逐次再生できます",
    "MODEL — Gemini 3.5 FlashがGA（正式版）となり、gemini-flash-latestの実体になりました",
    "DEPRECATION — 画像生成モデルは2026年8月17日に提供終了予定です。依存パイプラインは移行先の確認を",
    "ENTERPRISE — Gemini 3.5 FlashがGlobal・US・EUのGemini Enterpriseで一般提供されました",
  ],
  en: [
    "AGENT — Managed Agents enter public preview in the Gemini API, running autonomous, stateful agents in isolated Google-hosted Linux sandboxes",
    "SEARCH — File Search now supports multimodal search, natively embedding and searching images with gemini-embedding-2 (GA)",
    "TTS — gemini-3.1-flash-tts-preview now streams speech generation for lower-latency playback",
    "MODEL — Gemini 3.5 Flash reaches GA and now powers gemini-flash-latest",
    "DEPRECATION — Image generation models are scheduled to shut down on August 17, 2026; plan your migration",
    "ENTERPRISE — Gemini 3.5 Flash is generally available across the Global, US, and EU regions on Gemini Enterprise",
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
