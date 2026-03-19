# Gemini Lab サイト構築テンプレート — SKILL.md

このスキルファイルは gemilab.net の構築手順・アーキテクチャ・運用方法をまとめたものです。
同じ雛形で新しいナレッジベースサイトを立ち上げる際のリファレンスとして使えます。

---

## アーキテクチャ概要

| レイヤー | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router, Turbopack) |
| 言語 | TypeScript |
| スタイル | Tailwind CSS 4 + CSS Variables (ダーク/ライト対応) |
| i18n | next-intl v4（ja / en） |
| コンテンツ | MDX → ビルド時にJSONへプリコンパイル |
| ホスティング | Cloudflare Pages（OpenNext アダプター） |
| 決済 | Stripe Checkout Sessions（サブスクリプション） |
| 分析 | Google Analytics (gtag.js) |
| OGP | 静的 PNG（public/og/default.png、1200×630px）— 全ページ共通 |
| 検索 | クライアントサイド検索（タグ・タイトル・説明文のスコアベースランキング） |
| RSS | /feed.xml (ja), /en/feed.xml (en) — 最新50件 |
| サイトマップ | 動的生成（hreflang付き、記事・ブログ・静的ページ） |

---

## サイト規模（2026-03-20 現在）

- 記事: JA 134本 / EN 109本 = 243エントリ（うちプレミアム JA 32本 / EN 21本）
- ブログ: JA 8本 / EN 7本 = 15エントリ
- カテゴリ: gemini-api (49), gemini-advanced (29), gemini-basics (28), gemini-dev (26), gemini-workspace (1), gemini-updates (1)

---

## ディレクトリ構成

