export default function ServicesPage() {
  const services = [
    {
      title: "Embedded Systems",

      description:
        "Intelligent embedded solutions, firmware engineering, hardware integration, and real-time system development.",
    },

    {
      title: "IoT Development",

      description:
        "End-to-end IoT ecosystem development for smart industrial systems, monitoring, and connected devices.",
    },

    {
      title: "PCB Design",

      description:
        "Professional PCB prototyping, circuit architecture, testing, and electronics engineering solutions.",
    },

    {
      title: "Firmware Development",

      description:
        "Scalable firmware solutions optimized for embedded devices, automation systems, and industrial hardware.",
    },

    {
      title: "AI Solutions",

      description:
        "Artificial Intelligence solutions focused on automation, predictive systems, analytics, and smart technologies.",
    },

    {
      title: "Industrial Automation",

      description:
        "Smart industrial automation systems designed to improve operational intelligence and efficiency.",
    },
  ];

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
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-number">0{index + 1}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
