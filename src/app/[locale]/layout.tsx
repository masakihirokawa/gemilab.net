import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DynamicNewsTicker, DynamicScrollToTop, DynamicCookieBanner } from "@/components/layout/DynamicComponents";

// Polyfill for esbuild's __name helper (required by next-themes ThemeProvider inline script in Turbopack builds)
const namePolyfill = `if(typeof __name==="undefined"){var __name=function(fn,name){Object.defineProperty(fn,"name",{value:name,configurable:true});return fn}}`;

// Blocking script to prevent FOUC (Flash of Unstyled Content) on theme change
const themeScript = `(function(){try{var t=localStorage.getItem('gemilab-theme');document.documentElement.setAttribute('data-theme',t||'dark')}catch(e){}})()`;

// Non-blocking Google Fonts loader
const fontUrl = "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=DM+Sans:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500;700&display=swap";
const fontScript = `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${fontUrl}';document.head.appendChild(l)})()`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Polyfill: esbuild __name helper for next-themes Turbopack compatibility */}
        <Script id="name-polyfill" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: namePolyfill }} />
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Google Analytics is loaded via CookieBanner after consent */}
        <link rel="alternate" type="application/rss+xml" title="Gemini Lab RSS" href={locale === "ja" ? "/feed.xml" : "/en/feed.xml"} />
        {/* Font loading: preconnect + async load (non-render-blocking) */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={fontUrl} />
        <script dangerouslySetInnerHTML={{ __html: fontScript }} />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link href={fontUrl} rel="stylesheet" />
        </noscript>
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {/* GrainOverlay moved to CSS (see globals.css ::after on body) */}
            <Header />
            <DynamicNewsTicker />
            <main style={{ paddingTop: 99 }}>{children}</main>
            <Footer />
            <DynamicScrollToTop />
            <DynamicCookieBanner
              gaId="G-CJWM68JK57"
              privacyHref={locale === "ja" ? "/privacy" : "/en/privacy"}
              locale={locale}
              storageKey="gemilab-cookie-consent"
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
