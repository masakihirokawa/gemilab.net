import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gemini Lab — Google Gemini 日本語ナレッジベース",
    template: "%s | Gemini Lab",
  },
  description:
    "Google Gemini・Gemini API・Google AI Studio の初心者から上級者までを対象にした日本語ナレッジベース。使い方、API連携、Function Calling、マルチモーダルまで網羅。",
  metadataBase: new URL("https://gemilab.net"),
  keywords: [
    "Gemini", "Google Gemini", "Gemini API", "Google AI Studio", "Gemini 2.5",
    "AI", "LLM", "ナレッジベース", "使い方", "入門",
    "Gemini tutorial", "Gemini guide", "Gemini Lab",
  ],
  authors: [{ name: "Masaki Hirokawa", url: "https://dolice.design" }],
  creator: "Masaki Hirokawa",
  publisher: "Gemini Lab",
  openGraph: {
    siteName: "Gemini Lab",
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    title: "Gemini Lab — Google Gemini 日本語ナレッジベース",
    description:
      "Google Gemini・Gemini API・Google AI Studio の初心者から上級者までを対象にした日本語ナレッジベース",
    url: "https://gemilab.net",
    images: [{ url: "https://gemilab.net/og/default.png", width: 1200, height: 630, alt: "Gemini Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dolice",
    creator: "@dolice",
  },
  alternates: {
    canonical: "https://gemilab.net",
    languages: {
      "ja": "https://gemilab.net",
      "en": "https://gemilab.net/en",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gemini Lab",
              url: "https://gemilab.net",
              logo: "https://gemilab.net/icon-512.png",
              description: "Google Gemini の実践ガイド＆ナレッジベース",
              founder: { "@type": "Person", name: "Masaki Hirokawa", url: "https://dolice.design" },
              sameAs: ["https://dolice.design", "https://dolice.net"],
            }),
          }}
        />
      </head>
      {children}
    </html>
  );
}
