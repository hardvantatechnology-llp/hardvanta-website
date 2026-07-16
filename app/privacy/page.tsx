"use client";

import React from "react";

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const IconDatabase = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);
const IconClipboard = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);
const IconCookie = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
  </svg>
);
const IconLock = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);
const IconExternal = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const IconDoc = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const IconUser = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const IconRefresh = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
const IconMail = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// ── Section card ──────────────────────────────────────────────────────────────
interface CardProps {
  id: string;
  index: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<CardProps> = ({ id, index, icon, title, children }) => (
  <div
    id={id}
    style={{
      background: "#ffffff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      border: "1px solid #e8edf5",
    }}
  >
    {/* Section heading — white background, clean border-bottom */}
    <div
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e8edf5",
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {/* icon box */}
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
          fontFamily: "'Space Mono', monospace",
          fontSize: "10px", letterSpacing: "0.14em",
          color: "#94a3b8", textTransform: "uppercase", marginBottom: "3px",
        }}>
          Section {String(index).padStart(2, "0")}
        </p>
        <h2 style={{
          fontSize: "18px", fontWeight: 700,
          color: "#0f172a",
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "-0.02em", lineHeight: 1.2,
        }}>
          {title}
        </h2>
      </div>
    </div>

    {/* White content body */}
    <div style={{ padding: "28px 28px 32px" }}>
      {children}
    </div>

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
        fontFamily: "'Space Mono', monospace",
        fontSize: "10px", letterSpacing: "0.14em",
        color: "#2563eb", textTransform: "uppercase",
      }}>
        HARDVANTA RESEARCH &amp; DEVELOPMENT
      </span>
    </div>
  </div>
);

// ── Paragraph style ───────────────────────────────────────────────────────────
const P: React.FC<{ children: React.ReactNode; last?: boolean }> = ({ children, last }) => (
  <p style={{
    fontSize: "15px", color: "#475569",
    lineHeight: 1.85, marginBottom: last ? 0 : "14px",
    fontFamily: "'Space Grotesk', sans-serif",
  }}>
    {children}
  </p>
);

// ── Bullet list ───────────────────────────────────────────────────────────────
const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
    {items.map((item, i) => (
      <li key={i} style={{
        display: "flex", alignItems: "flex-start", gap: "12px",
        fontSize: "14px", color: "#475569", lineHeight: 1.7,
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "10px 14px",
        background: "#f8fafd",
        border: "1px solid #e8edf5",
        borderRadius: "8px",
      }}>
        <span style={{ color: "#2563eb", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>▸</span>
        {item}
      </li>
    ))}
  </ul>
);

// ── Check grid ────────────────────────────────────────────────────────────────
const CheckGrid: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
    gap: "8px", marginTop: "12px",
  }}>
    {items.map((item, i) => (
      <li key={i} style={{
        display: "flex", alignItems: "flex-start", gap: "10px",
        fontSize: "14px", color: "#475569", lineHeight: 1.6,
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "10px 14px",
        background: "#f8fafd",
        border: "1px solid #e8edf5",
        borderRadius: "8px",
      }}>
        <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>✓</span>
        {item}
      </li>
    ))}
  </ul>
);

