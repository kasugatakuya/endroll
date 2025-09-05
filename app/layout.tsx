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
  url: "https://monkey-mauve-alpha.vercel.app",
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
    icon: '/endroll.png',
    shortcut: '/endroll.png',
    apple: '/endroll.png',
  },

  // Open Graph設定
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: "website",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title, // titleと統一
    locale: "ja_JP",
  },

  // Twitter Cards設定
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },

  // 正規URL設定
  alternates: {
    canonical: SITE_CONFIG.url,
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
      </head>
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
