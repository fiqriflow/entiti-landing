/**
 * SEMUA GAMBAR & ICON WEBSITE INI ADA DI SINI
 * ----------------------------------------------------------------------------
 * Setiap section di folder `components/` mengambil gambarnya dari objek
 * `assets` di bawah, BUKAN dari URL langsung. Tujuannya supaya kalau mau
 * ganti foto/icon, kamu cukup edit di SATU file ini saja.
 *
 * CARA GANTI FOTO / ICON:
 * 1. Siapkan file gambar barumu, taruh di folder `public/images/...`
 *    (boleh bikin subfolder sendiri, contoh: public/images/hero/foto-baru.jpg)
 * 2. Ganti value (URL) yang sesuai di bawah jadi path lokal itu, contoh:
 *      teamPhoto: "/images/hero/foto-baru.jpg",
 *    (path selalu mulai dengan "/", merujuk ke folder `public/`)
 * 3. Simpan, lalu refresh browser — otomatis langsung terlihat di semua
 *    tempat yang memakai `assets.hero.teamPhoto` itu.
 *
 * CARA MENAMBAH GAMBAR UNTUK SECTION BARU:
 * - Tambahkan key baru di bawah, contoh kalau bikin section "Testimoni":
 *     testimonial: {
 *       photo1: "/images/testimonial/budi.jpg",
 *     },
 * - Lalu di component section barumu, import dan pakai seperti section lain:
 *     import { assets } from "@/lib/assets";
 *     <Image src={assets.testimonial.photo1} ... />
 *
 * NOTE ON ASSETS BAWAAN
 * ----------------------------------------------------------------------------
 * Saat ini sebagian besar URL di bawah masih menunjuk ke Figma's temporary
 * asset CDN (`figma.com/api/mcp/asset/..`). URL ini hanya valid ~7 hari sejak
 * dibuat — cukup untuk preview, TAPI TIDAK aman dipakai untuk production.
 * Sebelum deploy, ikuti langkah "CARA GANTI FOTO / ICON" di atas untuk semua
 * key di bawah ini.
 * ----------------------------------------------------------------------------
 */

export const assets = {
  brand: {
    logoMark:
      "https://www.figma.com/api/mcp/asset/2c688b16-9505-4ad5-a34a-30b7fc84b332",
    logoMarkLarge:
      "https://www.figma.com/api/mcp/asset/3c9d584d-ee7f-4cec-842f-c14621fd11e4",
  },
  hero: {
    teamPhoto:
      "https://www.figma.com/api/mcp/asset/a28619af-5045-481b-bbe2-f03f7b902bea",
    whatsappIcon:
      "https://www.figma.com/api/mcp/asset/2dad5529-9e35-41a4-b342-7116e4a2e6f5",
    crownDoodle:
      "https://www.figma.com/api/mcp/asset/1ed47ac7-3224-4e94-9c0b-ce6b48e044d0",
    sparkleDoodle:
      "https://www.figma.com/api/mcp/asset/1261ad45-eecb-4449-ae4a-8fb38bbad13d",
    shuttlecockDoodle:
      "https://www.figma.com/api/mcp/asset/bf683feb-be38-496f-ae33-a2a006f1e943",
  },
  problem: {
    searchFriendIcon:
      "https://www.figma.com/api/mcp/asset/cb24211c-377f-43ef-ae0e-27942900ce78",
    noScheduleIcon:
      "https://www.figma.com/api/mcp/asset/fed5781a-9fb4-4ea0-8be9-6a563ffb6d31",
    nervousIcon:
      "https://www.figma.com/api/mcp/asset/fed5781a-9fb4-4ea0-8be9-6a563ffb6d31",
  },
  about: {
    groupPhoto:
      "https://www.figma.com/api/mcp/asset/81165d88-5125-417f-ae28-632182d28cac",
    scheduleIconBase:
      "https://www.figma.com/api/mcp/asset/be663736-5c3a-45c9-8551-c6c7a406d072",
    scheduleIconStrip:
      "https://www.figma.com/api/mcp/asset/1420a0f4-67c1-4fe0-8850-831d3e53d4ff",
    scheduleIconDots:
      "https://www.figma.com/api/mcp/asset/11ad2f71-4308-4229-bad5-c0f47194ebe7",
    scheduleIconHandle:
      "https://www.figma.com/api/mcp/asset/4e4e29b7-8799-4e17-af0d-d69794ac0241",
    newFriendIcon:
      "https://www.figma.com/api/mcp/asset/bb58f18e-8c86-435b-ac02-11a1700c16de",
    levelIcon:
      "https://www.figma.com/api/mcp/asset/8c4e7740-b95b-454d-bb34-eba0ff383c8a",
    happyIcon:
      "https://www.figma.com/api/mcp/asset/7c20bd7e-6364-4ce3-a19e-b2facdfd5632",
  },
  benefits: {
    leaderboardIcon:
      "https://www.figma.com/api/mcp/asset/484abcf8-9f6b-4aba-b598-6f7f9f4c6137",
    leaderboardStar:
      "https://www.figma.com/api/mcp/asset/e4e30598-540e-4027-9253-e69ccf21f1c5",
    gameMasterIcon:
      "https://www.figma.com/api/mcp/asset/dcb63f3c-33f3-4ad3-ae0b-ee5fb894db3b",
    gameMasterWhistleTip:
      "https://www.figma.com/api/mcp/asset/9e6a5b7e-2f0e-4be8-835c-8615a6a22a47",
    shuttlecockIcon:
      "https://www.figma.com/api/mcp/asset/5c306197-5d3c-447c-8157-8545b5cb6eb7",
    cameraIcon:
      "https://www.figma.com/api/mcp/asset/f0c040f7-d9e6-4556-8dc9-e8da61eb36fd",
    gameSystemIcon:
      "https://www.figma.com/api/mcp/asset/0c78e438-47e4-4cc0-89a2-0329b0b6b707",
  },
  sessions: {
    beginner:
      "https://www.figma.com/api/mcp/asset/8ab8b64d-f43e-4c82-87cf-207eaa6d48cc",
    funPlay:
      "https://www.figma.com/api/mcp/asset/2f00ec76-e9b0-44e9-990a-46c9b6fe218f",
    girlOnly:
      "https://www.figma.com/api/mcp/asset/5a1b6b25-272e-4996-8906-4383cd764172",
    afterWork:
      "https://www.figma.com/api/mcp/asset/8d5627a6-ee73-43b0-bb32-0cb8b6b4b77b",
  },
  cta: {
    courtPhoto:
      "https://www.figma.com/api/mcp/asset/3c9b94de-03bf-4b43-857d-ef7d20c8402c",
    glowEllipseTop:
      "https://www.figma.com/api/mcp/asset/3813e2b7-8cdc-436c-99ce-42b46ff2228e",
    glowEllipseLeft:
      "https://www.figma.com/api/mcp/asset/c74825f1-c30f-49b5-a162-7740fbe40299",
    whatsappIcon:
      "https://www.figma.com/api/mcp/asset/a72496de-91d4-4f53-b77b-c53d0ab328c5",
  },
  footer: {
    logoMark:
      "https://www.figma.com/api/mcp/asset/3c9d584d-ee7f-4cec-842f-c14621fd11e4",
    instagram:
      "https://www.figma.com/api/mcp/asset/865ddff5-d6b7-43e4-9f4d-07c52f5041a0",
    tiktok:
      "https://www.figma.com/api/mcp/asset/a841b8f7-997a-4cef-9b44-8a04583a2f1d",
  },
} as const;
