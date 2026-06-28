import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SessionsSection from "@/components/sections/SessionsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

/**
 * HALAMAN UTAMA
 * Di sinilah semua section "disusun". Urutan section di halaman = urutan
 * komponen di bawah, dari atas ke bawah.
 *
 * Cara ubah urutan section -> tinggal pindah baris <XxxSection /> ke
 * posisi yang diinginkan.
 *
 * Cara MENAMBAH section baru, contoh "Testimoni":
 * 1. Buat file baru: components/sections/TestimonialSection.tsx
 *    (boleh copy salah satu file section yang ada sebagai contoh struktur).
 * 2. Di file baru itu, buat function component dan export default-kan, contoh:
 *      export default function TestimonialSection() {
 *        return <section>...</section>;
 *      }
 * 3. Import di file ini:
 *      import TestimonialSection from "@/components/sections/TestimonialSection";
 * 4. Panggil komponennya di urutan yang diinginkan di bawah, contoh:
 *      <AboutSection />
 *      <TestimonialSection />
 *      <BenefitsSection />
 *
 * Cara MENGHAPUS section -> hapus baris importnya di atas + baris
 * pemanggilannya di bawah (<XxxSection />). File komponennya boleh dihapus
 * juga dari folder components/sections kalau sudah tidak dipakai.
 */
export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <BenefitsSection />
      <SessionsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
