export default function BlogPage() {
  return (
    <main className="blog-page">
      {/* HERO */}

      <section className="blog-hero">
        <div className="blog-hero-content">
          <p className="section-tag">HARDVANTA BLOG</p>

          <h1>
            Insights, Research &<span> Engineering Innovation</span>
          </h1>

          <p>
            Explore the latest insights, engineering research, IoT innovations,
            Embedded Systems, AI technologies, and industrial automation trends
            from Hardvanta Technologies LLP.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}

      <section className="blog-grid-section">
        {/* BLOG CARD 1 */}

        <div className="blog-card">
          <div className="blog-image">IoT</div>

          <div className="blog-content">
            <p className="blog-category">Embedded Systems</p>

            <h3>The Future of Embedded Systems in Smart Industries</h3>

            <p>
              Discover how embedded systems are transforming industrial
              automation, intelligent devices, and next-generation smart
              infrastructure.
            </p>

            <button>Read More →</button>
          </div>
        </div>

        {/* BLOG CARD 2 */}

        <div className="blog-card">
          <div className="blog-image">AI</div>

          <div className="blog-content">
            <p className="blog-category">Artificial Intelligence</p>

            <h3>AI-Driven Automation for Industrial Engineering</h3>

            <p>
              Learn how Artificial Intelligence is revolutionizing industrial
              workflows, predictive systems, and smart automation.
            </p>

            <button>Read More →</button>
          </div>
        </div>

        {/* BLOG CARD 3 */}

        <div className="blog-card">
          <div className="blog-image">PCB</div>

          <div className="blog-content">
            <p className="blog-category">PCB Design</p>

            <h3>PCB Design Best Practices for Modern Hardware Systems</h3>

            <p>
              Explore professional PCB design strategies, hardware optimization,
              and scalable electronics engineering techniques.
            </p>

            <button>Read More →</button>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="blog-cta">
        <h2>Research Today. Build Tomorrow.</h2>

        <p>
          Hardvanta Technologies LLP is committed to innovation, engineering
          excellence, and intelligent technology development.
        </p>
      </section>
    </main>
  );
}
