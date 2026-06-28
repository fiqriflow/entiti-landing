"use client";

import Image from "next/image";
import { assets } from "@/lib/assets";
import { trackCTAClick } from "@/lib/analytics";

/**
 * SECTION 7 — CTA (banner WhatsApp dengan foto lapangan)
 *
 * Cara edit cepat:
 * - Ganti foto background -> edit `assets.cta.courtPhoto` di `lib/assets.ts`.
 * - Ganti teks judul/deskripsi -> edit <h2> dan <p> di JSX.
 * - Ganti link tombol WhatsApp -> ganti `href="https://wa.me/"` jadi link
 *   WA Channel kamu.
 * - Hapus efek glow hijau/biru -> hapus 2 blok <div aria-hidden> di bawah
 *   foto, tidak akan merusak layout lain.
 *
 * Tombol WhatsApp di bawah sudah dipasangi tracking klik CTA (lihat onClick
 * + PANDUAN-ANALYTICS.md). Ini adalah CTA paling penting karena terletak di
 * bagian penutup halaman.
 */
export default function CTASection() {
  return (
    <section className="flex items-center justify-center bg-grey100 px-8 py-20 lg:px-[128px] lg:py-[128px]">
      <div className="relative flex w-full max-w-container items-center justify-center overflow-hidden rounded-xl2 px-8 py-16 lg:px-[128px] lg:py-16">
        <Image
          src={assets.cta.courtPhoto}
          alt="Lapangan badminton"
          fill
          sizes="(min-width: 1024px) 1280px, 100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden
          className="absolute -right-40 -top-72 -z-10 h-[600px] w-[600px] rounded-full bg-brandGreen/40 mix-blend-hard-light blur-3xl lg:h-[1043px] lg:w-[1043px]"
        >
          <Image src={assets.cta.glowEllipseTop} alt="" fill />
        </div>
        <div
          aria-hidden
          className="absolute -bottom-72 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/30 mix-blend-soft-light blur-3xl lg:h-[1043px] lg:w-[1043px]"
        >
          <Image src={assets.cta.glowEllipseLeft} alt="" fill />
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center gap-2.5 text-center">
            <h2 className="w-full text-[32px] font-medium leading-[1.2] text-white lg:text-[52px]">
              Siap Jadi Bagian dari Entiti Badminton Community?
            </h2>
            <p className="w-full text-lg font-medium leading-[1.4] text-grey100 lg:text-2xl">
              Jangan lewatkan keseruan mabar berikutnya. Follow channel kami
              sekarang dan temukan lawan tanding sepadanmu!
            </p>
          </div>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("cta_banner", "Follow WA Channel Sekarang")}
            className="flex items-center justify-center gap-2.5 rounded-2xl bg-brandGreen px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            <span className="relative block h-6 w-6 shrink-0">
              <Image src={assets.cta.whatsappIcon} alt="" fill sizes="24px" />
            </span>
            Follow WA Channel Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
