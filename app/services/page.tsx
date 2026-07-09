"use client";

import React, { useEffect, useRef, useState } from "react";

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

    // Re-measure repeatedly (not just once) so we self-heal if the first
    // measurement happens before layout/fonts/images have settled.
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
      // guard against a huge dt after tab was backgrounded
      const dt = Math.min(time - lastTime, 100);
      lastTime = time;

      if (!isDown.current && halfWidthRef.current > 0) {
        const pxPerSecond = halfWidthRef.current / 60; // same pace as original 60s loop
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
        .services-section { font-family: 'Inter', sans-serif; position: relative; padding: 120px 0; background: #ffffff; overflow: hidden; }
        .services-header { max-width: 800px; margin: 0 auto 80px; text-align: center; padding: 0 20px; }
        .section-tag { color: #2563eb; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; font-size: 10px; margin-bottom: 20px; }
        .services-header h2 { font-size: clamp(2.8rem, 6vw, 4.5rem); font-weight: 800; color: #0f172a; line-height: 1; letter-spacing: -2px; }

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

        .service-card {
          width: 360px; flex-shrink: 0; border-radius: 40px; background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.6); transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
          overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04); display: flex; flex-direction: column;
        }
        .service-card:hover {
          transform: translateY(-25px) scale(1.03);
          border-color: #2563eb;
          box-shadow: 0 30px 60px rgba(37, 99, 235, 0.2);
        }
        .image-container { position: relative; width: 100%; height: 240px; overflow: hidden; flex-shrink: 0; pointer-events: none; }
        .image-container img { transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1); width: 100%; height: 100%; object-fit: cover; -webkit-user-drag: none; }
        .service-card:hover .image-container img { transform: scale(1.15) rotate(2deg); }

        .content-box { padding: 35px; flex-grow: 1; display: flex; flex-direction: column; pointer-events: none; }
        .content-box h3 { font-size: 1.6rem; font-weight: 800; letter-spacing: -0.5px; color: #0f172a; margin: 0 0 15px 0; min-height: 3.6rem; }
        .content-box p { color: #64748b; font-size: 1rem; line-height: 1.7; flex-grow: 1; }

        .footer-tag {
          margin-top: 30px; font-weight: 900; color: #2563eb; font-size: 9px;
          letter-spacing: 3px; text-transform: uppercase; display: flex; align-items: center; gap: 10px;
        }

        @media (max-width: 1024px) {
          .services-section { padding: 70px 0; }
          .services-header { margin-bottom: 44px; }
          .services-header h2 { letter-spacing: -1px; }
          .marquee-track { gap: 20px; }
          .service-card { width: 260px; border-radius: 28px; }
          .image-container { height: 160px; }
          .content-box { padding: 24px; }
          .content-box h3 { font-size: 1.15rem; min-height: 2.6rem; margin-bottom: 10px; }
          .content-box p { font-size: 0.85rem; line-height: 1.5; }
          .footer-tag { margin-top: 20px; }
        }

        @media (max-width: 640px) {
          .services-section { padding: 44px 0; }
          .services-header { margin-bottom: 28px; padding: 0 16px; }
          .section-tag { margin-bottom: 12px; }
          .services-header h2 { font-size: clamp(1.6rem, 6vw, 2.1rem); letter-spacing: -0.5px; }
          .marquee-track { gap: 12px; }
          .service-card { width: 62vw; max-width: 210px; border-radius: 18px; }
          .image-container { height: 110px; }
          .content-box { padding: 16px; }
          .content-box h3 { font-size: 0.95rem; min-height: 0; margin-bottom: 6px; line-height: 1.25; }
          .content-box p { font-size: 0.75rem; line-height: 1.4; }
          .footer-tag { margin-top: 12px; font-size: 7px; gap: 6px; }
          .footer-tag span { width: 6px; height: 6px; }
        }

        @media (max-width: 400px) {
          .service-card { width: 68vw; max-width: 190px; }
          .image-container { height: 95px; }
          .content-box { padding: 14px; }
          .content-box h3 { font-size: 0.88rem; }
          .content-box p { font-size: 0.72rem; }
        }
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
          <div
            ref={trackRef}
            className={`marquee-track${isDragging ? " dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
          >
            {[...services, ...services].map((s, i) => (
              <article key={i} className="service-card">
                <div className="image-container">
                  <img src={s.image} alt={s.title} draggable={false} />
                </div>
                <div className="content-box">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
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