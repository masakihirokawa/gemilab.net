"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "ARGON — gemini-4-argon が 10/13 に GA。複雑なコーディング・エージェント・数学・科学向けです",
    "DEEP RES — deep-research-pro-preview-12-2025 は 10/23 に停止、残り6日。移行先は deep-research-preview-04-2026",
    "NANO — gemini-nano-banana-2.1 が GA（10/06）。gemini-3.1-flash-image は非推奨で停止日は未発表です",
    "MCP — ツール結果が 8.5万トークンに膨らんだ事例を、ADK で 310 トークンに包んで抑えた報告が出ています",
    "FLASH — gemini-3.7-flash と 3.5-flash は新しい Flash モデルに自動で回されます（10/08）",
    "NEW — クラッシュ報告を毎回ゼロから読ませない — 既知バグ早見表を先に grep し…",
  ],
  en: [
    "ARGON — gemini-4-argon is generally available as of 10/13, aimed at complex coding, agents, math and science",
    "DEEP RES — deep-research-pro-preview-12-2025 shuts down 10/23, 6 days left. Move to deep-research-preview-04-2026",
    "NANO — gemini-nano-banana-2.1 is GA (10/06). gemini-3.1-flash-image is deprecated with no shutdown date yet",
    "MCP — One write-up cut an 85,000-token tool result to 310 tokens by wrapping it in an ADK FunctionTool",
    "FLASH — gemini-3.7-flash and 3.5-flash now route automatically to newer Flash models (10/08)",
    "NEW — Stop Re-Reading Every Crash Report: Gre…"
  ]
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
        background: "color-mix(in srgb, var(--accent-coral) 4%, var(--bg-primary))", // 2026-10-09: 不透明に（固定バーの下を流れる本文が透けて重なっていた）
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
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
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
