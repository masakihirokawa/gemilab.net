"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "SCALE — Gemini アプリの月間利用者が8月11日に10億人を超えました。個人向けアシスタントとしての普及は一段落し、開発者側の関心はどう組み込むかへ移っています",
    "ASSISTANT — 9月4日から Android の Google アシスタントが Gemini に置き換わります。残り15日で、App Actions や音声ショートカットを実装したアプリは挙動確認が必要です",
    "AGENTS — Gemini API の Managed Agents がパブリックプレビューになりました。Google 側がホストする実行環境で、状態を持つ自律エージェントを構築できます",
    "ENTERPRISE — Gemini Enterprise で A2UI エージェントと A2A エージェントの登録・管理が一般提供になり、エージェント同士を接続する枠組みがプレビュー段階を抜けました",
    "SUNSET — gemini-robotics-er-1.6-preview は8月31日に停止します。残り11日で、移行先は7月30日にパブリックプレビューとなった Gemini Robotics ER 2 です",
    "PRICING — 8月13日に一般提供となった Gemini 3.7 Flash の導入価格は100万トークンあたり入力0.75ドル・出力3.75ドルで、2026年12月31日までです",
  ],
  en: [
    "SCALE — The Gemini app passed one billion monthly users on August 11. Consumer adoption has settled, and developer attention is shifting to how to build on top of it",
    "ASSISTANT — Gemini replaces Google Assistant on Android from September 4. Fifteen days out, so apps wired into App Actions or voice shortcuts should be checked now",
    "AGENTS — Managed Agents in the Gemini API entered public preview, letting you build stateful autonomous agents inside a secure Google-hosted environment",
    "ENTERPRISE — Gemini Enterprise reached general availability for registering and managing A2UI and A2A agents, moving agent-to-agent wiring out of preview",
    "SUNSET — gemini-robotics-er-1.6-preview shuts down on August 31, eleven days out. The replacement is Gemini Robotics ER 2, in public preview since July 30",
    "PRICING — Gemini 3.7 Flash went GA on August 13 at an introductory $0.75 per million input tokens and $3.75 output, holding through December 31, 2026",
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
