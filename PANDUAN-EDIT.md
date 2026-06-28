# 📝 Panduan Edit Manual — Entiti Badminton Landing Page

Panduan ini khusus untuk kamu yang mau edit-edit sendiri tanpa perlu paham
React/Next.js secara mendalam. Setiap file komponen juga sudah ada komentar
`/** ... */` di bagian atasnya — silakan baca itu juga untuk instruksi
spesifik per section.

---

## 1. Ganti Foto atau Icon

Semua gambar diatur dari **satu file**: `lib/assets.ts`. Caranya:

1. Simpan file gambar baru kamu ke folder `public/images/...`
   (boleh buat subfolder sendiri, misal `public/images/hero/foto-baru.jpg`).
2. Buka `lib/assets.ts`, cari key yang sesuai, lalu ganti URL-nya jadi path
   lokal tadi. Contoh, ganti foto tim di Hero:

   ```ts
   hero: {
     teamPhoto: "/images/hero/foto-baru.jpg", // sebelumnya URL figma.com
     ...
   }
   ```

3. Simpan file, refresh browser. Selesai — foto baru otomatis muncul di
   section yang memakainya.

> 💡 Path selalu dimulai dengan `/` dan merujuk ke isi folder `public/`.
> Jadi `public/images/hero/foto-baru.jpg` ditulis sebagai `/images/hero/foto-baru.jpg`.

**Daftar lengkap gambar apa dipakai di mana** ada di komentar atas tiap
section file (contoh: buka `components/sections/HeroSection.tsx`, baca
komentar di paling atas).

---

## 2. Ganti Teks (judul, deskripsi, nama tombol, dll)

Teks **tidak** disimpan di file terpisah — langsung ditulis di tiap file
component. Caranya:

1. Buka file section yang ingin diedit di folder `components/` atau
   `components/sections/`.
2. Cari teksnya (gunakan Ctrl+F / Cmd+F di editor kamu), lalu edit langsung.

Contoh, ganti headline di Hero — buka `components/sections/HeroSection.tsx`,
cari:

```tsx
<h1 className="...">
  Komunitas Fun{" "}
  <span className="text-brandGreen">Mabar Badminton </span>
  Base Ciamis
</h1>
```

Ganti teks di antara tag-nya sesuai keinginan. Bagian yang dibungkus
`<span className="text-brandGreen">...</span>` itu yang berwarna hijau —
boleh dipindah ke kata lain kalau mau.

Untuk section yang isinya berupa **daftar/list** (seperti kartu masalah,
4 poin keunggulan, kartu sesi, langkah-langkah), teksnya ada di dalam
**array di bagian atas file**, bukan di JSX. Contoh di
`components/sections/ProblemSection.tsx`:

```tsx
const PROBLEMS = [
  {
    icon: assets.problem.searchFriendIcon,
    title: "Sulit Cari Teman",        // <- edit di sini
    description: "Punya raket tapi...", // <- edit di sini
  },
  ...
];
```

---

## 3. Ganti Link (WhatsApp, Instagram, TikTok, dll)

Cari atribut `href="..."` di file yang relevan:

| Mau ganti link...        | Ada di file...                                |
| ------------------------- | ---------------------------------------------- |
| Tombol "Follow Sekarang" (navbar) | `components/Header.tsx`               |
| Tombol WhatsApp di Hero    | `components/sections/HeroSection.tsx`         |
| Tombol WhatsApp di CTA      | `components/sections/CTASection.tsx`          |
| Instagram & TikTok          | `components/Footer.tsx` (array `SOCIALS`)    |

Contoh ganti link WhatsApp:
```tsx
href="https://wa.me/"          // sebelum
href="https://wa.me/6281234567890"  // sesudah (ganti dengan nomor WA kamu)
```

---

## 4. Tambah / Hapus / Ubah Urutan Kartu dalam 1 Section

Section yang isinya berupa kartu berulang (masalah, keunggulan, sesi,
langkah, bento grid) semuanya diatur lewat **array** di bagian atas file
component-nya. Untuk:

- **Tambah kartu** → tambahkan 1 object baru ke dalam array, ikuti format
  object yang sudah ada.
- **Hapus kartu** → hapus 1 object dari array.
- **Ubah urutan** → pindahkan posisi object di dalam array (urutan array =
  urutan tampil di halaman).

Contoh menambah 1 langkah baru di `components/sections/ProcessSection.tsx`:

