"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH GA — Gemini 3.5 Flashが一般提供（GA）に。エージェント・コーディングで持続的なフロンティア性能を発揮する最も賢いモデルと位置づけられています",
    "TOGGLE — Global・US・EUマルチリージョンでは6/16以降、Gemini 3.5 Flashの機能管理トグルが廃止されます。設定を参照している場合は確認が必要です",
    "AGENTS — Managed Agentsが公開プレビューで登場。Googleホストの隔離Linuxサンドボックス内で動く自律的・ステートフルなエージェントを構築・デプロイできます",
    "IMAGE — 画像プレビュー2モデル（gemini-3.1-flash-image-preview・gemini-3-pro-image-preview）が6/25に廃止。後継モデルへの移行が必要です",
    "SEARCH — File Searchがマルチモーダル対応。gemini-embedding-2により画像をネイティブに埋め込み・検索できるようになりました",
    "CLI — Gemini CLIとCode Assistが6/18で個人向け提供終了。無料ユーザーとAI Pro/Ultra加入者はAntigravity CLIへ誘導されます",
  ],
  en: [
    "FLASH GA — Gemini 3.5 Flash is now generally available, billed as the most intelligent model for sustained frontier performance on agentic and coding tasks",
    "TOGGLE — From Jun 16 the Gemini 3.5 Flash feature toggle is removed in the Global, US, and EU multi-regions, so check any configs that depend on it",
    "AGENTS — Managed Agents launched in public preview, letting developers build and deploy autonomous, stateful agents inside Google-hosted isolated Linux sandboxes",
    "IMAGE — The image preview models gemini-3.1-flash-image-preview and gemini-3-pro-image-preview shut down Jun 25; migrate to their successors",
    "SEARCH — File Search now supports multimodal search, natively embedding and searching images via the gemini-embedding-2 model",
    "CLI — Gemini CLI and Code Assist end individual access on Jun 18; free users and AI Pro/Ultra subscribers are directed to the Antigravity CLI",
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
