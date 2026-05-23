export default function IndustriesPage() {
  const industries = [
    {
      title: "Industrial Automation",

      description:
        "Advanced automation systems, intelligent process control, and smart industrial operations.",
    },

    {
      title: "Smart Manufacturing",

      description:
        "Engineering modern manufacturing ecosystems with IoT integration and real-time monitoring.",
    },

    {
      title: "IoT & Smart Devices",

      description:
        "Connected device ecosystems, sensor-based systems, and scalable IoT infrastructure.",
    },

    {
      title: "Electronics Engineering",

      description:
        "Embedded electronics, PCB design, firmware engineering, and hardware integration solutions.",
    },

    {
      title: "AI & Intelligent Systems",

      description:
        "Artificial Intelligence solutions, predictive systems, automation intelligence, and smart analytics.",
    },

    {
      title: "Research & Innovation",

      description:
        "Research-driven engineering solutions focused on innovation, scalability, and future technologies.",
    },
  ];

  return (
    <main className="industries-page">
      {/* HERO SECTION */}

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

      {/* INDUSTRIES GRID */}

      <section className="industries-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="industry-number">0{index + 1}</div>

            <h3>{industry.title}</h3>

            <p>{industry.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
