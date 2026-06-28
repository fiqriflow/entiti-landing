/**
 * SECTION 6 — PROCESS ("Alur Mabarnya")
 * Daftar langkah-langkah, diatur dari array `STEPS` di bawah.
 *
 * Cara edit cepat:
 * - Ganti nomor/judul/deskripsi langkah -> edit object yang sesuai di `STEPS`.
 * - Tambah langkah baru -> tambah object baru ke array `STEPS`
 *   (contoh: { number: "03", title: "...", description: "..." }).
 * - Hapus langkah -> hapus object dari array `STEPS`.
 * - Grid otomatis menyesuaikan jumlah kolom sesuai banyaknya langkah
 *   (maksimal 5 kolom sejajar di desktop, lihat class "lg:grid-cols-5").
 *
 * CATATAN: di desain Figma aslinya, penomoran melompat dari "02" ke "04"
 * (tidak ada langkah "03"). Kalau itu typo dan kamu mau urutannya rapi,
 * tinggal ganti angka "04" di bawah jadi "03", dst.
 */

const STEPS = [
  {
    number: "01",
    title: "Follow Channel",
    description: "Klik link WA Channel kami di website ini.",
  },
  {
    number: "02",
    title: "Cek Jadwal",
    description: "Pantau update jadwal mingguan di Channel.",
  },
  {
    number: "04",
    title: "Pilih Sesi",
    description: "Tentukan sesi & level yang cocok buat kamu.",
  },
  {
    number: "05",
    title: "Daftar Slot",
    description: "Konfirmasi kehadiran via link pendaftaran.",
  },
  {
    number: "06",
    title: "Mabar Kuy!",
    description: "Datang tepat waktu & mari berkeringat bersama.",
  },
];

export default function ProcessSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-grey100 px-8 py-20 lg:px-[128px] lg:py-[128px]">
      <h2 className="w-full text-center text-[32px] font-medium leading-[1.2] text-dark lg:text-[52px]">
        Alur Mabarnya
      </h2>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="flex flex-1 flex-col items-start gap-4 rounded-2xl border border-grey100 bg-white p-4"
          >
            <span className="w-full text-[32px] font-semibold leading-[1.3] text-brandGreen">
              {step.number}
            </span>
            <h3 className="w-full text-2xl font-medium leading-[1.4] text-dark">
              {step.title}
            </h3>
            <p className="w-full text-base font-normal leading-[1.7] text-dark">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
