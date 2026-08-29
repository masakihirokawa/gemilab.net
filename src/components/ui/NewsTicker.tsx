"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "DEPRECATION — temperature・top_p・top_k の非推奨は「静かな no-op」として効いています。gemini-3.7-flash・3.6-flash・3.5-flash-lite は受理したうえで無視し、リクエストは 200 で返ります",
    "AUDIT — エラーが出ないため気づけません。temperature: 0 を前提に決定性を組んだ処理は、同じプロンプトを複数回投げて出力の揺れを実測するのが確実な確認方法です",
    "SHUTDOWN — gemini-robotics-er-1.6-preview は明日8月31日で停止します。残り1日です。gemini-omni-flash-preview の廃止は9月30日で、GA 版への差し替えが必要になります",
    "CHAT — Ask Gemini in Google Chat が8月26日に開始しました。会話から離れずに Workspace のデータを横断して検索し、下書き・タスク・イベントの管理まで行えます",
    "SECURITY — Gemini DLP により、内容条件とラベルにもとづいて Gemini が Google Drive のデータへアクセスできる範囲を制限できます。導入判断そのものを左右する部分です",
    "NOTEBOOK — Gemini Notebook へのソース追加を定期ワークフロー化できます。テキスト・Drive ファイルへのリンク・Web の URL を自動で取り込み、調査ノートを継続的に育てられます",
  ],
  en: [
    "DEPRECATION — The temperature, top_p, and top_k deprecation behaves as a silent no-op: gemini-3.7-flash, 3.6-flash, and 3.5-flash-lite accept the values, ignore them, and still return 200",
    "AUDIT — Because nothing errors, nothing warns you. If your code relies on temperature: 0 for determinism, send the same prompt several times and measure the spread in the output",
    "SHUTDOWN — gemini-robotics-er-1.6-preview retires tomorrow, August 31, leaving one day. gemini-omni-flash-preview follows on September 30 and needs swapping for the GA endpoint",
    "CHAT — Ask Gemini in Google Chat opened on August 26, letting you search across Workspace data, draft, and manage tasks and events without stepping out of the conversation",
    "SECURITY — Gemini DLP restricts what Drive data Gemini can reach, based on content conditions and labels. Where that line falls often decides whether a rollout happens at all",
    "NOTEBOOK — Adding sources to a Gemini Notebook can now run as a recurring workflow, pulling in text, Drive file links, and web URLs so a research note keeps growing on its own",
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
