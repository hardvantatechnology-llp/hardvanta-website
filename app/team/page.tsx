import Image from "next/image";

import { teamMembers } from "@/data/team";

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
          <article key={index} className="team-member">
            {/* IMAGE */}

            <div className="team-image-wrapper">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                quality={100}
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 50vw,
                  (max-width: 1200px) 33vw,
                  25vw
                "
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
          </article>
        ))}
      </section>
    </main>
  );
}
