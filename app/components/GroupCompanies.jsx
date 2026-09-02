"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

// SVG Icons for each company
const icons = {
  manufacturing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <path d="M9 14.5l-3 1.5 6 3 6-3-3-1.5" />
    </svg>
  ),
  infrastructure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l4-4 4 4v14" />
      <path d="M19 21V11l-3-3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  engineering: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v6l4 2" />
      <path d="M6 12h12" />
    </svg>
  ),
  automotive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M5 17h14v-6l-3-4H8L5 11v6z" />
      <path d="M5 11h14" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21h16" />
      <path d="M6 21V9l6-4 6 4v12" />
      <path d="M8 12h8" />
      <path d="M8 16h8" />
    </svg>
  ),
};

const companies = [
  {
    id: 1,
    name: "ACTPL Manufacturing",
    desc: "Precision machining and high‑volume production for automotive and industrial sectors.",
    icon: "manufacturing",
    website: "#",
  },
  {
    id: 2,
    name: "ACTPL Infrastructure",
    desc: "Large‑scale civil engineering, smart city projects, and sustainable construction.",
    icon: "infrastructure",
    website: "#",
  },
  {
    id: 3,
    name: "ACTPL Energy",
    desc: "Renewable energy solutions, power generation, and energy efficiency consulting.",
    icon: "energy",
    website: "#",
  },
  {
    id: 4,
    name: "ACTPL Engineering",
    desc: "Advanced engineering design, prototyping, and R&D for complex systems.",
    icon: "engineering",
    website: "#",
  },
  {
    id: 5,
    name: "ACTPL Automotive",
    desc: "Innovative automotive components, EV parts, and supply chain integration.",
    icon: "automotive",
    website: "#",
  },
  {
    id: 6,
    name: "ACTPL Construction",
    desc: "Premium residential, commercial, and industrial construction services worldwide.",
    icon: "construction",
    website: "#",
  },
];

export default function GroupCompanies() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="group"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F6F8] py-10 lg:py-14"
    >
      {/* Cinematic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(216,179,106,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(216,179,106,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#0B1F33]">Our Group</span>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1F33] leading-[1.1]">
            Companies
          </h2>
          <p className="text-[#0B1F33] text-base sm:text-lg max-w-xl mt-3">
            A diversified portfolio of industry‑leading enterprises driving innovation across sectors.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => {
            const cardRef = useRef(null);
            const delay = 150 + index * 100;
            const direction = index % 2 === 0 ? "translate-y-8" : "-translate-y-8";
            return (
              <div
                key={company.id}
                ref={cardRef}
                className={`
                  group relative rounded-2xl
                  border border-white bg-[#0B1F33] backdrop-blur-sm
                  transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                  hover:border-white
                  will-change-transform
                  ${isVisible ? "opacity-100 translate-y-0" : `opacity-0 ${direction}`}
                `}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
              >
                {/* Card glow on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative p-6 flex flex-col items-start">
                  {/* Icon with gold ring */}
                  <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center mb-5 text-gold-400 group-hover:border-gold-400/60 group-hover:shadow-[0_0_30px_rgba(216,179,106,0.15)] transition-all duration-500">
                    <div className="w-7 h-7 text-white">{icons[company.icon]}</div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
                    {company.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white leading-relaxed flex-1">
                    {company.desc}
                  </p>

                  {/* Visit Website button */}
                  <Link
                    href={company.website}
                    className="
                      mt-4 inline-flex items-center gap-2
                      px-5 py-2.5 rounded-full
                      text-xs font-medium uppercase tracking-[0.15em]
                      bg-gold-500 text-white
                      shadow-lg shadow-white/10
                      transition-all duration-300
                      hover:bg-[#F28C28] border border-white
                      hover:shadow-gold-500/40 hover:scale-105
                      opacity-100 translate-y-2 group-hover:translate-y-0
                    "
                  >
                    <span>Visit Website</span>
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h13M13 6l6 6-6 6" />
                    </svg>
                  </Link>

                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-400/20 group-hover:bg-gold-400/60 transition-colors duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}