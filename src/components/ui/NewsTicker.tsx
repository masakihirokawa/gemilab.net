"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "MEMORY — Memory Bank の Memory Profiles が GA になりました。静的スキーマの構造化プロファイルにより、セッション中の検索を挟まずに情報へ到達できます",
    "SCOPE — プロファイルは取り込み時のスコープごとに分離され、スキーマとスコープの組み合わせに対して単一のプロファイルが維持されます",
    "INGEST — IngestEvents API が GA になり、イベントのストリーミング・メモリのリビジョン管理・メタデータの付与が扱えるようになりました",
    "AUDIO — gemini-3.1-flash-tts-preview が streamGenerateContent 経由のストリーミングに対応し、読み上げ開始までの待ち時間が縮みました",
    "CLASSROOM — 8月10日から、既にアクセス権を付与されている K-12 と高等教育の全年齢の学生が Gemini in Classroom を利用できるようになります",
    "SUNSET — 停止日が迫っています。8月17日に画像生成モデル、20日に Grok 4.1 ファミリー、31日に gemini-robotics-er-1.6-preview です",
  ],
  en: [
    "MEMORY — Memory Profiles in Memory Bank are now GA. A fixed schema means agents reach evolving information without an expensive search mid-session",
    "SCOPE — Profiles are isolated by the scope you pass at ingest, and each schema-and-scope pair keeps a single profile as its source of truth",
    "INGEST — The IngestEvents API reached GA, bringing smoother event streaming, memory revision controls, and metadata support",
    "AUDIO — gemini-3.1-flash-tts-preview now streams through streamGenerateContent, cutting the wait before the first audio arrives",
    "CLASSROOM — From August 10, Gemini in Classroom opens to K-12 and higher education students of all ages who already have access",
    "SUNSET — Shutdown dates are close: image generation models on August 17, the Grok 4.1 family on the 20th, and gemini-robotics-er-1.6-preview on the 31st",
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
