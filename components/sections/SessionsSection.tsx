import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * SECTION 5 — SESSIONS ("Pilih Sesi yang Kamu Suka")
 * 4 kartu foto dengan badge kategori, diatur dari array `SESSIONS` di bawah.
 *
 * Cara edit cepat:
 * - Ganti foto kartu -> edit URL/path yang sesuai di `lib/assets.ts` bagian
 *   `sessions` (beginner, funPlay, girlOnly, afterWork).
 * - Ganti teks judul/deskripsi/badge -> edit object yang sesuai di `SESSIONS`.
 * - Ganti warna badge -> ubah `badgeColor`, isi dengan class Tailwind seperti
 *   "bg-badgeGreen" atau "bg-coral" (warna sudah didefinisikan di
 *   tailwind.config.ts), atau bisa juga warna baru "bg-[#hexcode]".
 * - Tambah kartu baru -> tambah object baru ke array `SESSIONS` + tambah
 *   gambar barunya di `lib/assets.ts`. Grid otomatis menyesuaikan (rapi di
 *   kelipatan 2 untuk tablet, 4 untuk desktop).
 */

const SESSIONS = [
  {
    image: assets.sessions.beginner,
    title: "Beginner Friendly",
    description: "Fokus pada teknik dasar dan kesenangan bermain.",
    badge: "Beginner",
    badgeColor: "bg-badgeGreen",
  },
  {
    image: assets.sessions.funPlay,
    title: "Fun Play",
    description: "Mabar santai untuk menjaga kebugaran dan silaturahmi.",
    badge: "All Level",
    badgeColor: "bg-badgeGreen",
  },
  {
    image: assets.sessions.girlOnly,
    title: "Girl Only",
    description: "Sesi eksklusif untuk ladys first agar lebih nyaman bertanding.",
    badge: "Khusus Wanita",
    badgeColor: "bg-coral",
  },
  {
    image: assets.sessions.afterWork,
    title: "After Work",
    description: "Pelepas penat setelah seharian bekerja di kantor.",
    badge: "Intermediate",
    badgeColor: "bg-badgeGreen",
  },
];

export default function SessionsSection() {
  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-center bg-white px-8 py-20 lg:px-[128px] lg:py-[128px]"
    >
      <div className="flex w-full max-w-container flex-col items-start gap-10">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="w-full text-[32px] font-medium leading-[1.2] text-dark lg:text-[52px]">
            Pilih Sesi yang Kamu Suka
          </h2>
          <p className="w-full text-lg font-medium leading-[1.4] text-grey500 lg:text-2xl">
            Tersedia beberapa kategori mabar dan bisa request
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SESSIONS.map((session) => (
            <div
              key={session.title}
              className="relative flex h-[452px] flex-col items-start justify-end overflow-hidden rounded-2xl p-4"
            >
              <Image
                src={session.image}
                alt={session.title}
                fill
                sizes="(min-width: 1024px) 25vw, 90vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/0 from-50% to-black/50" />

              <div className="flex w-full flex-col items-start gap-2">
                <h3 className="w-full text-2xl font-medium leading-[1.4] text-white">
                  {session.title}
                </h3>
                <p className="w-full text-base font-normal leading-[1.7] text-white">
                  {session.description}
                </p>
                <span
                  className={`flex items-start rounded-full px-4 py-1.5 text-sm font-semibold leading-5 tracking-[0.7px] text-white ${session.badgeColor}`}
                >
                  {session.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
