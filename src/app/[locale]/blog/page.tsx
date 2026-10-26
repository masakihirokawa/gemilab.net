import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { siteOgImage } from "@/lib/og";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ja" ? "ブログ" : "Blog";
  const description = locale === "ja"
    ? "Gemini の最新ニュース、アップデート情報、リリースノートを、実際に試した所感とあわせてまとめています。Gemini・Gemini API・Google AI Studio の変更点を追いかけたい方に向けたブログです。"
    : "Notes on the latest Gemini news, updates, and release notes — what changed in Gemini, the Gemini API, and Google AI Studio, with hands-on impressions.";
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: siteOgImage(locale), width: 1200, height: 630, alt: "Gemini Lab", type: "image/png" }] },
    alternates: {
      canonical: locale === "ja" ? "https://gemilab.net/blog" : `https://gemilab.net/en/blog`,
      languages: {
        ja: "https://gemilab.net/blog",
        en: "https://gemilab.net/en/blog",
        "x-default": "https://gemilab.net/en/blog",
      },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = getBlogPosts(locale);
  const isJa = locale === "ja";
  const prefix = locale === "ja" ? "" : `/${locale}`;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 120px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 20, height: 1, background: "color-mix(in srgb, var(--accent-coral) 40%, transparent)" }} />
          <span style={{ fontFamily: "var(--font-dm-mono), 'DM Mono', monospace", fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.15em" }}>
            BLOG
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 8 }}>
          {isJa ? "ブログ" : "Blog"}
        </h1>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
          {isJa
            ? "Gemini に関する最新ニュース、アップデート情報、リリースノートをお届けします。"
            : "Latest news, updates, and release notes about Gemini."}
        </p>
      </div>

      {/* Blog posts */}
      {posts.length === 0 ? (
        <div
          style={{
            padding: "60px 40px",
            border: "1px solid var(--border-subtle)",
            borderRadius: 8,
            background: "var(--bg-surface)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>✎</div>
          <h2 style={{ fontSize: 18, fontWeight: 400, color: "var(--text-secondary)", marginBottom: 8 }}>
            {isJa ? "準備中" : "Coming Soon"}
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.7, maxWidth: 400, margin: "0 auto" }}>
            {isJa
              ? "ブログ記事を準備しています。"
              : "Blog posts are being prepared."}
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`${prefix}/blog/${post.slug}`}
              className="bl"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <div className="bl-row">
                <div className="bl-main">
                  <h2 className="bl-title">
                    {post.title}
                  </h2>
                  <p className="bl-desc">
                    {post.description}
                  </p>
                </div>
                <time
                  dateTime={post.date.split("T")[0]}
                  className="bl-date mono"
                >
                  {post.date.split("T")[0]}
                </time>
              </div>
              {post.tags.length > 0 && (
                <div className="bl-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bl-tag mono">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
