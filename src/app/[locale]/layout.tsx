import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { NewsTicker } from "@/components/ui/NewsTicker";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CookieBanner } from "@/components/layout/CookieBanner";

// Blocking script to prevent FOUC (Flash of Unstyled Content) on theme change
const themeScript = `(function(){try{var t=localStorage.getItem('gemilab-theme');document.documentElement.setAttribute('data-theme',t||'dark')}catch(e){}})()`;


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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=DM+Sans:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <GrainOverlay />
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
