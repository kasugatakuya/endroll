import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// フォントの設定
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // フォント読み込みの最適化
});

// サイトの基本情報を定数として定義
const SITE_CONFIG = {
  title: "Endroll | ロックバンド",
  description:
    "ロックバンドEndrollの公式サイトです。Endrollに関する、ニュース、ライブスケジュール、楽曲、メンバー紹介、グッズなどご覧いただけます。",
  url: "https://endroll.vercel.app",
  siteName: "Endroll",
  keywords: [
    "Endroll",
    "endroll",
    "endrollband",
    "endroll_band",
    "endroll_band_official",
    "endroll_official",
    "endroll_official_website",
    "endroll_website",
    "endroll_homepage",
    "エンドロール",
    "エンドロール公式サイト",
    "バンド",
    "ロック",
    "邦ロック",
    "JPOP",
    "ロックバンド",
    "曲",
    "LIVE",
    "作曲",
    "ギター",
    "ベース",
    "ドラム",
    "音楽",
    "アルバム",
    "ホームページ",
    "音楽バンド",
    "映画",
    "エンドロール",
  ],
  googleVerification: "r4vs5K6kyRpFbT2eQ3xlFxlQbUmRrk_8z6irkNv4HmM",
} as const;

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.siteName}`, // ページごとのタイトル設定用
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords.join(", "),

  // アプリケーション名を明示的に設定
  applicationName: SITE_CONFIG.title,

  // 基本URL設定
  metadataBase: new URL(SITE_CONFIG.url),

  // アイコン設定
  icons: {
    icon: "/endroll.png",
    shortcut: "/endroll.png",
    apple: "/endroll.png",
  },

  // Open Graph設定（強化版）
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: "website",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    locale: "ja_JP",
    images: [
      {
        url: `${SITE_CONFIG.url}/endroll.png`,
        width: 1200,
        height: 630,
        alt: "Endroll ロックバンド",
      },
    ],
  },

  // Twitter Cards設定（強化版）
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    site: "@endroll_band",
    creator: "@endroll_band",
    images: [`${SITE_CONFIG.url}/endroll.png`],
  },

  // 正規URL設定
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      ja: SITE_CONFIG.url,
      "x-default": SITE_CONFIG.url,
    },
  },

  // SEO設定
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

  // Google Search Console認証
  verification: {
    google: SITE_CONFIG.googleVerification,
  },

  // その他のメタタグ
  authors: [{ name: "Endroll" }],
  creator: "Endroll",
  publisher: "Endroll",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "music",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <head>
        <meta name="application-name" content="Endroll | ロックバンド" />
        <meta name="apple-mobile-web-app-title" content="Endroll" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {/* ファビコン設定 - Google検索対応 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/endroll.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/endroll.png" />
        <link rel="apple-touch-icon-precomposed" href="/endroll.png" />
      </head>
      <body className={inter.className}>
        <div className="pb-20">
          <Header />
          {children}
          <Footer />
        </div>

        {/* 構造化データ (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Endroll",
              alternateName: "エンドロール",
              url: "https://endroll.vercel.app",
              genre: ["ロック", "邦ロック", "JPOP", "Rock"],
              description: "ロックバンドEndrollの公式サイトです。",
              foundingDate: "2020",
              foundingLocation: {
                "@type": "Place",
                name: "日本",
              },
              member: [
                {
                  "@type": "Person",
                  name: "ギタリスト",
                  roleName: "ギター",
                },
                {
                  "@type": "Person",
                  name: "ベーシスト",
                  roleName: "ベース",
                },
                {
                  "@type": "Person",
                  name: "ドラマー",
                  roleName: "ドラム",
                },
              ],
              sameAs: [
                "https://twitter.com/endroll_band",
                "https://www.instagram.com/endroll_band",
                "https://www.youtube.com/endroll_band",
                "https://www.facebook.com/endroll_band",
              ],
              logo: {
                "@type": "ImageObject",
                url: "https://endroll.vercel.app/endroll.png",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
