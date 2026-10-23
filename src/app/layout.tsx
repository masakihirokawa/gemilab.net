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
    images: [{ url: "https://gemilab.net/og/site-ja.png", width: 1200, height: 630, alt: "Gemini Lab", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dolice",
    creator: "@dolice",
  },
  // alternates（canonical / hreflang）はここに置かない。ルートに置くと alternates を持たないページ
  //（タグページ・404 等）が「canonical=トップ」を継承し、noindex と canonical の矛盾シグナルを
  // 数千ページ分トップへ向けてしまう（2026-09-13 構造監査）。各 page.tsx が自分の canonical を宣言する。
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    // 2026-10-17: 角まで塗った正方形（iOS が自分で角を丸める）。差し替え時は ?v= を上げる（7 日キャッシュ）
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180" },
    ],
  },
  // ホーム画面に追加したときの名前（無いと iOS はそのページの <title> を使い、記事の題名や「Gemini Lab — …」が途中で切れて付いていた）
  manifest: "/manifest.json",
  applicationName: "Gemini Lab",
  // capable: false を明示（省略すると Next が mobile-web-app-capable=yes を出し、ホーム画面から開くと戻るボタンの無い全画面になる）
  appleWebApp: { title: "Gemini Lab", capable: false },
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
  return children;
}
