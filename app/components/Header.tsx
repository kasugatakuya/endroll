"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // モバイルメニューが開いている時にスクロールを防ぐ
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // クリーンアップ
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-endroll-gold/30">
        <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <div>
            <Link
              href="/"
              className="text-endroll-gold font-cinzel text-2xl md:text-3xl font-semibold tracking-wider"
            >
              Endroll
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/news"
              className="text-endroll-text font-cormorant text-base uppercase tracking-wider hover:text-endroll-gold transition-colors duration-300"
            >
              News
            </Link>
            <Link
              href="/live"
              className="text-endroll-text font-cormorant text-base uppercase tracking-wider hover:text-endroll-gold transition-colors duration-300"
            >
              Live
            </Link>
            <Link
              href="/music"
              className="text-endroll-text font-cormorant text-base uppercase tracking-wider hover:text-endroll-gold transition-colors duration-300"
            >
              Music
            </Link>
            <Link
              href="/member"
              className="text-endroll-text font-cormorant text-base uppercase tracking-wider hover:text-endroll-gold transition-colors duration-300"
            >
              Cast
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden bg-transparent border border-endroll-gold text-endroll-gold px-4 py-2 text-sm font-cormorant uppercase tracking-wider hover:bg-endroll-gold hover:text-black transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* モバイルメニューオーバーレイ */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* 背景オーバーレイ */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* メニューコンテンツ */}
          <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-6">
            <div className="flex flex-col items-center space-y-8">
              <Link
                href="/news"
                className="text-2xl font-light font-cinzel text-endroll-text hover:text-endroll-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/live"
                className="text-2xl font-light font-cinzel text-endroll-text hover:text-endroll-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Live
              </Link>
              <Link
                href="/music"
                className="text-2xl font-light font-cinzel text-endroll-text hover:text-endroll-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Music
              </Link>
              <Link
                href="/member"
                className="text-2xl font-light font-cinzel text-endroll-text hover:text-endroll-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Cast
              </Link>

              {/* 閉じるボタン */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-12 px-8 py-3 border border-endroll-gold text-endroll-gold font-cormorant text-sm uppercase tracking-wider hover:bg-endroll-gold hover:text-black transition-colors duration-300"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
