import Image from "next/image";
import { researchAreas } from "@/data/research";

export default function ResearchPage() {
  return (
    <main className="research-page">
      {/* HERO */}

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
            and scalable future-ready innovation.
          </p>
        </div>
      </section>

      {/* RESEARCH GRID */}

      <section className="research-grid">
        {researchAreas.map((item, index) => {
          return (
            <article key={index} className="research-card">
              {/* IMAGE */}

              <div className="research-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  priority={index < 2}
                  className="research-image"
                />

                <div className="research-overlay"></div>

                <span className="research-chip">HARDVANTA LABS</span>
              </div>

              {/* CONTENT */}

              <div className="research-body">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="research-footer">
                  <span>Research & Innovation</span>

                  <div className="research-dot"></div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
