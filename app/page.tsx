import Navbar from "@/components/navbar/Navbar";

import Hero from "@/components/hero/Hero";

import Footer from "@/components/footer/Footer";

import AboutPage from "@/app/about/page";

import ServicesPage from "@/app/services/page";

import ResearchPage from "@/app/research/page";

export default function Home() {
  return (
    <main className="home-page">
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}

      <section id="home" className="home-section hero-home-section">
        <Hero />
      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section id="about" className="home-section">
        <AboutPage />
      </section>

      {/* =========================
          SERVICES SECTION
      ========================= */}

      <section id="services" className="home-section">
        <ServicesPage />
      </section>

      {/* =========================
          RESEARCH SECTION
      ========================= */}

      <section id="research" className="home-section">
        <ResearchPage />
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <Footer />
    </main>
  );
}
