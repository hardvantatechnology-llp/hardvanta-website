"use client";

import React from "react";
import Link from "next/link";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1V10" />
  </svg>
);
const IconBuilding = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const IconCpu = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7z" />
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 3a4 4 0 10-8 0" />
  </svg>
);
const IconMail = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconScale = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);
const IconLink = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);
const IconPin = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// ── Section Card ──────────────────────────────────────────────────────────────
interface CardProps {
  id: string;
  index: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<CardProps> = ({ id, index, icon, title, children }) => (
  <div id={id} style={{
    background: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)",
    border: "1px solid #e8edf5",
  }}>
    {/* ── ONLY THIS BLOCK CHANGED: white bg instead of dark blue gradient ── */}
    <div style={{
      background: "#ffffff",
      borderBottom: "1px solid #e8edf5",
      padding: "22px 28px",
      display: "flex", alignItems: "center", gap: "16px",
    }}>
      <div style={{
        width: "44px", height: "44px",
        borderRadius: "10px",
        background: "#f0f5ff",
        border: "1px solid #dbeafe",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#2563eb",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "10px", letterSpacing: "0.14em",
          color: "#94a3b8", textTransform: "uppercase", marginBottom: "3px",
        }}>
          Section {String(index).padStart(2, "0")}
        </p>
        <h2 style={{
          fontSize: "18px", fontWeight: 700,
          color: "#0f172a",
          fontFamily: "'Space Grotesk',sans-serif",
          letterSpacing: "-0.02em", lineHeight: 1.2,
        }}>
          {title}
        </h2>
      </div>
    </div>

    {/* White content */}
    <div style={{ padding: "28px 28px 32px" }}>{children}</div>

    {/* Footer tag */}
    <div style={{
      padding: "12px 28px",
      borderTop: "1px solid #f0f3f8",
      display: "flex", alignItems: "center", gap: "8px",
    }}>
      <span style={{
        width: "6px", height: "6px", borderRadius: "50%",
        background: "#2563eb", display: "inline-block",
      }} />
      <span style={{
        fontFamily: "'Space Mono',monospace",
        fontSize: "10px", letterSpacing: "0.14em",
        color: "#2563eb", textTransform: "uppercase",
      }}>
        HARDVANTA RESEARCH &amp; DEVELOPMENT
      </span>
    </div>
  </div>
);

// ── Paragraph ─────────────────────────────────────────────────────────────────
const P: React.FC<{ children: React.ReactNode; last?: boolean }> = ({ children, last }) => (
  <p style={{
    fontSize: "15px", color: "#475569",
    lineHeight: 1.85, marginBottom: last ? 0 : "14px",
    fontFamily: "'Space Grotesk',sans-serif",
  }}>
    {children}
  </p>
);

// ── Page link row (for sitemap listings) ───────────────────────────────────────
interface PageLink {
  label: string;
  href: string;
  description: string;
  external?: boolean;
}

const LinkGrid: React.FC<{ items: PageLink[] }> = ({ items }) => (
  <ul style={{
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
    gap: "10px", marginTop: "14px",
  }}>
    {items.map((item) => {
      const cardStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        background: "#f8fafd",
        border: "1px solid #e8edf5",
        borderRadius: "10px",
        padding: "14px 16px",
        textDecoration: "none",
      };
      const inner = (
        <>
          <span style={{
            display: "flex", alignItems: "center", gap: "8px",
            fontSize: "14px", fontWeight: 600, color: "#0f172a",
            fontFamily: "'Space Grotesk',sans-serif",
          }}>
            <span style={{ color: "#2563eb", display: "inline-flex" }}>
              <IconLink />
            </span>
            {item.label}
          </span>
          <span style={{
            fontSize: "12.5px", color: "#64748b", lineHeight: 1.6,
            fontFamily: "'Space Grotesk',sans-serif",
            paddingLeft: "24px",
          }}>
            {item.description}
          </span>
          <span style={{
            fontSize: "11px", color: "#94a3b8",
            fontFamily: "'Space Mono',monospace",
            paddingLeft: "24px", marginTop: "2px",
          }}>
            {item.href}
          </span>
        </>
      );

      return (
        <li key={item.href}>
          {item.external ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" style={cardStyle}>
              {inner}
            </a>
          ) : (
            <Link href={item.href} style={cardStyle}>
              {inner}
            </Link>
          )}
        </li>
      );
    })}
  </ul>
);

