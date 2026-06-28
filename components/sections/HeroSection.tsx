"use client";

import Image from "next/image";
import { assets } from "@/lib/assets";
import { trackCTAClick } from "@/lib/analytics";

/**
 * SECTION 1 — HERO
 * Tampil paling atas, isinya headline + foto tim.
 *
 * Cara edit cepat:
 * - Ganti teks judul/deskripsi -> edit langsung di JSX di bawah (cari <h1> dan <p>).
 * - Ganti foto tim -> edit `assets.hero.teamPhoto` di file `lib/assets.ts`.
 * - Ganti link tombol WhatsApp -> ganti `href="https://wa.me/"` di bawah jadi
 *   link WA kamu, contoh: "https://wa.me/6281234567890".
 * - Hapus doodle (crown/sparkle/shuttlecock) -> hapus saja 3 blok <span> paling
 *   bawah, tidak akan merusak layout lain.
 *
 * Kedua tombol di bawah (WhatsApp & "Lihat Kategori") sudah dipasangi
 * tracking klik CTA (lihat onClick + PANDUAN-ANALYTICS.md).
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center px-8 py-20 lg:px-[128px] lg:py-0 lg:min-h-[786px]"
    >
      <div className="flex w-full max-w-container flex-col items-center gap-12 lg:flex-row lg:gap-8">
        {/* Left: copy + CTAs */}
        <div className="flex w-full flex-col items-start justify-center gap-10 lg:flex-1 lg:gap-16">
          <div className="flex flex-col gap-2.5 text-dark">
            <h1 className="w-full text-[40px] font-semibold leading-[1.2] lg:text-[68px]">
              Komunitas Fun{" "}
              <span className="text-brandGreen">Mabar Badminton </span>
              Base Ciamis
            </h1>
            <div className="w-full text-lg font-medium leading-[1.4] lg:text-2xl">
              <p>
                Komunitas santuy untuk player newbie–intermediate sekitaran
                Ciamis.
              </p>
              <p>
                Bukan buat yang terlalu kompetitif, di sini yang penting seru,
                rutin, dan punya teman main 🔥
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-8">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("hero", "Follow WA Channel Sekarang")}
              className="flex items-center justify-center gap-2.5 rounded-lg bg-brandGreen px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              <span className="relative block h-6 w-6 shrink-0">
                <Image
                  src={assets.hero.whatsappIcon}
                  alt=""
                  fill
                  sizes="24px"
                />
              </span>
              Follow WA Channel Sekarang
            </a>
            <a
              href="#sessions"
              onClick={() => trackCTAClick("hero", "Lihat Kategori")}
              className="flex items-center justify-center rounded-lg border-2 border-dark px-8 py-4 text-base font-bold text-dark transition-colors hover:bg-dark hover:text-white"
            >
              Lihat Kategori
            </a>
          </div>
        </div>

        {/* Right: photo + doodles */}
        <div className="relative w-full lg:flex-1">
          <div className="relative mx-auto aspect-[610/339] w-full max-w-[610px] overflow-hidden rounded-[20px]">
            <Image
              src={assets.hero.teamPhoto}
              alt="Anggota komunitas Entiti Badminton berfoto bersama"
              fill
              sizes="(min-width: 1024px) 610px, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <span className="absolute -top-8 right-10 hidden h-12 w-12 -rotate-[15deg] lg:block">
            <Image
              src={assets.hero.crownDoodle}
              alt=""
              fill
              sizes="48px"
            />
          </span>
          <span className="absolute right-0 top-1/3 hidden h-10 w-10 -rotate-[120deg] -scale-y-100 lg:block">
            <Image
              src={assets.hero.sparkleDoodle}
              alt=""
              fill
              sizes="40px"
            />
          </span>
          <span className="absolute -bottom-6 left-8 hidden h-12 w-12 lg:block">
            <Image
              src={assets.hero.shuttlecockDoodle}
              alt=""
              fill
              sizes="48px"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
