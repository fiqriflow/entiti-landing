"use client";

import Image from "next/image";
import { assets } from "@/lib/assets";
import { trackCTAClick } from "@/lib/analytics";

/**
 * HEADER / NAVBAR
 *
 * Cara edit cepat:
 * - Ganti logo -> edit `assets.brand.logoMark` di `lib/assets.ts`.
 * - Ganti teks "ENTITI" / tagline -> edit langsung di JSX di bawah.
 * - Tambah/ubah/hapus menu navbar -> edit array `NAV_LINKS` di bawah.
 * - Ganti link & teks tombol hijau -> edit elemen <a> paling bawah
 *   (href dan teks "Follow Sekarang").
 *
 * Tombol "Follow Sekarang" di bawah sudah dipasangi tracking klik CTA
 * (lihat onClick + PANDUAN-ANALYTICS.md).
 */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-dark px-8 py-8 lg:px-[128px] lg:py-8">
      <a href="#home" className="flex items-center gap-[6.5px]">
        <span className="relative block h-10 w-10 shrink-0">
          <Image
            src={assets.brand.logoMark}
            alt="Entiti Badminton Community"
            fill
            sizes="40px"
            className="object-contain"
          />
        </span>
        <span className="flex flex-col items-start leading-none text-white">
          <span className="font-black text-[26px] leading-none">ENTITI</span>
          <span className="text-[7px] font-medium leading-none tracking-wide">
            BADMINTON COMMUNITY
          </span>
        </span>
      </a>

      <nav className="hidden items-center justify-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-base font-bold leading-[1.7] text-white transition-opacity hover:opacity-80"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCTAClick("header", "Follow Sekarang")}
        className="hidden shrink-0 items-center justify-center rounded-lg bg-brandGreen px-6 py-2 text-base font-bold text-white transition-opacity hover:opacity-90 lg:flex"
      >
        Follow Sekarang
      </a>
    </header>
  );
}
