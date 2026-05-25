import Image from "next/image";

import Link from "next/link";

import { ArrowUpRight, Cpu, Brain, Factory } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO SECTION */}

      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">ABOUT HARDVANTA</p>

          <h1>
            Engineering
            <span> Intelligent Systems</span> For Modern Industries
          </h1>

          <p className="about-description">
            Hardvanta Technologies LLP is a research-driven engineering company
            focused on Embedded Systems, IoT Development, Artificial
            Intelligence, Firmware Engineering, and Industrial Automation
            solutions.
          </p>
        </div>
      </section>

      {/* COMPANY SECTION */}

      <section className="company-section">
        {/* LEFT */}

        <div className="company-left">
          <p className="section-small">WHO WE ARE</p>

          <h2>
            Innovation
            <span> Through Engineering</span>
          </h2>

          <p>
            We build scalable intelligent systems, embedded technologies,
            automation platforms, and AI-powered engineering solutions for
            future-ready industries.
          </p>

          <p>
            Our mission is to combine advanced research, embedded engineering,
            automation, and intelligent software systems to create impactful
            industrial innovation.
          </p>

          {/* FEATURES */}

          <div className="about-features">
            <div className="about-feature">
              <Cpu size={20} />

              <span>Embedded Systems</span>
            </div>

            <div className="about-feature">
              <Brain size={20} />

              <span>AI Solutions</span>
            </div>

            <div className="about-feature">
              <Factory size={20} />

              <span>Industrial Automation</span>
            </div>
          </div>

          {/* STATS */}

          <div className="about-stats">
            <div className="stat-box">
              <h3>2026</h3>

              <p>Founded</p>
            </div>

            <div className="stat-box">
              <h3>AI + IoT</h3>

              <p>Innovation</p>
            </div>

            <div className="stat-box">
              <h3>R&D</h3>

              <p>Research Driven</p>
            </div>
          </div>

          {/* BUTTON */}

          <Link href="/contact" className="about-btn">
            Work With Us
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* RIGHT */}

        <div className="company-right">
          <div className="about-image-card">
            <Image
              src="/logo/logo.jpeg"
              alt="Hardvanta Technologies LLP"
              width={600}
              height={600}
              priority
              quality={100}
              className="about-company-image"
            />

            <div className="about-overlay">
              <h3>HARDVANTA</h3>

              <p>Innovate • Engineer • Empower</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
