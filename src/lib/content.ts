import articlesData from "@/generated/articles.json";
import blogData from "@/generated/blog.json";

export interface ArticleMeta {
  title: string;
  slug: string;
  category: string;
  level: string;
  date: string;
  updated?: string;
  author: string;
  description: string;
  tags: string[];
  premium?: boolean;
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const articles = articlesData as Record<string, any[]>;

export function getArticles(locale: string): ArticleMeta[] {
  const entries = articles[locale] || [];
  return entries.map((entry) => ({
    title: entry.title || "",
    slug: entry.slug || "",
    category: entry.category || "",
    level: entry.level || "beginner",
    date: entry.date || "",
    updated: entry.updated || undefined,
    author: entry.author || "Gemini Lab",
    description: entry.description || "",
    tags: entry.tags || [],
    premium: entry.premium || false,
  }));
}

export function getArticle(
  locale: string,
  category: string,
  slug: string
): Article | null {
  const entries = articles[locale] || [];
  const entry = entries.find(
    (a) => a.category === category && a.slug === slug
  );

  if (!entry) return null;

  return {
    meta: {
      title: entry.title || "",
      slug: entry.slug || "",
      category: entry.category || "",
      level: entry.level || "beginner",
      date: entry.date || "",
      updated: entry.updated || undefined,
      author: entry.author || "Gemini Lab",
      description: entry.description || "",
      tags: entry.tags || [],
      premium: entry.premium || false,
    },
    content: "",
  };
}

export function getArticlesByCategory(locale: string, category: string): ArticleMeta[] {
  return getArticles(locale).filter((a) => a.category === category);
}

export function getAllArticleSlugs(
  locale: string
): { category: string; slug: string }[] {
  const entries = articles[locale] || [];
  return entries.map((a) => ({ category: a.category, slug: a.slug }));
}

export const CATEGORIES = [
  { id: "gemini-basics", icon: "◉", color: "var(--accent-coral)" },
  { id: "gemini-dev", icon: "⟐", color: "var(--accent-blue)" },
  { id: "gemini-api", icon: "◈", color: "var(--accent-green)" },
  { id: "gemini-advanced", icon: "⬡", color: "var(--accent-gold)" },
  { id: "gemini-workspace", icon: "◧", color: "var(--accent-blue)" },
  { id: "gemini-updates", icon: "◎", color: "var(--accent-green)" },
] as const;

// ── Blog ──

export interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blog = blogData as Record<string, any[]>;

export function getBlogPosts(locale: string): BlogPostMeta[] {
  const entries = blog[locale] || [];
  return entries.map((entry) => ({
    title: entry.title || "",
    slug: entry.slug || "",
    date: entry.date || "",
    author: entry.author || "Gemini Lab",
    description: entry.description || "",
    tags: entry.tags || [],
  }));
}

export function getBlogPost(locale: string, slug: string): BlogPost | null {
  const entries = blog[locale] || [];
  const entry = entries.find((p) => p.slug === slug);
  if (!entry) return null;
  return {
    meta: {
      title: entry.title || "",
      slug: entry.slug || "",
      date: entry.date || "",
      author: entry.author || "Gemini Lab",
      description: entry.description || "",
      tags: entry.tags || [],
    },
    content: "",
  };
}

/**
 * Fetch article HTML content from static assets (async).
 * Content is stored as individual HTML files in public/content/articles/
 * and served by Cloudflare CDN — NOT bundled into the worker.
 */
export async function getArticleContent(
  locale: string,
  category: string,
  slug: string
): Promise<string> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemilab.net";
  try {
    const res = await fetch(
      `${siteUrl}/content/articles/${locale}/${category}/${slug}.html`,
      { cache: "force-cache" }
    );
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}

/**
 * Fetch blog post HTML content from static assets (async).
 */
export async function getBlogContent(
  locale: string,
  slug: string
): Promise<string> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gemilab.net";
  try {
    const res = await fetch(
      `${siteUrl}/content/blog/${locale}/${slug}.html`,
      { cache: "force-cache" }
    );
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}
