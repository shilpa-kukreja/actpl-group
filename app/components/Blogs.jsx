"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import BlogCard from "./BlogCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Blogs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/blog/getallblogs");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

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

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Enable loop only when we have at least 3 slides (desktop breakpoint)
  const slidesPerViewDesktop = 3;
  const enableLoop = blogs.length >= slidesPerViewDesktop;

  return (
    <section
      id="blogs"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1F33] py-10 lg:py-12"
    >
      {/* Cinematic background – full original code */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-400/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,179,106,0.02)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(216,179,106,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(216,179,106,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400">Insights</span>
        </div>

        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1]">
              Latest <span className="text-gold-400">Blogs</span>
            </h2>
            <p className="text-white text-base sm:text-lg max-w-xl mt-3">
              Stay updated with our insights on industry trends, technology, and innovation.
            </p>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-gold-400 transition-colors"
          >
            View All
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Swiper Carousel – 3 cards per slide */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={enableLoop}     // conditional loop – no warning
          speed={700}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: slidesPerViewDesktop,
              spaceBetween: 24,
            },
          }}
          className="blogs-swiper"
        >
          {blogs.map((post, index) => (
            <SwiperSlide key={post._id}>
              <BlogCard post={post} index={index} isVisible={isVisible} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .blogs-swiper {
          padding-bottom: 48px !important;
        }
        .blogs-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3);
          opacity: 1;
        }
        .blogs-swiper .swiper-pagination-bullet-active {
          background: #d8b36a;
          box-shadow: 0 0 12px rgba(216,179,106,0.5);
        }
        .blogs-swiper .swiper-button-prev,
        .blogs-swiper .swiper-button-next {
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          width: 40px;
          height: 40px;
          padding: 0.5rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .blogs-swiper .swiper-button-prev:hover,
        .blogs-swiper .swiper-button-next:hover {
          color: #d8b36a;
          border-color: #d8b36a;
          background: rgba(216,179,106,0.1);
        }
        .blogs-swiper .swiper-button-prev::after,
        .blogs-swiper .swiper-button-next::after {
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .blogs-swiper .swiper-button-prev,
          .blogs-swiper .swiper-button-next {
            display: none;
          }
        }
        .blogs-swiper {
          overflow: visible !important;
        }
        .blogs-swiper .swiper-slide {
          height: auto !important;
        }
        /* Line clamp utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}