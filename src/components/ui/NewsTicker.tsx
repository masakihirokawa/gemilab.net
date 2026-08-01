"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "HOOKS — Managed Agents に environment hooks が入りました。ツール呼び出しの前後でサンドボックス内のスクリプトを走らせ、検証・記録・外部パイプラインの起動を境界で挟めます",
    "DEFAULT — antigravity-preview-05-2026 の既定モデルが Gemini 3.6 Flash になりました。コード変更は不要で、次の対話から自動的に切り替わります",
    "BUDGET — Managed Agents にトークン予算・明示的なモデル選択・スケジュール実行・無料枠が加わり、サンドボックス環境を直接扱う API も公開されました",
    "BG — 7月7日の更新で長時間のバックグラウンドタスクとリモート MCP サーバー連携が入っており、今回の hooks はその土台の上に積まれています",
    "SUNSET — 旧来の画像生成モデルは8月17日、gemini-robotics-er-1.6-preview は8月31日に停止します。移行先の確認は早めが安全です",
    "SAMPLING — temperature・top_p・top_k が非推奨になりました。あわせて gemini-3.1-flash-tts-preview で音声生成のストリーミングが使えるようになっています",
  ],
  en: [
    "HOOKS — Managed Agents now support environment hooks. Custom scripts run before or after a tool call inside the sandbox, letting you validate, log, or trigger external pipelines at the boundary",
    "DEFAULT — The antigravity-preview-05-2026 agent now runs Gemini 3.6 Flash by default. No code changes needed; your next interaction picks it up",
    "BUDGET — Token budgets, explicit model selection, scheduled triggers, and free-tier access have landed for Managed Agents, along with an API for managing sandbox environments directly",
    "BG — The July 7 release added long-running background tasks and remote MCP server integration. The new hooks build directly on that foundation",
    "SUNSET — Older image generation models shut down August 17, and gemini-robotics-er-1.6-preview follows on August 31. Worth confirming your migration path early",
    "SAMPLING — The temperature, top_p, and top_k sampling parameters are now deprecated. Separately, gemini-3.1-flash-tts-preview gained streaming support for speech generation",
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
