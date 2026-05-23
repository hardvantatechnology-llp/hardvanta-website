import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page" id="about">
      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">ABOUT HARDVANTA</p>

          <h1>
            Intelligent
            <span> Engineering</span>
            Solutions
          </h1>

          <p className="about-description">
            Hardvanta Technologies LLP is a research-driven engineering company
            focused on Embedded Systems, IoT Development, Artificial
            Intelligence, Firmware Engineering, and Industrial Automation.
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
            We develop scalable intelligent systems and advanced engineering
            solutions for modern industries and future-ready businesses.
          </p>

          <p>
            Our mission is to combine AI, embedded systems, automation, and
            research to create impactful industrial technologies.
          </p>

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

              <p>Research</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="company-right">
          <div className="about-image-card">
            <Image
              src="/logo/logo.jpeg"
              alt="Hardvanta Technologies LLP"
              width={420}
              height={420}
              priority
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