```
├── content/
│   ├── articles/
│   │   ├── ja/{category}/{slug}.mdx    # 日本語記事
│   │   └── en/{category}/{slug}.mdx    # 英語記事
│   └── blog/
│       ├── ja/{slug}.mdx
│       └── en/{slug}.mdx
├── public/
│   ├── icon.svg, icon-192.png, icon-512.png, apple-touch-icon.png
│   ├── favicon-16.png, favicon-32.png, favicon-48.png
│   ├── robots.txt                      # Sitemap + RSS 参照、AI クローラー許可
│   └── llms.txt                        # LLM アクセス情報
├── scripts/
│   └── generate-content.mjs           # MDX → JSON プリコンパイル
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # ルートレイアウト（メタデータ基盤）
│   │   ├── globals.css                 # テーマ変数 + 記事スタイル
│   │   ├── sitemap.ts                  # 動的サイトマップ（hreflang付き）
│   │   ├── not-found.tsx
│   │   ├── feed.xml/route.ts           # RSS フィード（日本語）
│   │   ├── en/feed.xml/route.ts        # RSS フィード（英語）
│   │   ├── [locale]/
│   │   │   ├── layout.tsx              # ロケール別レイアウト（GA, フォント, テーマ, RSS link）
│   │   │   ├── page.tsx                # ホームページ（JSON-LD WebSite schema）
│   │   │   ├── HomeClient.tsx          # ホームページUI（クライアント）— 「すべての記事 (N) →」で総記事数を表示
│   │   │   ├── articles/
│   │   │   │   ├── page.tsx            # 記事一覧（ページネーション + カテゴリフィルター）
│   │   │   │   └── [category]/
│   │   │   │       ├── page.tsx        # カテゴリ別一覧
│   │   │   │       └── [slug]/
│   │   │   │           └── page.tsx    # 記事詳細（TOC, シェア, 関連記事）
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── guides/page.tsx
│   │   │   ├── support/page.tsx        # サポートページ（Ko-fi, PayPal, Wise, Revolut）
│   │   │   ├── privacy/page.tsx
│   │   │   ├── membership/page.tsx     # メンバーシップページ（プラン一覧 + プレミアム記事一覧）
│   │   │   ├── terms/page.tsx
│   │   │   └── tokusho/page.tsx
│   │   └── api/
│   │       ├── checkout/route.ts       # Stripe Checkout Session 作成（Pro: subscription / Premium: payment）
│   │       ├── customer-portal/route.ts # Stripe Customer Portal
│   │       ├── verify-session/route.ts  # Stripe セッション検証 → KV 保存 → Cookie 発行
│   │       ├── webhook/route.ts         # Stripe Webhook 受信 → KV 書き込み
│   │       ├── restore-access/route.ts  # Cookie 消失時のアクセス復元
│   │       └── search-data/route.ts    # 検索用 JSON API（タグ・レベル含む）
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # 固定ヘッダー（検索, テーマ, 言語, ♥サポート, メンバーシップリンク）
│   │   │   ├── Footer.tsx
│   │   │   ├── LocaleSwitcher.tsx      # 言語切り替え
│   │   │   ├── ThemeProvider.tsx        # ダーク/ライトモード
│   │   │   └── ThemeToggle.tsx
│   │   ├── mdx/
│   │   │   ├── Callout.tsx             # info/warning/tip/danger
│   │   │   └── mdx-components.tsx
│   │   └── ui/
│   │       ├── ArticlePagination.tsx   # ページネーション（← 1 2 3 ... →）
│   │       ├── BookRecommendation.tsx  # Amazon アソシエイト書籍
│   │       ├── GrainOverlay.tsx        # フィルムグレインエフェクト
│   │       ├── LevelBadge.tsx          # 初級/中級/上級バッジ
│   │       ├── MembershipCTA.tsx       # 無料記事末尾に自動表示するメンバーシップ誘導CTA
│   │       ├── NewsTicker.tsx          # 画面上部のスクロールニュース
│   │       ├── PremiumPaywall.tsx      # 有料記事のペイウォール（Pro/Premiumボタン）
│   │       ├── RelatedArticles.tsx     # 関連記事（スコアベース: カテゴリ+3, タグ+2）
│   │       ├── ScrollToTop.tsx         # フローティング「トップへ戻る」ボタン
│   │       ├── SearchModal.tsx         # 検索モーダル（タグ検索, キーボード操作, ハイライト）
│   │       ├── ShareButtons.tsx        # X / はてブ / LINE シェア
│   │       └── TableOfContents.tsx     # 目次自動生成（h2/h3, IntersectionObserver）
│   ├── generated/
│   │   ├── articles.json               # プリコンパイル済み記事データ
│   │   └── blog.json                   # プリコンパイル済みブログデータ
│   ├── i18n/
│   │   ├── config.ts, routing.ts, request.ts, navigation.ts
│   │   └── messages/{ja,en}.json       # UIテキスト翻訳
│   ├── lib/
│   │   ├── content.ts                  # 記事・ブログ取得API
│   │   └── premium.ts                  # Cookie → KV 検証ユーティリティ（getPremiumAccess()）
│   └── middleware.ts                   # next-intl ミドルウェア
├── wrangler.toml                       # Cloudflare Workers 設定
├── open-next.config.ts                 # OpenNext アダプター設定
├── SKILL.md                            # ← このファイル
├── CONTENT_LOG.md                      # 全記事・ブログの管理ログ
└── package.json
```

---

## カテゴリ定義（5カテゴリ）

| ID | ラベル（JA） | ラベル（EN） | アイコン | カラー |
|---|---|---|---|---|
| gemini-basics | Gemini 基本 | Gemini Basics | ◉ | accent-coral |
| gemini-dev | 開発ツール連携 | Developer Tools | ⟐ | accent-blue |
| gemini-api | API / SDK | API & SDK | ◈ | accent-green |
| gemini-advanced | 高度な活用 | Advanced | ⬡ | accent-gold |
| gemini-updates | アップデート情報 | Updates | — | — |

---

## 認証情報リファレンス

| 項目 | 値 / 場所 |
|------|-----------|
| GitHub リポジトリ | masakihirokawa/gemilab.net |
| Cloudflare Account ID | 8c716b96a609673f9521f94e10d8edaa |
| Cloudflare Worker 名 | gemilab |
| Google Analytics | G-CJWM68JK57 |
| Amazon Associates | pinocchio-22 |
| Ko-fi | ko-fi.com/dolice |

