import Image from "next/image";

const teamMembers = [
  {
    name: "Priya Saini",

    role: "Founder",

    image: "/team/priya_saini.jpeg",

    description:
      "Leading Hardvanta Technologies LLP with a strong vision focused on innovation, intelligent systems, and future-ready engineering solutions.",
  },

  {
    name: "Abhishek Patel",

    role: "Co-Founder",

    image: "/team/abhishek_patel.jpeg",

    description:
      "Driving engineering excellence, scalable product development, and advanced technology research across multiple domains.",
  },

  {
    name: "Salman Ansari",

    role: "Chief Executive Officer",

    image: "/team/salman-ansari.jpeg",

    description:
      "Focused on strategic growth, operational leadership, industrial innovation, and intelligent business transformation.",
  },
];

export default function TeamPage() {
  return (
    <main className="team-page">
      {/* HERO SECTION */}

      <section className="team-hero">
        <div className="team-hero-content">
          <p className="section-tag">OUR LEADERSHIP</p>

          <h1>
            Meet The
            <span> Hardvanta Team</span>
          </h1>

          <p className="team-hero-description">
            A passionate leadership team focused on research, engineering
            excellence, intelligent systems, and future-ready technology
            innovation.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}

      <section className="team-main-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            {/* IMAGE */}

            <div className="team-image-wrapper">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="team-member-image"
              />

              <div className="team-image-overlay"></div>
            </div>

            {/* CONTENT */}

            <div className="team-member-content">
              <span className="team-role">{member.role}</span>

              <h3>{member.name}</h3>

              <p className="team-description">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
