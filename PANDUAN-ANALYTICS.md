# 📊 Panduan Vercel Analytics & Tracking Klik CTA

Landing page ini sudah disiapkan untuk memakai **Vercel Web Analytics**,
termasuk tracking khusus untuk klik tombol CTA (WhatsApp Follow, dll) supaya
kamu bisa lihat tombol mana yang paling banyak diklik (= konversi).

---

## ⚠️ Baca Dulu: Batasan Plan Vercel

Ada 2 jenis data yang dilacak, dan keduanya **beda syarat plan**:

| Jenis data                          | Plan Hobby (gratis) | Plan Pro          |
| ------------------------------------ | -------------------- | ------------------ |
| **Page view** (kunjungan halaman)    | ✅ Otomatis aktif, 2.500 event/bulan | ✅ 25.000 event/bulan |
| **Custom event** (klik tombol CTA)   | ❌ Tidak tersedia    | ✅ Tersedia |

Artinya: begitu di-deploy ke Vercel, jumlah pengunjung & halaman yang dilihat
**langsung tercatat otomatis** tanpa perlu plan berbayar. Tapi untuk
**tracking klik CTA** lewat Vercel, Vercel mengharuskan project ada di
**plan Pro**.

> 💡 **Kalau masih pakai plan gratis (Hobby) dan tetap mau lihat klik CTA,
> pakai Google Analytics 4 (GA4) — lihat bagian 6 di bawah.** GA4 gratis
> 100% tanpa batas trafik, dan kodenya sudah disiapkan di project ini,
> berjalan berdampingan dengan Vercel Analytics tanpa konflik.

---

## 1. Apa yang Sudah Terpasang di Project Ini

1. **Package `@vercel/analytics`** — sudah ada di `package.json`.
2. **`<Analytics />`** — sudah dipasang di `app/layout.tsx`, ini yang
   mengaktifkan page view tracking otomatis.
3. **`lib/analytics.ts`** — berisi 1 fungsi helper `trackCTAClick()` yang
   dipakai untuk mengirim custom event "CTA Click" tiap kali tombol diklik.
4. **Tombol yang sudah dipasangi tracking:**

   | Tombol                              | File                                         | Label event              |
   | ------------------------------------- | --------------------------------------------- | -------------------------- |
   | "Follow Sekarang" (navbar)            | `components/Header.tsx`                      | `header` / Follow Sekarang |
   | "Follow WA Channel Sekarang" (Hero)   | `components/sections/HeroSection.tsx`        | `hero` / Follow WA Channel Sekarang |
   | "Lihat Kategori" (Hero, tombol outline) | `components/sections/HeroSection.tsx`      | `hero` / Lihat Kategori |
   | "Follow WA Channel Sekarang" (CTA banner penutup) | `components/sections/CTASection.tsx` | `cta_banner` / Follow WA Channel Sekarang |

---

## 2. Langkah Aktivasi (Setelah Deploy ke Vercel)

1. Jalankan `npm install` dulu di komputer kamu (supaya package
   `@vercel/analytics` ter-install).
