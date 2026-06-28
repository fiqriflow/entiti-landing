import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entiti Badminton Community | Mabar Badminton Base Ciamis",
  description:
    "Komunitas santuy untuk player newbie–intermediate sekitaran Ciamis. Bukan buat yang terlalu kompetitif, di sini yang penting seru, rutin, dan punya teman main.",
};

// Google Analytics 4 — GRATIS, tidak ada batasan plan seperti Vercel Pro.
// Isi Measurement ID-nya di file `.env.local` (lihat .env.local.example dan
// PANDUAN-ANALYTICS.md). Kalau belum diisi, script ini otomatis tidak dimuat
// sama sekali — jadi aman dibiarkan kosong selama development.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={outfit.variable}>
      <body>
        {children}
        {/*
          Vercel Web Analytics — otomatis melacak page view (kunjungan
          halaman) begitu website ini di-deploy ke Vercel. Tidak perlu
          konfigurasi tambahan apa pun. Tracking klik tombol CTA diatur
          terpisah lewat `lib/analytics.ts` (lihat PANDUAN-ANALYTICS.md).
        */}
        <Analytics />

        {/* Google Analytics 4 — alternatif gratis untuk tracking klik CTA */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
