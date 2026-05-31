"use client";

import React from "react";

export const teamMembers = [
  {
    name: "Priya Saini",
    role: "Founder",
    image: "/team/priya_saini.jpeg",
    description:
      "Leading Hardvanta Technologies LLP with a strong vision focused on innovation, intelligent systems, and future-ready engineering solutions.",
    linkedin:
      "https://www.linkedin.com/in/priya-saini-5b9159308/?skipRedirect=true",
  },

  {
    name: "Abhishek Patel",
    role: "Co-Founder",
    image: "/team/abhishek_patel.jpeg",
    description:
      "Driving engineering excellence, scalable product development, and advanced technology research across multiple domains.",
    linkedin: "https://www.linkedin.com/in/abhishek-patel-49354a258",
  },

  {
    name: "Salman Ansari",
    role: "Chief Executive Officer",
    image: "/team/salman-ansari.jpeg",
    description:
      "Focused on strategic growth, operational leadership, industrial innovation, and intelligent business transformation.",
    linkedin: "https://www.linkedin.com/in/salman-ansari-0a8537361",
  },

  {
    name: "Devesh Chauhan",
    role: "Chief Operating Officer",
    image: "/team/Devesh-Chauhan.png",
    description:
      "Driving operations, execution excellence, open-source initiatives, and scalable engineering systems while ensuring seamless delivery across products, communities, and strategic technology programs.",
    linkedin: "https://www.linkedin.com/in/devesh-chauhan-6b5691308",
  },
];

export default function TeamPreview() {
  return (
    <>
      <style>{`
        .team-preview-section { padding: 80px 2%; background: #ffffff; width: 100%; }
        .team-preview-header { max-width: 1400px; margin: 0 auto 60px; text-align: center; }
        .section-tag { display: inline-flex; align-items: center; padding: 8px 18px; border-radius: 999px; background: #eff6ff; color: #2563eb; font-size: 10px; font-weight: 800; letter-spacing: 2px; margin-bottom: 20px; text-transform: uppercase; }
        .team-preview-title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; color: #0f172a; margin-bottom: 10px; }
        
        .team-preview-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 20px; 
          width: 100%;
          max-width: 100%;
          padding: 0 20px;
        }
        
        .team-preview-card { 
          display: flex; flex-direction: column; background: #ffffff; 
          border: 1px solid #e2e8f0; border-radius: 24px; overflow: hidden;
          transition: all 0.4s ease; height: 100%; min-height: 650px;
        }
        .team-preview-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        
        .img-container { width: 100%; height: 350px; overflow: hidden; }
        .card-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: 0.5s ease; }
        .team-preview-card:hover .card-img { transform: scale(1.05); }
        
        .content { padding: 30px; flex-grow: 1; display: flex; flex-direction: column; }
        .role { font-size: 11px; font-weight: 800; color: #2563eb; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px; }
        .name { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 16px; }
        .desc { color: #64748b; font-size: 0.95rem; line-height: 1.7; margin-bottom: 25px; }
        
        .link-wrapper { margin-top: auto; }
        .linkedin-link { display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; border-radius: 50%; background: #f1f5f9; color: #0f172a; transition: 0.3s; }
        .linkedin-link:hover { background: #0077b5; color: white; }

        @media (max-width: 1200px) { .team-preview-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .team-preview-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="team-preview-section">
        <div className="team-preview-header">
          <p className="section-tag">Expert Team</p>
          <h2 className="team-preview-title">Meet Our Leadership</h2>
        </div>

        <div className="team-preview-grid">
          {teamMembers.map((member, index) => (
            <article key={index} className="team-preview-card">
              <div className="img-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img"
                />
              </div>
              <div className="content">
                <span className="role">{member.role}</span>
                <h3 className="name">{member.name}</h3>
                <p className="desc">{member.description}</p>
                <div className="link-wrapper">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
