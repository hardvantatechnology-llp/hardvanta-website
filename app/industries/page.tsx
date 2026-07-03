"use client";

import { useEffect, useRef, type ReactElement } from "react";
import Link from "next/link";

interface Industry {
  title: string;
  description: string;
  icon: ReactElement;
}

const industries: Industry[] = [
  {
    title: "Industrial Automation",
    description:
      "Rugged, tested components and volume supply built for plant-floor automation and process control.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20V9l6 4V9l6 4V9l6 4v7H3z" />
        <path d="M6 20v-4" />
        <path d="M12 20v-4" />
        <path d="M18 20v-4" />
      </svg>
    ),
  },
  {
    title: "Robotics & Automation",
    description:
      "Precision motors, controllers, and sensing hardware for teams engineering autonomous systems.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="9" width="10" height="9" rx="2" />
        <circle cx="10" cy="13" r="1" />
        <circle cx="14" cy="13" r="1" />
        <path d="M12 9V5" />
        <circle cx="12" cy="4" r="1.4" />
        <path d="M4 13H2" />
        <path d="M22 13h-2" />
      </svg>
    ),
  },
  {
    title: "IoT & Connected Devices",
    description:
      "End-to-end IoT hardware for monitoring, connected devices, and smart industrial ecosystems.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="1.6" />
        <path d="M8.5 14.5a5 5 0 0 1 7 0" />
        <path d="M5.5 11.5a9 9 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    title: "Startups & Product Teams",
    description:
      "Reliable sourcing from first prototype to first production run, scaling with your roadmap.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2.5 2.5 4 6 4 9.5 0 2-1 3.5-1 3.5h-6s-1-1.5-1-3.5C8 8 9.5 4.5 12 2z" />
        <path d="M9 15l-2 5 3-1.5" />
        <path d="M15 15l2 5-3-1.5" />
        <circle cx="12" cy="10" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Research & Academic Labs",
    description:
      "Precision-grade components with fast turnaround for experimental and R&D environments.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v6L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V2" />
        <path d="M8.5 2h7" />
        <path d="M7 15h10" />
      </svg>
    ),
  },
  {
    title: "Electronics & Makers",
    description:
      "Dev boards, sensors, and PCB components that just work, for developers, students, and builders.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="8" height="8" rx="1.4" />
        <path d="M8 4v2" />
        <path d="M12 4v2" />
        <path d="M16 4v2" />
        <path d="M8 18v2" />
        <path d="M12 18v2" />
        <path d="M16 18v2" />
        <path d="M4 8h2" />
        <path d="M4 12h2" />
        <path d="M4 16h2" />
        <path d="M18 8h2" />
        <path d="M18 12h2" />
        <path d="M18 16h2" />
      </svg>
    ),
  },
];

export default function IndustriesPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".card");
    if (!cards || cards.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(() => target.classList.add("in-view"), i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="industries" id="industries">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Who We Serve</span>
          <h2>
            Engineering For
            <br />
            <span className="grad">Every Industry</span>
          </h2>
          <p>
            From campus labs to factory floors, Hardvanta supplies the hardware, systems, and support
            each industry needs to build with confidence.
          </p>
        </div>

        <div className="grid" ref={gridRef}>
          {industries.map((industry) => (
            <div className="card" key={industry.title}>
              <div className="visual">
                <div className="icon-badge">{industry.icon}</div>
              </div>
              <div className="body">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <span className="label">
                  <span className="dot" />
                  Served by Hardvanta
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="foot-cta">
          <p>{"Don't see your field listed?"}</p>
          <Link href="/contact" className="btn-dark">
            Talk to Our Team ↗
          </Link>
        </div>
      </div>

      <style jsx>{`
        .industries {
          padding: 100px 24px 120px;
          background: #f7f9fc;
          font-family: "Inter", sans-serif;
          color: #0f1626;
          -webkit-font-smoothing: antialiased;
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
        }
        .head {
          max-width: 640px;
          margin: 0 auto 60px;
          text-align: center;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          background: #eef3ff;
          color: #2563eb;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .head h2 {
          font-family: "Space Grotesk", sans-serif;
          letter-spacing: -0.01em;
          font-size: clamp(30px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.18;
          color: #0f1626;
          margin-bottom: 16px;
        }
        .grad {
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .head p {
          color: #64748b;
          font-size: 16px;
          line-height: 1.65;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .card {
          background: #ffffff;
          border: 1px solid #e7ebf2;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(15, 22, 38, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          opacity: 0;
          transform: translateY(16px);
        }
        .card.in-view {
          opacity: 1;
          transform: translateY(0);
          transition: transform 0.5s ease, opacity 0.6s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 34px -18px rgba(37, 99, 235, 0.28);
          border-color: #c9d8fb;
        }
        .card:hover .icon-badge {
          transform: scale(1.06);
          border-color: rgba(127, 178, 255, 0.75);
          box-shadow: 0 0 0 1px rgba(127, 178, 255, 0.3), 0 12px 28px -8px rgba(59, 130, 246, 0.55);
        }
        .visual {
          position: relative;
          height: 180px;
          background: radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.12), transparent 55%),
            #0b1120;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .visual::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          -webkit-mask-image: radial-gradient(circle at center, transparent 32%, black 70%);
          mask-image: radial-gradient(circle at center, transparent 32%, black 70%);
        }
        .icon-badge {
          position: relative;
          z-index: 2;
          width: 92px;
          height: 92px;
          border-radius: 22px;
          background: rgba(59, 130, 246, 0.14);
          border: 1px solid rgba(59, 130, 246, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.08), 0 16px 32px -12px rgba(59, 130, 246, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .icon-badge :global(svg) {
          stroke: #bcd7ff;
          filter: drop-shadow(0 2px 6px rgba(37, 99, 235, 0.35));
        }
        .body {
          padding: 24px 24px 22px;
        }
        .body h3 {
          font-family: "Space Grotesk", sans-serif;
          letter-spacing: -0.01em;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 9px;
          color: #0f1626;
        }
        .body p {
          font-size: 14.5px;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 16px;
        }
        .label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #2563eb;
          text-transform: uppercase;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          display: inline-block;
        }
        .foot-cta {
          margin-top: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .foot-cta p {
          color: #64748b;
          font-size: 14.5px;
        }
        .btn-dark {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f1626;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-dark:hover {
          background: #1c2740;
          transform: translateY(-1px);
        }
        .btn-dark:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .industries {
            padding: 72px 18px 90px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .card {
            transition: none;
            opacity: 1;
            transform: none;
          }
          .icon-badge {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}