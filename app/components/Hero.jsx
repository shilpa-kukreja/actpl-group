"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Engineering Tomorrow's Future",
    subtitle: "Leading industrial group with a legacy of excellence",
    cta: "Explore More",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80",
    gradient: "from-blue-900/70 to-black/70",
  },
  {
    id: 2,
    title: "Global Infrastructure Solutions",
    subtitle: "Building the backbone of modern civilization",
    cta: "Our Projects",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80",
    gradient: "from-emerald-900/70 to-black/70",
  },
  {
    id: 3,
    title: "Powering Sustainable Energy",
    subtitle: "Innovative energy solutions for a greener tomorrow",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80",
    gradient: "from-amber-900/70 to-black/70",
  },
  {
    id: 4,
    title: "Precision Engineering & R&D",
    subtitle: "Pushing the boundaries of innovation",
    cta: "Our Capabilities",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&q=80",
    gradient: "from-indigo-900/70 to-black/70",
  },
];

const SLIDE_INTERVAL = 6000; // ms
const PROGRESS_STEP = 50;    // ms per progress update

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Start / restart the auto-slide timer
  const startTimer = () => {
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Reset progress and trigger transition
    setProgress(0);
    setIsTransitioning(true);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (SLIDE_INTERVAL / PROGRESS_STEP);
        if (next >= 100) {
          // Advance to next slide
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          // Reset progress (will be set to 0 on next tick, but we return 0 now to avoid extra update)
          return 0;
        }
        return next;
      });
    }, PROGRESS_STEP);
  };

  // Start timer on mount
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Handle transition state reset after zoom animation
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, currentSlide]);

  // Manual navigation: go to specific slide
  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    // Restart timer to sync progress
    startTimer();
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const current = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background with zoom effect */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-[8000ms] ease-out ${
            isTransitioning ? "scale-105" : "scale-100"
          }`}
          style={{
            backgroundImage: `url(${current.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient} opacity-80`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNHYtMmgtNHpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnpNNiA0VjBINHY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-10">
        <div
          className="h-full bg-gradient-to-r from-gold-400 to-gold-500 transition-all duration-[50ms] ease-linear"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gold-400 w-6"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={prevSlide}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-gold-400/50 hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-white"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-gold-400/50 hover:bg-white/5 transition-all duration-300 text-white/60 hover:text-white"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-white/20">
        <span className="text-[8px] uppercase tracking-[0.3em] writing-mode-vertical">Scroll</span>
        <svg className="w-4 h-4 animate-bounce-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}