```tsx
const STEPS = [
  { number: "01", title: "Follow Channel", description: "..." },
  { number: "02", title: "Cek Jadwal", description: "..." },
  // tambahkan object baru di bawah ini:
  { number: "03", title: "Langkah Baru", description: "Deskripsi singkat." },
  ...
];
```

---

## 5. Tambah Section Baru (misal: Testimoni)

1. Buat file baru di `components/sections/`, contoh
   `components/sections/TestimonialSection.tsx`. Paling mudah: **copy** file
   section lain yang strukturnya mirip (misal `ProblemSection.tsx` untuk
   layout kartu), lalu modifikasi isinya.
2. Pastikan file itu meng-`export default` satu function component:

   ```tsx
   export default function TestimonialSection() {
     return (
       <section className="px-8 py-20 lg:px-[128px]">
         {/* isi section kamu di sini */}
       </section>
     );
   }
   ```

3. Buka `app/page.tsx`, import component barumu di bagian atas:

   ```tsx
   import TestimonialSection from "@/components/sections/TestimonialSection";
   ```

4. Panggil komponennya di posisi yang diinginkan (urutan di sini = urutan
   tampil di halaman):

   ```tsx
   <AboutSection />
   <TestimonialSection />
   <BenefitsSection />
   ```

---

## 6. Hapus Section yang Sudah Ada

1. Buka `app/page.tsx`.
2. Hapus baris import section tersebut di bagian atas.
3. Hapus baris pemanggilannya (`<NamaSection />`) di dalam `<main>`.
4. (Opsional) Hapus juga file component-nya dari folder `components/sections/`
   kalau memang sudah tidak dipakai sama sekali.

---

## 7. Ganti Warna Utama Website

Buka `tailwind.config.ts`, cari bagian `colors`, lalu ganti hex value-nya:

```ts
colors: {
  brandGreen: "#13B98F",   // <- ganti warna hijau khas Entiti di sini
  brandDark: "#00533E",    // warna hijau tua (background bento grid)
  dark: "#252525",         // warna teks/navbar gelap
  grey500: "#666666",
  grey100: "#F5F5F5",
  ...
}
```

Karena semua component memakai nama token ini (contoh class `bg-brandGreen`,
`text-brandGreen`), 1 kali ganti di sini akan otomatis berubah di **seluruh
halaman** — tidak perlu edit satu-satu di setiap file.

---

## 8. Ganti Font

1. Buka `app/layout.tsx`, cari baris:
   ```ts
   import { Outfit } from "next/font/google";
   ```
   Ganti `Outfit` dengan nama font lain yang tersedia di
   [Google Fonts](https://fonts.google.com) (next/font/google mendukung
   hampir semua font di sana), misal `Poppins`.
2. Sesuaikan juga pemanggilan & weight-nya di bawahnya:
   ```ts
   const outfit = Outfit({ ... });   // ganti "Outfit" jadi nama font barumu
   ```

---

## 9. Cek Hasil Sebelum Upload / Deploy

Setelah edit, jalankan ulang di komputer kamu:

```bash
npm run dev
```

Buka `http://localhost:3000` untuk lihat hasilnya secara langsung sebelum
di-deploy ke hosting (Vercel, Netlify, dll).

---

## Ringkasan Lokasi File

| Mau edit apa?                         | Buka file ini                                  |
| --------------------------------------- | ----------------------------------------------- |
| Foto & icon                             | `lib/assets.ts`                                 |
| Warna & font                            | `tailwind.config.ts`, `app/layout.tsx`          |
| Urutan/tambah/hapus section             | `app/page.tsx`                                  |
| Navbar (menu, tombol, logo)             | `components/Header.tsx`                         |
| Footer (menu, sosmed, copyright)        | `components/Footer.tsx`                         |
| Konten Hero                             | `components/sections/HeroSection.tsx`           |
| Konten "Apakah ini masalahmu..."        | `components/sections/ProblemSection.tsx`        |
| Konten "Komunitas Badminton Ciamis..."  | `components/sections/AboutSection.tsx`          |
| Konten "Kenapa Entiti Beda" (bento)     | `components/sections/BenefitsSection.tsx`       |
| Konten "Pilih Sesi yang Kamu Suka"      | `components/sections/SessionsSection.tsx`       |
| Konten "Alur Mabarnya"                  | `components/sections/ProcessSection.tsx`        |
| Konten CTA banner WhatsApp              | `components/sections/CTASection.tsx`            |
