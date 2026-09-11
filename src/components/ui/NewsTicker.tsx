"use client";

import { useLocale } from "next-intl";

const NEWS_ITEMS: Record<string, string[]> = {
  ja: [
    "10/2 — gemini-2.5-flash-image の停止予定日は10月2日です。世に Nano Banana として広まった初代で、記事やサンプルに最も多く残っています",
    "注意 — 公式の表が推奨移行先に挙げる gemini-3.1-flash-image-preview は、すでに6月25日に停止済みです。実際の移行先は GA の gemini-3.1-flash-image です",
    "9/30 — gemini-omni-flash-preview の停止は9月30日。移行先は8月27日に GA となった gemini-omni-1.1-flash です",
    "RESOLUTION — gemini-omni-1.1-flash では video_config に resolution が入りました。360p / 720p / 1080p / 4k から選べます",
    "最早日 — 停止日は確定日ではなく「最も早い可能性のある日付」だと公式が明記しています。慌てず、しかし先延ばしにもしないことです",
    "SAMPLING — temperature / top_p / top_k は7月21日付で非推奨です。手癖で温度を下げる書き方は、世代が変わると効かなくなります",
  ],
  en: [
    "OCT 2 — gemini-2.5-flash-image is scheduled to shut down on October 2. It is the original model the world came to know as Nano Banana",
    "CAREFUL — The replacement named in the official table, gemini-3.1-flash-image-preview, was itself retired on June 25. The live path is the GA gemini-3.1-flash-image",
    "SEP 30 — gemini-omni-flash-preview shuts down on September 30. Move to gemini-omni-1.1-flash, which went GA on August 27",
    "RESOLUTION — gemini-omni-1.1-flash adds a resolution field to video_config, with 360p, 720p, 1080p and 4k to choose from",
    "EARLIEST — Google notes that a shutdown date is the earliest possible date, not a fixed one. No need to panic, but no excuse to wait either",
    "SAMPLING — temperature, top_p and top_k were deprecated back on July 21. Turning the temperature down is a habit that stops working across generations",
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
