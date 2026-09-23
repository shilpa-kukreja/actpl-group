"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

// Exact content mapped from CORE CAPABILITIES.txt
// 👇 PASTE YOUR IMAGE URLS IN THE `image` FIELDS BELOW
const capabilities = [
  {
    id: 1,
    title: "Precision Manufacturing",
    desc: "ACTPL combines 46+ years of manufacturing experience with advanced CNC machining, grinding, lapping, assembly, testing, and precision inspection capabilities to manufacture complex, high-accuracy components for demanding industrial applications. From prototypes and small-batch requirements to repeat production, our focus remains on dimensional accuracy, material integrity, consistency, and dependable performance.",
    badge: "46+ Years of Expertise",
    image: "/capabilities/precision manufacturing.png",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    title: "Reciprocating Compressor Technology",
    desc: "Deep specialization in reciprocating compressor components and aftermarket solutions, supporting a wide range of compressor makes, models, operating conditions, and industrial applications.Our capabilities include compressor valves, internals, packing cases and rings, piston and rider rings, pistons, piston rods, scraper components, liners, and other critical parts.",
    badge: "Worldwide Support",
    image: "/capabilities/reciprocator compressing technology.png",
    gradient: "from-indigo-600 to-indigo-800",
  },
  {
    id: 3,
    title: "Advanced Reverse Engineering",
    desc: "We transform existing components, samples, and legacy parts into manufacturing-ready engineering solutions through advanced measurement, 3D scanning, dimensional analysis, material evaluation, engineering drawings, prototyping, validation, and manufacturing.Our reverse engineering capabilities help customers address obsolete components and difficult-to-source critical parts.",
    badge: "From Component to Complete Solution",
    image: "/capabilities/advanced reverse engineering.png",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    id: 4,
    title: "Precision Engineering & Inspection",
    desc: " Precision is engineered into every stage of our process.Advanced dimensional inspection, metrology, surface measurement, material verification, and quality-control technologies support manufacture of components where tight tolerances, surface finish, geometry, and repeatability are critical to performance.",
    badge: "Verified with Confidence",
    image: "/capabilities/precision engineering and inspection.png",
    gradient: "from-emerald-600 to-emerald-800",
  },
  {
    id: 5,
    title: "Materials & Application Expertise",
    desc: "Industrial performance begins with selecting the right material for the operating environment.Our experience spans stainless and specialty steels, precipitation-hardening alloys, nickel-based superalloys, high-performance thermoplastics, engineered polymers, and specialized coatings for applications involving pressure, temperature, corrosion, wear, and cyclic loading.",
    badge: "The Right Material. The Right Performance",
    image: "/capabilities/materials and application expertise.png",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    id: 6,
    title: "Quality & Reliability",
    desc: "Quality is integrated throughout our engineering and manufacturing processes—from incoming material verification and process control to final dimensional inspection, testing, documentation, and traceability.Supported by internationally recognized management systems and continuous improvement, our objective is simple: consistent quality and dependable performance in every component we deliver.",
    badge: "Quality Without Compromise",
    image: "/capabilities/quality and relaibikity.png",
    gradient: "from-rose-600 to-rose-800",
  },
  {
    id: 7,
    title: "Engineering Development & Continuous Innovation",
    desc: "ACTPL continually invests in advanced manufacturing technologies, metrology, materials, process development, and engineering knowledge to strengthen our capabilities and solve increasingly complex industrial challenges.Our approach combines decades of manufacturing experience with modern engineering technology to continuously improve how components are developed, manufactured, and supported.",
    badge: "Innovation Driving Performance",
    image: "/capabilities/engineer development and continous innovation.png",
    gradient: "from-cyan-600 to-cyan-800",
  },
  {
    id: 8,
    title: "Global Supply, Service & Support",
    desc: "ACTPL combines the manufacturing and engineering strength of India with regional operations in the UAE and USA, creating a global platform for communication, technical support, component supply, and aftermarket service.Through our group companies, we support customers across Europe, the Middle East, Asia, North America, and other international markets.",
    badge: "Engineered in India. Supported Globally.",
    image: "/capabilities/global supply, service support.png",
    gradient: "from-teal-600 to-teal-800",
  },
];

