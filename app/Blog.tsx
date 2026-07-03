"use client";

import { useEffect, useRef, type ReactElement } from "react";
import Link from "next/link";

type TagClass = "ai" | "embedded" | "iot" | "pcb" | "robotics" | "startup";
type Post = { slug: string; tag: string; tagClass: TagClass; title: string; excerpt: string; date: string; read: string };

const FEATURED: Post = {
  slug: "edge-ai-bringing-intelligence-closer-to-the-device",
  tag: "AI & Edge Computing",
  tagClass: "ai",
  title: "Edge AI: Bringing Intelligence Closer to the Device",
  excerpt: "Decision-making is moving out of the cloud and onto the device itself. Here's what that shift actually means for makers, startups, and industrial teams building smarter hardware in 2026.",
  date: "Jun 24, 2026",
  read: "6 min read",
};

const POSTS: Post[] = [
  { slug: "choosing-the-right-microcontroller", tag: "Embedded Systems", tagClass: "embedded", title: "Choosing the Right Microcontroller for Your Next Project", excerpt: "ARM Cortex-M, AVR, ESP32, or RISC-V? A quick, practical guide to picking the right MCU.", date: "Jun 18, 2026", read: "5 min" },
  { slug: "5-iot-trends-smart-factories-2026", tag: "Industrial IoT", tagClass: "iot", title: "5 IoT Trends Shaping Smart Factories in 2026", excerpt: "Predictive maintenance to digital twins — what's changing on factory floors across India.", date: "Jun 10, 2026", read: "7 min" },
  { slug: "pcb-design-mistakes-to-avoid", tag: "PCB Design", tagClass: "pcb", title: "PCB Design Mistakes Every Beginner Should Avoid", excerpt: "Trace width, thermal relief, grounding — small decisions that cause the biggest headaches later.", date: "Jun 3, 2026", read: "6 min" },
  { slug: "how-embedded-systems-power-robotics", tag: "Robotics", tagClass: "robotics", title: "How Embedded Systems Power Modern Robotics", excerpt: "Real-time control loops are the invisible backbone behind every robot that moves precisely.", date: "May 27, 2026", read: "5 min" },
  { slug: "prototype-to-production-hardware-journey", tag: "Startups", tagClass: "startup", title: "From Prototype to Production: A Hardware Journey", excerpt: "What actually breaks when a startup scales from 10 units to 10,000 — and how to plan for it early.", date: "May 20, 2026", read: "8 min" },
  { slug: "building-your-first-connected-device", tag: "IoT", tagClass: "iot", title: "Building Your First Connected Device: A Starter Guide", excerpt: "Sensors, connectivity, and cloud — the three building blocks of any working IoT product.", date: "May 12, 2026", read: "6 min" },
];

