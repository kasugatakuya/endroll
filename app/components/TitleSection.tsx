import Link from "next/link";
import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
  backToTopButton?: boolean;
}

export function TitleSection({
  title,
  subtitle,
  backToTopButton = false,
}: TitleSectionProps) {
  return (
    <div className="title flex min-h-screen flex-col items-center justify-center relative">
      {/* 映画的な装飾要素 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>

      {/* フィルムグレイン効果 */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 1px, transparent 1px),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "100px 100px, 120px 120px",
        }}
      ></div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center">
        {/* エレガントなタイトル */}
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-endroll-gold">
          {title}
        </div>

        {/* サブタイトル */}
        <div className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-endroll-silver italic">
          {subtitle}
        </div>

        {/* エレガントなボタン */}
        <div className="mt-12">
          {backToTopButton ? (
            <Link href="/" className="btn-endroll inline-block">
              Return to Story
            </Link>
          ) : (
            <Link href="/live" className="btn-endroll inline-block">
              View
            </Link>
          )}
        </div>
      </div>

      {/* 映画的な光の演出 */}
      <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-gradient-to-b from-endroll-gold to-transparent opacity-20 rotate-12"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-24 bg-gradient-to-t from-endroll-gold to-transparent opacity-30 -rotate-12"></div>
    </div>
  );
}
