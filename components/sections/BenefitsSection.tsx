import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * SECTION 4 — BENEFITS / BENTO GRID HIJAU ("Kenapa Entiti Badminton Beda")
 *
 * Cara edit cepat:
 * - Ganti judul section -> edit <h2> dan <p> di bagian atas JSX.
 * - Edit salah satu kartu (icon/judul/deskripsi) -> ubah object yang sesuai
 *   di array `BENTO_ITEMS` di bawah.
 * - Ganti ukuran kartu (lebar/posisi di grid) -> ubah `className` pada object
 *   tersebut, contoh "lg:col-span-3" artinya lebar 3 dari 6 kolom grid.
 *   Total kolom grid ada 6 (lihat class "lg:grid-cols-6" di JSX).
 * - PENTING: kalau menambah/menghapus kartu, urutan `lg:col-span-x` di semua
 *   kartu pada 1 baris harus tetap berjumlah 6, supaya grid tidak pecah.
 * - Ganti warna background section ini -> ganti `bg-brandDark` di JSX jadi
 *   warna lain dari `tailwind.config.ts`.
 */

const BENTO_ITEMS = [
  {
    icon: assets.benefits.leaderboardIcon,
    title: "Leaderboard Friendly",
    description:
      "Track progress & seru-seruan lihat ranking (tanpa pressure kompetitif)",
    className: "lg:col-span-3 lg:row-start-1",
    overlay: "bg-white/10",
  },
  {
    icon: assets.benefits.gameSystemIcon,
    title: "Sistem Game Variatif",
    description: "Match diatur (rotation, KO, fun match) biar adil & gak random",
    className: "lg:col-span-3 lg:col-start-4 lg:row-start-1",
    overlay: "bg-white/20",
  },
  {
    icon: assets.benefits.gameMasterIcon,
    title: "Game Master di setiap session",
    description:
      "Ada yang ngatur jalannya permainan, jadi nggak bingung & semua kebagian main",
    className: "lg:col-span-2 lg:row-start-2",
    overlay: "bg-white/10",
  },
  {
    icon: assets.benefits.shuttlecockIcon,
    title: "Shuttlecock Disediakan",
    description: "Tinggal datang & main, no ribet bawa perlengkapan",
    className: "lg:col-span-2 lg:col-start-3 lg:row-start-2",
    overlay: "bg-white/10",
  },
  {
    icon: assets.benefits.cameraIcon,
    title: "Dokumentasi Session",
    description: "Setiap mabar ada foto/video tipis-tipis, bisa jadi kenangan & konten",
    className: "lg:col-span-2 lg:col-start-5 lg:row-start-2",
    overlay: "bg-white/10",
  },
];

export default function BenefitsSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-white px-8 py-20 lg:px-[128px] lg:py-[128px]">
      <div className="flex w-full max-w-container flex-col items-start rounded-[48px] bg-brandDark px-6 py-16 lg:py-24">
        <div className="flex w-full max-w-[1200px] flex-col items-start gap-12 px-0 lg:gap-16 lg:px-12">
          <div className="flex w-full flex-col items-center gap-4">
            <h2 className="w-full text-center text-[32px] font-medium leading-[1.2] text-white lg:text-[52px]">
              Kenapa Entiti Badminton Beda
            </h2>
            <p className="w-full max-w-[672px] text-center text-lg font-medium leading-[1.4] text-white/80 lg:text-2xl">
              Bukan Sekadar Mabar Biasa
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {BENTO_ITEMS.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col items-start gap-4 rounded-3xl border border-white/10 p-8 backdrop-blur-md ${item.overlay} ${item.className}`}
              >
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-brandDark p-2.5">
                  <span className="relative block h-10 w-10 shrink-0">
                    <Image src={item.icon} alt="" fill sizes="40px" />
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <h3 className="w-full text-2xl font-medium leading-[1.4] text-white">
                    {item.title}
                  </h3>
                  <p className="w-full text-base font-normal leading-[1.7] text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
