"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "LOGS — Interactions APIの開発者ログがGoogle AI Studioのダッシュボードで閲覧できるようになりました。対応する呼び出しのログをそのまま確認できます",
    "OMNI — Gemini Omni Flashが公開プレビューで登場。テキストや静止画から720pの3〜10秒動画を生成でき、会話形式での動画編集にも対応します",
    "NANO — Nano Banana 2 Liteが登場。Geminiの画像モデルの中で最速・最も低コストと位置づけられ、大量生成やコスト重視の用途に向きます",
    "SSRF — Gemini Enterprise Agent PlatformのAgent Studioで、7月1日以前に作成されたアプリに影響するSSRF脆弱性が修正されました",
    "STUDIO — Google AI StudioからGemini Omni FlashをAPI経由で試せます。動的な動画ワークフローを自作できます",
    "VERTEX — Vertex AIのリリースノートが更新を続け、生成AI機能の追加が進んでいます",
  ],
  en: [
    "LOGS — Developer logs for the Interactions API now appear in the AI Studio dashboard as of July 6, so you can inspect supported calls in place",
    "OMNI — Gemini Omni Flash arrives in public preview, generating 3-10 second 720p clips from text or a still image and supporting conversational video editing",
    "NANO — Nano Banana 2 Lite lands as the fastest, most cost-efficient image model in the Gemini family, suited to high-volume generation",
    "SSRF — The Agent Studio in the Gemini Enterprise Agent Platform patched an SSRF flaw affecting apps created before July 1",
    "STUDIO — You can try Gemini Omni Flash from Google AI Studio through the API and build your own dynamic video workflows",
    "VERTEX — Vertex AI's release notes keep rolling out, with more generative-AI capabilities added over time",
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
