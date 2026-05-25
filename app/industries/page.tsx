import { industries } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <main className="industries-page">
      {/* HERO */}

      <section className="industries-hero">
        <div className="industries-content">
          <p className="section-tag">INDUSTRIES WE SERVE</p>

          <h1>
            Intelligent Technology
            <span> Across Industries</span>
          </h1>

          <p>
            Hardvanta Technologies LLP develops scalable engineering and
            intelligent technology solutions for modern industries, enterprises,
            and future-ready businesses.
          </p>
        </div>
      </section>

      {/* GRID */}

      <section className="industries-grid">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <div key={index} className="industry-card">
              {/* ICON */}

              <div className="industry-icon">
                <Icon size={34} />
              </div>

              <span className="industry-number">0{index + 1}</span>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>
            </div>
          );
        })}
      </section>

      {/* CTA SECTION */}

      <section className="industries-cta">
        <div className="industries-cta-content">
          <h2>Ready To Build Intelligent Engineering Systems?</h2>

          <p>
            Partner with Hardvanta Technologies LLP to develop scalable
            industrial solutions, intelligent systems, and next-generation
            engineering products.
          </p>

          <a href="/contact" className="industries-cta-btn">
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
