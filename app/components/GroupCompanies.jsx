"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

// 👇 PASTE YOUR IMAGE LINKS HERE (one per company)
const images = {
  manufacturing: "/companies/logo.png",
  infrastructure: "/companies/logo.png",
  energy: "/companies/logo.png",
  engineering: "/companies/logo.png",
  automotive: "/companies/logo.png",
  construction: "/companies/logo.png",
};

const companies = [
  {
    id: 1,
    name: "Airpack compressor teknologies",
    desc: "Precision-engineered compressor spares, made in India for the world.",
    image: images.manufacturing,
    website: "#",
  },
  {
    id: 2,
    name: "Airpack International FZE",
    desc: "ACTPL's UAE hub for compressor spares and industrial parts across the Middle East.",
    image: images.infrastructure,
    website: "#",
  },
  {
    id: 3,
    name: "Reverse Airpack",
    desc: "Reverse engineering experts who recreate and improve hard-to-source compressor parts.",
    image: images.energy,
    website: "#",
  },
  {
    id: 4,
    name: "Spareco",
    desc: "Trusted compressor spares specialist delivering valves, pistons, and rings for decades.",
    image: images.engineering,
    website: "#",
  },
  {
    id: 5,
    name: "Airpack USA",
    desc: "Bringing Airpack's precision compressor solutions closer to North America.",
    image: images.automotive,
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
                  {/* Image with gold ring */}
                  <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center mb-5 overflow-hidden group-hover:border-gold-400/60 group-hover:shadow-[0_0_30px_rgba(216,179,106,0.15)] transition-all duration-500">
                    <img
                      src={company.image}
                      alt={company.name}
                      loading="lazy"
                      className="w-full h-full object-contain "
                    />
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