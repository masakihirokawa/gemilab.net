import type { Metadata } from "next";
import { getArticles, CATEGORIES } from "@/lib/content";
import { BookRecommendation } from "@/components/ui/BookRecommendation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ja" ? "学習ガイド" : "Learning Guides";
  const description = locale === "ja"
    ? "目的別に体系化された Gemini の学習ガイドです。初めての方の入門から API 開発、業務活用まで、読む順番を示したトラックで段階的にスキルアップできます。ご自身の現在地に合わせて、無理なく次の一歩を選べる構成にしています。"
    : "Structured learning guides for Gemini — curated tracks that take you from your first prompt to API development and workplace automation, step by step.";
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "https://gemilab.net/og/default.png", width: 1200, height: 1200, alt: "Gemini Lab", type: "image/png" }] },
    alternates: {
      canonical: locale === "ja" ? "https://gemilab.net/guides" : `https://gemilab.net/en/guides`,
      languages: {
        ja: "https://gemilab.net/guides",
        en: "https://gemilab.net/en/guides",
        "x-default": "https://gemilab.net/en/guides",
      },
    },
  };
}

const GUIDE_TRACKS: Record<string, { title: Record<string, string>; desc: Record<string, string>; categories: string[] }[]> = {
  default: [
    {
      title: { ja: "Gemini 入門", en: "Getting Started with Gemini" },
      desc: {
        ja: "Web・モバイルアプリの基本操作から活用テクニックまで",
        en: "From basic operations to advanced techniques for the web and mobile apps",
      },
      categories: ["gemini-basics"],
    },
    {
      title: { ja: "Gemini API 開発", en: "Gemini API Development" },
      desc: {
        ja: "CLI ツールのセットアップからプラグイン開発まで",
        en: "From CLI tool setup to plugin development",
      },
      categories: ["gemini-dev"],
    },
    {
      title: { ja: "高度な活用", en: "Advanced Usage" },
      desc: {
        ja: "タスク管理とファイル操作の自動化ガイド",
        en: "Guide to task management and file operation automation",
      },
      categories: ["gemini-api"],
    },
    {
      title: { ja: "エンタープライズ統合", en: "Enterprise Integration" },
      desc: {
        ja: "開発者向け API 連携クイックスタート",
        en: "API integration quickstart for developers",
      },
      categories: ["gemini-advanced"],
    },
  ],
};

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  const articles = getArticles(locale);
  const tracks = GUIDE_TRACKS.default;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 120px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 20, height: 1, background: "color-mix(in srgb, var(--accent-coral) 40%, transparent)" }} />
          <span style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.15em" }}>
            SYSTEMATIC GUIDES
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 8 }}>
          {locale === "ja" ? "学習ガイド" : "Learning Guides"}
        </h1>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
          {locale === "ja"
            ? "目的に合わせた体系的な学習パスで Gemini を使いこなしましょう。"
            : "Master Gemini with systematic learning paths tailored to your goals."}
        </p>
      </div>

      {/* Guide Tracks — 2026-10-09: 各トラックを「初級→中級→上級」の 3 段で各 4 本までに絞った（以前はカテゴリの全記事を並べ、1 ページ 1MB 超・リンク 900 本で、スマホでは横にはみ出していた）。
          残りはカテゴリ一覧（ページ送り）へ。剪定（noindex）記事より索引対象の記事を優先（#132） */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: 24 }}>
        {tracks.map((track, i) => {
          const inTrack = articles.filter((a) => track.categories.includes(a.category));
          const byDate = (x: { date: string }, y: { date: string }) => (y.date || "").localeCompare(x.date || "");
          const pick = (level: string) => {
            const lv = inTrack.filter((a) => (level === "intermediate" ? a.level.startsWith("intermediate") : a.level === level));
            const indexable = lv.filter((a) => !a.noindex).sort(byDate);
            const rest = lv.filter((a) => a.noindex).sort(byDate);
            return [...indexable, ...rest].slice(0, 4);
          };
          const steps = [
            { level: "beginner", ja: "初級", en: "Beginner", color: "var(--accent-green)", icon: "◇" },
            { level: "intermediate", ja: "中級", en: "Intermediate", color: "var(--accent-gold)", icon: "◆" },
            { level: "advanced", ja: "上級", en: "Advanced", color: "var(--accent-coral)", icon: "◈" },
          ].map((s) => ({ ...s, items: pick(s.level) })).filter((s) => s.items.length > 0);
          const cat = CATEGORIES.find((c) => c.id === track.categories[0]);
          const catHref = `/${locale === "ja" ? "" : locale + "/"}articles/${track.categories[0]}`;
          let n = 0;

          return (
            <section
              key={i}
              className="guide-card"
              style={{
                minWidth: 0,
                padding: "clamp(20px, 4vw, 32px)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 8,
                background: "var(--bg-surface)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span aria-hidden="true" style={{ fontSize: 16, color: cat?.color || "var(--text-muted)" }}>
                  {cat?.icon}
                </span>
                <h2 style={{ fontSize: 18, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.5 }}>
                  {track.title[locale] || track.title.en}
                </h2>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
                {track.desc[locale] || track.desc.en}
              </p>

              {steps.length > 0 ? (
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                  {steps.map((step, si) => (
                    <li key={step.level}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-dim)" }}>
                        <span>STEP {si + 1}</span>
                        <span aria-hidden="true" style={{ color: step.color }}>{step.icon}</span>
                        <span style={{ color: step.color }}>{locale === "ja" ? step.ja : step.en}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {step.items.map((article) => {
                          n += 1;
                          return (
                            <a
                              key={article.slug}
                              href={`/${locale === "ja" ? "" : locale + "/"}articles/${article.category}/${article.slug}`}
                              className="guide-step-link"
                              style={{
                                display: "grid",
                                gridTemplateColumns: "auto minmax(0, 1fr)",
                                alignItems: "baseline",
                                gap: 12,
                                padding: "10px 14px",
                                borderRadius: 6,
                                border: "1px solid transparent",
                                background: "var(--bg-surface)",
                                textDecoration: "none",
                              }}
                            >
                              <span style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: 11, color: "var(--text-faint)", minWidth: 18 }}>
                                {String(n).padStart(2, "0")}
                              </span>
                              <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)", overflowWrap: "anywhere" }}>
                                {article.title}
                                {article.premium && (
                                  <span style={{ marginLeft: 8, fontSize: 10, fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", letterSpacing: "0.08em", color: "var(--accent-coral)", whiteSpace: "nowrap" }}>
                                    PREMIUM
                                  </span>
                                )}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p style={{ fontSize: 13, color: "var(--text-faint)", fontStyle: "italic" }}>
                  {locale === "ja" ? "コンテンツ準備中..." : "Content coming soon..."}
                </p>
              )}

              {inTrack.length > n && (
                <a
                  href={catHref}
                  style={{ marginTop: 20, alignSelf: "flex-start", fontSize: 13, color: "var(--accent-coral)", textDecoration: "none" }}
                >
                  {locale === "ja" ? `このテーマの記事をすべて見る（${inTrack.length} 本）→` : `See all ${inTrack.length} articles in this track →`}
                </a>
              )}
            </section>
          );
        })}
      </div>
      <BookRecommendation locale={locale} />
    </div>
  );
}
