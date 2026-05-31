import Navbar from "@/components/navbar/Navbar";

import Hero from "@/components/hero/Hero";

import AboutPage from "@/app/about/page";

import ServicesPage from "@/app/services/page";

import ResearchPage from "@/app/research/page";

import TeamPreview from "@/components/team/TeamPreview";

import CTASection from "@/components/cta/CTASection";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="home-page">
      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section id="home" className="home-section hero-home-section">
        <Hero />
      </section>

      {/* =========================================
          ABOUT
      ========================================= */}

      <section id="about" className="home-section">
        <AboutPage />
      </section>

      {/* =========================================
          SERVICES
      ========================================= */}

      <section id="services" className="home-section">
        <ServicesPage />
      </section>

      {/* =========================================
          RESEARCH
      ========================================= */}

      <section id="research" className="home-section">
        <ResearchPage />
      </section>

      {/* =========================================
          TEAM
      ========================================= */}

      <section id="team" className="home-section">
        <TeamPreview />
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <CTASection />

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </main>
  );
}
