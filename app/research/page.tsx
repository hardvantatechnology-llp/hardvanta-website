export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Artificial Intelligence",

      description:
        "AI-driven intelligent systems, predictive analytics, smart automation, and adaptive technologies for modern industries.",
    },

    {
      title: "Industrial IoT",

      description:
        "Connected industrial ecosystems, sensor networks, smart monitoring, and scalable IoT infrastructure solutions.",
    },

    {
      title: "Embedded Innovation",

      description:
        "Next-generation embedded hardware, firmware engineering, PCB innovation, and real-time intelligent systems.",
    },

    {
      title: "Automation Systems",

      description:
        "Industrial automation platforms, intelligent process control, and smart operational transformation solutions.",
    },

    {
      title: "Smart Electronics",

      description:
        "Research in advanced electronics, intelligent device engineering, and integrated smart hardware systems.",
    },

    {
      title: "Future Technologies",

      description:
        "Research-driven innovation focused on scalable engineering, emerging technologies, and intelligent digital transformation.",
    },
  ];

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
        {researchAreas.map((item, index) => (
          <div key={index} className="research-card">
            <div className="research-number">0{index + 1}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
