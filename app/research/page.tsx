"use client";

import React from "react";

const researchAreas = [
  {
    title: "Artificial Intelligence",
    description:
      "AI-driven intelligent systems, predictive analytics, smart automation, and adaptive technologies for modern industries.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Industrial IoT",
    description:
      "Connected industrial ecosystems, sensor networks, smart monitoring, and scalable IoT infrastructure solutions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Embedded Innovation",
    description:
      "Next-generation embedded hardware, firmware engineering, PCB innovation, and real-time intelligent systems.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Automation Systems",
    description:
      "Industrial automation platforms, intelligent process control, and smart operational transformation solutions.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Smart Electronics",
    description:
      "Research in advanced electronics, intelligent device engineering, and integrated smart hardware systems.",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Future Technologies",
    description:
      "Research-driven innovation focused on scalable engineering, emerging technologies, and intelligent digital transformation.",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ResearchPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');
        .research-page { font-family: 'Inter', sans-serif; position: relative; padding: 120px 0; background: #ffffff; overflow: hidden; }
        .research-content { max-width: 800px; margin: 0 auto 80px; text-align: center; padding: 0 20px; }
        .section-tag { color: #2563eb; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; font-size: 10px; margin-bottom: 20px; }
        .research-content h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #0f172a; line-height: 1.1; letter-spacing: -2px; }
        
        .marquee-wrapper { display: flex; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-track { display: flex; gap: 32px; animation: scroll 60s linear infinite; }
        
        .research-card { 
          width: 360px; flex-shrink: 0; border-radius: 40px; background: #ffffff; 
          border: 1px solid rgba(226, 232, 240, 0.6); transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
          overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04); display: flex; flex-direction: column;
        }
        .research-card:hover { 
          transform: translateY(-25px) scale(1.03); 
          border-color: #2563eb;
          box-shadow: 0 30px 60px rgba(37, 99, 235, 0.2);
        }
        .image-container { position: relative; width: 100%; height: 240px; overflow: hidden; flex-shrink: 0; }
        .image-container img { transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1); width: 100%; height: 100%; object-fit: cover; }
        .research-card:hover .image-container img { transform: scale(1.15) rotate(2deg); }
        
        .content-box { padding: 35px; flex-grow: 1; display: flex; flex-direction: column; }
        .content-box h3 { font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 15px 0; min-height: 3.2rem; }
        .content-box p { color: #64748b; font-size: 0.95rem; line-height: 1.6; flex-grow: 1; }
        
        .footer-tag { 
          margin-top: 30px; font-weight: 900; color: #2563eb; font-size: 9px; 
          letter-spacing: 3px; text-transform: uppercase; display: flex; align-items: center; gap: 10px;
        }
        
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <section className="research-page">
        <div className="research-content">
          <p className="section-tag">Research & Development</p>
          <h1>
            Research-Driven{" "}
            <span style={{ color: "#2563eb" }}>Engineering Innovation</span>
          </h1>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...researchAreas, ...researchAreas].map((item, i) => (
              <article key={i} className="research-card">
                <div className="image-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content-box">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="footer-tag">
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#2563eb",
                        borderRadius: "50%",
                      }}
                    ></span>
                    HARDVANTA LABS
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
