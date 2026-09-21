"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
ja: [
    "MCPCONN — Gemini in Google Workspace が Asana・Atlassian Rovo・HubSpot・Mailchimp・QuickBooks・Monday・Salesforce と MCP で接続されました。既定は ON で、管理コンソール側で切り替えます",
    "GLOBAL — Gmail 検索の AI Overviews の「グローバル提供」には条件が付いています。表示言語が英語であることと、個人アカウントでは日本が除外されていることが原文に書かれています",
    "10/02 — gemini-2.5-flash-image が10月2日に止まります。残り10日。置き換え先は gemini-3.1-flash-image-preview です",
    "402 — プリペイド残高が尽きたときの応答が 429 から HTTP 402 に変わりました。status は RESOURCE_EXHAUSTED のままですので、status で分岐している再試行は止まりません",
    "NEW — つないだ MCP を初めて外した日 — 常時有効にするツールを選ぶ基準",
    "SKILLS — Gems の終了と Skills への移行がアプリ内で案内されています。仕事や学校のアカウントでは Skills を使えないとされており、日付はまだ公式に確認できていません",
  ],
  en: [
    "MCPCONN — Gemini in Google Workspace now connects to Asana, Atlassian Rovo, HubSpot, Mailchimp, QuickBooks, Monday and Salesforce over MCP. It is on by default and managed from the admin console",
    "GLOBAL — The Gmail Search AI Overviews rollout described as global comes with conditions. The announcement itself requires English as the display language and excludes personal accounts in Japan",
    "10/02 — gemini-2.5-flash-image shuts down on October 2, ten days away. The replacement is gemini-3.1-flash-image-preview",
    "402 — Depleted prepay credits now return HTTP 402 instead of 429. The status field still reads RESOURCE_EXHAUSTED, so retry logic that branches on status will never stop",
    "NEW — The day I first disconnected an MCP server: how I choose which tools stay enabled",
    "SKILLS — In-app notices point from Gems to Skills, but Skills is described as unavailable on work and school accounts, and the dates have not been confirmed officially",
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
