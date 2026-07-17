"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand Column — 5 cols (UNCHANGED) */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0">
                <Image
                  src="/logo/hardvanta.png"
                  alt="Hardvanta Logo"
                  fill
                  className="object-contain object-center scale-150"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-[22px] tracking-widest uppercase">
                  HARDVANTA
                </span>
                <span className="text-slate-300 font-semibold text-[9px] tracking-[0.22em] uppercase mt-[5px]">
                  TECHNOLOGIES LLP
                </span>
                <span className="text-[#00b4d8] font-bold text-[8px] tracking-[0.18em] uppercase mt-[4px]">
                  ENGINEERING INTELLIGENCE
                </span>
              </div>
            </div>

            <p className="text-[#00b4d8] text-sm font-semibold tracking-wide mb-3">
              ENGINEERING TOMORROW&apos;S INTELLIGENT INFRASTRUCTURE
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Research-driven engineering firm focused on Embedded Systems,
              AI-powered solutions, and Industrial IoT for next-generation
              industries.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-3">
            <h3 className="inline-block text-[#00b4d8] text-xs font-bold tracking-[0.2em] uppercase mb-4 pb-2 border-b border-[#00b4d8]/40">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Leadership", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white text-sm font-medium hover:text-[#00b4d8] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="inline-block text-[#00b4d8] text-xs font-bold tracking-[0.2em] uppercase mb-4 pb-2 border-b border-[#00b4d8]/40">
              OFFICE
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00b4d8] mt-0.5 flex-shrink-0" />
                <span className="text-white text-sm leading-relaxed">
                  Plot 046, Knowledge Park 3, Alpha, Greater Noida, Uttar
                  Pradesh – 201310, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#00b4d8] flex-shrink-0" />
                <a
                  href="tel:+919170546395"
                  className="text-white text-sm font-medium hover:text-[#00b4d8] transition-colors duration-200"
                >
                  +91 91705 46395
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00b4d8] flex-shrink-0" />
                <a
                  href="mailto:info@hardvantatechnologies.in"
                  className="text-white text-sm font-medium hover:text-[#00b4d8] transition-colors duration-200 break-all"
                >
                  info@hardvantatechnologies.in
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © 2026 Hardvanta Technologies LLP. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              href="/privacy"
              className="text-slate-400 text-xs hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600 text-xs select-none">|</span>
            <Link
              href="/terms"
              className="text-slate-400 text-xs hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="text-slate-600 text-xs select-none">|</span>
            <Link
              href="/sitemap"
              className="text-slate-400 text-xs hover:text-white transition-colors duration-200"
            >
              Sitemap
            </Link>
            <span className="text-slate-600 text-xs select-none hidden sm:inline">|</span>

            <a
              href="https://www.linkedin.com/company/hardvanta-technologies-llp/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0a1628] border border-[#00b4d8]/40 hover:border-[#00b4d8] text-[#00b4d8] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-[#00b4d8]/10"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LINKEDIN
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}