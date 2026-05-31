import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight, Cpu, Brain, Factory, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <main className="about-page">
      <section className="company-section">
        {/* BACKGROUND */}

        <div className="about-blur about-blur-one"></div>

        <div className="about-blur about-blur-two"></div>

        <div className="company-container">
          {/* LEFT SIDE */}

          <div className="company-content">
            <p className="section-small">ABOUT HARDVANTA</p>

            <h1 className="company-title">
              Engineering Intelligent Systems
              <span> For Modern Industries</span>
            </h1>

            <p className="company-text">
              Hardvanta Technologies LLP is a research-driven engineering
              company focused on Embedded Systems, Industrial IoT, Artificial
              Intelligence, Firmware Engineering, and Industrial Automation
              solutions for future-ready industries.
            </p>

            <p className="company-text">
              We combine advanced engineering research, intelligent automation,
              AI infrastructure, embedded technologies, and scalable industrial
              systems to build reliable high-performance enterprise solutions.
            </p>

            {/* FEATURES */}

            <div className="about-features">
              <div className="about-feature">
                <Cpu size={18} />

                <span>Embedded Systems</span>
              </div>

              <div className="about-feature">
                <Brain size={18} />

                <span>AI Solutions</span>
              </div>

              <div className="about-feature">
                <Factory size={18} />

                <span>Industrial Automation</span>
              </div>

              <div className="about-feature">
                <ShieldCheck size={18} />

                <span>Enterprise Reliability</span>
              </div>
            </div>

            {/* STATS */}

            <div className="about-stats">
              <div className="about-stat-card">
                <h3>2026</h3>

                <p>Founded</p>
              </div>

              <div className="about-stat-card">
                <h3>AI + IoT</h3>

                <p>Innovation Focus</p>
              </div>

              <div className="about-stat-card">
                <h3>R&D</h3>

                <p>Research Driven</p>
              </div>
            </div>

            {/* BUTTON */}

            <div className="about-actions">
              <Link href="/contact" className="about-btn">
                Work With Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="company-image-wrapper">
            <div className="image-glow"></div>

            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
              alt="Hardvanta Technologies"
              width={700}
              height={860}
              quality={90}
              priority
              className="company-image"
            />

            {/* FLOATING CARD */}

            <div className="floating-card">
              <span className="floating-dot"></span>
              AI • Embedded • Industrial IoT
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
