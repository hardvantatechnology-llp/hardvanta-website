import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="services-section">
      {/* BACKGROUND */}

      <div className="services-blur services-blur-one"></div>

      <div className="services-blur services-blur-two"></div>

      {/* HEADER */}

      <div className="services-header">
        <p className="section-tag">OUR SERVICES</p>

        <h2>
          Engineering Innovation
          <span> Through Intelligent Technology</span>
        </h2>

        <p>
          Intelligent engineering solutions focused on Embedded Systems,
          Industrial IoT, AI Infrastructure, PCB Engineering, Firmware Systems,
          and Industrial Automation.
        </p>
      </div>

      {/* SCROLL AREA */}

      <div className="services-scroll-wrapper">
        <div className="services-scroll-track">
          {[...services, ...services].map((service, index) => {
            return (
              <article key={index} className="service-card">
                {/* IMAGE */}

                <div className="service-image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="service-image"
                  />

                  <div className="service-image-overlay"></div>

                  <span className="service-chip">Hardvanta</span>
                </div>

                {/* CONTENT */}

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                <div className="service-footer">
                  <span>Intelligent Engineering</span>

                  <div className="service-dot"></div>
                </div>
                </div>

                {/* FOOTER */}

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
