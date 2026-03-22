import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import dynamic from "next/dynamic";

// Dynamic imports for non-critical components (reduces initial JS bundle)
const NewsTicker = dynamic(
  () => import("@/components/ui/NewsTicker").then((m) => ({ default: m.NewsTicker })),
  { ssr: false }
);
const ScrollToTop = dynamic(
  () => import("@/components/ui/ScrollToTop").then((m) => ({ default: m.ScrollToTop })),
  { ssr: false }
);
const CookieBanner = dynamic(
  () => import("@/components/layout/CookieBanner").then((m) => ({ default: m.CookieBanner })),
  { ssr: false }
);

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
            <NewsTicker />
            <main style={{ paddingTop: 99 }}>{children}</main>
            <Footer />
            <ScrollToTop />
            <CookieBanner
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
