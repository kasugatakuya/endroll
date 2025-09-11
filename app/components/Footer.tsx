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
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-6 mb-4">
          <Link
            href="https://x.com/monkey39714"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/x-icon.webp" width={24} height={24} alt="X" />
          </Link>
          <Link
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
          >
            <Image
              src="/instagram-img.webp"
              width={24}
              height={24}
              alt="Instagram"
            />
          </Link>
          <Link
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
          >
            <Image
              src="/facebook-icon.webp"
              width={24}
              height={24}
              alt="Facebook"
            />
          </Link>
          <Link
            href="#"
            className="opacity-70 hover:opacity-100 transition-opacity p-2"
          >
            <Image
              src="/youtube.webp"
              width={24}
              height={24}
              alt="YouTube"
              className="rounded"
            />
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-80">© Endroll 2024 - {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
