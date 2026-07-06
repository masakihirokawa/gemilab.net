"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MODEL — Gemini 3.5 FlashがGA（正式版）となり、gemini-flash-latestの実体になりました",
    "AGENT — Managed AgentsがGemini APIで公開プレビュー入り。分離されたGoogleホストのLinuxサンドボックスで自律・ステートフルなエージェントを動かせます",
    "ANTIGRAVITY — Antigravity Agent（マネージドエージェント）が公開プレビュー。サンドボックス内で計画・推論・コード実行・ファイル操作・Web閲覧を行います",
    "DEPRECATION — 画像生成モデルは2026年8月17日に提供終了予定です。依存パイプラインは移行先の確認を",
    "TTS — gemini-3.1-flash-tts-previewが音声生成のストリーミングに対応し、streamGenerateContentから逐次再生できます",
    "ENTERPRISE — Gemini 3.5 FlashがGlobal・US・EUのGemini Enterpriseで一般提供されました",
  ],
  en: [
    "MODEL — Gemini 3.5 Flash reaches GA and now powers gemini-flash-latest",
    "AGENT — Managed Agents enter public preview in the Gemini API, running autonomous, stateful agents in isolated Google-hosted Linux sandboxes",
    "ANTIGRAVITY — The Antigravity Agent managed agent hits public preview, planning, coding, managing files, and browsing the web in its sandbox",
    "DEPRECATION — Image generation models are scheduled to shut down on August 17, 2026; plan your migration",
    "TTS — gemini-3.1-flash-tts-preview now streams speech generation via streamGenerateContent for lower latency",
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