2. Push project ke GitHub, lalu deploy seperti biasa lewat
   [vercel.com](https://vercel.com) (import repo → deploy).
3. Setelah deploy berhasil, buka project kamu di **Vercel Dashboard**.
4. Masuk ke tab **Analytics** di sidebar project.
5. Kalau belum aktif, klik **Enable** untuk mengaktifkan Web Analytics
   (gratis untuk page view).
6. Untuk melihat data klik CTA, project harus berada di **plan Pro** —
   cek/upgrade di **Settings → Billing**.

---

## 3. Cara Melihat Hasil Klik CTA di Dashboard

1. Buka tab **Analytics** di project Vercel kamu.
2. Scroll ke bagian **Events**.
3. Kamu akan lihat nama event **"CTA Click"** di daftar.
4. Klik nama event itu untuk melihat rincian — di sana akan terpisah
   berdasarkan properti `section` (header / hero / cta_banner) dan `label`
   (nama tombolnya), jadi kamu bisa lihat tombol mana yang paling sering
   diklik.

---

## 4. Cara Menambah Tracking di Tombol Baru

Kalau nanti menambah tombol CTA baru (misal di section baru), begini caranya:

1. Pastikan file component-nya punya `"use client";` di baris paling atas
   (wajib, karena `onClick` hanya bisa dipakai di client component).
2. Import helper-nya:
   ```tsx
   import { trackCTAClick } from "@/lib/analytics";
   ```
3. Tambahkan `onClick` di tombol/link yang ingin dilacak:
   ```tsx
   <a
     href="https://wa.me/"
     onClick={() => trackCTAClick("nama_section", "Nama Tombolnya")}
   >
     Tombol Baru
   </a>
   ```
   - Argumen pertama (`"nama_section"`) = lokasi tombol itu berada.
   - Argumen kedua (`"Nama Tombolnya"`) = label bebas, akan muncul di
     dashboard biar mudah dikenali.

---

## 5. Testing di Local (Sebelum Deploy)

Custom event dari `@vercel/analytics` **tidak terkirim** saat dijalankan di
`npm run dev` di komputer lokal — ini normal & disengaja oleh Vercel
(tracking hanya aktif di deployment Vercel asli). Jadi kalau mau benar-benar
mengetes apakah klik tombolnya berfungsi, cara paling pasti adalah:

1. Deploy ke Vercel (Preview deployment juga sudah cukup, tidak harus
   Production).
2. Klik tombol CTA di URL preview/production tersebut.
3. Tunggu beberapa menit, lalu cek tab Analytics → Events di dashboard.

---

## 6. Opsi Gratis: Google Analytics 4 (GA4)

GA4 adalah tool analytics dari Google, **gratis 100% tanpa batas trafik**,
dan tidak perlu plan apa pun untuk tracking custom event seperti klik CTA.
Project ini sudah disiapkan untuk GA4 — kamu cuma perlu bikin akun GA4 +
masukkan 1 ID ke project.

### a. Bikin Property GA4 & Dapatkan Measurement ID

1. Buka [analytics.google.com](https://analytics.google.com), login dengan
   akun Google kamu.
2. Klik **Admin** (ikon gerigi di kiri bawah) → **Create Property**.
3. Isi nama property (misal "Entiti Badminton Landing"), pilih zona waktu
   Indonesia, lalu **Next** sampai selesai.
4. Pada langkah **Business details**, pilih kategori & ukuran bisnis apa
   saja (tidak terlalu penting), lalu **Create**.
5. Saat ditanya platform, pilih **Web**.
6. Isi **Website URL** (URL domain Vercel kamu, misal
   `https://entiti-badminton.vercel.app`) dan nama stream apa saja.
7. Setelah stream dibuat, GA4 akan menampilkan **Measurement ID** dengan
   format `G-XXXXXXXXXX`. **Copy ID ini.**

### b. Pasang Measurement ID ke Project

1. Di folder project, **copy** file `.env.local.example` jadi file baru
   bernama **`.env.local`** (file ini tidak ikut ter-upload ke GitHub,
   aman untuk menyimpan ID semacam ini).
2. Buka `.env.local`, isi seperti ini (ganti dengan ID kamu):
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Simpan, lalu restart server development:
   ```bash
   npm run dev
   ```
4. Untuk di production (Vercel), tambahkan environment variable yang sama:
   buka project di Vercel Dashboard → **Settings → Environment Variables**
   → tambahkan key `NEXT_PUBLIC_GA_ID` dengan value Measurement ID kamu →
   **Save**, lalu re-deploy.

### c. Cara Melihat Hasil Klik CTA di GA4

1. Buka [analytics.google.com](https://analytics.google.com) → pilih
   property kamu.
2. Di sidebar kiri, klik **Reports → Engagement → Events**.
3. Cari event bernama **`cta_click`** di daftar (event ini muncul beberapa
   menit s.d. ~24 jam setelah ada klik pertama, GA4 tidak real-time penuh).
4. Klik event tersebut untuk lihat jumlah klik totalnya.
5. Untuk melihat rincian **per tombol** (section & label), klik
   **Admin → Custom definitions → Create custom dimension**, lalu daftarkan
   2 parameter event berikut sebagai custom dimension:
   - `section` (lokasi tombolnya: header / hero / cta_banner)
   - `label` (nama tombolnya)

   Setelah didaftarkan (butuh waktu hingga 24 jam untuk mulai terisi data),
   kamu bisa breakdown laporan event `cta_click` berdasarkan kedua dimensi
   ini lewat menu **Explore** di GA4.

### d. GA4 vs Vercel Analytics — Pakai yang Mana?

Tidak perlu pilih salah satu — keduanya **sudah jalan berdampingan** di
project ini tanpa konflik:

| | Vercel Analytics | Google Analytics 4 |
| - | - | - |
| Page view | Gratis (semua plan) | Gratis |
| Klik CTA / custom event | Perlu plan Pro | Gratis, tanpa batas |
| Tampilan dashboard | Simpel, terintegrasi di Vercel | Lebih detail & fleksibel, perlu setup custom dimension |
| Cocok untuk | Cek cepat tanpa setup tambahan | Tracking konversi serius/jangka panjang |

Kalau budget terbatas, **GA4 saja sudah cukup** untuk kebutuhan tracking
klik CTA. Vercel Analytics tetap berguna untuk page view dasar walau di
plan gratis.

---

## Ringkasan File Terkait Analytics

| File                          | Fungsi                                                |
| ------------------------------ | ------------------------------------------------------ |
| `app/layout.tsx`               | Memasang `<Analytics />` (Vercel) + script GA4         |
| `lib/analytics.ts`             | Helper `trackCTAClick()` — kirim ke Vercel & GA4 sekaligus |
| `.env.local.example`           | Contoh isi `NEXT_PUBLIC_GA_ID` untuk GA4               |
| `components/Header.tsx`        | Tombol "Follow Sekarang" sudah ada tracking            |
| `components/sections/HeroSection.tsx` | 2 tombol Hero sudah ada tracking                |
| `components/sections/CTASection.tsx`  | Tombol CTA banner penutup sudah ada tracking    |
