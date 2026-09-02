"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Slider images (replace with your own)
const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
    alt: "Manufacturing",
    label: "Advanced Manufacturing",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    alt: "Infrastructure",
    label: "Infrastructure Development",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    alt: "Energy",
    label: "Energy Solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
    alt: "Engineering",
    label: "Precision Engineering",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0, countries: 0 });
  const sectionRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Animate counters on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const targetYears = 25;
            const targetClients = 150;
            const targetCountries = 12;
            let start = 0;
            const duration = 1500;
            const step = 16;
            const incrementYears = targetYears / (duration / step);
            const incrementClients = targetClients / (duration / step);
            const incrementCountries = targetCountries / (duration / step);

            const timer = setInterval(() => {
              start += step;
              setCounters((prev) => ({
                years: Math.min(prev.years + incrementYears, targetYears),
                clients: Math.min(prev.clients + incrementClients, targetClients),
                countries: Math.min(prev.countries + incrementCountries, targetCountries),
              }));
              if (start >= duration) {
                clearInterval(timer);
                setCounters({ years: targetYears, clients: targetClients, countries: targetCountries });
              }
            }, step);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1F33] py-10 lg:py-14"
    >
      {/* Background cinematic gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-400/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">About ACTPL</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-white">
              Building <span className="text-gold-400">Excellence</span>
              <br />
              <span className="text-white/70 text-2xl sm:text-3xl lg:text-4xl font-light">
                Since 1998
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed">
              ACTPL is a diversified industrial group with a rich legacy of innovation,
              quality, and global impact. We operate across manufacturing, infrastructure,
              energy, and engineering sectors, delivering sustainable solutions to our
              partners worldwide.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="group p-6 rounded-2xl border border-white bg-[#F28C28] backdrop-blur-sm hover:border-gold-400/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(216,179,106,0.08)]">
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Vision</h4>
                <p className="text-sm text-white mt-2 leading-relaxed">
                  To be the global benchmark for industrial excellence, innovation, and sustainability.
                </p>
              </div>
              <div className="group p-6 rounded-2xl border border-white bg-[#F28C28] backdrop-blur-sm hover:border-gold-400/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(216,179,106,0.08)]">
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Mission</h4>
                <p className="text-sm text-white mt-2 leading-relaxed">
                  To empower industries through cutting-edge engineering, reliable partnerships, and a commitment to quality.
                </p>
              </div>
            </div>

          
          </div>

          {/* Right: Image Slider */}
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((img, idx) => (
                <div key={idx} className="relative w-full flex-shrink-0 h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm text-xs text-white/90 rounded-full border border-white/10">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                 
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}