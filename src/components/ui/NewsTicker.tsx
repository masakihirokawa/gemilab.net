"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "CLI — Gemini API のリリースノートが9月3日から止まっている間に、Gemini CLI 側は v0.59.0 が stable になりました。中身はセキュリティ寄りです",
    "SSRF — MCP の OAuth メタデータ探索における SSRF が塞がれました。第三者の MCP を繋いでいる方には、探索段階の穴が閉じたという話です",
    "RESTRICTED — restricted mode で workspace trust が fail-closed になり、MCP サーバーがフィルタされます。無人運用に MCP を繋いでいる方は挙動が変わります",
    "版の固定 — 明示的にバージョン指定した Flash のモデル ID が保持されない不具合が直りました。再現性のために版を固定していた方ほど影響を受けていた箇所です",
    "9/30 — gemini-omni-flash-preview の停止まであと17日です。10/2 には gemini-2.5-flash-image も止まります",
    "移行先 — 公式の表が挙げる gemini-3.1-flash-image-preview は6月25日に停止済みです。実際の移行先は GA の gemini-3.1-flash-image をご確認ください",
  ],
  en: [
    "CLI — While the Gemini API release notes have sat still since September 3, the CLI moved: v0.59.0 is now stable, and the changes are mostly about security",
    "SSRF — Server-side request forgery in MCP OAuth metadata discovery has been closed off. If you connect third-party MCP servers, this one is for you",
    "RESTRICTED — Restricted mode now enforces fail-closed workspace trust and filters MCP servers. Expect different behaviour if you run unattended with MCP attached",
    "PINNING — Explicitly versioned Flash model IDs were not being preserved. If you pin versions for reproducibility, this quietly affected you",
    "SEP 30 — Seventeen days until gemini-omni-flash-preview is retired, and gemini-2.5-flash-image follows on October 2",
    "MIGRATION — The official table still points to gemini-3.1-flash-image-preview, which was retired on June 25. The real destination is the GA gemini-3.1-flash-image",
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
