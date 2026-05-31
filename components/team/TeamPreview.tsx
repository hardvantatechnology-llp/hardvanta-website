"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const teamMembers = [
  {
    name: "Priya Saini",
    role: "Founder",
    image: "/team/priya_saini.jpeg",
    description:
      "Leading Hardvanta Technologies LLP with a strong vision focused on innovation, intelligent systems, and future-ready engineering solutions.",
    linkedin:
      "https://www.linkedin.com/in/priya-saini-5b9159308/?skipRedirect=true",
  },
  {
    name: "Abhishek Patel",
    role: "Co-Founder",
    image: "/team/abhishek_patel.jpeg",
    description:
      "Driving engineering excellence, scalable product development, and advanced technology research across multiple domains.",
    linkedin: "https://www.linkedin.com/in/abhishek-patel-49354a258",
  },
  {
    name: "Salman Ansari",
    role: "Chief Executive Officer",
    image: "/team/salman-ansari.jpeg",
    description:
      "Focused on strategic growth, operational leadership, industrial innovation, and intelligent business transformation.",
    linkedin: "https://www.linkedin.com/in/salman-ansari-0a8537361",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        {}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
            Expert Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-2xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl">
            The visionaries and innovators driving the next generation of
            intelligent engineering systems.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
          {/* Member Cards mapping */}
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="group flex flex-col bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_24px_48px_-15px_rgba(0,0,0,0.08)] hover:border-blue-500/20 h-full min-h-[580px]"
            >
              {/* Image Container with scaling hover effect */}
              <div className="w-full h-[320px] overflow-hidden relative bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Contents */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="block text-xs font-bold text-blue-600 tracking-widest uppercase">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed pt-2">
                    {member.description}
                  </p>
                </div>

                {/* LinkedIn Link Box */}
                <div className="pt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-slate-700 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {}
          <article className="group flex flex-col justify-between p-8 rounded-[2rem] border-2 border-dashed border-blue-100 bg-gradient-to-b from-blue-50/40 via-white to-white hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_24px_48px_-15px_rgba(37,99,235,0.06)] min-h-[580px] h-full text-left">
            <div className="space-y-6">
              {/* Decorative Tech Icon Grid */}
              <div className="inline-flex p-3 rounded-2xl bg-blue-50/80 text-blue-600 border border-blue-100">
                <svg
                  className="w-6 h-6 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                <span className="block text-xs font-bold text-blue-600 tracking-widest uppercase">
                  Growth & Vision
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Want to meet the entire crew?
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our ecosystem is built by passionate engineers, hardware
                  architects, and AI researchers working collaboratively to
                  shape intelligent infrastructure.
                </p>
              </div>
            </div>

            {/* Premium Call to Action Button */}
            <div className="pt-8">
              <a
                href="/team"
                className="inline-flex items-center gap-3 w-full justify-center px-6 py-4 bg-slate-900 text-white font-bold text-sm rounded-2xl shadow-lg shadow-slate-950/10 hover:bg-blue-600 hover:shadow-blue-600/20 transition-all duration-300 group/btn"
              >
                <span>Visit Full Team</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