const VISUALS: Record<TagClass, ReactElement> = {
  ai: (
    <svg viewBox="0 0 160 160" fill="none">
      <g className="hv-draw" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="80" cy="80" r="5" fill="currentColor" stroke="none" />
        <path d="M80 80L48 56M80 80L112 56M80 80L48 104M80 80L112 104M80 80L80 40M80 80L80 120" />
        <circle cx="48" cy="56" r="4" /><circle cx="112" cy="56" r="4" /><circle cx="48" cy="104" r="4" />
        <circle cx="112" cy="104" r="4" /><circle cx="80" cy="40" r="4" /><circle cx="80" cy="120" r="4" />
        <path d="M48 56L34 40M112 56L126 40M48 104L34 120M112 104L126 120" opacity="0.55" />
        <circle cx="34" cy="40" r="2.5" opacity="0.55" /><circle cx="126" cy="40" r="2.5" opacity="0.55" />
        <circle cx="34" cy="120" r="2.5" opacity="0.55" /><circle cx="126" cy="120" r="2.5" opacity="0.55" />
      </g>
    </svg>
  ),
  embedded: (
    <svg viewBox="0 0 160 160" fill="none">
      <g className="hv-draw" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="54" y="54" width="52" height="52" rx="4" />
        <rect x="68" y="68" width="24" height="24" rx="2" opacity="0.6" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path d={`M${66 + i * 9} 54V38`} /><path d={`M${66 + i * 9} 106V122`} />
            <path d={`M54 ${66 + i * 9}H38`} /><path d={`M106 ${66 + i * 9}H122`} />
          </g>
        ))}
      </g>
    </svg>
  ),
  iot: (
    <svg viewBox="0 0 160 160" fill="none">
      <g className="hv-draw" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="80" cy="112" r="5" fill="currentColor" stroke="none" />
        <path d="M62 100a25.5 25.5 0 0 1 36 0" />
        <path d="M48 86a44.5 44.5 0 0 1 64 0" opacity="0.75" />
        <path d="M34 72a63.5 63.5 0 0 1 92 0" opacity="0.5" />
        <circle cx="34" cy="40" r="4" /><circle cx="126" cy="40" r="4" />
        <circle cx="20" cy="112" r="3" opacity="0.55" /><circle cx="140" cy="112" r="3" opacity="0.55" />
        <path d="M34 44v12M126 44v12" opacity="0.55" />
      </g>
    </svg>
  ),
  pcb: (
    <svg viewBox="0 0 160 160" fill="none">
      <g className="hv-draw" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="36" y="36" width="88" height="88" rx="3" />
        <path d="M36 60h24v-8h20" /><path d="M124 76h-18v20h-16v18" />
        <path d="M36 104h16v-16h30v-16h18" opacity="0.7" />
        <circle cx="60" cy="52" r="3" fill="currentColor" stroke="none" />
        <circle cx="106" cy="96" r="3" fill="currentColor" stroke="none" />
        <circle cx="90" cy="72" r="3" fill="currentColor" stroke="none" />
        <circle cx="52" cy="104" r="3" fill="currentColor" stroke="none" />
      </g>
    </svg>
  ),
  robotics: (
    <svg viewBox="0 0 160 160" fill="none">
      <g className="hv-draw" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="46" cy="120" r="8" /><path d="M46 112V92l30-14" />
        <circle cx="76" cy="78" r="5" /><path d="M76 78l28-10" />
        <circle cx="104" cy="68" r="5" /><path d="M104 68l14 20" />
        <path d="M118 88l-10 10M118 88l6 12" opacity="0.7" /><path d="M30 120h10" opacity="0.55" />
      </g>
    </svg>
  ),
  startup: (
    <svg viewBox="0 0 160 160" fill="none">
      <g className="hv-draw" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M34 122L70 86l18 14 34-40" /><path d="M100 60h22v22" />
        <circle cx="34" cy="122" r="3" fill="currentColor" stroke="none" />
        <circle cx="70" cy="86" r="3" fill="currentColor" stroke="none" />
        <circle cx="88" cy="100" r="3" fill="currentColor" stroke="none" />
        <circle cx="122" cy="60" r="3" fill="currentColor" stroke="none" />
        <path d="M34 122h88" opacity="0.4" />
      </g>
    </svg>
  ),
};

function Visual({ tagClass, featured = false }: { tagClass: TagClass; featured?: boolean }) {
  return (
    <div className={`hv-visual${featured ? " hv-visual-featured" : ""}`}>
      <div className="hv-icon-badge">
        <div className="hv-icon">{VISUALS[tagClass]}</div>
      </div>
    </div>
  );
}

