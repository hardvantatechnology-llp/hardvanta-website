import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="hero-left">
          <p className="hero-tag">INNOVATE ◆ ENGINEER ◆ EMPOWER</p>

          <h1>
            Engineering
            <span> Intelligent Systems</span>
            For Modern Industries
          </h1>

          <p className="hero-description">
            Hardvanta Technologies LLP is a research-driven engineering company
            focused on Embedded Systems, IoT Development, Artificial
            Intelligence, PCB Design, Firmware Engineering, and Industrial
            Automation solutions for modern businesses.
          </p>

          {/* BUTTONS */}

          <div className="hero-buttons">
            <Link href="/services" className="hero-primary-btn">
              Explore Services
            </Link>

            <Link href="/contact" className="hero-secondary-btn">
              Schedule Consultation
            </Link>
          </div>

          {/* STATS */}

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>R&D</h3>

              <p>Research Driven</p>
            </div>

            <div className="hero-stat">
              <h3>AI + IoT</h3>

              <p>Innovation Focus</p>
            </div>

            <div className="hero-stat">
              <h3>2026</h3>

              <p>Incorporated</p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <div className="hero-right">
          <div className="hero-card">
            <span className="hero-card-badge">HARDVANTA TECHNOLOGIES LLP</span>

            <h2>Building Intelligent Engineering Systems For The Future</h2>

            <p>
              Delivering scalable engineering, automation, embedded systems, AI
              technologies, and intelligent industrial solutions.
            </p>

            <div className="hero-card-grid">
              <div>Embedded Systems</div>

              <div>IoT Development</div>

              <div>PCB Design</div>

              <div>AI Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
