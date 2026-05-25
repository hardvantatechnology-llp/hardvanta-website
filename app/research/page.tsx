import Link from "next/link";

import { researchAreas } from "@/data/research";

export default function ResearchPage() {
  return (
    <main className="research-page">
      {/* HERO SECTION */}

      <section className="research-hero">
        <div className="research-content">
          <p className="section-tag">RESEARCH & DEVELOPMENT</p>

          <h1>
            Research-Driven
            <span> Engineering Innovation</span>
          </h1>

          <p>
            Hardvanta Technologies LLP focuses on intelligent engineering
            research, embedded systems, AI technologies, industrial automation,
            and future-ready innovation.
          </p>
        </div>
      </section>

      {/* RESEARCH GRID */}

      <section className="research-grid">
        {researchAreas.map((item, index) => {
          const Icon = item.icon;

          return (
            <article key={index} className="research-card">
              {/* ICON */}

              <div className="research-icon">
                <Icon size={28} />
              </div>

              {/* NUMBER */}

              <span className="research-number">0{index + 1}</span>

              {/* TITLE */}

              <h3>{item.title}</h3>

              {/* DESCRIPTION */}

              <p>{item.description}</p>
            </article>
          );
        })}
      </section>

      {/* CTA */}

      <section className="research-cta">
        <div className="research-cta-content">
          <h2>Engineering The Future Through Research & Innovation</h2>

          <p>
            We invest in advanced engineering, embedded intelligence, AI
            systems, industrial automation, and future-ready technologies that
            power next-generation innovation.
          </p>

          <Link href="/contact" className="research-cta-btn">
            Collaborate With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
