"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — Gemini 3.6 FlashとGemini 3.5 Flash-Liteが7月21日にリリースされ、速度重視の用途に選択肢が増えました",
    "NANO — 画像モデルNano Banana 2 Lite（gemini-3.1-flash-lite-image）がGAになりました。ファミリー最速・最安で、大量のバリエーション生成に向きます",
    "OMNI — Gemini Omni Flashが公開プレビュー。テキストから720p・3〜10秒の動画を生成でき、会話形式の動画編集にも対応します",
    "LOGS — 7月6日にInteractions APIの開発者ログが追加され、対応する呼び出しをAI Studioダッシュボードで確認できます",
    "SSRF — Agent Studioの自動生成/api-proxyのSSRF脆弱性が修正されました。7月1日より前に作成したWebアプリは再生成・再デプロイが推奨されます",
    "STILL — Omni Flashは静止画のアニメーション化にも対応し、素材画像から短い動画を手早く作れます",
  ],
  en: [
    "FLASH — Gemini 3.6 Flash and Gemini 3.5 Flash-Lite shipped on July 21, adding faster options for latency-sensitive work",
    "NANO — Nano Banana 2 Lite (gemini-3.1-flash-lite-image) reached GA as the fastest, most cost-efficient image model in the family",
    "OMNI — Gemini Omni Flash is in public preview, generating 720p, 3-10s clips from text and supporting conversational video editing",
    "LOGS — Developer logs for the Interactions API arrived July 6, viewable right in the AI Studio dashboard",
    "SSRF — A fix landed for an SSRF flaw in Agent Studio's auto-generated /api-proxy; apps built before July 1 should be regenerated and redeployed",
    "STILL — Omni Flash can also animate still images, turning a source picture into a short clip in seconds",
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
