import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import ResearchPage from "./research/page";

export default function Home() {
  return (
    <main className="home-page">
      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}

      <section id="about">
        <AboutPage />
      </section>

      {/* SERVICES */}

      <section id="services">
        <ServicesPage />
      </section>

      {/* RESEARCH */}

      <section id="research">
        <ResearchPage />
      </section>

      {/* FOOTER */}

      <Footer />
    </main>
  );
}
