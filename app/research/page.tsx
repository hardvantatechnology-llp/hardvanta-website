"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Wrap a value into the 0..halfWidth range (proper modulo, never gets stuck)
  const wrap = (value: number) => {
    const half = halfWidthRef.current;
    if (!half || half <= 0) return 0;
    return ((value % half) + half) % half;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Re-measure repeatedly (not just once) so it self-heals if the first
    // measurement happens before layout/fonts/images have fully settled,
    // and so it stays correct across mobile/tablet/desktop breakpoints.
    const measure = () => {
      const w = track.scrollWidth / 2;
      if (w > 0) halfWidthRef.current = w;
    };
    measure();
    window.addEventListener("resize", measure);

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let lastTime = performance.now();

    const step = (time: number) => {
      const dt = Math.min(time - lastTime, 100); // guard against tab-backgrounding spikes
      lastTime = time;

      if (!isDown.current && halfWidthRef.current > 0) {
        const pxPerSecond = halfWidthRef.current / 60; // same pace as the original 60s loop
        const next = offsetRef.current + (pxPerSecond * dt) / 1000;
        offsetRef.current = wrap(next);
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.clientX;
    startOffset.current = offsetRef.current;
    track.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !isDown.current) return;
    const dx = e.clientX - startX.current;
    offsetRef.current = wrap(startOffset.current - dx);
    track.style.transform = `translateX(-${offsetRef.current}px)`;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    isDown.current = false;
    setIsDragging(false);
    if (track) {
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {
        // ignore — capture may already be released
      }
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');
        .research-page { font-family: 'Inter', sans-serif; position: relative; padding: 120px 0; background: #ffffff; overflow: hidden; }
        .research-content { max-width: 800px; margin: 0 auto 80px; text-align: center; padding: 0 20px; }
        .section-tag { color: #2563eb; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; font-size: 10px; margin-bottom: 20px; }
        .research-content h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #0f172a; line-height: 1.1; letter-spacing: -2px; }

        .marquee-wrapper {
          display: flex; overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          padding: 40px 0 60px;
          margin: -40px 0 -60px;
        }
        .marquee-track {
          display: flex; gap: 32px; cursor: grab; user-select: none; touch-action: pan-y;
          will-change: transform;
        }
        .marquee-track.dragging { cursor: grabbing; }

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
        .image-container { position: relative; width: 100%; height: 240px; overflow: hidden; flex-shrink: 0; pointer-events: none; }
        .image-container img { transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1); width: 100%; height: 100%; object-fit: cover; -webkit-user-drag: none; }
        .research-card:hover .image-container img { transform: scale(1.15) rotate(2deg); }

        .content-box { padding: 35px; flex-grow: 1; display: flex; flex-direction: column; pointer-events: none; }
        .content-box h3 { font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 15px 0; min-height: 3.2rem; }
        .content-box p { color: #64748b; font-size: 0.95rem; line-height: 1.6; flex-grow: 1; }

        .footer-tag {
          margin-top: 30px; font-weight: 900; color: #2563eb; font-size: 9px;
          letter-spacing: 3px; text-transform: uppercase; display: flex; align-items: center; gap: 10px;
        }

        @media (max-width: 1024px) {
          .research-page { padding: 90px 0; }
          .research-content { margin-bottom: 60px; }
          .research-content h1 { font-size: clamp(2rem, 4.5vw, 3rem); letter-spacing: -1.5px; }
          .marquee-track { gap: 20px; }
          .research-card { width: 260px; border-radius: 28px; }
          .image-container { height: 170px; }
          .content-box { padding: 22px; }
          .content-box h3 { font-size: 1.15rem; min-height: 0; margin-bottom: 10px; }
          .content-box p { font-size: 0.85rem; line-height: 1.5; }
          .footer-tag { margin-top: 20px; }
        }

        @media (max-width: 640px) {
          .research-page { padding: 50px 0; }
          .research-content { margin-bottom: 32px; padding: 0 16px; }
          .research-content h1 { font-size: clamp(1.6rem, 7vw, 2.1rem); letter-spacing: -0.5px; }
          .marquee-track { gap: 14px; }
          .research-card { width: 66vw; max-width: 220px; border-radius: 20px; }
          .image-container { height: 130px; }
          .content-box { padding: 16px; }
          .content-box h3 { font-size: 0.95rem; min-height: 0; margin-bottom: 8px; }
          .content-box p { font-size: 0.78rem; line-height: 1.45; }
          .footer-tag { margin-top: 12px; font-size: 7px; gap: 6px; }
        }
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
          <div
            ref={trackRef}
            className={`marquee-track${isDragging ? " dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
          >
            {[...researchAreas, ...researchAreas].map((item, i) => (
              <article key={i} className="research-card">
                <div className="image-container">
                  <img src={item.image} alt={item.title} draggable={false} />
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