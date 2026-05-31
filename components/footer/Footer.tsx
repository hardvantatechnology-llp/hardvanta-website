"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";

export default function Footer() {
  
  return (
    <footer className="relative bg-[#020617] border-t border-slate-900/90 pt-24 pb-14 px-4 sm:px-6 md:px-8 font-sans overflow-hidden w-full">
      {}
      <div className="absolute top-0 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gradient-to-tr from-blue-500/15 to-cyan-500/0 rounded-full blur-[100px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-indigo-500/15 to-blue-500/0 rounded-full blur-[120px] sm:blur-[200px] pointer-events-none" />

      {}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {}
      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-10 pb-16">
          {/* Brand Column (Spans 5 Columns) */}
          <div className="flex flex-col items-start space-y-6 lg:col-span-5 w-full">
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              {/* Premium Expanded Logo Box */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo/logo.jpeg"
                  alt="Hardvanta Technologies LLP"
                  width={56}
                  height={56}
                  className="rounded-lg object-cover contrast-125"
                />
              </div>
              <div className="flex flex-col justify-center items-start tracking-tight">
                <h2 className="text-xl font-black !text-white tracking-widest uppercase transition-colors duration-300 group-hover:!text-cyan-400">
                  HARDVANTA
                </h2>
                <span className="text-[8px] sm:text-[8.5px] font-extrabold !text-cyan-400 tracking-[0.25em] uppercase mt-0.5">
                  Engineering Intelligence
                </span>
              </div>
            </div>

            {/* Corporate/SaaS Style Tagline */}
            <p className="text-[11px] sm:text-xs text-cyan-400 font-semibold tracking-wider uppercase">
              Engineering Tomorrow's Intelligent Infrastructure
            </p>

            <p className="text-sm !text-blue-100/80 leading-relaxed max-w-[380px]">
              Research-driven engineering firm focused on Embedded Systems,
              AI-powered solutions, and Industrial IoT for next-generation
              industries.
            </p>
          </div>

          {/* Solutions Column (Spans 2 Columns) */}
          <div className="flex flex-col items-start lg:col-span-2 w-full">
            <h4 className="text-xs font-bold !text-cyan-400 tracking-[0.2em] uppercase mb-6 relative">
              Solutions
              <span className="absolute -bottom-2 left-0 w-6 h-[2px] bg-blue-500" />
            </h4>
            <ul className="flex flex-col gap-3.5 w-full">
              {[
                "Embedded Systems",
                "Industrial IoT",
                "AI Solutions",
                "PCB Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="group relative text-sm font-semibold !text-blue-100 hover:!text-cyan-300 transition-colors duration-300 inline-flex items-center pb-1"
                  >
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="flex flex-col items-start lg:col-span-2 w-full">
            <h4 className="text-xs font-bold !text-cyan-400 tracking-[0.2em] uppercase mb-6 relative">
              Company
              <span className="absolute -bottom-2 left-0 w-6 h-[2px] bg-blue-500" />
            </h4>
            <ul className="flex flex-col gap-3.5 w-full">
              {[
                { name: "About Us", path: "/about" },
                { name: "Leadership", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="group relative text-sm font-semibold !text-blue-100 hover:!text-cyan-300 transition-colors duration-300 inline-flex items-center pb-1"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-400 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Column (Spans 3 Columns) */}
          <div className="flex flex-col items-start lg:col-span-3 w-full">
            <h4 className="text-xs font-bold !text-cyan-400 tracking-[0.2em] uppercase mb-6 relative">
              Office
              <span className="absolute -bottom-2 left-0 w-6 h-[2px] bg-blue-500" />
            </h4>
            <div className="flex flex-col gap-4.5 w-full">
              <div className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="!text-cyan-400 shrink-0 mt-0.5 group-hover:!text-cyan-300 transition-colors"
                />
                <p className="text-sm leading-relaxed !text-blue-100/90 transition-colors group-hover:!text-cyan-300">
                  Plot 046, Knowledge Park 3, Alpha, Greater Noida, Uttar
                  Pradesh - 201310, India
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone
                  size={18}
                  className="!text-cyan-400 shrink-0 group-hover:!text-cyan-300 transition-colors"
                />
                <a
                  href="tel:+919170546395"
                  className="text-sm font-semibold !text-blue-100 transition-colors hover:!text-cyan-300 group-hover:!text-cyan-300"
                >
                  +91 91705 46395
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail
                  size={18}
                  className="!text-cyan-400 shrink-0 group-hover:!text-cyan-300 transition-colors"
                />
                <a
                  href="mailto:info@hardvantatechnologies.in"
                  className="text-sm font-semibold !text-blue-100 break-all transition-colors hover:!text-cyan-300 group-hover:!text-cyan-300"
                >
                  info@hardvantatechnologies.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="mt-6 pt-8 border-t border-slate-900/95 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p className="text-xs font-semibold !text-slate-500 tracking-wide">
            &copy; {new Date().getFullYear()} Hardvanta Technologies LLP. All
            Rights Reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full lg:w-auto justify-center lg:justify-end">
            {/* Added Compliance Links for Premium SaaS Style */}
            <div className="flex items-center gap-5 text-xs font-semibold !text-slate-500">
              <a
                href="/privacy"
                className="hover:!text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-slate-800">|</span>
              <a
                href="/terms"
                className="hover:!text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-slate-800">|</span>
              <a
                href="/sitemap"
                className="hover:!text-cyan-400 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>

            {/* LinkedIn Link Box */}
            <a
              href="https://www.linkedin.com/company/hardvanta-technologies-llp/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold !text-blue-100 hover:!text-cyan-300 transition-all duration-300 group/link bg-slate-900/80 px-4 py-2.5 rounded-full border border-slate-800 hover:border-cyan-500/30"
            >
              <svg
                className="w-4 h-4 !text-cyan-400 group-hover/link:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="tracking-wider uppercase text-[10px]">
                LinkedIn
              </span>
              <ArrowUpRight
                size={12}
                className="opacity-60 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
