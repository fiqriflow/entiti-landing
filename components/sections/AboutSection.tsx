import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * SECTION 3 — ABOUT (foto besar kiri + 4 poin keunggulan kanan)
 *
 * Cara edit cepat:
 * - Ganti foto besar -> edit `assets.about.groupPhoto` di `lib/assets.ts`.
 * - Ganti judul/deskripsi utama -> edit <h2> dan <p> pertama di JSX.
 * - Edit salah satu dari 4 poin (icon/judul/deskripsi) -> ubah object yang
 *   sesuai di array `FEATURES` di bawah.
 * - Tambah/hapus poin -> tambah/hapus object di array `FEATURES`. Layout akan
 *   otomatis menyesuaikan tinggi section.
 */

const FEATURES = [
  {
    icon: assets.about.scheduleIconBase,
    title: "Mabar rutin & terjadwal",
    description: "Nggak perlu cari-cari lagi, tinggal ikut jadwal yang ada",
  },
  {
    icon: assets.about.newFriendIcon,
    title: "Punya teman badminton baru",
    description: "Datang sendiri? Aman. Semua di sini juga awalnya begitu",
  },
  {
    icon: assets.about.levelIcon,
    title: "Bisa pilih sesuai level",
    description: "Dari beginner sampai intermediate, semua ada tempatnya",
  },
  {
    icon: assets.about.happyIcon,
    title: "Santai, no toxic",
    description: "Main buat happy, bukan buat ditekan atau di-judge",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-white px-8 py-20 lg:px-[128px] lg:py-16"
    >
      <div className="flex w-full max-w-container flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative aspect-[584/700] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:w-[584px] lg:shrink-0">
          <Image
            src={assets.about.groupPhoto}
            alt="Anggota komunitas Entiti Badminton di lapangan"
            fill
            sizes="(min-width: 1024px) 584px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-10">
          <h2 className="w-full text-[32px] font-medium leading-[1.2] text-dark lg:text-[52px]">
            Komunitas Badminton Ciamis yang Ramah untuk Semua Level
          </h2>
          <p className="w-full text-lg font-medium leading-[1.4] text-[#3c4a43] lg:text-2xl">
            Kami bukan sekadar komunitas badminton biasa. Entiti adalah
            ekosistem bagi siapa saja yang ingin sehat, berkembang, dan
            menambah relasi sosial di Ciamis.
          </p>

          <div className="flex w-full flex-col gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex w-full items-start gap-4 rounded-2xl p-4"
              >
                <span className="relative block h-16 w-16 shrink-0">
                  <Image src={feature.icon} alt="" fill sizes="64px" />
                </span>
                <div className="flex flex-1 flex-col items-start gap-2">
                  <h3 className="w-full text-2xl font-medium leading-[1.4] text-dark">
                    {feature.title}
                  </h3>
                  <p className="w-full text-base font-normal leading-[1.7] text-grey500">
                    {feature.description}
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
