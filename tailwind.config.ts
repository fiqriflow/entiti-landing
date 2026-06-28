import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS (WARNA & FONT)
 * ----------------------------------------------------------------------------
 * CARA GANTI WARNA UTAMA WEBSITE:
 * - Ganti value hex di bagian `colors` di bawah, contoh ganti brandGreen:
 *     brandGreen: "#13B98F",  ->  brandGreen: "#FF5733",
 * - Karena semua component pakai nama warna ini (misal class "bg-brandGreen",
 *   "text-brandGreen"), warna akan otomatis berubah di SELURUH halaman tanpa
 *   perlu edit file lain.
 * - Mau tambah warna baru? Tambahkan key baru di `colors`, lalu pakai di
 *   component dengan class seperti "bg-namaWarnaBaru" atau "text-namaWarnaBaru".
 *
 * CARA GANTI FONT:
 * - Ganti font Google Fonts di `app/layout.tsx` (cari `Outfit` di sana, ganti
 *   ke nama font lain dari next/font/google, misal `Poppins`).
 * - Lalu update juga `fontFamily.outfit` di bawah supaya konsisten, atau
 *   ganti nama variabelnya di kedua file.
 * ----------------------------------------------------------------------------
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens pulled 1:1 from Figma file variables
        brandGreen: "#13B98F",
        brandDark: "#00533E",
        brandLight: "#C0FFEF",
        secondary: "#009DBF",
        dark: "#252525",
        grey500: "#666666",
        grey100: "#F5F5F5",
        // Extra colors found on specific elements not exposed as named variables
        badgeGreen: "#006C52",
        coral: "#F98074",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