export default function Blog() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll(".hv-card, .hv-featured");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setTimeout(() => el.classList.add("in-view"), i * 70);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section className="hv-blog" id="blog" ref={rootRef as any}>
      <style>{`
        .hv-blog{ --bg:#f7f9fc; --surface:#ffffff; --border:#e7ebf2; --navy:#0f1626; --muted:#64748b;
          --blue:#2563eb; --blue-2:#38bdf8; --blue-soft:#eef3ff; --panel-a:#0b1220; --panel-b:#060911;
          background:var(--bg); font-family:'Inter', system-ui, sans-serif; color:var(--navy);
          padding:100px 24px 120px; -webkit-font-smoothing:antialiased; }
        .hv-blog h1,.hv-blog h2,.hv-blog h3{ font-family:'Space Grotesk','Inter',sans-serif; letter-spacing:-0.01em; margin:0; }
        .hv-blog *{ box-sizing:border-box; }
        .hv-wrap{ max-width:1180px; margin:0 auto; }
        .hv-head{ max-width:640px; margin:0 auto 56px; text-align:center; }
        .hv-eyebrow{ display:inline-flex; align-items:center; gap:8px; padding:7px 16px; border-radius:999px;
          background:var(--blue-soft); color:var(--blue); font-size:12px; font-weight:600; letter-spacing:0.14em;
          text-transform:uppercase; margin-bottom:22px; }
        .hv-eyebrow::before{ content:''; width:6px; height:6px; border-radius:50%; background:var(--blue); }
        .hv-head h2{ font-size:clamp(30px,4vw,42px); font-weight:700; line-height:1.18; margin-bottom:16px; }
        .hv-head h2 .grad{ background:linear-gradient(90deg,var(--blue),var(--blue-2)); -webkit-background-clip:text;
          background-clip:text; color:transparent; }
        .hv-head p{ color:var(--muted); font-size:16px; line-height:1.65; margin:0; }
        .hv-featured{ display:grid; grid-template-columns:1.1fr 1fr; background:var(--surface); border:1px solid var(--border);
          border-radius:18px; overflow:hidden; box-shadow:0 1px 2px rgba(15,22,38,0.04); margin-bottom:26px;
          opacity:0; transform:translateY(16px); }
        .hv-featured.in-view{ opacity:1; transform:translateY(0); transition:transform .6s ease, opacity .7s ease; }
        .hv-featured .hv-body{ padding:40px 42px; display:flex; flex-direction:column; justify-content:center; }
        .hv-badge-featured{ display:inline-flex; align-items:center; gap:7px; font-size:11px; font-weight:700;
          letter-spacing:0.1em; text-transform:uppercase; color:#b45309; background:#fef3e2; padding:5px 12px;
          border-radius:999px; margin-bottom:16px; width:fit-content; }
        .hv-badge-featured::before{ content:''; width:5px; height:5px; border-radius:50%; background:#b45309; }
        .hv-featured .hv-body h3{ font-size:25px; font-weight:700; margin-bottom:12px; line-height:1.3; }
        .hv-featured .hv-body p.hv-excerpt{ font-size:15px; color:var(--muted); line-height:1.7; margin:0 0 20px; }
        .hv-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .hv-card{ background:var(--surface); border:1px solid var(--border); border-radius:16px; overflow:hidden;
          box-shadow:0 1px 2px rgba(15,22,38,0.04); transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          opacity:0; transform:translateY(16px); }
        .hv-card.in-view{ opacity:1; transform:translateY(0); transition:transform .5s ease, opacity .6s ease; }
        .hv-card:hover{ transform:translateY(-4px); box-shadow:0 20px 34px -18px rgba(37,99,235,0.24); border-color:#dbe4f5; }
        .hv-visual{ position:relative; height:180px; overflow:hidden; display:flex; align-items:center; justify-content:center;
          background:linear-gradient(160deg, var(--panel-a), var(--panel-b)); }
        .hv-visual-featured{ height:100%; min-height:300px; }
        .hv-visual::before{ content:''; position:absolute; inset:0;
          background-image:linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px);
          background-size:26px 26px; mask-image:radial-gradient(circle at center, black 45%, transparent 85%); }
        .hv-visual::after{ content:''; position:absolute; width:220px; height:220px; border-radius:50%;
          background:radial-gradient(circle, rgba(56,132,255,0.18), transparent 70%); filter:blur(4px); pointer-events:none; }
        .hv-icon-badge{ position:relative; z-index:2; width:84px; height:84px; border-radius:20px;
          background:rgba(37,99,235,0.14); border:1px solid rgba(96,165,250,0.45);
          box-shadow:0 0 46px -6px rgba(56,132,255,0.55), inset 0 0 22px rgba(56,132,255,0.08);
          display:flex; align-items:center; justify-content:center; backdrop-filter:blur(6px);
          transition:transform .3s ease, box-shadow .3s ease; }
        .hv-visual-featured .hv-icon-badge{ width:116px; height:116px; border-radius:26px; }
        .hv-card:hover .hv-icon-badge{ transform:scale(1.06);
          box-shadow:0 0 60px -4px rgba(56,132,255,0.7), inset 0 0 26px rgba(56,132,255,0.12); }
        .hv-icon{ width:40px; height:40px; color:#8fbeff; }
        .hv-visual-featured .hv-icon{ width:56px; height:56px; }
        .hv-icon svg{ width:100%; height:100%; }
        .hv-draw path,.hv-draw circle,.hv-draw rect{ stroke-dasharray:420; stroke-dashoffset:420; opacity:0; }
        .hv-card.in-view .hv-draw path,.hv-card.in-view .hv-draw circle,.hv-card.in-view .hv-draw rect,
        .hv-featured.in-view .hv-draw path,.hv-featured.in-view .hv-draw circle,.hv-featured.in-view .hv-draw rect{
          animation:hv-draw-in 1.1s ease forwards; }
        @keyframes hv-draw-in{ 0%{stroke-dashoffset:420;opacity:0;} 15%{opacity:1;} 100%{stroke-dashoffset:0;opacity:1;} }
        .hv-body{ padding:22px 22px 20px; }
        .hv-tag{ display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:700; letter-spacing:0.06em;
          text-transform:uppercase; padding:4px 10px; border-radius:999px; margin-bottom:12px; }
        .hv-tag::before{ content:''; width:5px; height:5px; border-radius:50%; background:currentColor; }
        .hv-tag.ai{ color:#4338ca; background:#eef0ff; } .hv-tag.embedded{ color:#1d4ed8; background:#e9f0ff; }
        .hv-tag.iot{ color:#0f766e; background:#e6f7f4; } .hv-tag.pcb{ color:#b45309; background:#fef3e2; }
        .hv-tag.robotics{ color:#6d28d9; background:#f1eafe; } .hv-tag.startup{ color:#15803d; background:#e9f9ee; }
        .hv-body h3{ font-size:16.5px; font-weight:600; margin-bottom:8px; line-height:1.35; }
        .hv-body p.hv-excerpt{ font-size:13.8px; line-height:1.6; color:var(--muted); margin:0 0 14px; }
        .hv-meta{ display:flex; align-items:center; gap:9px; font-size:12px; color:#94a1b5; padding-top:12px;
          border-top:1px solid var(--border); }
        .hv-meta .hv-dot{ width:3px; height:3px; border-radius:50%; background:#c3cbdb; flex:none; }
        .hv-foot-cta{ margin-top:52px; padding-top:28px; border-top:1px solid var(--border);
          display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap; }
        .hv-foot-cta p{ color:var(--muted); font-size:14.5px; margin:0; }
        .hv-btn-dark{ display:inline-flex; align-items:center; gap:8px; background:var(--navy); color:#fff; font-weight:600;
          font-size:14px; padding:13px 24px; border-radius:999px; text-decoration:none; border:none; cursor:pointer;
          transition:background .2s ease, transform .2s ease; }
        .hv-btn-dark:hover{ background:#1c2740; transform:translateY(-1px); }
        .hv-btn-dark:focus-visible{ outline:2px solid var(--blue); outline-offset:3px; }
        @media (max-width:920px){ .hv-featured{ grid-template-columns:1fr; } .hv-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:600px){ .hv-grid{ grid-template-columns:1fr; } .hv-blog{ padding:72px 18px 90px; } .hv-featured .hv-body{ padding:26px; } }
        @media (prefers-reduced-motion: reduce){ .hv-card,.hv-featured{ transition:none; opacity:1; transform:none; }
          .hv-draw path,.hv-draw circle,.hv-draw rect{ animation:none !important; stroke-dashoffset:0; opacity:1; } }
      `}</style>

      <div className="hv-wrap">
        <div className="hv-head">
          <span className="hv-eyebrow">Hardvanta Insights</span>
          <h2>Notes From the<br /><span className="grad">Engineering Bench</span></h2>
          <p>Short, practical reads on embedded systems, IoT, PCB design, and building hardware that actually ships.</p>
        </div>

        <div className="hv-featured">
          <Visual tagClass={FEATURED.tagClass} featured />
          <div className="hv-body">
            <span className="hv-badge-featured">Featured</span>
            <h3>{FEATURED.title}</h3>
            <p className="hv-excerpt">{FEATURED.excerpt}</p>
            <div className="hv-meta">
              <span className={`hv-tag ${FEATURED.tagClass}`}>{FEATURED.tag}</span>
              <span className="hv-dot" /><span>{FEATURED.date}</span>
              <span className="hv-dot" /><span>{FEATURED.read}</span>
            </div>
          </div>
        </div>

        <div className="hv-grid">
          {POSTS.map((post) => (
            <div className="hv-card" key={post.slug}>
              <Visual tagClass={post.tagClass} />
              <div className="hv-body">
                <span className={`hv-tag ${post.tagClass}`}>{post.tag}</span>
                <h3>{post.title}</h3>
                <p className="hv-excerpt">{post.excerpt}</p>
                <div className="hv-meta">
                  <span>{post.date}</span><span className="hv-dot" /><span>{post.read}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hv-foot-cta">
          <p>New articles every two weeks.</p>
        </div>
      </div>
    </section>
  );
}