// ── TOC data ──────────────────────────────────────────────────────────────────
const toc = [
  { href: "#s1", label: "Overview" },
  { href: "#s2", label: "Main Navigation" },
  { href: "#s3", label: "Company" },
  { href: "#s4", label: "Research & Engineering" },
  { href: "#s5", label: "Careers & Community" },
  { href: "#s6", label: "Contact" },
  { href: "#s7", label: "Legal" },
];

// Office location — swap this query for your college's exact name once confirmed,
// e.g. "Galgotias University, Plot 046, Knowledge Park 3, ..." for a precise pin.
const officeAddress =
  "Plot 046, Knowledge Park 3, Alpha, Greater Noida, Uttar Pradesh - 201310, India";
const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

// ─────────────────────────────────────────────────────────────────────────────
const Sitemap: React.FC = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: #f4f6fb; }
    `}</style>

    <div style={{ fontFamily: "'Space Grotesk',sans-serif", background: "#f4f6fb", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{
        background: "linear-gradient(160deg,#070b14 0%,#0c1526 55%,#081220 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px", pointerEvents: "none",
        }} />
        {/* glow */}
        <div style={{
          position: "absolute", top: "-80px", left: "50%",
          transform: "translateX(-50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse,rgba(37,99,235,0.09) 0%,transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1120px", margin: "0 auto",
          padding: "80px 28px 72px",
          position: "relative", zIndex: 1,
          textAlign: "center",
        }}>
          {/* pill badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(37,99,235,0.1)",
            border: "1px solid rgba(37,99,235,0.25)",
            borderRadius: "999px",
            padding: "5px 16px", marginBottom: "28px",
          }}>
            <span style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "10px", letterSpacing: "0.14em",
              color: "#60a5fa", textTransform: "uppercase",
            }}>
              Site Structure
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(38px,5vw,62px)",
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f0f6ff", marginBottom: "20px",
          }}>
            Site{" "}
            <span style={{ color: "#2563eb" }}>Map</span>
          </h1>

          <p style={{
            fontSize: "16px", color: "#64748b",
            lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 36px",
            fontFamily: "'Space Grotesk',sans-serif",
          }}>
            A complete overview of every page on the Hardvanta Research &amp; Development website,
            organized for quick and easy navigation.
          </p>

          {/* meta pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {["Updated regularly", "All public pages listed", "Republic of India"].map((t) => (
              <span key={t} style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "10px", letterSpacing: "0.1em",
                color: "#475569",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "5px 12px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "52px 28px 88px" }}>

        {/* ── TOC ── */}
        <div style={{
          background: "#fff", borderRadius: "16px",
          border: "1px solid #e8edf5",
          overflow: "hidden", marginBottom: "40px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}>
          <div style={{
            background: "#f8fafd", borderBottom: "1px solid #e8edf5",
            padding: "16px 24px", display: "flex", alignItems: "center", gap: "10px",
          }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10M4 18h7" />
            </svg>
            <span style={{
              fontFamily: "'Space Mono',monospace", fontSize: "10px",
              letterSpacing: "0.14em", color: "#64748b", textTransform: "uppercase",
            }}>
              Table of Contents
            </span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))",
            gap: "2px", padding: "14px 18px",
          }}>
            {toc.map((item, i) => (
              <a key={i} href={item.href} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "8px 10px", borderRadius: "6px",
                color: "#334155", fontSize: "13px",
                fontFamily: "'Space Grotesk',sans-serif",
                textDecoration: "none", transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f4f6fb")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "9px", color: "#2563eb", minWidth: "20px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── INTRO ── */}
        <div style={{
          background: "#fff",
          border: "1px solid #e8edf5",
          borderLeft: "3px solid #2563eb",
          borderRadius: "0 12px 12px 0",
          padding: "24px 26px",
          marginBottom: "32px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }} id="s1">
          <P>
            Welcome to{" "}
            <strong style={{ color: "#0f172a" }}>Hardvanta Research &amp; Development Sitemap</strong>. This page provides a comprehensive overview of the publicly accessible sections of our website, helping visitors quickly navigate and discover the information they need.
          </P>
          <P>
            The sitemap is organized into key categories, including our company, research and engineering capabilities, technology domains, services, industries, career opportunities, contact information, and legal resources. It serves as a centralized directory, making it easy to explore everything Hardvanta Research & Development has to offer.
          </P>
          <P last>
           As our research initiatives, technologies, and organizational capabilities continue to evolve, this sitemap will be updated to reflect the latest public information available on our website.
          </P>
        </div>

        {/* ── SECTIONS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <SectionCard id="s2" index={2} icon={<IconHome />} title="Main Navigation">
            <P>Core pages that introduce visitors to who we are and what we do.</P>
            <LinkGrid items={[
              { label: "Home", href: "/", description: "Overview of Hardvanta Research & Development." },
              { label: "About Us", href: "/about", description: "Our mission, vision, and engineering philosophy." },
              { label: "Services", href: "/services", description: "Embedded systems, IoT, AI solutions, and PCB design." },
              { label: "Industries We Serve", href: "/industries", description: "Sectors and use cases we build solutions for." },
            ]} />
          </SectionCard>

          <SectionCard id="s3" index={3} icon={<IconBuilding />} title="Company">
            <P>Learn more about the organization, its people, and its story.</P>
            <LinkGrid items={[
              { label: "Leadership", href: "/team", description: "Meet the team driving our research and engineering." },
              { label: "Our Story", href: "/about#story", description: "How Hardvanta Research & Development began." },
              { label: "Partnerships", href: "/partnerships", description: "Collaborations with institutions and industry." },
            ]} />
          </SectionCard>

          <SectionCard id="s4" index={4} icon={<IconCpu />} title="Research & Engineering">
            <P>Explore our technical domains and areas of active development.</P>
            <LinkGrid items={[
              { label: "Research & Development", href: "/research", description: "Research-driven engineering innovation — full overview of our labs." },
              { label: "Artificial Intelligence", href: "/research#artificial-intelligence", description: "AI-driven intelligent systems, predictive analytics, smart automation, and adaptive technologies for modern industries." },
              { label: "Industrial IoT", href: "/research#industrial-iot", description: "Connected industrial ecosystems, sensor networks, smart monitoring, and scalable IoT infrastructure solutions." },
              { label: "Embedded Innovation", href: "/research#embedded-innovation", description: "Next-generation embedded hardware, firmware engineering, PCB innovation, and real-time intelligent systems." },
              { label: "Automation Systems", href: "/research#automation-systems", description: "Industrial automation platforms, intelligent process control, and smart operational transformation solutions." },
              { label: "Smart Electronics", href: "/research#smart-electronics", description: "Research in advanced electronics, intelligent device engineering, and integrated smart hardware systems." },
              { label: "Future Technologies", href: "/research#future-technologies", description: "Research-driven innovation focused on scalable engineering, emerging technologies, and intelligent digital transformation." },
            ]} />
          </SectionCard>

          <SectionCard id="s5" index={5} icon={<IconUsers />} title="Careers & Community">
            <P>Opportunities to work with us or engage with our community.</P>
            <LinkGrid items={[
              { label: "Careers", href: "/careers", description: "Open roles and internship opportunities." },
              { label: "Internship Program", href: "/careers/internships", description: "Hands-on learning for students and graduates." },
              { label: "Blog", href: "/blog", description: "Articles, updates, and engineering insights." },
            ]} />
          </SectionCard>

          <SectionCard id="s6" index={6} icon={<IconMail />} title="Contact">
            <P>Ways to reach out and get in touch with our team.</P>
            <LinkGrid items={[
              { label: "Contact Us", href: "/contact", description: "General enquiries and business contact form." },
            ]} />

            {/* Office Location — own block, with the map button directly beneath it */}
            <div style={{
              marginTop: "10px",
              background: "#f8fafd",
              border: "1px solid #e8edf5",
              borderRadius: "10px",
              padding: "14px 16px",
            }}>
              <span style={{
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "14px", fontWeight: 600, color: "#0f172a",
                fontFamily: "'Space Grotesk',sans-serif",
              }}>
                <span style={{ color: "#2563eb", display: "inline-flex" }}>
                  <IconPin />
                </span>
                Office Location
              </span>
              <span style={{
                display: "block",
                fontSize: "12.5px", color: "#64748b", lineHeight: 1.6,
                fontFamily: "'Space Grotesk',sans-serif",
                paddingLeft: "24px", marginTop: "4px",
              }}>
                {officeAddress}
              </span>

              <a
                href={officeMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "14px",
                  marginLeft: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#2563eb",
                  color: "#ffffff",
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "8px",
                  padding: "10px 18px",
                }}
              >
                <IconPin />
                Open Office Location in Google Maps
              </a>
            </div>
          </SectionCard>

          <SectionCard id="s7" index={7} icon={<IconScale />} title="Legal">
            <P>Policies and terms governing the use of this website.</P>
            <LinkGrid items={[
              { label: "Privacy Policy", href: "/privacy", description: "How we collect, use, and protect your information." },
              { label: "Terms of Service", href: "/terms", description: "The terms governing access to this website." },
            ]} />
          </SectionCard>

        </div>
      </div>

    </div>
  </>
);

export default Sitemap;