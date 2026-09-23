"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Flame,
  Droplets,
  Leaf,
  FlaskConical,
  Ship,
  BottleWine,
  Fuel,
  Network,
  Factory,
  Wind,
  Activity,
} from "lucide-react";

// Exact content data for 11 industries with verified working images
const industries = [
  {
    id: "natural-gas",
    name: "Natural Gas Gathering",
    shortDesc: "Compression solutions for field-level gas collection",
    desc: "Reliable systems built to support gas gathering and transport operations from the field to the pipeline.",
    // Verified working image: Gas refinery at night
    image: "/industries/Natural Gas Gathering.jpg",
    icon: <Flame className="w-6 h-6" />,
  },
  {
    id: "lng",
    name: "Liquefied Natural Gas (LNG)",
    shortDesc: "Engineered systems for LNG processing",
    desc: "Precision-built solutions supporting liquefaction, storage, and regasification processes.",
    image: "/industries/Liquefied Natural Gas (LNG).jpg",
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    id: "biogas",
    name: "Biogas & Renewable Natural Gas (RNG)",
    shortDesc: "Compression built for renewable gas",
    desc: "Reliable solutions supporting the growing demand for cleaner, renewable gas processing.",
    image: "/industries/Biogas & Renewable Natural Gas (RNG).jpg",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    id: "chemical",
    name: "Chemical Processing",
    shortDesc: "Engineered for demanding environments",
    desc: "Equipment designed to perform reliably across complex chemical processing operations.",
    image: "/industries/Chemical Processing.jpg",
    icon: <FlaskConical className="w-6 h-6" />,
  },
  {
    id: "marine",
    name: "Marine",
    shortDesc: "Built for marine reliability",
    desc: "Specialized compressor systems engineered for the durability marine applications demand.",
    // Verified working image: Cargo ship
    image: "/industries/Marine.jpg",
    icon: <Ship className="w-6 h-6" />,
  },
  {
    id: "pet-bottle",
    name: "P.E.T. Bottle Blowing",
    shortDesc: "Precision air for high-volume production",
    desc: "High-precision compression solutions supporting efficient, high-volume bottle manufacturing.",
    image: "/industries/P.E.T. Bottle Blowing.jpg",
    icon: <BottleWine className="w-6 h-6" />,
  },
  {
    id: "cng",
    name: "Compressed Natural Gas (CNG)",
    shortDesc: "Dependable CNG compression systems",
    desc: "Reliable solutions supporting fueling infrastructure and CNG distribution networks.",
    image: "/industries/Compressed Natural Gas (CNG).jpg",
    icon: <Fuel className="w-6 h-6" />,
  },
  {
    id: "pipeline",
    name: "Pipeline Transmission",
    shortDesc: "Pressure and flow, maintained",
    desc: "Robust compressor solutions engineered for long-distance pipeline transmission.",
    // Verified working image: Industrial pipeline infrastructure
    image: "/industries/Pipeline Transmission.jpg",
    icon: <Network className="w-6 h-6" />,
  },
  {
    id: "petrochemical",
    name: "Petrochemical Processing",
    shortDesc: "Engineered for complex processing",
    desc: "Advanced solutions built for the high-demand petrochemical processing industry.",
    image: "/industries/Petrochemical Processing.jpg",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    id: "hydrogen",
    name: "Hydrogen Applications",
    shortDesc: "Precision for evolving hydrogen needs",
    desc: "Compression technology supporting the growing hydrogen application landscape.",
    image: "/industries/Hydrogen Applications.jpg",
    icon: <Wind className="w-6 h-6" />,
  },
  {
    id: "oxygen",
    name: "Oxygen Applications",
    shortDesc: "Engineered for critical oxygen needs",
    desc: "Application-specific compressor solutions built for critical oxygen processing.",
    image: "/industries/Oxygen Applications.jpg",
    icon: <Activity className="w-6 h-6" />,
  },
];

// Separate Card component to properly handle hooks (useRef) inside a loop
function IndustryCard({ industry, index, isVisible, hoveredIndex, setHoveredIndex }) {
  const cardRef = useRef(null);
  const delay = 150 + index * 100;
  const isHovered = hoveredIndex === index;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    setHoveredIndex(null);
  };

  return (
    <div
      ref={cardRef}
      className={`
        group relative rounded-2xl overflow-hidden
        border border-white/10
        transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      {/* Background Image */}
      <div className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[3/4] overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          className={`
            object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
            ${isHovered ? "scale-110" : "scale-100"}
          `}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Dark overlay gradient */}
        <div className={`
          absolute inset-0
          bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/50 to-transparent
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
        <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-end z-10">
          {/* Icon */}
          <div className={`
            w-10 h-10 rounded-xl
            bg-white/10 backdrop-blur-sm
            flex items-center justify-center mb-3
            text-gold-400
            transition-all duration-500
            group-hover:scale-110
            border border-white/10
          `}>
            {industry.icon}
          </div>

          {/* Industry name */}
          <h3 className="text-base lg:text-lg font-semibold text-white tracking-wide leading-tight">
            {industry.name}
          </h3>

          {/* Short description – always visible */}
          <p className="text-xs lg:text-sm text-white/60 mt-1 leading-snug">
            {industry.shortDesc}
          </p>

          {/* Full description – slides in on hover */}
          <div className={`
            overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
            ${isHovered ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"}
          `}>
            <p className="text-xs text-white/80 leading-relaxed">
              {industry.desc}
            </p>
          </div>

          {/* Bottom indicator */}
          <div className="flex items-center gap-2 mt-3">
            <span className={`
              w-1.5 h-1.5 rounded-full
              transition-all duration-500
              ${isHovered ? "bg-gold-400 shadow-[0_0_12px_rgba(216,179,106,0.5)]" : "bg-white/20"}
            `} />
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
              {isHovered ? "View Details" : "Sector"}
            </span>
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
}

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

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1F33] py-16 lg:py-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Our Sectors</span>
        </div>

        <div className="mb-10 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]">
            Industries <span className="text-gold-400">We Serve</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mt-3">
            Advanced compressor and engineering solutions across critical energy, industrial, and process sectors.
          </p>
        </div>

        {/* Industries grid – 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
              isVisible={isVisible}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Connecting thread */}
        <div className="relative mt-16 flex justify-center items-center gap-4">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400/30" />
          <span className="flex items-center gap-2">
            {industries.map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold-400/40 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>
      </div>
    </section>
  );
}