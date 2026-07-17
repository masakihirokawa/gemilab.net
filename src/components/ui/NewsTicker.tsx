"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "PRO35 — 報道が目標日としていた7月17日を過ぎましたが、Gemini 3.5 Proの公式発表もモデルカードも本日時点で確認できていません。予備日として7月24日が挙げられています",
    "NB2LITE — Nano Banana 2 Lite（Gemini 3.1 Flash-Lite Image）が登場しました。約4秒で画像を生成し、1,000枚あたり0.034ドルという水準です",
    "OMNI — Gemini Omni Flashが公開プレビューに入りました。最長10秒の動画を生成でき、価格は出力1秒あたり0.10ドルです",
    "EDIT — Omni Flashは会話による編集を軸に設計されています。登場人物の差し替え、ライティングの変更、アングルの調整を自然文で指示でき、元の音声と映像のトラックは保持されます",
    "SYNTHID — 新しい2モデルにはSynthIDの電子透かしが組み込まれており、生成物の来歴をGeminiアプリ側から確認できます",
    "SHUTDOWN — 旧来の画像生成モデルは非推奨となり、8月17日に停止されます。移行の期限をご確認いただければと思います",
  ],
  en: [
    "PRO35 — July 17, the date reports had pointed to, has passed without an official Gemini 3.5 Pro announcement or model card. July 24 is being cited as the fallback",
    "NB2LITE — Nano Banana 2 Lite, otherwise known as Gemini 3.1 Flash-Lite Image, arrives as the fastest of the family: roughly four seconds per image at $0.034 per thousand",
    "OMNI — Gemini Omni Flash enters public preview, generating video up to ten seconds long at $0.10 per second of output",
    "EDIT — Omni Flash is built around conversational editing. Swap a character, relight a scene, or change the angle in plain language, and the original audio and video tracks stay intact",
    "SYNTHID — Both new models carry SynthID watermarking, so anything they produce can be checked for provenance from inside the Gemini app",
    "SHUTDOWN — The older image generation models are deprecated and switch off on August 17. Worth checking your migration window",
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
