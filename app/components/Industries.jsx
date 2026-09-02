"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Industry data with images
const industries = [
  {
    id: "airport",
    name: "Airport Infrastructure",
    shortDesc: "Emergency lighting systems for terminals and critical transit operations.",
    desc: "Emergency lighting systems designed for terminals, passenger movement areas, and critical transit operations.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    gradient: "from-blue-950/80 via-blue-950/50 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "metro",
    name: "Metro & Rail",
    shortDesc: "Reliable lighting for rail corridors, stations, and tunnels.",
    desc: "Reliable lighting solutions for rail corridors, stations, tunnels, and transportation networks.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    gradient: "from-cyan-950/80 via-cyan-950/50 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l4-4 4 4v14" />
        <path d="M19 21V11l-3-3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    id: "healthcare",
    name: "Healthcare & Hospitals",
    shortDesc: "Efficient lighting for hospitals and patient-care environments.",
    desc: "Efficient emergency lighting designed for hospitals, healthcare facilities, and patient-care environments.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=600&fit=crop",
    gradient: "from-emerald-950/80 via-emerald-950/50 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21h16" />
        <path d="M6 21V9l6-4 6 4v12" />
        <path d="M8 12h8" />
        <path d="M8 16h8" />
      </svg>
    ),
  },
  {
    id: "hospitality",
    name: "Hospitality & Hotels",
    shortDesc: "Modern safety lighting for hotels, resorts, and commercial spaces.",
    desc: "Modern safety lighting systems developed for hotels, resorts, and commercial hospitality spaces.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    gradient: "from-amber-950/80 via-amber-950/50 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  // 3D tilt effect
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    cardRef.current.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1F33] py-10 lg:py-14"
    >
      {/* Cinematic background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400">Our Sectors</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]">
            Industries <span className="text-gold-400">We Serve</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mt-3">
            Specialised emergency lighting solutions across critical infrastructure sectors.
          </p>
        </div>

        {/* Industries grid – 2 columns on desktop */}
        <div className="grid sm:grid-cols-2 gap-6">
          {industries.map((industry, index) => {
            const cardRef = useRef(null);
            const delay = 150 + index * 100;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={industry.id}
                ref={cardRef}
                className={`
                  group relative rounded-2xl overflow-hidden
                  border border-white/10
                  transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                  will-change-transform
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className={`
                      object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                      ${isHovered ? "scale-110" : "scale-100"}
                    `}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Dark overlay gradient */}
                  <div className={`
                    absolute inset-0
                    bg-gradient-to-br ${industry.gradient}
                    transition-all duration-700
                    ${isHovered ? "opacity-90" : "opacity-100"}
                  `} />

                  {/* Gold pillar – left side (on top of image) */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 z-10 overflow-hidden">
                    <div
                      className={`
                        w-full bg-gradient-to-b from-gold-400 to-gold-600
                        transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                        ${isHovered ? "h-full" : "h-0"}
                      `}
                    />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    {/* Icon with gradient */}
                    <div className={`
                      w-12 h-12 rounded-2xl
                      bg-white/10 backdrop-blur-sm
                      flex items-center justify-center mb-4
                      text-gold-400
                      transition-all duration-500
                      group-hover:scale-110
                      border border-white/10
                    `}>
                      <div className="w-6 h-6">{industry.icon}</div>
                    </div>

                    {/* Industry name */}
                    <h3 className="text-xl font-semibold text-white tracking-wide">
                      {industry.name}
                    </h3>

                    {/* Short description – always visible */}
                    <p className="text-sm text-white/60 mt-1">
                      {industry.shortDesc}
                    </p>

                    {/* Full description – slides in on hover */}
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                      ${isHovered ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"}
                    `}>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {industry.desc}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className={`
                        w-2 h-2 rounded-full
                        transition-all duration-500
                        ${isHovered ? "bg-gold-400 shadow-[0_0_12px_rgba(216,179,106,0.5)]" : "bg-white/20"}
                      `} />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                        {isHovered ? "View Details" : "Sector"}
                      </span>
                      {isHovered && (
                        <svg className="w-3 h-3 text-gold-400 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h13M13 6l6 6-6 6" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Hover glow border */}
                  <div className={`
                    absolute inset-0 rounded-2xl border-2 border-gold-400/0
                    transition-all duration-700
                    ${isHovered ? "border-gold-400/40" : ""}
                    pointer-events-none z-20
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting thread */}
        <div className="relative mt-16 flex justify-center items-center gap-4">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400/30" />
          <span className="flex items-center gap-2">
            {industries.map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold-400/40 animate-pulse"
                style={{ animationDelay: `${i * 250}ms` }}
              />
            ))}
          </span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>
      </div>
    </section>
  );
}