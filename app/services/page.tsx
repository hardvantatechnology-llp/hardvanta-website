import Link from "next/link";

import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* HERO SECTION */}

      <section className="services-hero">
        <div className="services-hero-content">
          <p className="section-tag">OUR SERVICES</p>

          <h1>
            Engineering Innovation
            <span> Through Intelligent Technology</span>
          </h1>

          <p>
            Hardvanta Technologies LLP delivers intelligent engineering services
            focused on Embedded Systems, IoT Development, AI Solutions, PCB
            Design, Firmware Engineering, and Industrial Automation.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="services-grid-section">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div key={index} className="service-box">
              {/* ICON */}

              <div className="service-icon">
                <Icon size={30} />
              </div>

              {/* NUMBER */}

              <span className="service-number">0{index + 1}</span>

              {/* TITLE */}

              <h3>{service.title}</h3>

              {/* DESCRIPTION */}

              <p>{service.description}</p>
            </div>
          );
        })}
      </section>

      {/* CTA SECTION */}

      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Building Future-Ready Intelligent Engineering Systems</h2>

          <p>
            We help startups, enterprises, and industries build scalable
            embedded systems, AI products, IoT infrastructure, and intelligent
            automation solutions.
          </p>

          <Link href="/contact" className="services-cta-btn">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