// ── Callout note ──────────────────────────────────────────────────────────────
const Note: React.FC<{ children: React.ReactNode; type?: "info" | "warn" }> = ({ children, type = "info" }) => (
  <div style={{
    display: "flex", gap: "12px",
    background: type === "warn" ? "rgba(245,158,11,0.05)" : "rgba(37,99,235,0.05)",
    border: `1px solid ${type === "warn" ? "rgba(245,158,11,0.2)" : "rgba(37,99,235,0.15)"}`,
    borderLeft: `3px solid ${type === "warn" ? "#f59e0b" : "#2563eb"}`,
    borderRadius: "0 8px 8px 0",
    padding: "14px 16px",
    marginTop: "16px",
    fontSize: "14px", color: "#475569", lineHeight: 1.7,
    fontFamily: "'Space Grotesk', sans-serif",
  }}>
    <span style={{ color: type === "warn" ? "#f59e0b" : "#2563eb", fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>
      {type === "warn" ? "⚠" : "ℹ"}
    </span>
    <span>{children}</span>
  </div>
);

// ── TOC ───────────────────────────────────────────────────────────────────────
const toc = [
  { href: "#s1", label: "Overview" },
  { href: "#s2", label: "Information We Collect" },
  { href: "#s3", label: "How We Use Your Information" },
  { href: "#s4", label: "Cookies and Analytics" },
  { href: "#s5", label: "Data Security" },
  { href: "#s6", label: "Third-Party Services" },
  { href: "#s7", label: "Intellectual Property" },
  { href: "#s8", label: "Children's Privacy" },
  { href: "#s9", label: "Updates to This Policy" },
  { href: "#s10", label: "Contact Us" },
];

// ─────────────────────────────────────────────────────────────────────────────
const PrivacyPolicy: React.FC = () => (
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
            padding: "5px 16px",
            marginBottom: "28px",
          }}>
            <span style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "10px", letterSpacing: "0.14em",
              color: "#60a5fa", textTransform: "uppercase",
            }}>
              Legal &amp; Privacy
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(38px,5vw,62px)",
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f0f6ff",
            marginBottom: "20px",
          }}>
            Privacy{" "}
            <span style={{ color: "#2563eb" }}>Policy</span>
          </h1>

          <p style={{
            fontSize: "16px", color: "#64748b",
            lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 36px",
            fontFamily: "'Space Grotesk',sans-serif",
          }}>
            At Hardvanta Research &amp; Development, we value your privacy and are committed to
            protecting the information you share with us.
          </p>

          {/* meta pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {["Effective upon access", "No data sold to third parties", "Republic of India"].map((t) => (
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
            At <strong style={{ color: "#0f172a" }}>Hardvanta Research &amp; Development</strong>, we value your
            privacy and are committed to protecting the information you share with us. This Privacy Policy
            explains how we collect, use, store, and safeguard information when you access or interact with our
            website.
          </P>
          <P last>
            Our website is designed to present our research, innovation, engineering capabilities, projects, and
            organizational information. It is not an e-commerce platform, and no products or services are sold
            through this website.
          </P>
        </div>

        {/* ── SECTIONS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <SectionCard id="s2" index={2} icon={<IconDatabase />} title="Information We Collect">
            <P>Depending on how you interact with our website, we may collect the following categories of information:</P>
            <BulletList items={[
              "Personal information voluntarily submitted through contact forms, including your name, email address, organization, and any information you choose to provide.",
              "Technical information such as your IP address, browser type, operating system, device information, pages visited, and general usage statistics.",
              "Information collected through cookies and similar technologies to improve website functionality and user experience.",
            ]} />
            <Note>We collect only the information necessary to operate and improve our website and to respond to legitimate enquiries.</Note>
          </SectionCard>

          <SectionCard id="s3" index={3} icon={<IconClipboard />} title="How We Use Your Information">
            <P>Information collected through this website may be used to:</P>
            <CheckGrid items={[
              "Respond to enquiries and communication requests.",
              "Facilitate research, partnership, collaboration, or media discussions.",
              "Improve website performance, usability, and security.",
              "Analyze website traffic and visitor engagement.",
              "Comply with applicable legal and regulatory obligations.",
            ]} />
            <Note>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</Note>
          </SectionCard>

          <SectionCard id="s4" index={4} icon={<IconCookie />} title="Cookies and Analytics">
            <P>
              This website may use cookies and analytics technologies to understand visitor interactions and
              enhance website performance. These technologies help us improve navigation, functionality, and
              overall user experience.
            </P>
            <P last>
              You may configure your browser to decline cookies; however, certain features of the website may
              not function as intended.
            </P>
          </SectionCard>

          <SectionCard id="s5" index={5} icon={<IconLock />} title="Data Security">
            <P>
              We implement appropriate administrative, technical, and organizational safeguards to protect
              information against unauthorized access, disclosure, alteration, or destruction.
            </P>
            <P last>
              While we maintain industry-standard security practices, no method of electronic transmission or
              storage can be guaranteed to be completely secure.
            </P>
          </SectionCard>

          <SectionCard id="s6" index={6} icon={<IconExternal />} title="Third-Party Services">
            <P>
              Our website may contain links to external websites or third-party platforms for informational
              purposes.
            </P>
            <P last>
              Hardvanta Research &amp; Development is not responsible for the privacy practices, policies, or
              content of external websites. We encourage visitors to review the privacy policies of any
              third-party websites they visit.
            </P>
          </SectionCard>

          <SectionCard id="s7" index={7} icon={<IconDoc />} title="Intellectual Property">
            <P>
              Unless otherwise stated, all content published on this website — including research material,
              technical content, publications, graphics, illustrations, software demonstrations, documentation,
              branding, logos, and design elements — is the intellectual property of Hardvanta Research &amp;
              Development and is protected under applicable intellectual property laws.
            </P>
            <Note type="warn">
              No material from this website may be copied, reproduced, distributed, modified, or commercially
              exploited without prior written authorization.
            </Note>
          </SectionCard>

          <SectionCard id="s8" index={8} icon={<IconUser />} title="Children's Privacy">
            <P last>
              This website is intended for a general audience and is not directed toward children under the age
              of 13. We do not knowingly collect personal information from children.
            </P>
          </SectionCard>

          <SectionCard id="s9" index={9} icon={<IconRefresh />} title="Updates to This Policy">
            <P last>
              We may revise this Privacy Policy periodically to reflect changes in our practices, technology, or
              legal obligations. Any updates will become effective upon publication on this page.
            </P>
          </SectionCard>

          <SectionCard id="s10" index={10} icon={<IconMail />} title="Contact Us">
            <P last>
              If you have any questions regarding this Privacy Policy or our data practices, please contact us
              using the contact information provided on this website.
            </P>
          </SectionCard>

        </div>
      </div>

    </div>
  </>
);

export default PrivacyPolicy;