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
      images: [{ url: "https://gemilab.net/og/default.png", width: 1200, height: 630, alt: "Gemini Lab", type: "image/png" }],
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
  const articles = getArticles(locale);

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
    potentialAction: {
      "@type": "SearchAction",
      target: `https://gemilab.net${prefix}/articles?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const FAQ_DATA: Record<string, { q: string; a: string }[]> = {
    ja: [
      { q: "Gemini Labとは何ですか？", a: "Gemini Labは、GoogleのAIモデル「Gemini」に関する非公式の日本語ナレッジベースです。Gemini、Gemini API、Google AI Studioの使い方を初級から上級まで解説しています。" },
      { q: "Gemini APIとは何ですか？", a: "Gemini APIは、GoogleのGeminiモデルをアプリケーションに統合するためのAPIです。テキスト生成、画像認識、Function Calling、コード生成など多彩な機能を利用できます。" },
      { q: "Google AI Studioとは何ですか？", a: "Google AI Studioは、Gemini APIを無料で試せるWebベースのプロトタイピングツールです。プロンプトの設計・テスト、APIキーの取得、モデルのチューニングが可能です。" },
      { q: "Geminiの料金体系は？", a: "Gemini APIは無料枠が用意されており、Google AI Studioで利用可能です。有料プランではGoogle AI Plus（月額600円〜）、Google AI Pro（月額0円〜）、Google AI Ultra（月額18,000円）があります。" },
      { q: "Gemini 2.5 Proとは何ですか？", a: "Gemini 2.5 Proは、Googleの最新かつ最も高性能なAIモデルです。100万トークンのコンテキストウィンドウ、高度な推論能力、マルチモーダル対応が特徴で、複雑なタスクに最適です。" },
    ],
    en: [
      { q: "What is Gemini Lab?", a: "Gemini Lab is an unofficial, comprehensive knowledge base for Google's Gemini AI models. It covers Gemini, Gemini API, and Google AI Studio with articles ranging from beginner to advanced topics in both Japanese and English." },
      { q: "What is the Gemini API?", a: "The Gemini API lets you integrate Google's Gemini models into your applications. It supports text generation, image understanding, Function Calling, code generation, and multimodal capabilities." },
      { q: "What is Google AI Studio?", a: "Google AI Studio is a free web-based prototyping tool for the Gemini API. You can design and test prompts, obtain API keys, and tune models without writing code." },
      { q: "How much does Gemini cost?", a: "The Gemini API offers a generous free tier via Google AI Studio. Paid consumer plans include Google AI Plus (from ¥600/month), Google AI Pro (from ¥0/month trial), and Google AI Ultra (¥18,000/month)." },
      { q: "What is Gemini 2.5 Pro?", a: "Gemini 2.5 Pro is Google's latest and most capable AI model. It features a 1 million token context window, advanced reasoning, multimodal support, and is optimized for complex tasks." },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (FAQ_DATA[locale] || FAQ_DATA.en).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HomeClient articles={articles} locale={locale} />
    </>
  );
}
