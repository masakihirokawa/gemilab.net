import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");


// 削除済み記事の 301 redirect（2026-05-09 品質監査により撤去 — _documents/_quality_audit/cross_site/2026-05-09_cross_site_report.md 参照）
// localePrefix: "as-needed" のため、ja は prefix なし、en は /en/ prefix
const REMOVED_ARTICLE_REDIRECTS_2026_05_09 = [
  { from: "/articles/gemini-api/premium-showcase-multimodal-app-development", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/google-document-ai-gemini-intelligent-document-processing-guide", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/vertex-ai-search-gemini-enterprise-rag-production-guide", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/gemini-api-cloud-run-usage-based-saas-complete-guide", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/gemini-structured-output-advanced", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/gemini-live-api-realtime-voice-app-guide", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/gemini-api-saas-monetization", to: "/articles/gemini-api" },
  { from: "/articles/gemini-dev/firebase-ai-logic-swiftui-ios-production-app-guide-2026", to: "/articles/gemini-dev" },
  // 2026-05-09 Tax content removal (backed up to _backup/tax_content_2026-05-09/, migrated to note.com)
  { from: "/blog/ai-tax-filing-and-fighting-injustice", to: "/blog" },
  { from: "/blog/gemini-workspace-long-battle-evidence-archive", to: "/blog" },
  { from: "/blog/gemini-workspace-tax-records-legal-documents", to: "/blog" },
  { from: "/blog/japan-tax-injustice-complete-record", to: "/blog" },
  { from: "/blog/tax-battle-complete-chronicle", to: "/blog" },
  { from: "/blog/toyama-darkness-uozu-tax-office-kura-ai-reform", to: "/blog" },
  { from: "/blog/toyama-tax-office-darkness-systemic-injustice", to: "/blog" },
  { from: "/blog/toyama-tax-office-kura-recording-refusal-health-crisis", to: "/blog" },
  { from: "/blog/uozu-tax-office-update-fighting-systemic-injustice", to: "/blog" },
  { from: "/blog/why-ai-should-replace-tax-officials", to: "/blog" },
];

const buildAuditRedirects = () => {
  const out: { source: string; destination: string; permanent: true }[] = [];
  for (const { from, to } of REMOVED_ARTICLE_REDIRECTS_2026_05_09) {
    out.push({ source: from, destination: to, permanent: true });
    out.push({ source: `/en${from}`, destination: `/en${to}`, permanent: true });
  }
  return out;
};

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      ...buildAuditRedirects(),
      // Legacy/orphan URL surfaced in GSC (2026-04-25): non-existent article slug, redirect to closest match
      {
        source: "/articles/gemini-api/gemini-api-multimodal-guide",
        destination: "/articles/gemini-api/multimodal-api-guide",
        permanent: true,
      },
      {
        source: "/:locale(ja|en)/articles/gemini-api/gemini-api-multimodal-guide",
        destination: "/:locale/articles/gemini-api/multimodal-api-guide",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css|woff2|woff|ttf|ico|png|jpg|jpeg|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
