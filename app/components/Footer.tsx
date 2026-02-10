"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 text-white z-10">
      <div>
        <div className="flex justify-center items-center gap-6">
          <Link
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/x-icon.webp"
                fill
                alt="X"
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/endroll_band/"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-6 h-6 relative">
              <Image
                src="/instagram-img.webp"
                fill
                alt="Instagram"
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
          >
            <div className="w-9 h-9 relative">
              <Image
                src="/facebook-icon.webp"
                fill
                alt="Facebook"
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="https://youtu.be/QXioQBF0kx8"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-7 h-7 relative">
              <Image
                src="/youtube.webp"
                fill
                alt="YouTube"
                className="object-contain rounded"
              />
            </div>
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-80">© Endroll 2025 - {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
