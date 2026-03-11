import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByCategory, CATEGORIES } from "@/lib/content";
import { LevelBadge } from "@/components/ui/LevelBadge";

interface Props {
  params: Promise<{ locale: string; category: string }>;
}

const CAT_TITLES: Record<string, Record<string, string>> = {
  "gemini-basics": { ja: "Gemini 入門の記事一覧", en: "Gemini Basics Articles" },
  "gemini-dev": { ja: "開発ツールの記事一覧", en: "Dev Tools Articles" },
  "gemini-api": { ja: "API / SDK の記事一覧", en: "API / SDK Articles" },
  "gemini-advanced": { ja: "高度な活用の記事一覧", en: "Advanced Articles" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const title = CAT_TITLES[category]?.[locale] || CAT_TITLES[category]?.en || category;
  return { title, openGraph: { title 
    alternates: {
      canonical: locale === "ja" ? `https://gemilab.net/articles/${category}` : `https://gemilab.net/en/articles/${category}`,
      languages: {
        ja: `https://gemilab.net/articles/${category}`,
        en: `https://gemilab.net/en/articles/${category}`,
      },
    },
  } };
}

const LEVEL_LABELS: Record<string, Record<string, string>> = {
  ja: { beginner: "初級", intermediate: "中級", advanced: "上級", "intermediate-advanced": "中〜上級" },
  en: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", "intermediate-advanced": "Int-Adv" },
};

const CATEGORY_NAMES: Record<string, Record<string, string>> = {
  "gemini-basics": { ja: "Gemini 入門", en: "Gemini Basics" },
  "gemini-dev": { ja: "開発ツール", en: "Dev Tools" },
  "gemini-api": { ja: "API / SDK", en: "API / SDK" },
  "gemini-advanced": { ja: "高度な活用", en: "Advanced" },
};

const CATEGORY_DESC: Record<string, Record<string, string>> = {
  "gemini-basics": {
    ja: "Geminiの基本操作と使い方",
    en: "Getting started with Gemini",
  },
  "gemini-dev": {
    ja: "開発ツール連携・拡張機能",
    en: "Development tools and extensions",
  },
  "gemini-api": {
    ja: "Gemini APIとSDKの使い方",
    en: "Gemini API and SDK usage",
  },
  "gemini-advanced": {
    ja: "エージェント・高度な活用法",
    en: "Agents and advanced usage",
  },
};

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;

  const validCategories: string[] = CATEGORIES.map((c) => c.id);
  if (!validCategories.includes(category)) {
    notFound();
  }

  const articles = getArticlesByCategory(locale, category);
  const cat = CATEGORIES.find((c) => c.id === category);
  const catName = CATEGORY_NAMES[category]?.[locale] || category;
  const catDesc = CATEGORY_DESC[category]?.[locale] || "";

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 120px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 20, height: 1, background: `color-mix(in srgb, ${cat?.color || "var(--accent-coral)"} 40%, transparent)` }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.15em" }}>
            {cat?.icon} {category.toUpperCase()}
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 8 }}>
          {catName}
        </h1>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
          {catDesc}
        </p>
      </div>

      {/* Articles List */}
      {articles.length === 0 ? (
        <p style={{ color: "var(--text-dim)", fontSize: 15 }}>
          {locale === "ja" ? "このカテゴリの記事はまだありません。" : "No articles in this category yet."}
        </p>
      ) : (
        <div>
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/${locale === "ja" ? "" : locale + "/"}articles/${article.category}/${article.slug}`}
              style={{
                display: "block",
                padding: "24px 0",
                borderBottom: "1px solid var(--border-subtle)",
                textDecoration: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "'DM Mono', monospace" }}>
                  {article.date?.split("T")[0]}
                </span>
                <LevelBadge
                  level={article.level}
                  label={LEVEL_LABELS[locale]?.[article.level] || article.level}
                />
              </div>
              <h3 style={{ fontSize: "clamp(16px, 2.5vw, 19px)", fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, lineHeight: 1.5 }}>
                {article.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6, maxWidth: 680 }}>
                {article.description}
              </p>
            </a>
          ))}
        </div>
      )}

      {/* Back link */}
      <div style={{ marginTop: 40 }}>
        <a
          href={`/${locale === "ja" ? "" : locale + "/"}articles`}
          style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}
        >
          ← {locale === "ja" ? "すべての記事" : "All Articles"}
        </a>
      </div>
    </div>
  );
}
