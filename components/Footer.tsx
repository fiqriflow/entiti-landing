import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * FOOTER
 *
 * Cara edit cepat:
 * - Ganti logo -> edit `assets.footer.logoMark` di `lib/assets.ts`.
 * - Ganti menu footer -> edit array `FOOTER_LINKS` di bawah.
 * - Ganti/tambah/hapus ikon sosial media -> edit array `SOCIALS` di bawah
 *   (icon, label, href). Untuk icon baru, tambahkan dulu URL/path-nya di
 *   `lib/assets.ts` bagian `footer`.
 * - Ganti teks copyright -> edit <p> paling bawah.
 */

const FOOTER_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Kegiatan", href: "#sessions" },
];

const SOCIALS = [
  { icon: assets.footer.instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: assets.footer.tiktok, label: "TikTok", href: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-16 bg-dark px-8 py-16 lg:px-[128px]">
      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col items-center gap-2 lg:items-start">
          <div className="flex items-center gap-2.5">
            <span className="relative block h-16 w-16 shrink-0">
              <Image
                src={assets.footer.logoMark}
                alt="Entiti Badminton Community"
                fill
                sizes="64px"
              />
            </span>
            <span className="flex flex-col items-start leading-none text-white">
              <span className="text-[42px] font-black leading-none">
                ENTITI
              </span>
              <span className="text-[11px] font-medium leading-none tracking-wide">
                BADMINTON COMMUNITY
              </span>
            </span>
          </div>
          <p className="text-base font-normal leading-[1.7] text-white">
            Nepak Tipis-Tipis Kuy
          </p>
        </div>

        <nav className="flex items-center justify-center gap-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-base font-bold leading-[1.7] text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-center gap-4 lg:justify-end">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="relative block h-6 w-6 shrink-0 transition-opacity hover:opacity-80"
            >
              <Image src={social.icon} alt={social.label} fill sizes="24px" />
            </a>
          ))}
        </div>
      </div>

      <div className="h-[2px] w-full bg-grey500" />

      <p className="w-full max-w-[600px] text-center text-sm font-normal leading-[1.7] text-white">
        Entiti Badminton Community 2026. All Rights Reserved
      </p>
    </footer>
  );
}