export default function Capabilities() {
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
      id="capabilities"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F6F8] py-16 lg:py-20"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-400/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,179,106,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-bold">
            Our Strengths
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1F33] leading-[1.1]">
            Core <span className="text-gold-400">Capabilities</span>
          </h2>
          <p className="text-[#0B1F33] text-base sm:text-lg max-w-3xl mt-4 leading-relaxed">
            <strong className="font-semibold">Engineering Strength. Manufacturing Excellence. Global Reach.</strong><br/>
            Across the ACTPL Group, we combine decades of manufacturing experience, specialized compressor expertise, advanced reverse engineering, precision inspection, and international support to deliver dependable solutions for critical industrial applications worldwide.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, Grid]}
          spaceBetween={24}
          slidesPerView={1}
          grid={{ rows: 1, fill: "row" }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              grid: { rows: 1 },
            },
            1024: {
              slidesPerView: 4,
              grid: { rows: 1 },
            },
          }}
          className="capabilities-swiper"
        >
          {capabilities.map((capability) => (
            <SwiperSlide key={capability.id}>
              <div className="h-full">
                <div
                  className={`
                    group relative h-full rounded-2xl
                    border border-white/10
                    bg-[#0B1F33]
                    transition-all duration-500
                    hover:border-gold-400/40
                    hover:shadow-[0_0_50px_rgba(216,179,106,0.06)]
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    min-h-[480px] flex flex-col
                  `}
                >
                  <div className="relative p-6 lg:p-8 flex flex-col flex-1">
                    {/* Gold accent line (left) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400/20 rounded-l-2xl overflow-hidden">
                      <div className="w-full bg-gradient-to-b from-gold-400 to-gold-600 transition-all duration-700 group-hover:h-full h-0" />
                    </div>

                    {/* Glow border on hover */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Image (replaces icon) */}
                    <div
                      className={`
                        w-14 h-14 rounded-2xl
                        bg-gradient-to-br ${capability.gradient}
                        flex items-center justify-center mb-5
                        transition-all duration-500
                        group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(216,179,106,0.2)]
                        flex-shrink-0
                        overflow-hidden
                      `}
                    >
                      <img
                        src={capability.image}
                        alt={capability.title}
                        loading="lazy"
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg lg:text-xl font-semibold text-white tracking-wide mb-3 leading-tight">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-justify lg:text-[13px] text-white/70 leading-relaxed flex-1">
                      {capability.desc}
                    </p>

                    {/* Bottom section: Badge */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-gold-400/30 group-hover:bg-gold-400/5 self-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                        <span className="text-[10px] font-medium text-white/90 leading-tight">
                          {capability.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .capabilities-swiper {
          padding-bottom: 48px !important;
        }
        .capabilities-swiper .swiper-pagination-bullet {
          background: rgba(11, 31, 51, 0.3);
          opacity: 1;
        }
        .capabilities-swiper .swiper-pagination-bullet-active {
          background: #d8b36a;
          box-shadow: 0 0 12px rgba(216,179,106,0.5);
        }
        .capabilities-swiper .swiper-button-prev,
        .capabilities-swiper .swiper-button-next {
          color: rgba(11, 31, 51, 0.5);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          width: 44px;
          height: 44px;
          padding: 10px;
          border-radius: 50%;
          border: 1px solid rgba(11, 31, 51, 0.1);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .capabilities-swiper .swiper-button-prev:hover,
        .capabilities-swiper .swiper-button-next:hover {
          color: #d8b36a;
          border-color: #d8b36a;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(216,179,106,0.2);
        }
        .capabilities-swiper .swiper-button-prev::after,
        .capabilities-swiper .swiper-button-next::after {
          font-size: 16px;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .capabilities-swiper .swiper-button-prev,
          .capabilities-swiper .swiper-button-next {
            display: none;
          }
        }
        .capabilities-swiper {
          overflow: visible !important;
        }
        .capabilities-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
}