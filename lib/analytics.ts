"use client";

import { track } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * TRACKING KLIK CTA — kirim ke Vercel Analytics & Google Analytics 4
 * ----------------------------------------------------------------------------
 * Fungsi ini dipanggil setiap kali tombol CTA (WhatsApp, dll) diklik.
 * Ia mengirim event yang sama ke 2 tempat sekaligus:
 *
 * 1. Vercel Web Analytics — custom event "CTA Click". HANYA tercatat di
 *    dashboard kalau project Vercel kamu plan Pro/Enterprise.
 * 2. Google Analytics 4 (GA4) — event "cta_click". GRATIS, tidak ada batasan
 *    plan. Hanya akan benar-benar terkirim kalau `NEXT_PUBLIC_GA_ID` sudah
 *    diisi di `.env.local` (lihat .env.local.example & PANDUAN-ANALYTICS.md).
 *    Kalau belum diisi, baris gtag di bawah otomatis di-skip (tidak error).
 *
 * Cara pakai di component lain:
 *   import { trackCTAClick } from "@/lib/analytics";
 *   <a onClick={() => trackCTAClick("hero", "WhatsApp Follow")}>...</a>
 */
export function trackCTAClick(section: string, label: string) {
  // Vercel Web Analytics (custom event - butuh plan Pro)
  track("CTA Click", { section, label });

  // Google Analytics 4 (gratis - aktif kalau NEXT_PUBLIC_GA_ID sudah diisi)
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", { section, label });
  }
}
