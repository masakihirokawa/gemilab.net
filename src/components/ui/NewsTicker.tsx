"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "STUDIO — Android と iOS 向けに予定されていた AI Studio の単体アプリは中止され、アプリ構築機能が Gemini アプリへ直接組み込まれます。画像生成・動画生成・テキスト分析・コード支援も同じ場所に集まります",
    "BENCH — Gemini 3.7 Flash は長期タスクのコーディング指標 DeepSWE で 49.0 パーセントから 65.3 パーセントへ上がり、同時にトークン単価は半分になりました",
    "REACH — 3.7 Flash は Gemini API に加え、Android Studio、Google Antigravity、Gemini Enterprise Agent Platform、Gemini アプリの Spark から使えます",
    "API — サンプリング系の temperature・top_p・top_k が非推奨になりました。これらで出力の揺れを抑えていた実装は、再現性の担保をどこで取るか決め直す時期です",
    "ROBOTICS — gemini-robotics-er-1.6-preview は8月31日に停止します。残り9日です。後継は er-2-preview と er-2-streaming-preview で、テキスト・画像・動画・音声を入力に取ります",
    "ASSISTANT — Android の Google アシスタントを Gemini へ置き換える作業は9月4日から始まります。残り13日です。App Actions や音声ショートカットを使うアプリは挙動の確認を",
  ],
  en: [
    "STUDIO — The planned standalone AI Studio app for Android and iOS has been cancelled, with its app-building tools folded directly into the Gemini app alongside image, video, text and code work",
    "BENCH — Gemini 3.7 Flash moved from 49.0 to 65.3 percent on DeepSWE, a long-horizon coding benchmark, while costing half as much per token",
    "REACH — Beyond the Gemini API, 3.7 Flash is available in Android Studio, Google Antigravity, the Gemini Enterprise Agent Platform, and Spark in the Gemini app",
    "API — The sampling parameters temperature, top_p and top_k are now deprecated. If you relied on them to keep output steady, it is time to decide where reproducibility comes from instead",
    "ROBOTICS — gemini-robotics-er-1.6-preview shuts down on August 31, nine days out. Its successors, er-2-preview and er-2-streaming-preview, accept text, image, video and audio input",
    "ASSISTANT — Replacing Google Assistant with Gemini on Android begins September 4, thirteen days from now. Worth checking any app that leans on App Actions or voice shortcuts",
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
