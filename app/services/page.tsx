"use client";

import React from "react";

const services = [
  {
    title: "Embedded Systems",
    description:
      "Intelligent embedded solutions, firmware engineering, hardware integration, and real-time system development.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "IoT Development",
    description:
      "End-to-end IoT ecosystem development for smart industrial systems, monitoring, and connected devices.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "PCB Design",
    description:
      "Professional PCB prototyping, circuit architecture, testing, and electronics engineering solutions.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Firmware Development",
    description:
      "Scalable firmware solutions optimized for embedded devices, automation systems, and industrial hardware.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Solutions",
    description:
      "Artificial Intelligence solutions focused on automation, predictive systems, analytics, and smart technologies.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial Automation",
    description:
      "Smart industrial automation systems designed to improve operational intelligence and efficiency.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');
        .services-section { font-family: 'Inter', sans-serif; position: relative; padding: 120px 0; background: #ffffff; overflow: hidden; }
        .services-header { max-width: 800px; margin: 0 auto 80px; text-align: center; }
        .section-tag { color: #2563eb; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; font-size: 10px; margin-bottom: 20px; }
        .services-header h2 { font-size: clamp(2.8rem, 6vw, 4.5rem); font-weight: 800; color: #0f172a; line-height: 1; letter-spacing: -2px; }
        
        .marquee-wrapper { display: flex; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-track { display: flex; gap: 32px; animation: scroll 60s linear infinite; }
        
        .service-card { 
          width: 360px; flex-shrink: 0; border-radius: 40px; background: #ffffff; 
          border: 1px solid rgba(226, 232, 240, 0.6); transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
          overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04);
        }
        .service-card:hover { 
          transform: translateY(-25px) scale(1.03); 
          border-color: #2563eb;
          box-shadow: 0 30px 60px rgba(37, 99, 235, 0.2);
        }
        .image-container { position: relative; width: 100%; height: 240px; overflow: hidden; }
        .image-container img { transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1); }
        .service-card:hover .image-container img { transform: scale(1.15) rotate(2deg); }
        
        .content-box { padding: 35px; }
        .content-box h3 { font-size: 1.6rem; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 15px; }
        .footer-tag { 
          margin-top: 30px; font-weight: 900; color: #2563eb; font-size: 9px; 
          letter-spacing: 3px; text-transform: uppercase; display: flex; align-items: center; gap: 10px;
        }
        
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <section className="services-section">
        <div className="services-header">
          <p className="section-tag">Engineering Excellence</p>
          <h2>
            Building The Future Of{" "}
            <span style={{ color: "#2563eb" }}>Intelligent Industry</span>
          </h2>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...services, ...services].map((s, i) => (
              <article key={i} className="service-card">
                <div className="image-container">
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="content-box">
                  <h3>{s.title}</h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "1rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {s.description}
                  </p>
                  <div className="footer-tag">
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#2563eb",
                        borderRadius: "50%",
                      }}
                    ></span>
                    ENGINEERED BY HARDVANTA
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
