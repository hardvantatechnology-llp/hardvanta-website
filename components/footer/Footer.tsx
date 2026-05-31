"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-10 px-6 font-sans">
      <div className="max-w-[1440px] mx-auto">
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column - Clean White Corporate Identity */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/logo.jpeg"
                alt="Hardvanta Technologies LLP"
                width={44}
                height={44}
                className="rounded-lg object-cover border border-slate-200 shadow-sm"
              />
              <div className="flex flex-col justify-center items-start leading-none gap-1">
                <h2 className="text-lg font-extrabold text-slate-700 tracking-wider uppercase transition-colors duration-300 group-hover:text-blue-600">
                  HARDVANTA
                </h2>
                <span className="text-[7.5px] font-bold text-slate-500 tracking-[0.22em] uppercase">
                  Engineering Intelligence
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-[320px]">
              Research-driven engineering firm focused on Embedded Systems,
              AI-powered solutions, and Industrial IoT for next-generation
              industries.
            </p>
          </div>

          {}
          {/* Solutions Column - Fully Visible Interactive Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-bold text-slate-800 tracking-[0.2em] uppercase mb-6 relative">
              Solutions
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-[#1D4ED8]" />
            </h4>
            <ul className="flex flex-col gap-4 w-full">
              {[
                "Embedded Systems",
                "Industrial IoT",
                "AI Solutions",
                "PCB Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-sm font-medium text-slate-600 hover:text-[#1D4ED8] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column - Highly Readable Interactive Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-bold text-slate-800 tracking-[0.2em] uppercase mb-6 relative">
              Company
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-[#1D4ED8]" />
            </h4>
            <ul className="flex flex-col gap-4 w-full">
              {[
                { name: "About Us", path: "/about" },
                { name: "Research", path: "/research" },
                { name: "Leadership", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-sm font-medium text-slate-600 hover:text-[#1D4ED8] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Contact Column - Perfect Spacing & Icon Alignment */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-bold text-slate-800 tracking-[0.2em] uppercase mb-6 relative">
              Office
              <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-[#1D4ED8]" />
            </h4>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin size={18} className="text-[#1D4ED8] shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-slate-500">
                  Plot 046, Knowledge Park 3, Alpha, Greater Noida, Uttar
                  Pradesh - 201310, India
                </p>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-[#1D4ED8] shrink-0" />
                <a
                  href="tel:+919170546395"
                  className="text-sm font-medium text-slate-500 hover:text-[#1D4ED8] transition-colors"
                >
                  +91 91705 46395
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-[#1D4ED8] shrink-0" />
                <a
                  href="mailto:info@hardvantatechnologies.in"
                  className="text-sm font-medium text-slate-500 hover:text-[#1D4ED8] break-all transition-colors"
                >
                  info@hardvantatechnologies.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {}
        {/* Bottom Bar - White Theme with aligned Metadata */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm font-medium text-slate-400">
            © 2026 Hardvanta Technologies LLP. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/hardvanta-technologies-llp/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#1D4ED8] transition-colors group/link"
            >
              {/* Native Inline SVG LinkedIn Logo - 100% safe, no dependency issues */}
              <svg
                className="w-4.5 h-4.5 text-[#1D4ED8] group-hover/link:scale-105 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
              <ArrowUpRight
                size={14}
                className="opacity-60 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