---

## コンテンツシステム

**MDX 記事のフロントマター:**
```yaml
---
title: "記事タイトル"
slug: "url-slug"
category: "category-name"
level: "beginner|beginner-intermediate|intermediate|intermediate-advanced|advanced"
date: "YYYY-MM-DDTHH:MM"
updated: "YYYY-MM-DDTHH:MM"   # ソート優先度制御（任意）
author: "Gemini Lab"
description: "メタディスクリプション"
tags: ["tag1", "tag2"]
premium: false  # 有料記事の場合 true
---
```

**ブログ記事のフロントマター:**
```yaml
---
title: "ブログタイトル"
slug: "blog-slug"
date: "YYYY-MM-DD"
author: "Gemini Lab"
description: "160文字以内の説明"
tags: ["タグ1", "タグ2"]
---
```

**⚠️ 重要**: ブログ記事の `date` は `"YYYY-MM-DD"` 形式のみ（時刻を含めない）。

**ソートルール:** `updated` フィールドがあればそれを優先、なければ `date`。

**プリコンパイル:** `scripts/generate-content.mjs` で MDX を HTML に変換し `src/generated/articles.json` に出力。`npm run generate` で手動実行。

---

## 日常運用

### 記事の追加

1. `content/articles/{locale}/{category}/{slug}.mdx` を作成（ja + en）
2. `node scripts/generate-content.mjs` で JSON 再生成
3. `npx opennextjs-cloudflare build` でビルド
4. `git push origin main` でデプロイ

### ニュースティッカーの更新

`src/components/ui/NewsTicker.tsx` の `NEWS_ITEMS` オブジェクトを編集。

---

## Stripe 決済

現行価格: Tip ¥150/$1.50、Pro ¥380/$3（初月無料）、Premium ¥1,480/$10（永久アクセス）。

Premium TTL: KV レコード + Cookie ともに **10年**（`10 * 365 * 24 * 3600`）。
既存会員は `getPremiumAccess()` で訪問時に自動延長。

各 Price ID は `_documents/_stripe/stripe_settings.txt` を参照。

---

## OGP 設定

- `og:image:type: "image/png"` を必ず含める（LINE 対応必須）
- `twitter.images` はオブジェクト配列 `[{ url, alt }]` で指定
- `localeDetection: false`（next-intl routing.ts）
- `opengraph-image.tsx` は使用しない

---

## デプロイ

```bash
# ビルド（OpenNext for Cloudflare）
npx opennextjs-cloudflare build

# デプロイ（GitHub連携で自動、または手動）
git push origin main
```

---

## 技術スタック詳細

| パッケージ | バージョン | 用途 |
|---|---|---|
| next | 16.1.6 | フレームワーク |
| react / react-dom | 19.2.3 | UI ライブラリ |
| next-intl | ^4.8.3 | i18n |
| gray-matter | ^4.0.3 | MDX フロントマター解析 |
| unified + remark + rehype | ^11 | MDX → HTML 変換 |
| rehype-pretty-code + shiki | | コードハイライト |
| stripe | ^20.4.1 | 決済 |
| @opennextjs/cloudflare | ^1.17.1 | Cloudflare Pages アダプター |
| tailwindcss | ^4 | スタイル |
| wrangler | ^4.71.0 | Cloudflare CLI |

---

## ⚠ 既知の問題と対応

### 1. MDX 内ハードコードの関連記事リンクによる架空記事表示

**対応**: MDX ファイル内の `## 関連記事` セクションは全削除（`RelatedArticles.tsx` が動的に処理するため不要）。`scripts/generate-content.mjs` にバリデーション追加済み。

### 2. Tailwind v4 Preflight によるリストスタイル消去

**対応**: `globals.css` の `.article-content ul/ol` に `list-style-type` と `li::marker` スタイルを明示指定。

### 3. パンくずリストのロケール未対応

**対応**: `{locale === "ja" ? "記事一覧" : "Articles"}` で切り替え。
