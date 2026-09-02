"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

const capabilities = [
  {
    id: 1,
    title: "Precision Manufacturing",
    desc: "State-of-the-art facilities delivering high-quality components with zero-defect standards. Our advanced CNC machining and automated assembly lines ensure unmatched precision and consistency for every product.",
    longDesc: "We leverage Industry 4.0 technologies including IoT sensors, real-time monitoring, and predictive maintenance to achieve over 99% production efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600",
    metric: "4.2M units/yr",
    efficiency: 92,
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Advanced Engineering",
    desc: "End-to-end engineering solutions from concept to execution with deep industry expertise. Our team of skilled engineers delivers innovative designs, rapid prototyping, and seamless integration across complex systems.",
    longDesc: "We offer CAD/CAM, finite element analysis, and full-scale testing to ensure your projects are engineered for performance and durability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
        <path d="M6 12h12" />
      </svg>
    ),
    gradient: "from-indigo-500 to-indigo-600",
    metric: "150+ projects",
    efficiency: 95,
    color: "#6366f1",
  },
  {
    id: 3,
    title: "Research & Development",
    desc: "Pioneering innovation through continuous R&D, driving next-generation technologies. Our dedicated R&D centers focus on material science, AI integration, and sustainable processes.",
    longDesc: "We invest 15% of revenue into R&D, and have filed over 25 patents in the last five years, solidifying our position as industry innovators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600",
    metric: "25+ patents",
    efficiency: 78,
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "Quality Assurance",
    desc: "Rigorous quality control ensuring zero-defect delivery and uncompromising reliability. Our Six Sigma and ISO-certified processes guarantee consistent excellence in every product.",
    longDesc: "We employ automated inspection systems, statistical process control, and a zero-tolerance policy for defects, achieving a 99.7% quality rate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    metric: "99.7% quality rate",
    efficiency: 99,
    color: "#10b981",
  },
  {
    id: 5,
    title: "Supply Chain Integration",
    desc: "End-to-end supply chain management with real-time visibility and optimized efficiency. We integrate suppliers, logistics, and demand planning for seamless operations.",
    longDesc: "Our cloud-based platform provides 360-degree visibility, reducing lead times by 30% and improving inventory turnover by 25%.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    metric: "12+ countries",
    efficiency: 88,
    color: "#f59e0b",
  },
  {
    id: 6,
    title: "Global Distribution",
    desc: "Worldwide distribution network ensuring timely delivery and seamless logistics. Our strategic warehouses and fleet management guarantee on-time performance.",
    longDesc: "We serve over 12 countries with a 98.5% on-time delivery rate, backed by real-time tracking and dedicated customer support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    gradient: "from-rose-500 to-rose-600",
    metric: "98.5% on-time",
    efficiency: 94,
    color: "#f43f5e",
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
      className="relative overflow-hidden bg-[#F4F6F8] py-10 lg:py-14"
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400">Our Strengths</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1F33] leading-[1.1]">
            Core <span className="text-gold-400">Capabilities</span>
          </h2>
          <p className="text-[#0B1F33] text-base sm:text-lg max-w-xl mt-3">
            The expertise that powers our global operations across industries.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, Grid]}
          spaceBetween={24}
          slidesPerView={1}
          grid={{ rows: 1, fill: "row" }}
          autoplay={{
            delay: 4000,
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
                    border border-white
                    bg-[#0B1F33] to-transparent
                    backdrop-blur-sm
                    transition-all duration-500
                    hover:border-gold-400/40
                    hover:shadow-[0_0_50px_rgba(216,179,106,0.06)]
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    min-h-[380px] flex flex-col
                  `}
                >
                  <div className="relative p-6 lg:p-8 flex flex-col flex-1">
                    {/* Gold accent line (left) */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-400/20 rounded-l-2xl overflow-hidden">
                      <div className="w-full bg-gradient-to-b from-gold-400 to-gold-600 transition-all duration-700 group-hover:h-full h-0" />
                    </div>

                    {/* Glow border on hover */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Icon */}
                    <div
                      className={`
                        w-12 h-12 rounded-2xl
                        bg-gradient-to-br ${capability.gradient}
                        flex items-center justify-center mb-5
                        text-white
                        transition-all duration-500
                        group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(216,179,106,0.2)]
                        flex-shrink-0
                      `}
                    >
                      <div className="w-8 h-8">{capability.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white tracking-wide mb-2">
                      {capability.title}
                    </h3>

                    {/* Description (longer) */}
                    <p className="text-sm text-white leading-relaxed flex-1">
                      {capability.desc}
                    </p>

                    {/* Long description – slides in on hover */}
                    {/* <div className={`
                      overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                     
                      group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2
                    `}>
                      <p className="text-xs text-white/40 leading-relaxed">
                        {capability.longDesc}
                      </p>
                    </div> */}

                    {/* Bottom section: Metric badge + progress bar */}
                    <div className="mt-4 pt-4 border-t border-white flex flex-col gap-3">
                      {/* Metric badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white bg-white/5 transition-all duration-300 group-hover:border-gold-400/30 group-hover:bg-gold-400/5 self-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                        <span className="text-xs font-medium text-white">{capability.metric}</span>
                      </div>

                      {/* Efficiency progress bar */}
                      {/* <div className="w-full">
                        <div className="flex justify-between text-[10px] text-white/30 uppercase tracking-[0.1em] mb-1">
                          <span>Efficiency</span>
                          <span>{capability.efficiency}%</span>
                        </div>
                        <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out group-hover:w-full"
                            style={{
                              width: "0%",
                              background: `linear-gradient(90deg, ${capability.color}, #d8b36a)`,
                            }}
                          />
                       
                          <style jsx>{`
                            .group:hover .h-full {
                              width: ${capability.efficiency}% !important;
                            }
                          `}</style>
                        </div>
                      </div> */}
                    </div>

                    {/* Decorative dots */}
                    {/* <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold-400 transition-all duration-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style >{`
        .capabilities-swiper {
          padding-bottom: 48px !important;
        }
        .capabilities-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3);
          opacity: 1;
        }
        .capabilities-swiper .swiper-pagination-bullet-active {
          background: #d8b36a;
          box-shadow: 0 0 12px rgba(216,179,106,0.5);
        }
        .capabilities-swiper .swiper-button-prev,
        .capabilities-swiper .swiper-button-next {
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          width: 40px;
          height: 40px;
          padding: 8px;
          border-radius: 50%;
          border: 1px solid white;
          transition: all 0.3s ease;
        }
        .capabilities-swiper .swiper-button-prev:hover,
        .capabilities-swiper .swiper-button-next:hover {
          color: #d8b36a;
          border-color: #d8b36a;
          background: rgba(216,179,106,0.1);
        }
        .capabilities-swiper .swiper-button-prev::after,
        .capabilities-swiper .swiper-button-next::after {
          font-size: 16px;
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
        /* Ensure cards fill height */
        .capabilities-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
}