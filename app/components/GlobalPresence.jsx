"use client";

import { useRef, useEffect, useState } from "react";
import {
  Settings,
  Layers,
  Wrench,
  ShieldCheck,
  Box,
  Users,
  Headset,
  Truck,
  Compass,
} from "lucide-react";

// Exact content data with Image URLs for flags
const hubs = [
  {
    id: "in",
    country: "INDIA",
    flag: "https://flagcdn.com/in.svg", // Real India flag image
    subtitle: "Manufacturing & Engineering Hub",
    image: "/global/Manufacturing & Engineering Hub 01.jpeg", 
    features: [
      { icon: Settings, text: "Precision Manufacturing" },
      { icon: Layers, text: "Compressor Technologies" },
      { icon: Wrench, text: "Reverse Engineering" },
      { icon: ShieldCheck, text: "Quality & Inspection" },
    ],
    footer: "46+ Years of Manufacturing Expertise",
  },
  {
    id: "ae",
    country: "UNITED ARAB EMIRATES",
    flag: "https://flagcdn.com/ae.svg", // Real UAE flag image
    subtitle: "Middle East Sales & Service Hub",
    image: "/global/2.png", 
    features: [
      { icon: Box, text: "Regional Stocking" },
      { icon: Wrench, text: "Valve Repair & Refurbishment" },
      { icon: Users, text: "Technical Support" },
      { icon: Headset, text: "Customer Service" },
    ],
    footer: "Serving the Middle East & International Markets",
  },
  {
    id: "us",
    country: "UNITED STATES",
    flag: "https://flagcdn.com/us.svg", // Real USA flag image
    subtitle: "North American Sales & Support Hub",
    image: "/global/3.png", 
    features: [
      { icon: Truck, text: "Local Inventory" },
      { icon: Settings, text: "Aftermarket Compressor Solutions" },
      { icon: Users, text: "Sales & Customer Support" },
      { icon: Compass, text: "Faster Regional Response" },
    ],
    footer: "Supporting Customers Across North America",
  },
];

const stats = [
  { value: "46+", label: "Years of Experience" },
  { value: "300+", label: "Skilled Professionals" },
  { value: "3", label: "Countries with Group Operations" },
  { value: "Global", label: "Customer Reach" },
];

export default function GlobalPresence() {
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

  return (
    <section
      id="global"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1F33] py-8 lg:py-12"
    >
      {/* Background Map & Global Network Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full h-full object-cover opacity-[0.04]"
        />
        
        {/* <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <path d="M150,350 Q400,150 700,300" fill="none" stroke="#F28C28" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M150,350 Q500,450 800,400" fill="none" stroke="#F28C28" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M800,400 Q850,250 950,200" fill="none" stroke="#F28C28" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg> */}

        <div className="absolute top-[35%] left-[15%] w-2 h-2 rounded-full bg-[#F28C28] shadow-[0_0_15px_#F28C28]" />
        <div className="absolute top-[45%] left-[45%] w-2 h-2 rounded-full bg-[#F28C28] shadow-[0_0_15px_#F28C28]" />
        <div className="absolute top-[50%] left-[55%] w-3 h-3 rounded-full bg-[#F28C28] shadow-[0_0_20px_#F28C28] animate-pulse" />
        <div className="absolute top-[25%] left-[70%] w-2 h-2 rounded-full bg-[#F28C28] shadow-[0_0_15px_#F28C28]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-8 h-px bg-[#F28C28]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F28C28]">
                Global Reach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Global Presence. <br />
              <span className="text-[#F28C28]">Local Support.</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-4 leading-relaxed">
              With our manufacturing and engineering base in India and strategic operations in the UAE and USA, ACTPL Group combines global capabilities with responsive regional support to serve customers worldwide.
            </p>
          </div>
          
          <div className="hidden lg:block text-right pb-1">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] leading-relaxed font-semibold">
              Engineered <br />
              in India. <br />
              Supported <br />
              Globally.
            </p>
          </div>
        </div>

        {/* 3 Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {hubs.map((hub, index) => (
            <div
              key={hub.id}
              className={`
                group relative flex flex-col bg-[#112840] rounded-xl overflow-hidden border border-white/10 shadow-xl transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Header Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={hub.image}
                  alt={hub.country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#112840] via-[#112840]/50 to-transparent" /> */}
                
                {/* Country Info & Flag Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  {/* Replaced emoji with real flag image */}
                  <img 
                    src={hub.flag} 
                    alt={`${hub.country} Flag`} 
                    className="w-8 h-auto rounded-sm shadow-md border border-white/20"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {hub.country}
                    </h3>
                    <p className="text-[11px] text-white font-semibold">
                      {hub.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body - Features */}
              <div className="grid grid-cols-4 gap-2 p-4 sm:p-5 flex-1 bg-[#112840]">
                {hub.features.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <feature.icon className="w-5 h-5 text-white/70 group-hover:text-[#F28C28] transition-colors duration-300" />
                    <span className="text-[9px] font-semibold text-white/60 uppercase tracking-wider leading-tight">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer - Orange Banner */}
              <div className="bg-[#F28C28] py-3 px-3 text-center">
                <p className="text-white text-[10px] sm:text-[11px] font-bold tracking-wide">
                  {hub.footer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-8 border-t border-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="block text-3xl lg:text-4xl font-bold text-[#F28C28] mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] lg:text-xs text-white/50 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}