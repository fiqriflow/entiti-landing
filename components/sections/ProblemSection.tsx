import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * SECTION 2 — PROBLEM ("Apakah ini masalahmu...")
 * 3 kartu masalah dalam bentuk array `PROBLEMS` di bawah.
 *
 * Cara edit cepat:
 * - Ganti teks judul/section -> edit <h2> dan <p> di bagian JSX paling atas.
 * - Ganti isi salah satu kartu -> edit object yang sesuai di array `PROBLEMS`
 *   (title, description, atau icon).
 * - Tambah kartu baru -> tinggal tambah 1 object baru ke array `PROBLEMS`,
 *   grid akan otomatis menyesuaikan (maksimal rapi di kelipatan 3 untuk desktop).
 * - Hapus kartu -> hapus 1 object dari array `PROBLEMS`.
 * - Ganti icon -> tambahkan URL/path baru di `lib/assets.ts` bagian `problem`,
 *   lalu pakai di sini.
 */

const PROBLEMS = [
  {
    icon: assets.problem.searchFriendIcon,
    title: "Sulit Cari Teman",
    description:
      "Punya raket tapi bingung mau mabar sama siapa? Teman satu tongkrongan sering berhalangan hadir?",
  },
  {
    icon: assets.problem.noScheduleIcon,
    title: "Info Mabar Minim",
    description:
      "Sering ketinggalan info jadwal mabar di GOR terdekat atau slot mabar yang tiba-tiba penuh?",
  },
  {
    icon: assets.problem.nervousIcon,
    title: "Takut Karena Pemula",
    description:
      "Merasa tidak enak mau gabung karena merasa masih pemula dan takut mabar di tempat yang terlalu kompetitif?",
  },
];

export default function ProblemSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-grey100 px-8 py-20 lg:px-[128px] lg:py-[128px]">
      <div className="flex w-full max-w-container flex-col items-center gap-10">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="w-full text-[32px] font-medium leading-[1.2] text-dark lg:text-[52px]">
            Apakah ini masalahmu gak mulai-mulai badminton?
          </h2>
          <p className="w-full text-lg font-medium leading-[1.4] text-[#3c4a43] lg:text-2xl">
            Seringkali keinginan untuk berolahraga terhambat oleh kendala
            teknis dan sosial.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-1 flex-col items-start gap-4 rounded-2xl bg-white p-4"
            >
              <span className="relative block h-16 w-16 shrink-0">
                <Image src={problem.icon} alt="" fill sizes="64px" />
              </span>
              <div className="flex w-full flex-col items-start gap-2">
                <h3 className="w-full text-2xl font-medium leading-[1.4] text-dark">
                  {problem.title}
                </h3>
                <p className="w-full text-base font-normal leading-[1.7] text-grey500">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
