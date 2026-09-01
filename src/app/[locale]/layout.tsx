import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsTicker } from "@/components/ui/NewsTicker";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

// Blocking script to prevent FOUC (Flash of Unstyled Content) on theme change
// Turbopack/esbuild keepNames helper: next-themes stringifies its init function into an inline
// <script>, and the compiled body calls __name(). Without a global __name the theme script throws
// "ReferenceError: __name is not defined" on every page (see STUMBLING_POINTS #122).
const nameShim = `if(typeof __name==="undefined"){window.__name=function(f,n){try{Object.defineProperty(f,"name",{value:n,configurable:true})}catch(e){}return f}};`;
const themeScript = `${nameShim}(function(){try{var t=localStorage.getItem('gemilab-theme');document.documentElement.setAttribute('data-theme',t||'dark')}catch(e){}})()`;

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
        {/* Google Analytics — loaded directly without consent gate (not required under Japanese law) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CJWM68JK57" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-CJWM68JK57')` }} />
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
            <Header />
            <NewsTicker />
            <main style={{ paddingTop: 99 }}>{children}</main>
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
