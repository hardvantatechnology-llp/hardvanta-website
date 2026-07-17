"use client";

import React from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconBuilding = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconDoc = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const IconClipboard = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);
const IconExternal = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const IconWarning = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const IconScale = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);
const IconRefresh = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
const IconGlobe = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconMail = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
    {/* Section heading — white background, clean border-bottom */}
    <div style={{
      background: "#ffffff",
      borderBottom: "1px solid #e8edf5",
      padding: "22px 28px",
      display: "flex", alignItems: "center", gap: "16px",
    }}>
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

// ── Prohibited list ───────────────────────────────────────────────────────────
const ProhibitList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
    gap: "8px", marginTop: "14px",
  }}>
    {items.map((item, i) => (
      <li key={i} style={{
        display: "flex", alignItems: "flex-start", gap: "10px",
        background: "rgba(239,68,68,0.04)",
        border: "1px solid rgba(239,68,68,0.12)",
        borderRadius: "8px",
        padding: "10px 14px",
        fontSize: "14px", color: "#475569", lineHeight: 1.6,
        fontFamily: "'Space Grotesk',sans-serif",
      }}>
        <span style={{ color: "#ef4444", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✕</span>
        {item}
      </li>
    ))}
  </ul>
);

// ── Note ──────────────────────────────────────────────────────────────────────
const Note: React.FC<{ children: React.ReactNode; type?: "info" | "warn" }> = ({ children, type = "info" }) => (
  <div style={{
    display: "flex", gap: "12px",
    background: type === "warn" ? "rgba(245,158,11,0.05)" : "rgba(37,99,235,0.05)",
    border: `1px solid ${type === "warn" ? "rgba(245,158,11,0.2)" : "rgba(37,99,235,0.15)"}`,
    borderLeft: `3px solid ${type === "warn" ? "#f59e0b" : "#2563eb"}`,
    borderRadius: "0 8px 8px 0",
    padding: "14px 16px", marginTop: "16px",
    fontSize: "14px", color: "#475569", lineHeight: 1.7,
    fontFamily: "'Space Grotesk',sans-serif",
  }}>
    <span style={{ color: type === "warn" ? "#f59e0b" : "#2563eb", fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>
      {type === "warn" ? "⚠" : "ℹ"}
    </span>
    <span>{children}</span>
  </div>
);

// ── TOC data ──────────────────────────────────────────────────────────────────
const toc = [
  { href: "#s1",  label: "Purpose of the Website" },
  { href: "#s2",  label: "Use of the Website" },
  { href: "#s3",  label: "Intellectual Property Rights" },
  { href: "#s4",  label: "Accuracy of Information" },
  { href: "#s5",  label: "Third-Party Links" },
  { href: "#s6",  label: "Disclaimer of Warranties" },
  { href: "#s7",  label: "Limitation of Liability" },
  { href: "#s8",  label: "Modifications" },
  { href: "#s9",  label: "Governing Law" },
  { href: "#s10", label: "Contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
const TermsOfService: React.FC = () => (
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
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px", pointerEvents: "none",
        }} />
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
              Legal Framework
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(38px,5vw,62px)",
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f0f6ff", marginBottom: "20px",
          }}>
            Terms of{" "}
            <span style={{ color: "#2563eb" }}>Service</span>
          </h1>

          <p style={{
            fontSize: "16px", color: "#64748b",
            lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 36px",
            fontFamily: "'Space Grotesk',sans-serif",
          }}>
            These Terms govern your access to and use of the Hardvanta Research &amp; Development website.
            By accessing this site, you agree to be bound by these Terms.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {["Effective upon access", "Jurisdiction: Republic of India", "Informational purposes only"].map(t => (
              <span key={t} style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "10px", letterSpacing: "0.1em",
                color: "#475569",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px", padding: "5px 12px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "52px 28px 88px" }}>

        {/* TOC */}
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

        {/* INTRO */}
        <div style={{
          background: "#fff",
          border: "1px solid #e8edf5",
          borderLeft: "3px solid #2563eb",
          borderRadius: "0 12px 12px 0",
          padding: "24px 26px", marginBottom: "32px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          <P>
            Welcome to <strong style={{ color: "#0f172a" }}>Hardvanta Research &amp; Development</strong>. These
            Terms of Service govern your access to and use of this website. By accessing or using this website,
            you acknowledge that you have read, understood, and agreed to be bound by these Terms.
          </P>
          <P last>
            If you do not agree with these Terms, please discontinue use of the website.
          </P>
        </div>

        {/* SECTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <SectionCard id="s1" index={1} icon={<IconBuilding />} title="Purpose of the Website">
            <P>
              This website serves as the official digital presence of Hardvanta Research &amp; Development,
              providing information about our research, engineering capabilities, technological innovations,
              projects, publications, collaborations, and organizational activities.
            </P>
            <P last>
              The website is intended solely for informational and professional purposes and does not facilitate
              the sale of products or services.
            </P>
          </SectionCard>

          <SectionCard id="s2" index={2} icon={<IconShield />} title="Use of the Website">
            <P>
              You agree to use this website responsibly and in accordance with all applicable laws and
              regulations. You must not engage in the following activities:
            </P>
            <ProhibitList items={[
              "Attempt unauthorized access to our systems or infrastructure.",
              "Disrupt, damage, or interfere with website functionality.",
              "Introduce malware, malicious code, or harmful software.",
              "Use automated tools to improperly collect website data.",
              "Misrepresent your identity or affiliation.",
              "Use website content for unlawful or unauthorized purposes.",
            ]} />
          </SectionCard>

          <SectionCard id="s3" index={3} icon={<IconDoc />} title="Intellectual Property Rights">
            <P>
              All content available on this website — including text, research publications, technical
              information, graphics, software demonstrations, designs, logos, trademarks, videos, photographs,
              documents, and website architecture — is owned by or licensed to Hardvanta Research &amp;
              Development unless otherwise stated.
            </P>
            <P>These materials are protected under applicable intellectual property and copyright laws.</P>
            <Note type="warn">
              No part of this website may be reproduced, distributed, modified, published, or used for commercial
              purposes without prior written permission from Hardvanta Research &amp; Development.
            </Note>
          </SectionCard>

          <SectionCard id="s4" index={4} icon={<IconClipboard />} title="Accuracy of Information">
            <P>
              While we strive to ensure the information presented is accurate, Hardvanta
              Research &amp; Development makes no representation or warranty that the website content is
              complete, accurate, current, or free from errors.
            </P>
            <Note>
              Information provided on this website should not be interpreted as professional, legal, technical,
              or commercial advice.
            </Note>
          </SectionCard>

          <SectionCard id="s5" index={5} icon={<IconExternal />} title="Third-Party Links">
            <P>
              This website may contain links to third-party websites for additional information or convenience.
            </P>
            <P last>
              Such links do not imply endorsement, and Hardvanta Research &amp; Development assumes no
              responsibility for the content, availability, security, or privacy practices of external websites.
            </P>
          </SectionCard>

          <SectionCard id="s6" index={6} icon={<IconWarning />} title="Disclaimer of Warranties">
            <P>
              This website and all information made available through it are provided on an{" "}
              <strong style={{ color: "#0f172a" }}>"as is"</strong> and{" "}
              <strong style={{ color: "#0f172a" }}>"as available"</strong> basis without warranties of any
              kind, whether express or implied.
            </P>
            <P last>
              To the fullest extent permitted by law, Hardvanta Research &amp; Development disclaims all
              warranties relating to the availability, reliability, accuracy, or suitability of the website.
            </P>
          </SectionCard>

          <SectionCard id="s7" index={7} icon={<IconScale />} title="Limitation of Liability">
            <P last>
              To the maximum extent permitted by applicable law, Hardvanta Research &amp; Development shall not
              be liable for any direct, indirect, incidental, consequential, special, or punitive damages
              arising from or related to the use of, or inability to use, this website.
            </P>
          </SectionCard>

          <SectionCard id="s8" index={8} icon={<IconRefresh />} title="Modifications">
            <P>
              We reserve the right to modify, suspend, update, or discontinue any aspect of the website or
              these Terms of Service at any time without prior notice.
            </P>
            <P last>
              Continued use of the website following any modifications constitutes acceptance of the revised
              Terms.
            </P>
          </SectionCard>

          <SectionCard id="s9" index={9} icon={<IconGlobe />} title="Governing Law">
            <P last>
              These Terms shall be governed by and construed in accordance with the laws of the{" "}
              <strong style={{ color: "#0f172a" }}>Republic of India</strong>. Any disputes arising out of or
              relating to these Terms or the use of this website shall be subject to the exclusive jurisdiction
              of the competent courts in India.
            </P>
          </SectionCard>

          <SectionCard id="s10" index={10} icon={<IconMail />} title="Contact">
            <P last>
              For any questions regarding these Terms of Service, intellectual property matters, or legal
              enquiries, please contact Hardvanta Research &amp; Development through the official contact
              information available on this website.
            </P>
          </SectionCard>

        </div>
      </div>

    </div>
  </>
);

export default TermsOfService;