# Entiti Badminton Community — Landing Page

Implementasi pixel-perfect dari desain Figma ke **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📝 Mau Edit Sendiri?

Lihat **[PANDUAN-EDIT.md](./PANDUAN-EDIT.md)** — panduan langkah demi langkah
(berbahasa Indonesia) untuk: ganti foto/icon, ganti teks, ganti link, ganti
warna/font, sampai cara menambah atau menghapus section secara manual.
Tiap file komponen juga sudah ada komentar penjelasan di bagian paling atas.

## 📊 Vercel Analytics & Tracking Klik CTA

Project ini sudah terpasang **Vercel Web Analytics**, termasuk tracking
khusus untuk klik tombol CTA (WhatsApp Follow, dll). Lihat
**[PANDUAN-ANALYTICS.md](./PANDUAN-ANALYTICS.md)** untuk cara aktivasi, cara
melihat hasilnya di dashboard, dan catatan penting soal plan Vercel yang
dibutuhkan untuk fitur ini.

## Struktur Project

```
app/
  layout.tsx          # Root layout, setup font Outfit
  page.tsx            # Merangkai semua section jadi 1 halaman
  globals.css         # Tailwind directives
components/
  Header.tsx          # Navbar
  Footer.tsx           
  sections/
    HeroSection.tsx       # Section 1: Hero
    ProblemSection.tsx    # Section 2: "Apakah ini masalahmu..."
    AboutSection.tsx      # Section 3: Tentang komunitas + 4 poin
    BenefitsSection.tsx   # Section 4: Bento grid hijau "Kenapa Entiti Beda"
    SessionsSection.tsx   # Section 5: 4 kartu kategori sesi mabar
    ProcessSection.tsx    # Section 6: "Alur Mabarnya" (5 langkah)
    CTASection.tsx        # Section 7: CTA banner WhatsApp
lib/
  assets.ts            # Semua URL gambar/icon, terpusat di 1 file
tailwind.config.ts      # Design tokens (warna, font) sesuai variabel Figma
```

Tiap section adalah komponen React yang berdiri sendiri, jadi gampang diedit
atau dipindah urutannya dari `app/page.tsx`.

## ⚠️ Penting: Ganti URL Asset Sebelum Deploy

Semua gambar & icon saat ini masih menggunakan link CDN sementara dari Figma
(`figma.com/api/mcp/asset/...`), yang **hanya valid ±7 hari**. Sebelum deploy
ke production:

1. Download tiap asset dari URL di `lib/assets.ts`.
2. Simpan ke folder `public/images/...` (sudah disiapkan foldernya).
3. Ganti value URL di `lib/assets.ts` menjadi path lokal, contoh:
   ```ts
   teamPhoto: "/images/hero/team-photo.png", // sebelumnya URL figma.com
   ```

Karena semua referensi gambar di komponen menarik dari file `lib/assets.ts`,
kamu hanya perlu mengedit di satu tempat ini.

## Design Tokens

Warna & tipografi diambil langsung dari Figma Variables file ini:

| Token        | Value     |
| ------------ | --------- |
| brandGreen   | `#13B98F` |
| brandDark    | `#00533E` |
| brandLight   | `#C0FFEF` |
| secondary    | `#009DBF` |
| dark         | `#252525` |
| grey500      | `#666666` |
| grey100      | `#F5F5F5` |

Font: **Outfit** (Google Fonts) — weight 400/500/600/700/900, di-load lewat
`next/font/google` di `app/layout.tsx`.

## Catatan Implementasi

- Layout dibuat fixed-width 1280px (`max-w-container`) mengikuti frame desktop
  desain Figma (lebar kanvas 1440px dengan padding 128px kiri-kanan), lalu
  ditambahkan breakpoint responsive (`sm:`, `lg:`) agar tetap rapi di tablet &
  mobile — desain Figma sendiri hanya menyediakan 1 breakpoint (desktop).
- Section **"Alur Mabarnya"** di desain Figma penomorannya melompat dari
  **02 langsung ke 04** (tidak ada "03"). Saya pertahankan apa adanya untuk
  kebutuhan pixel-perfect — beri tahu saya jika ini typo di desain dan kamu
  ingin saya perbaiki jadi 01–05 berurutan.
- Ikon-ikon kompleks (multi-vector seperti search icon, kalender, dsb)
  direferensikan sebagai gambar dari Figma (bukan di-redraw sebagai SVG
  inline) supaya hasilnya 100% sama dengan desain asli.
