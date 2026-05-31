"use client";

import React, { useState, useEffect } from "react";
// Agar aap Next.js use kar rahe hain, toh inko uncomment kar lein aur tags ko replace kar lein.
// import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Brain,
  Factory,
  ShieldCheck,
  Activity,
  Terminal,
  RefreshCw,
} from "lucide-react";

export default function AboutPage() {
  // Real-time dynamic matrix values for interactive deep-tech feel
  const [cpuTemp, setCpuTemp] = useState(42);
  const [modelAccuracy, setModelAccuracy] = useState(99.82);
  const [activeNodes, setActiveNodes] = useState(12);

  // Live simulation to show high-fidelity active metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuTemp((prev) => +(prev + (Math.random() * 2 - 1)).toFixed(1));
      setModelAccuracy((prev) => +(99.8 + Math.random() * 0.1).toFixed(2));
      setActiveNodes((prev) =>
        Math.random() > 0.7 ? (prev === 12 ? 11 : 12) : prev,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        /* ==========================================================================
           1. BASE RESET & TOKENS (Premium Compact Light-Tech Palette)
           ========================================================================== */
        :root {
          --primary-blue: #2563eb;     /* Electric Blue */
          --primary-teal: #06b6d4;     /* Cyber Teal */
          --slate-900: #0f172a;        /* Deep Slate */
          --slate-700: #334155;        /* Muted Text Slate */
          --slate-500: #64748b;        /* Subtext Slate */
          --slate-100: #f1f5f9;        /* Warm Border Grey */
          --bg-main: #f8fafc;          /* Elite Light Gray Background */
          --premium-shadow: 0 15px 30px -12px rgba(15, 23, 42, 0.04), 0 0 1px 1px rgba(15, 23, 42, 0.01);
          --transition-fluid: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-page-wrapper * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* 2. LAYOUT WRAPPER (Compact padding to make layout tight & clean) */
        .about-page-wrapper {
          width: 100%;
          min-height: 100vh;
          /* Reduced top/bottom padding to make layout fit better */
          padding: clamp(50px, 6vw, 100px) clamp(16px, 4vw, 40px);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--bg-main);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Ambient light glows for high-fidelity premium background */
        .about-page-wrapper::before {
          content: "";
          position: absolute;
          width: clamp(250px, 35vw, 500px);
          height: clamp(250px, 35vw, 500px);
          top: -5%;
          left: -5%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-page-wrapper::after {
          content: "";
          position: absolute;
          width: clamp(250px, 35vw, 500px);
          height: clamp(250px, 35vw, 500px);
          bottom: -5%;
          right: -5%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Main Section constraint to prevent layouts stretching too wide on 4K monitors */
        .premium-container {
          width: 100%;
          max-width: 1200px; /* Reduced width slightly for tighter layout */
          position: relative;
          z-index: 10;
        }

        /* Grid alignment balancing text column and interactive visualization */
        .split-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(30px, 5vw, 80px); /* Tighter gap */
          align-items: center;
        }

        /* 3. LEFT COLUMN (Branding & Micro-copy) */
        .text-content-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Unique Staggered Entrance Badge (Smaller sizing) */
        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(0.65rem, 1vw, 0.725rem); /* Scaled down slightly */
          letter-spacing: 0.22em;
          color: var(--primary-blue);
          font-weight: 800;
          text-transform: uppercase;
          padding: 6px 14px; /* Reduced padding */
          background: rgba(37, 99, 235, 0.06);
          border: 1px solid rgba(37, 99, 235, 0.12);
          border-radius: 50px;
          margin-bottom: 16px; /* Tighter margin */
          animation: slideUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .pulse-activity-icon {
          animation: pulseRotate 2.5s infinite linear;
          color: var(--primary-blue);
        }

        /* Tighter compact heading */
        .main-heading {
          font-size: clamp(1.8rem, 3.8vw, 2.8rem); /* Sleeker, highly premium size */
          line-height: 1.18;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--slate-900);
          margin-bottom: 16px; /* Reduced margin */
          animation: slideUpIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          opacity: 0;
        }

        .gradient-span {
          display: block;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Highly readable, compact description */
        .main-description {
          font-size: clamp(0.9rem, 1.2vw, 0.975rem); /* Scaled down */
          color: var(--slate-700);
          line-height: 1.7; /* Crisp text spacing */
          margin-bottom: 16px;
          animation: slideUpIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
          max-width: 540px;
        }

        /* 4. COMPACT CARD GRID (Resolves all squishing & sizing issues) */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px; /* Reduced gap for compact grid layout */
          margin: 24px 0; /* Tighter margins */
          width: 100%;
          animation: slideUpIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }

        .feature-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px; /* Tighter spacing inside cards */
          padding: 16px 20px; /* Reduced padding for cleaner grid */
          background: #ffffff;
          border-radius: 16px; /* Sleeker rounded corners */
          border: 1px solid var(--slate-100);
          box-shadow: var(--premium-shadow);
          transition: var(--transition-fluid);
          cursor: pointer;
          overflow: hidden;
          z-index: 1;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.02) 0%, rgba(6,182,212,0.02) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        /* Kinetic hover effect with reduced travel speed */
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(37, 99, 235, 0.2);
          box-shadow: 0 20px 35px -12px rgba(15, 23, 42, 0.06);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        /* Compact icon circle */
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; /* Scaled down from 48px */
          height: 40px;
          border-radius: 12px; /* Sleeker border radius */
          background: #f8fafc;
          color: var(--primary-blue);
          border: 1px solid var(--slate-100);
          transition: var(--transition-fluid);
          flex-shrink: 0;
        }

        .feature-card:hover .icon-circle {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-teal) 100%);
          color: #ffffff;
          transform: scale(1.08) rotate(5deg);
          border-color: transparent;
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.15);
        }

        .card-inner-content {
          flex: 1;
          min-width: 0;
        }

        .card-inner-content h4 {
          font-size: 0.95rem; /* Tuned down slightly */
          font-weight: 800;
          color: var(--slate-900);
          margin-bottom: 4px;
        }

        .card-inner-content p {
          font-size: 0.825rem; /* Sleeker description text */
          color: var(--slate-500);
          line-height: 1.4;
        }

        /* Premium CTA Button (Clean & Compact sizing) */
        .actions-block {
          animation: slideUpIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--slate-900);
          color: #ffffff;
          padding: 14px 34px; /* Sleeker button sizing */
          border-radius: 100px;
          font-size: 0.925rem; /* Scaled down slightly */
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fluid);
          border: 1px solid transparent;
          box-shadow: 0 10px 20px -5px rgba(15, 23, 42, 0.12);
        }

        .cta-button:hover {
          background: var(--primary-blue);
          box-shadow: 0 15px 30px -8px rgba(37, 99, 235, 0.35);
          transform: translateY(-3px);
          gap: 14px;
        }

        /* ==========================================================================
           5. INTERACTIVE SCI-FI AI/DEEP TECH DIAGNOSTIC FRAME
           ========================================================================== */
        .visual-display-column {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scaleInPremium 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          opacity: 0;
          z-index: 15;
        }

        .aurora-glow {
          position: absolute;
          top: 15%;
          right: -10%;
          width: 85%;
          height: 85%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(6, 182, 212, 0.06) 100%);
          filter: blur(70px);
          z-index: 0;
          animation: breathGlow 10s ease-in-out infinite alternate;
          pointer-events: none;
        }

        /* Compact hardware styling replicating clean server blade architecture */
        .hardware-blade-shell {
          position: relative;
          border-radius: clamp(24px, 3vw, 36px); /* Scaled down shell corners */
          overflow: hidden;
          width: 100%;
          aspect-ratio: 4 / 5;
          box-shadow: 
            0 35px 70px -15px rgba(15, 23, 42, 0.12),
            0 0 0 1px rgba(15, 23, 42, 0.01);
          border: clamp(6px, 1vw, 10px) solid #ffffff; /* Thinner border frame */
          background: #090d16;
          z-index: 1;
          transform: translateZ(0);
          animation: systemFloat 8s ease-in-out infinite;
          display: flex;
          flex-direction: column;
        }

        .board-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
          background-size: 20px 20px; /* Thinner grids */
          background-position: center;
          z-index: 1;
        }

        /* Compact header console */
        .blade-header-status {
          position: relative;
          z-index: 10;
          padding: 16px 20px; /* Reduced padding */
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(9, 13, 22, 0.7);
          backdrop-filter: blur(10px);
        }

        .server-identity {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .terminal-icon {
          color: var(--primary-teal);
        }

        .server-title-text {
          font-family: monospace;
          color: #94a3b8;
          font-size: 0.775rem; /* Scaled down */
          font-weight: 700;
        }

        .console-diagnostic-display {
          position: relative;
          z-index: 10;
          padding: 16px 20px; /* Tighter padding */
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .live-stat-pills {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          width: 100%;
        }

        .diagnostic-pill {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 12px; /* Tighter padding */
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .pill-label {
          font-size: 0.65rem; /* Compact labels */
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .pill-value {
          font-family: monospace;
          font-size: 1.05rem; /* Tuned down slightly */
          font-weight: 800;
          color: #ffffff;
        }

        /* Beautiful circuit diagram centered inside panel */
        .interactive-board-canvas {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .central-neural-chip {
          width: 80px; /* Reduced size from 100px */
          height: 80px;
          background: rgba(37, 99, 235, 0.15);
          border: 2px solid var(--primary-blue);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.25), inset 0 0 10px rgba(37, 99, 235, 0.1);
          animation: neuralPulse 4s ease-in-out infinite;
          z-index: 10;
        }

        .cpu-core-icon {
          color: #ffffff;
          animation: spinCore 15s linear infinite;
        }

        .svg-lines-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .tracer-line {
          stroke: url(#cyan-blue-grad);
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          animation: flowSignal 4s linear infinite;
        }

        .tracer-line-alt {
          stroke: url(#cyan-blue-grad);
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: flowSignalAlt 6s linear infinite;
        }

        /* 6. FLOATING LIVE STATUS BADGE (Sleek Compact Size) */
        .live-status-widget {
          position: absolute;
          bottom: -15px;
          left: -25px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 14px 20px; /* Scaled down */
          border-radius: 16px; /* Tighter corners */
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 
            0 20px 40px -10px rgba(15, 23, 42, 0.35),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          animation: widgetFloat 5s ease-in-out infinite;
          z-index: 20;
          min-width: 220px; /* Reduced min-width */
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .widget-title {
          font-size: 0.675rem; /* Scaled down from 0.725rem */
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--primary-teal);
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 800;
        }

        .status-pulse-ring {
          width: 7px;
          height: 7px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulseRing 1.8s infinite;
        }

        .widget-metric {
          font-size: 1.025rem; /* Scaled down from 1.15rem */
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        /* ==========================================================================
           7. MASTER ALIGNMENT & RESPONSIVE DEVICE BREAKPOINTS
           ========================================================================== */

        /* Prevent columns squeezing on smaller Laptops and Landscape iPads */
        @media (max-width: 1150px) {
          .split-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .text-content-column {
            text-align: center;
            align-items: center;
          }

          .main-description {
            max-width: 100%;
          }

          .features-grid {
            max-width: 680px;
            margin: 24px auto;
          }

          .visual-display-column {
            max-width: 400px; /* Tuned down slightly */
            margin: 0 auto;
          }

          .live-status-widget {
            left: -10px;
            bottom: -10px;
          }
        }

        /* Portrait Tablets / Small Devices */
        @media (max-width: 768px) {
          .about-page-wrapper {
            padding: 60px 20px;
          }

          .split-layout {
            gap: 40px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 400px;
          }

          .live-status-widget {
            left: 50%;
            transform: translateX(-50%);
            bottom: -15px;
            width: 92%;
            max-width: 300px;
            align-items: center;
            text-align: center;
            animation: widgetFloatMobile 5s ease-in-out infinite;
          }
        }

        /* Ultra Small Mobile Phones */
        @media (max-width: 480px) {
          .about-page-wrapper {
            padding: 50px 14px;
          }

          .cta-button {
            width: 100%;
          }

          .feature-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 16px;
          }

          .icon-circle {
            margin-bottom: 8px;
          }
        }

        /* ==========================================================================
           8. MOTION PHYSICS ANIMATIONS (10X SMOOTHER)
           ========================================================================== */
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes scaleInPremium {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes systemFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.3deg);
          }
        }

        @keyframes widgetFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes widgetFloatMobile {
          0%, 100% {
            transform: translate(-50%, 0px);
          }
          50% {
            transform: translate(-50%, -8px);
          }
        }

        @keyframes breathGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.12;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.2;
          }
        }

        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        @keyframes pulseRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.08);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes neuralPulse {
          0%, 100% {
            border-color: var(--primary-blue);
            box-shadow: 0 0 25px rgba(37, 99, 235, 0.25), inset 0 0 10px rgba(37, 99, 235, 0.1);
          }
          50% {
            border-color: var(--primary-teal);
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.45), inset 0 0 18px rgba(6, 182, 212, 0.15);
          }
        }

        @keyframes spinCore {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes flowSignal {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: -80; }
        }

        @keyframes flowSignalAlt {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: -120; }
        }
      `}</style>

      <div className="about-page-wrapper">
        <section className="premium-container">
          <div className="split-layout">
            {/* ================= LEFT COLUMN: TEXT & ALIGNED ASSETS ================= */}
            <div className="text-content-column">
              {/* Badge indicating deep-tech status */}
              <div className="premium-badge">
                <Activity size={12} className="pulse-activity-icon" />
                WHO WE ARE
              </div>

              {/* Main Heading with balanced typographic weight */}
              <h1 className="main-heading">
                Innovation
                <span className="gradient-span">Through Engineering</span>
              </h1>

              {/* Company descriptive statements */}
              <p className="main-description">
                Hardvanta Technologies LLP develops scalable intelligent
                systems, embedded technologies, industrial automation platforms,
                and AI-powered engineering infrastructure for future-ready
                enterprises.
              </p>

              <p className="main-description">
                We combine advanced engineering research, Industrial IoT,
                embedded intelligence, and automation systems to build reliable
                high-performance industrial solutions.
              </p>

              {/* Responsive Feature Cards Grid (Zero Squeezing) */}
              <div className="features-grid">
                {/* Embedded Card */}
                <div className="feature-card">
                  <div className="icon-circle">
                    <Cpu size={18} />
                  </div>
                  <div className="card-inner-content">
                    <h4>Embedded Systems</h4>
                    <p>Microcontroller & PCB design</p>
                  </div>
                </div>

                {/* AI Solutions Card */}
                <div className="feature-card">
                  <div className="icon-circle">
                    <Brain size={18} />
                  </div>
                  <div className="card-inner-content">
                    <h4>AI Solutions</h4>
                    <p>Deep learning & edge computing</p>
                  </div>
                </div>

                {/* Industrial Automation Card */}
                <div className="feature-card">
                  <div className="icon-circle">
                    <Factory size={18} />
                  </div>
                  <div className="card-inner-content">
                    <h4>Industrial Auto</h4>
                    <p>Smart factories & robotics</p>
                  </div>
                </div>

                {/* Enterprise Grade Card */}
                <div className="feature-card">
                  <div className="icon-circle">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="card-inner-content">
                    <h4>Enterprise Grade</h4>
                    <p>99.9% reliability & security</p>
                  </div>
                </div>
              </div>

              {/* CTA Action button wrapper */}
              <div className="actions-block">
                <a href="/contact" className="cta-button">
                  Work With Us
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE TECHBOARD METRICS ================= */}
            <div className="visual-display-column">
              <div className="aurora-glow" />

              {/* Industrial edge diagnostic motherboard */}
              <div className="hardware-blade-shell">
                <div className="board-grid-bg" />

                {/* Simulated Server Diagnostics Header */}
                <div className="blade-header-status">
                  <div className="server-identity">
                    <Terminal size={12} className="terminal-icon" />
                    <span className="server-title-text">
                      EDGE_NODE // HARDVANTA_SYS_A
                    </span>
                  </div>
                  <RefreshCw
                    size={10}
                    className="pulse-activity-icon"
                    style={{ color: "#64748b" }}
                  />
                </div>

                {/* Interactive Circuit Graphics Canvas */}
                <div className="interactive-board-canvas">
                  <svg
                    className="svg-lines-container"
                    viewBox="0 0 300 350"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="cyan-blue-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>

                    {/* Hardware circuitry lines tracing data channels */}
                    <path
                      d="M 30,50 L 100,50 L 150,110 L 150,175"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 270,50 L 200,50 L 150,110"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 30,300 L 100,300 L 150,240 L 150,175"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 270,300 L 200,300 L 150,240"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1.5"
                    />

                    {/* Active moving electrical signals */}
                    <path
                      className="tracer-line"
                      d="M 30,50 L 100,50 L 150,110 L 150,175"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      className="tracer-line-alt"
                      d="M 270,300 L 200,300 L 150,240 L 150,175"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Central Core Processor Node */}
                  <div className="central-neural-chip">
                    <Cpu size={30} className="cpu-core-icon" />
                  </div>
                </div>

                {/* Live Real-time Diagnostics Terminal display */}
                <div className="console-diagnostic-display">
                  <div className="live-stat-pills">
                    <div className="diagnostic-pill">
                      <span className="pill-label">Temp Core</span>
                      <span className="pill-value">{cpuTemp}°C</span>
                    </div>

                    <div className="diagnostic-pill">
                      <span className="pill-label">AI Accuracy</span>
                      <span className="pill-value">{modelAccuracy}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Real-time system status indicators */}
              <div className="live-status-widget">
                <div className="widget-title">
                  <span className="status-pulse-ring" />
                  SYSTEM STATUS: ACTIVE
                </div>
                <div className="widget-metric">{activeNodes} Nodes Online</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
