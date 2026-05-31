"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <>
      <style>{`
        :root {
          --cta-bg: #ffffff;
          --cta-text: #0f172a;
          --cta-muted: #64748b;
          --cta-primary: #2563eb;
          --cta-accent: #06b6d4;
        }

        .cta-section {
          position: relative;
          padding: clamp(60px, 8vw, 120px) 20px;
          background: var(--cta-bg);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .cta-blur {
          position: absolute;
          width: clamp(300px, 40vw, 500px);
          height: clamp(300px, 40vw, 500px);
          filter: blur(120px);
          opacity: 0.08;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }
        .cta-blur-one { top: -10%; left: -5%; background: var(--cta-primary); }
        .cta-blur-two { bottom: -10%; right: -5%; background: var(--cta-accent); }

        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 760px;
          width: 100%;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.05);
          color: var(--cta-primary);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
          margin-bottom: 24px;
          text-transform: uppercase;
          border: 1px solid rgba(37, 99, 235, 0.1);
        }

        h2 {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          font-weight: 900;
          color: var(--cta-text);
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
        }

        h2 span {
          display: block;
          background: linear-gradient(135deg, var(--cta-primary) 0%, var(--cta-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          font-size: clamp(1rem, 1.2vw, 1.15rem);
          color: var(--cta-muted);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 16px 34px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          cursor: pointer;
        }

        .cta-primary-btn {
          background: var(--cta-text);
          color: #ffffff;
        }
        .cta-primary-btn:hover {
          background: var(--cta-primary);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.4);
        }

        .cta-secondary-btn {
          background: #f1f5f9;
          color: var(--cta-text);
          border: 1px solid #e2e8f0;
        }
        .cta-secondary-btn:hover {
          background: #e2e8f0;
          transform: translateY(-4px);
        }

        @media (max-width: 640px) {
          .cta-actions { flex-direction: column; width: 100%; }
          .cta-btn { justify-content: center; width: 100%; }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-blur cta-blur-one"></div>
        <div className="cta-blur cta-blur-two"></div>

        <div className="cta-container">
          <p className="cta-tag">
            <Sparkles size={12} />
            HARDVANTA TECHNOLOGIES LLP
          </p>

          <h2>
            Building Intelligent
            <span>Engineering Systems</span>
            For The Future
          </h2>

          <p className="cta-description">
            Delivering high-performance Embedded Systems, AI-driven
            infrastructure, Industrial IoT, and automation solutions for
            next-generation industries.
          </p>

          <div className="cta-actions">
            <a href="/contact" className="cta-btn cta-primary-btn">
              Start a Project <ArrowRight size={18} />
            </a>

            <a href="/services" className="cta-btn cta-secondary-btn">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
