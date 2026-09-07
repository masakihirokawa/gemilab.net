"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "FLASH — 9月2日に Gemini 3.8 Flash が公開されました。コーディングとエージェント用途に寄せた版で、約6週間のあいだに3本目の Flash になります",
    "PRICING — 100万トークンあたり入力 $0.75・出力 $3.75。ただしこれは2026年末までの価格で、2027年1月からは $1.50・$7.50 へ上がると報じられています",
    "BENCH — Terminal-Bench 2.1 は 3.7 Flash の 81.6% から 90.8% へ伸びました。金融エージェントのタスクは 61.4%、法務は 10.0% と報じられています",
    "CAVEAT — 法務の 10.0% は比較対象の 6.7% を上回りますが、絶対値としてはどちらも低い水準です。勝敗だけを書くと実用度を誤解させます",
    "LIMIT — 難易度の高い長期のソフトウェア開発では Opus 5 が先行しているとされます。効くのは中程度の難易度のエージェント作業だと考えるのが実態に近いはずです",
    "WORKSPACE — Meet のワンクリック共同発表者、Workspace Studio の新しい自動化ステップ、Gemini のカスタム指示の適用範囲拡大、Google Vids の動画要約が届いています",
  ],
  en: [
    "FLASH — Gemini 3.8 Flash landed on September 2, tuned for coding and agentic work. It is the third Flash release in roughly six weeks",
    "PRICING — $0.75 in and $3.75 out per million tokens, but only through the end of 2026. Reports put the January 2027 rates at $1.50 and $7.50",
    "BENCH — Terminal-Bench 2.1 climbed from 81.6% on 3.7 Flash to 90.8%. Finance-agent tasks come in at 61.4% and legal at 10.0%",
    "CAVEAT — That 10.0% on legal does beat the 6.7% it is measured against, though both numbers are low in absolute terms. Reporting only the winner would mislead",
    "LIMIT — On the hardest long-horizon software engineering, Opus 5 still leads. The sweet spot here looks like mid-difficulty agentic work, not everything",
    "WORKSPACE — Alongside the model: one-click co-presenters in Meet, new Workspace Studio automation steps, wider Gemini custom instructions, and video summaries in Google Vids",
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
