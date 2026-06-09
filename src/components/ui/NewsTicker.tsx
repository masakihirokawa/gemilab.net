"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "GEMINI3.5PRO — I/Oで「6月GA」と表明されたGemini 3.5 Proは現在もVertexの限定プレビュー段階で広域提供は保留中。Deep Think推論・最大200万トークン対応",
    "ENTERPRISE — Gemini Enterpriseで6/9付、3.5 Flashの機能管理トグルが廃止。全ユーザーでデフォルト有効・無効化不可に",
    "IMAGE-DEPRECATION — 画像previewモデル（flash-image-preview/pro-image-preview）は6/25停止予定。GA版の3.1 Flash/Pro Imageへ移行を",
    "FILE-SEARCH — File Searchがマルチモーダル検索（gemini-embedding-2）に対応。画像をネイティブに埋め込み・検索可能に",
    "FLASH3.5-GA — Gemini 3.5 Flashはエージェント・コーディング向けにGA。検索・Maps・Code Execution・URL Context等の併用ツールに対応",
    "WWDC — WWDC 2026で刷新版SiriがGeminiベースと確定。DMAによりEUではiOS 27時点で非提供",
  ],
  en: [
    "GEMINI3.5PRO — Announced for a June GA at I/O, Gemini 3.5 Pro is still in limited Vertex preview; broad rollout pending. Deep Think + up to 2M-token context",
    "ENTERPRISE — As of Jun 9, Gemini Enterprise removed the 3.5 Flash toggle; it's on by default for all users and can't be disabled",
    "IMAGE-DEPRECATION — Image preview models (flash-image-preview / pro-image-preview) retire Jun 25; migrate to GA 3.1 Flash/Pro Image",
    "FILE-SEARCH — File Search now supports multimodal search via gemini-embedding-2, natively embedding and searching images",
    "FLASH3.5-GA — Gemini 3.5 Flash is GA for agentic and coding work, with Search, Maps, Code Execution, URL Context, and combined tool use",
    "WWDC — WWDC 2026 confirms the revamped Siri runs on Gemini; under the DMA it won't ship in the EU at iOS 27",
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
