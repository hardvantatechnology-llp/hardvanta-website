/* =========================================
   FINAL CLEAN INDUSTRIES PAGE
========================================= */

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
            <article key={index} className="industry-card">
              <div className="industry-icon">
                <Icon size={34} />
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
