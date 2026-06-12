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
  { from: "/blog/gemini-workspace-tax-records-legal-documents", to: "/blog" },
  { from: "/blog/tax-battle-complete-chronicle", to: "/blog" },
  { from: "/blog/toyama-darkness-uozu-tax-office-kura-ai-reform", to: "/blog" },
  { from: "/blog/toyama-tax-office-darkness-systemic-injustice", to: "/blog" },
  { from: "/blog/toyama-tax-office-kura-recording-refusal-health-crisis", to: "/blog" },
  { from: "/blog/uozu-tax-office-update-fighting-systemic-injustice", to: "/blog" },
  { from: "/blog/why-ai-should-replace-tax-officials", to: "/blog" },
  // ===== 品質整理 2026-05-15: 低品質記事削除（完全ガイド系/徹底解説系 183本）=====
  { from: "/articles/gemini-api/veo3-video-generation-api", to: "/articles/gemini-api" },
  { from: "/articles/gemini-api/context-caching-guide", to: "/articles/gemini-api" },
  { from: "/articles/gemini-basics/gemini-rsfc-structured-prompt-complete-guide", to: "/articles/gemini-basics" },
  { from: "/articles/gemini-basics/gemini-troubleshooting-common-errors-2026", to: "/articles/gemini-basics" },
  { from: "/articles/gemini-basics/gemini-gems-custom-ai-guide", to: "/articles/gemini-basics" },
  { from: "/articles/gemini-basics/what-is-gemini", to: "/articles/gemini-basics" },
  { from: "/articles/gemini-basics/gemini-3-pro-guide", to: "/articles/gemini-basics" },
  { from: "/articles/gemini-dev/gemini-3-2-duckdb-streamlit-data-agent-production-guide", to: "/articles/gemini-dev" },
  { from: "/articles/gemini-updates/gemma-4-complete-guide", to: "/articles/gemini-updates" },
  // 2026-05-15 Tax-related article removal (YMYL compliance for GSC崩壊 recovery)
  { from: "/articles/gemini-dev/gemini-2-5-pro-niche-vertical-saas-150k-monthly", to: "/articles/gemini-dev" },

  // 2026-05-15 GSC崩壊対応: TMPL_TITLE違反+他違反の記事を一括削除（Helpful Content System対応）
  { from: "/articles/gemini-advanced/gemini-2-5-pro-deep-research-guide", to: "/articles/gemini-advanced" },
  { from: "/articles/gemini-basics/what-is-gemma-4", to: "/articles/gemini-basics" },
  { from: "/articles/gemini-dev/gemini-code-assist-outline-feature-guide", to: "/articles/gemini-dev" },
  { from: "/articles/gemini-workspace/google-workspace-gemini-practical-daily-workflow", to: "/articles/gemini-workspace" },

  // 2026-05-15 GSC崩壊対応 Phase 3: 4+違反の重度低品質記事を削除
  // 2026-05-25 YMYL (tax) removal
  { from: "/articles/gemini-basics/gemini-gems-monetization-guide", to: "/articles/gemini-basics" },
  // 2026-05-25 YMYL (tax) removal
  { from: "/articles/gemini-updates/weekly-pickup-2026-0417", to: "/articles/gemini-updates" },
  // 2026-05-25 YMYL (tax) removal
  { from: "/articles/gemini-updates/weekly-pickup-2026-0424", to: "/articles/gemini-updates" },
  // 2026-05-25 cross-site duplicate slug rename
  { from: "/articles/gemini-basics/ai-tools-directory-2026-part2", to: "/articles/gemini-basics/gemini-ai-tools-directory-2026-part2" },
  // 2026-05-25 cross-site duplicate slug rename
  { from: "/articles/gemini-basics/ai-narration-video-workflow-2026", to: "/articles/gemini-basics/gemini-ai-narration-video-workflow-2026" },

  { from: "/articles/gemini-api/gemini-api-request-hedging-tail-latency-production-design", to: "/articles/gemini-api/gemini-api-request-hedging-p99-latency-design" },
  { from: "/articles/gemini-basics/gemini-gems-custom-instructions-not-working", to: "/articles/gemini-basics/gemini-gems-custom-instructions-mastery" },
  { from: "/articles/gemini-dev/gemini-api-nuxt3-fullstack-ai-production-guide", to: "/articles/gemini-dev/gemini-api-supabase-fullstack-ai-app-production" },
  // P1 brushup: -guide slug renames (2026-06-09)
  { from: "/articles/gemini-api/gemini-deep-research-agent-api-guide", to: "/articles/gemini-api/gemini-deep-research-agent-api" },
  { from: "/articles/gemini-api/gemini-function-calling-structured-output-guide", to: "/articles/gemini-api/gemini-function-calling-structured-output" },
  { from: "/articles/gemini-dev/android-studio-gemma4-local-llm-code-assist-guide", to: "/articles/gemini-dev/android-studio-gemma4-local-llm-code-assist" },
  { from: "/articles/gemini-advanced/gemini-workspace-ai-expanded-access-automation-guide", to: "/articles/gemini-advanced/gemini-workspace-ai-expanded-access-automation" },
  { from: "/articles/gemini-advanced/openclaw-gemini-ai-partner-guide", to: "/articles/gemini-advanced/openclaw-gemini-ai-partner" },
  { from: "/articles/gemini-api/gemini-image-generation-errors-fix-guide", to: "/articles/gemini-api/gemini-image-generation-errors-fix" },
  { from: "/articles/gemini-api/gemini-api-git-commit-message-auto-generator-guide", to: "/articles/gemini-api/gemini-api-git-commit-message-auto-generator" },
  { from: "/articles/gemini-dev/gemini-personal-intelligence-system-integration-complete-guide", to: "/articles/gemini-dev/gemini-personal-intelligence-system-integration-complete" },
  { from: "/articles/gemini-dev/gemini-veo-narration-video-guide", to: "/articles/gemini-dev/gemini-veo-narration-video" },
  { from: "/articles/gemini-basics/gemini-deep-research-stops-fix-guide", to: "/articles/gemini-basics/gemini-deep-research-stops-fix" },
  { from: "/articles/gemini-dev/gemini-cli-terminal-ai-development-guide", to: "/articles/gemini-dev/gemini-cli-terminal-ai-development" },
  { from: "/articles/gemini-api/gemini-live-api-emotion-recognition-app-guide", to: "/articles/gemini-api/gemini-live-api-emotion-recognition-app" },
  { from: "/articles/gemini-advanced/gemma-4-rag-production-system-guide", to: "/articles/gemini-advanced/gemma-4-rag-production-system" },
  { from: "/articles/gemini-api/gemini-api-production-security-guide", to: "/articles/gemini-api/gemini-api-production-security" },
  { from: "/articles/gemini-api/gemini-api-tts-swiftui-avaudioengine-ios-guide", to: "/articles/gemini-api/gemini-api-tts-swiftui-avaudioengine-ios" },
  { from: "/articles/gemini-api/gemini-tts-api-voice-generation-guide", to: "/articles/gemini-api/gemini-tts-api-voice-generation" },
  { from: "/articles/gemini-api/gemini-2-multimodal-live-api-complete-guide", to: "/articles/gemini-api/gemini-2-multimodal-live-api-complete" },
  { from: "/articles/gemini-api/gemini-api-pinecone-rag-production-guide", to: "/articles/gemini-api/gemini-api-pinecone-rag-production" },
  { from: "/articles/gemini-api/gemini-api-spring-boot-java-guide", to: "/articles/gemini-api/gemini-api-spring-boot-java" },
  { from: "/articles/gemini-advanced/gemma-4-api-advanced-integration-guide", to: "/articles/gemini-advanced/gemma-4-api-advanced-integration" },
  { from: "/articles/gemini-basics/gemini-model-selection-guide", to: "/articles/gemini-basics/gemini-model-selection" },
  { from: "/articles/gemini-api/gemini-api-multilingual-translation-automation-guide", to: "/articles/gemini-api/gemini-api-multilingual-translation-automation" },
  { from: "/articles/gemini-advanced/gemini-automated-monetization-infrastructure-guide", to: "/articles/gemini-advanced/gemini-automated-monetization-infrastructure" },
  { from: "/articles/gemini-api/gemini-api-spring-boot-enterprise-production-guide", to: "/articles/gemini-api/gemini-api-spring-boot-enterprise-production" },
  { from: "/articles/gemini-basics/gemini-20-flash-10-practical-use-cases-real-examples-guide", to: "/articles/gemini-basics/gemini-20-flash-10-practical-use-cases-real-examples" },
  { from: "/articles/gemini-api/gemini-api-function-calling-complete-guide", to: "/articles/gemini-api/gemini-api-function-calling-complete" },
  { from: "/articles/gemini-api/gemini-api-postgresql-ai-database-optimization-guide", to: "/articles/gemini-api/gemini-api-postgresql-ai-database-optimization" },
  { from: "/articles/gemini-dev/gemini-api-custom-mcp-server-typescript-guide", to: "/articles/gemini-dev/gemini-api-custom-mcp-server-typescript" },
  { from: "/articles/gemini-api/gemini-25-pro-system-instructions-mastery-guide", to: "/articles/gemini-api/gemini-25-pro-system-instructions-mastery" },
  { from: "/articles/gemini-api/gemini-2-5-pro-latest-api-implementation-complete-guide", to: "/articles/gemini-api/gemini-2-5-pro-latest-api-implementation-complete" },
  { from: "/articles/gemini-dev/google-colab-gemini-guide", to: "/articles/gemini-dev/google-colab-gemini" },
  { from: "/articles/gemini-api/gemini-25-pro-api-troubleshooting-complete-guide", to: "/articles/gemini-api/gemini-25-pro-api-troubleshooting-complete" },
  { from: "/articles/gemini-api/gemini-batch-processing-api-guide", to: "/articles/gemini-api/gemini-batch-processing-api" },
  { from: "/articles/gemini-api/gemini-file-search-api-grounding-guide", to: "/articles/gemini-api/gemini-file-search-api-grounding" },
  { from: "/articles/gemini-api/gemini-api-slack-bot-production-guide", to: "/articles/gemini-api/gemini-api-slack-bot-production" },
  { from: "/articles/gemini-dev/gemini-cli-mcp-server-integration-guide", to: "/articles/gemini-dev/gemini-cli-mcp-server-integration" },
  { from: "/articles/gemini-dev/gemini-api-terraform-iac-production-infrastructure-guide", to: "/articles/gemini-dev/gemini-api-terraform-iac-production-infrastructure" },
  { from: "/articles/gemini-advanced/gemini-advanced-reasoning-complete-guide", to: "/articles/gemini-advanced/gemini-advanced-reasoning-complete" },
  { from: "/articles/gemini-dev/google-cloud-workflows-gemini-api-orchestration-production-guide", to: "/articles/gemini-dev/google-cloud-workflows-gemini-api-orchestration-production" },
  { from: "/articles/gemini-dev/gemini-api-kotlin-multiplatform-ios-android-ai-guide", to: "/articles/gemini-dev/gemini-api-kotlin-multiplatform-ios-android-ai" },
  { from: "/articles/gemini-dev/gemini-api-tauri-desktop-ai-app-complete-guide", to: "/articles/gemini-dev/gemini-api-tauri-desktop-ai-app-complete" },
  { from: "/articles/gemini-api/gemini-api-micro-saas-monetization-complete-guide", to: "/articles/gemini-api/gemini-api-micro-saas-monetization-complete" },
  { from: "/articles/gemini-api/gemini-api-vector-database-complete-comparison-guide", to: "/articles/gemini-api/gemini-api-vector-database-complete-comparison" },
  { from: "/articles/gemini-dev/gemini-code-assist-enterprise-team-deployment-guide", to: "/articles/gemini-dev/gemini-code-assist-enterprise-team-deployment" },
  { from: "/articles/gemini-api/gemini-api-caching-80percent-cost-reduction-production-guide", to: "/articles/gemini-api/gemini-api-caching-80percent-cost-reduction-production" },
  { from: "/articles/gemini-api/veo3-lyria3-api-automated-content-pipeline-production-guide", to: "/articles/gemini-api/veo3-lyria3-api-automated-content-pipeline-production" },
  { from: "/articles/gemini-dev/gemini-api-bun-hono-lightweight-backend-production-guide", to: "/articles/gemini-dev/gemini-api-bun-hono-lightweight-backend-production" },
  { from: "/articles/gemini-workspace/gemini-workspace-addons-ai-sidepanel-marketplace-guide", to: "/articles/gemini-workspace/gemini-workspace-addons-ai-sidepanel-marketplace" },
  { from: "/articles/gemini-api/gemini-api-swiftui-production-app-complete-guide", to: "/articles/gemini-api/gemini-api-swiftui-production-app-complete" },
  { from: "/articles/gemini-workspace/gemini-frontend-dev-complete-guide", to: "/articles/gemini-workspace/gemini-frontend-dev-complete" },
  { from: "/articles/gemini-api/gemini-api-graphrag-knowledge-graph-hybrid-rag-production-guide", to: "/articles/gemini-api/gemini-api-graphrag-knowledge-graph-hybrid-rag-production" },
  { from: "/articles/gemini-advanced/gemini-25-pro-thinking-budget-reasoning-control-guide", to: "/articles/gemini-advanced/gemini-25-pro-thinking-budget-reasoning-control" },
  { from: "/articles/gemini-dev/gemini-api-supabase-fullstack-ai-app-production-guide", to: "/articles/gemini-dev/gemini-api-supabase-fullstack-ai-app-production" },
  { from: "/articles/gemini-api/gemini-api-opentelemetry-distributed-tracing-production-guide", to: "/articles/gemini-api/gemini-api-opentelemetry-distributed-tracing-production" },
  { from: "/articles/gemini-api/gemini-api-cloudflare-vectorize-edge-rag-production-guide", to: "/articles/gemini-api/gemini-api-cloudflare-vectorize-edge-rag-production" },
  { from: "/articles/gemini-advanced/gemini-2-5-flash-thinking-reasoning-complete-guide", to: "/articles/gemini-advanced/gemini-2-5-flash-thinking-reasoning-complete" },
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
      // Slug rename (2026-06-12): de-templated slug for premium upgrade, old -guide slug 301s to new
      {
        source: "/articles/gemini-api/gemini-api-cost-optimization-complete-guide",
        destination: "/articles/gemini-api/gemini-api-cost-cut-caching-model-routing-batch-record",
        permanent: true,
      },
      {
        source: "/:locale(ja|en)/articles/gemini-api/gemini-api-cost-optimization-complete-guide",
        destination: "/:locale/articles/gemini-api/gemini-api-cost-cut-caching-model-routing-batch-record",
        permanent: true,
      },
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
