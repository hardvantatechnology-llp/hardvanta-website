import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-bg" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        {/* LEFT */}

        <div className="hero-left">
          <span className="hero-tag">INNOVATE ◆ ENGINEER ◆ EMPOWER</span>

          <h1>
            Engineering
            <span> Intelligent Systems </span>
            For The Next Industrial Revolution
          </h1>

          <p className="hero-description">
            Building next-generation Embedded Systems, Artificial Intelligence,
            Industrial IoT, PCB Engineering, Firmware Platforms, and Intelligent
            Automation infrastructure for modern enterprises.
          </p>

          <div className="hero-buttons">
            <Link href="/services" className="hero-primary-btn">
              Explore Services
            </Link>

            <Link href="/contact" className="hero-secondary-btn">
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-core">
          <div className="hero-core-ring ring-1" />
          <div className="hero-core-ring ring-2" />
          <div className="hero-core-ring ring-3" />
          <div className="hero-core-ring ring-4" />

          <div className="hero-core-logo">
            <Image
              src="/logo/logo.jpeg"
              alt="Hardvanta Technologies LLP"
              fill
              priority
              quality={100}
              className="hero-core-image"
            />
          </div>

          <div className="orbit orbit-1">
            <div className="service-node">AI</div>
          </div>

          <div className="orbit orbit-2">
            <div className="service-node">Embedded</div>
          </div>

          <div className="orbit orbit-3">
            <div className="service-node">IoT</div>
          </div>

          <div className="orbit orbit-4">
            <div className="service-node">PCB</div>
          </div>

          <div className="orbit orbit-5">
            <div className="service-node">Firmware</div>
          </div>

          <div className="orbit orbit-6">
            <div className="service-node">Automation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
