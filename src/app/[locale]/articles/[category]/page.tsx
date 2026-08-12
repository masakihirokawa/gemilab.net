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
  "gemini-workspace": { ja: "Workspace 連携の記事一覧", en: "Workspace Articles" },
  "gemini-updates": { ja: "最新情報の記事一覧", en: "Updates Articles" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const title = CAT_TITLES[category]?.[locale] || CAT_TITLES[category]?.en || category;
  const description = CATEGORY_DESC[category]?.[locale] || "";

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: "https://gemilab.net/og/default.png", width: 1200, height: 630, alt: "Gemini Lab", type: "image/png" }] },
    alternates: {
      canonical: locale === "ja" ? `https://gemilab.net/articles/${category}` : `https://gemilab.net/en/articles/${category}`,
      languages: {
        ja: `https://gemilab.net/articles/${category}`,
        en: `https://gemilab.net/en/articles/${category}`,
        "x-default": `https://gemilab.net/en/articles/${category}`,
      },
    },
  };
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
  "gemini-workspace": { ja: "Workspace 連携", en: "Workspace" },
  "gemini-updates": { ja: "最新情報", en: "Updates" },
};

const CATEGORY_DESC: Record<string, Record<string, string>> = {
  "gemini-basics": {
    ja: "Gemini をこれから使い始める方に向けた基礎カテゴリです。アカウント設定や画面の見方、プロンプトの基本、スマホアプリの活用、有料プランの選び方まで、日常の場面で Gemini を使いこなすための入門記事を幅広く集めています。",
    en: "A starting point for anyone new to Google Gemini — account setup, basic prompting, the mobile app, plan choices, and everyday use cases.",
  },
  "gemini-dev": {
    ja: "Gemini CLI や Gemini Code Assist、Google AI Studio といった開発ツールとの連携を扱うカテゴリです。エディタ統合やテスト自動化、開発環境の構築など、Gemini を開発フローに組み込む実践記事をまとめています。",
    en: "Hands-on articles for building with Gemini developer tools — Gemini CLI, Code Assist, Google AI Studio, editor integrations, and test automation.",
  },
  "gemini-api": {
    ja: "Gemini API と SDK の使い方を扱うカテゴリです。クイックスタートから Function Calling、構造化出力、ストリーミング、コスト最適化、本番運用のトラブルシューティングまで、実装コードつきの記事を集めています。",
    en: "Practical guides to the Gemini API and SDKs — quickstarts, Function Calling, structured output, streaming, cost optimization, and troubleshooting.",
  },
  "gemini-advanced": {
    ja: "エージェント設計やマルチモーダル処理、RAG 構築など、Gemini の高度な活用法を扱うカテゴリです。本番運用のアーキテクチャ設計やコスト最適化まで、一歩踏み込んだ知見を求める開発者の方に向けた上級記事をまとめています。",
    en: "Advanced Gemini techniques — agent design, multimodal processing, RAG pipelines, production architecture, and cost-aware engineering.",
  },
  "gemini-workspace": {
    ja: "Gmail や Google ドキュメント、スプレッドシートなど Google Workspace と Gemini の統合を扱うカテゴリです。Apps Script による自動化や業務効率化の実例など、毎日の仕事に効く記事を集めています。",
    en: "Using Gemini across Google Workspace — Gmail, Docs, Sheets, and Chat — with Apps Script automation recipes and real workflow examples.",
  },
  "gemini-updates": {
    ja: "Gemini の新機能リリースやモデルのアップデート、料金変更、提供終了のお知らせなどを継続的に追いかけるカテゴリです。開発や日々の運用にどのような影響があるかという実務の視点を添えて、最新の動きを整理してお届けしています。",
    en: "News and analysis on Gemini releases — new models, feature launches, pricing changes, and deprecations — always with a practical developer angle.",
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
            {cat?.icon} {catName}
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
