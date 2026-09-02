"use client";

import { useRef, useEffect, useState } from "react";

const countries = [
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    cities: "New York, Chicago, LA",
    projects: 45,
    offices: 3,
    description: "Our largest market with full manufacturing, engineering, and distribution capabilities.",
    detail: "Partnering with Fortune 500 companies across automotive, aerospace, and energy sectors.",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    cities: "London, Manchester",
    projects: 28,
    offices: 2,
    description: "Strategic hub for European operations, specializing in advanced engineering and R&D.",
    detail: "Collaborating with leading research institutions and automotive OEMs.",
  },
  {
    id: "de",
    name: "Germany",
    flag: "🇩🇪",
    cities: "Berlin, Munich",
    projects: 32,
    offices: 2,
    description: "Center of excellence for precision manufacturing and Industry 4.0 technologies.",
    detail: "Serving the automotive and industrial machinery sectors with world-class quality.",
  },
  {
    id: "ae",
    name: "UAE",
    flag: "🇦🇪",
    cities: "Dubai, Abu Dhabi",
    projects: 20,
    offices: 2,
    description: "Regional headquarters for the Middle East, focused on infrastructure and energy.",
    detail: "Delivering large-scale projects in smart cities, oil & gas, and renewable energy.",
  },
  {
    id: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    cities: "Singapore",
    projects: 18,
    offices: 1,
    description: "Asia-Pacific hub for supply chain management and global distribution.",
    detail: "Strategically positioned to serve the rapid-growing markets of Southeast Asia.",
  },
  {
    id: "in",
    name: "India",
    flag: "🇮🇳",
    cities: "Mumbai, Pune, Bangalore",
    projects: 35,
    offices: 3,
    description: "Our fastest-growing market, offering cost-competitive manufacturing and IT services.",
    detail: "Supporting global clients with engineering outsourcing and component production.",
  },
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    cities: "Sydney, Melbourne",
    projects: 15,
    offices: 2,
    description: "Serving the mining, energy, and infrastructure sectors across Oceania.",
    detail: "Delivering sustainable solutions for resource extraction and renewable energy.",
  },
  {
    id: "br",
    name: "Brazil",
    flag: "🇧🇷",
    cities: "São Paulo, Rio de Janeiro",
    projects: 12,
    offices: 1,
    description: "Regional hub for Latin America, with a focus on infrastructure and construction.",
    detail: "Supporting large-scale infrastructure projects across South America.",
  },
];

export default function GlobalPresence() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Combined stats
  const totalCountries = countries.length;
  const totalProjects = countries.reduce((sum, c) => sum + c.projects, 0);
  const totalOffices = countries.reduce((sum, c) => sum + c.offices, 0);

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

  // Animate stats (just simple reveal)
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setStatsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section
      id="global"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1F33] py-10 lg:py-14"
    >
      {/* Cinematic background – animated globe ring */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]">
         
          <div className="absolute inset-0 rounded-full border border-gold-400/10 animate-spin-slow" />
          <div className="absolute inset-[10%] rounded-full border border-gold-400/20 animate-spin-slow-reverse" />
          <div className="absolute inset-[30%] rounded-full border border-gold-400/30 animate-pulse" />
          <div className="absolute inset-[50%] rounded-full border border-gold-400/20 animate-spin-slow" />
         
          <div className="absolute inset-[35%] rounded-full bg-gold-400/5 blur-2xl" />
        </div>

       
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-400/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,179,106,0.02)_0%,transparent_70%)]" />
      </div> */}

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Global Reach</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]">
            Global <span className="text-gold-400">Presence</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mt-3">
            Operating across 12+ countries with a commitment to local excellence and global standards.
          </p>
        </div>

        {/* Stats row */}
        {/* <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="text-center p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="block text-3xl lg:text-4xl font-light text-white text-gold-400 transition-all duration-1000">
              {statsVisible ? totalCountries : 0}+
            </span>
            <span className="text-xs uppercase tracking-[0.15em] text-white/40">Countries</span>
          </div>
          <div className="text-center p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="block text-3xl lg:text-4xl font-light text-white text-gold-400 transition-all duration-1000 delay-200">
              {statsVisible ? totalProjects : 0}+
            </span>
            <span className="text-xs uppercase tracking-[0.15em] text-white/40">Projects</span>
          </div>
          <div className="text-center p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <span className="block text-3xl lg:text-4xl text-white font-light text-gold-400 transition-all duration-1000 delay-400">
              {statsVisible ? totalOffices : 0}+
            </span>
            <span className="text-xs uppercase tracking-[0.15em] text-white/40">Offices</span>
          </div>
        </div> */}

        {/* Country cards grid – 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => {
            const isFlipped = flippedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={country.id}
                className={`
                  relative h-72 cursor-pointer
                  transition-all duration-500
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${100 + index * 80}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`
                    relative w-full h-full
                    transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                    [transform-style:preserve-3d]
                    ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                  `}
                >
                  {/* Front face */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl
                      border border-white
                      bg-[#F28C28]
                      backdrop-blur-sm
                      p-6 flex flex-col items-center text-center
                      transition-all duration-300
                      hover:border-gold-400/40
                      [backface-visibility:hidden]
                      ${isHovered ? "shadow-[0_0_40px_rgba(216,179,106,0.05)]" : ""}
                    `}
                  >
                    {/* Gold accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-400/20 rounded-l-2xl overflow-hidden">
                      <div className={`w-full bg-gradient-to-b from-gold-400 to-gold-600 transition-all duration-700 ${isHovered ? "h-full" : "h-0"}`} />
                    </div>

                    {/* Flag */}
                    <div className="text-5xl mb-2 text-white">{country.flag}</div>

                    {/* Country name */}
                    <h3 className="text-lg font-semibold text-white tracking-wide">
                      {country.name}
                    </h3>

                    {/* Cities */}
                    <p className="text-xs text-white mt-1">{country.cities}</p>

                    {/* Stats */}
                    <div className="mt-4 flex gap-4">
                      <div>
                        <span className="block text-xl font-light text-white">{country.projects}</span>
                        <span className="text-[8px] uppercase tracking-[0.15em] text-white">Projects</span>
                      </div>
                      <div>
                        <span className="block text-xl font-light text-white">{country.offices}</span>
                        <span className="text-[8px] uppercase tracking-[0.15em] text-white">Offices</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white mt-3 leading-relaxed flex-1">
                      {country.description}
                    </p>

                    {/* Flip hint */}
                    <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white">
                      Click to flip
                    </div>

                    {/* Decorative dots */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isHovered ? "bg-gold-400" : "bg-white/20"}`} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Back face */}
                  <div
                    className={`
                      absolute inset-0 rounded-2xl
                      border border-gold-400/30
                      bg-gradient-to-br from-gold-400/10 to-gold-600/10
                      backdrop-blur-sm
                      p-6 flex flex-col items-center justify-center text-center
                      [backface-visibility:hidden] [transform:rotateY(180deg)]
                    `}
                  >
                    <div className="text-2xl mb-2">{country.flag}</div>
                    <h4 className="text-base font-semibold text-white">{country.name}</h4>
                    <p className="text-xs text-white/60 mt-3 leading-relaxed max-w-xs">
                      {country.detail}
                    </p>
                    <div className="mt-4 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 text-xs text-gold-400">
                      {country.cities}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlip(index);
                      }}
                      className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-gold-400 transition-colors"
                    >
                      Flip back
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom connecting thread */}
        <div className="relative mt-16 flex justify-center items-center gap-4">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400/30" />
          <span className="flex items-center gap-2">
            {countries.map((_, i) => (
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

      {/* Custom CSS for spinning rings */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}