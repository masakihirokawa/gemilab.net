import type { Metadata } from "next";
import { getArticles } from "@/lib/content";
import HomeClient from "./HomeClient";

interface Props {
  params: Promise<{ locale: string }>;
}

const META: Record<string, { title: string; description: string }> = {
  ja: {
    title: "Gemini Lab — Google Gemini 日本語ナレッジベース",
    description:
      "Google Gemini・Gemini API・Google AI Studio の初心者から上級者までを対象にした日本語ナレッジベース。使い方、API連携、Function Calling、マルチモーダルまで網羅。",
  },
  en: {
    title: "Gemini Lab — Unofficial Gemini Knowledge Base",
    description:
      "Comprehensive knowledge base for Google Gemini, Gemini API, and Google AI Studio. From getting started to advanced topics — tutorials, API integration, Function Calling, and multimodal.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] || META.en;
  const prefix = locale === "ja" ? "" : `/${locale}`;
  const url = `https://gemilab.net${prefix}`;

  return {
    title: { absolute: m.title },
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      type: "website",
      siteName: "Gemini Lab",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      images: [{ url: "https://gemilab.net/og/default.png", width: 1200, height: 1200, alt: "Gemini Lab", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: "https://gemilab.net/og/default.png", alt: "Gemini Lab" }],
    },
    alternates: {
      canonical: url,
      languages: {
        ja: "https://gemilab.net",
        en: "https://gemilab.net/en",
        "x-default": "https://gemilab.net/en",
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  // トップで本文まで描画するのは最新 10 本。残りは件数計算にしか使わないので description / tags を落とし、
  // 全記事メタを丸ごと RSC ペイロードに載せていた旧実装（約 480KB）を解消する（2026-09-13）。
  const articles = getArticles(locale).map((a, i) => (i < 10 ? a : { ...a, description: "", tags: [] }));

  const prefix = locale === "ja" ? "" : `/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gemini Lab",
    url: `https://gemilab.net${prefix}`,
    description: META[locale]?.description || META.en.description,
    inLanguage: locale === "ja" ? "ja" : "en",
    publisher: {
      "@type": "Organization",
      name: "Gemini Lab",
      url: "https://gemilab.net",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient articles={articles} locale={locale} />
    </>
  );
}
