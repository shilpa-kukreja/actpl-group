"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Mehta",
    company: "Precision Engineering Solutions",
    position: "Operations Manager",
    quote: "ACTPL has been a reliable partner for our industrial automation requirements. Their technical expertise, timely support, and commitment to quality have significantly improved our production efficiency. The team understands manufacturing challenges and consistently delivers solutions that meet our expectations.",
    // longQuote: "The team at ACTPL understands our needs deeply and consistently delivers beyond expectations. Their commitment to quality and innovation is unparalleled in the industry.",
    image: "/testimonials/01.png",
    rating: 5,
    industry: "Manufacturing",
  },
  {
    id: 2,
    name: "Amit Verma",
    company: "Petro Energy Systems Oil & Gas Industry",
    position: "Plant Maintenance Head",
    quote: "We have been working with ACTPL for several years and are impressed by their professionalism and product quality. Their solutions have helped us maintain operational reliability while reducing downtime. The technical support team is knowledgeable and always responsive.",
    longQuote: "From concept to completion, ACTPL's team demonstrated exceptional project management and technical expertise. They truly understand the complexities of large-scale infrastructure.",
    image: "/testimonials/02.png",
    rating: 5,
    industry: "Infrastructure",
  },
  {
    id: 3,
    name: "Sanjay Kulkarni",
    company: "Thermal Power Technologies Power Generation Industry",
    position: "Project Manager",
    quote: "ACTPL provides dependable products and exceptional service. Their understanding of critical power plant operations and attention to detail have made them one of our preferred technology partners. We highly recommend ACTPL for industrial automation and engineering solutions.",
    // longQuote: "The collaborative approach and innovative thinking at ACTPL made our partnership incredibly productive. Their engineering team is world-class.",
    image: "/testimonials/03.png",
    rating: 4,
    industry: "Energy",
  },
  {
    id: 4,
    name: "Anil Deshmukh",
    company: "Petrochemical Process Industries Chemical & Petrochemical Industry",
    position: "Plant Operations Manager",
    quote: "ACTPL has consistently delivered reliable and high-performance automation solutions for our chemical processing operations. Their technical expertise, product quality, and prompt support have helped us improve process efficiency while maintaining strict safety and operational standards. We appreciate their professional approach and commitment to customer satisfaction.",
    // longQuote: "Their logistics network is seamless, and their commitment to quality assurance has eliminated defects from our supply chain.",
    image: "/testimonials/04.png",
    rating: 5,
    industry: "Automotive",
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "GreenFuel CNG Networks Compressed Natural Gas (CNG) Industry",
    position: "Maintenance Manager",
    quote: "ACTPL has been our trusted supplier for compressor spares across our CNG stations. Their valve assemblies and piston rings deliver consistent performance under high-pressure operations, and their quick turnaround has helped us avoid costly downtime. The team is technically sound, responsive, and always ready to support our maintenance schedules.",
    // longQuote: "The installation was seamless, and the ongoing support has been exceptional. We trust ACTPL for all our critical infrastructure needs.",
    image: "/testimonials/05.png",
    rating: 5,
    industry: "Healthcare",
  },
  {
    id: 6,
    name: "Captain Rohit Nair",
    company: "Oceanic Marine Services Marine Industry",
    position: "Technical Superintendent",
    quote: "Working with ACTPL has made a real difference to our marine operations. Their compressor components are built to handle demanding offshore conditions, and their attention to quality gives us complete confidence at sea. Timely deliveries and knowledgeable technical support make ACTPL a partner we can always rely on.",
    // longQuote: "Our guests frequently comment on the quality of the lighting design. ACTPL understands the importance of both form and function.",
    image: "/testimonials/06.png",
    rating: 4,
    industry: "Hospitality",
  },
];

export default function Testimonials() {
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

  // Render stars with gold color – clearly visible
  const renderStars = (rating, isActive) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 transition-all duration-300 ${
              i < rating 
                ? "text-gold-400" 
                : "text-white/20"
            } ${isActive && i < rating ? "scale-110" : ""}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F6F8] py-20 lg:py-28"
    >
      {/* Cinematic background */}
     

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-px bg-gold-400/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#0B1F33]">Client Stories</span>
          <span className="w-12 h-px bg-white" />
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1F33] leading-[1.1]">
            What Our <span className="text-[#D8B36A]">Clients Say</span>
          </h2>
          <p className="text-white text-base sm:text-lg max-w-xl mx-auto mt-3">
            Real feedback from partners who trust ACTPL to deliver excellence.
          </p>
        </div>

        {/* Swiper Carousel – Fast auto-slide */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500, // Faster slide change – 2.5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600} // Faster transition
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              {({ isActive }) => (
                <div
                  className={`
                    h-full transition-all duration-500
                    ${isVisible ? "opacity-100" : "opacity-0"}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`
                      group relative h-full min-h-[440px] lg:min-h-[480px]
                      rounded-2xl overflow-hidden
                      border border-white
                      bg-[#0B1F33]
                      backdrop-blur-sm
                      transition-all duration-500
                      hover:border-[D2AF26]/50
                      hover:shadow-[0_0_60px_rgba(216,179,106,0.08)]
                      ${isActive ? "scale-100" : "scale-95 opacity-60"}
                    `}
                  >
                    {/* Diagonal film reel stripe */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0B1F33]/5 to-transparent rotate-45" />
                      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#0B1F33]/5 to-[#0B1F33] to-transparent rotate-45" />
                    </div>

                    {/* Gold corner accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-[D2AF26]/30 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-[D2AF26]/30 rounded-bl-2xl" />

                    {/* Film reel sprocket holes */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-2 rounded-full transition-all duration-500 ${
                            isActive ? "bg-gold-400/40" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-2 rounded-full transition-all duration-500 ${
                            isActive ? "bg-gold-400/40" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="relative p-6 lg:p-8 flex flex-col h-full">
                      {/* Quote mark – clearly visible */}
                      <div className={`text-5xl text-white font-serif select-none transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30"}`}>
                        "
                      </div>

                      {/* Rating stars – clearly visible */}
                      <div className="mt-1 text-white">{renderStars(testimonial.rating, isActive)}</div>

                      {/* Quote – white text for visibility */}
                      <p className="text-base lg:text-lg text-white/80 leading-relaxed flex-1 mt-3">
                        "{testimonial.quote}"
                      </p>

                      {/* Long quote – slides in on hover */}
                      <div className={`
                        overflow-hidden transition-all duration-500 opacity-100
                      `}>
                        <p className="text-sm text-white/50 leading-relaxed mt-2">
                          "{testimonial.longQuote}"
                        </p>
                      </div>

                      {/* Client info */}
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/30 flex-shrink-0 transition-all duration-500 group-hover:border-gold-400 shadow-[0_0_20px_rgba(216,179,106,0.1)]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-white/40 truncate">
                            {testimonial.position}
                          </p>
                          <p className="text-xs text-white truncate">
                            {testimonial.company}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-[8px] uppercase tracking-[0.15em] text-white/30 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                            {testimonial.industry}
                          </span>
                        </div>
                      </div>

                      {/* Film reel counter */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        <span className="text-[8px] text-white/30 tracking-[0.2em]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="w-6 h-px bg-gold-400/30" />
                        <span className="text-[8px] text-white/30 tracking-[0.2em]">
                          {String(testimonials.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Hover glow border */}
                    <div className={`
                      absolute -inset-[1px] rounded-2xl border-2 border-gold-400/0
                      transition-all duration-700 pointer-events-none
                      group-hover:border-gold-400/30
                    `} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 48px !important;
          padding-top: 20px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3);
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #d8b36a;
          box-shadow: 0 0 16px rgba(216,179,106,0.5);
        }
        .testimonials-swiper .swiper-button-prev,
        .testimonials-swiper .swiper-button-next {
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          width: 40px;
          height: 40px;
          padding: 8px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-button-prev:hover,
        .testimonials-swiper .swiper-button-next:hover {
          color: #d8b36a;
          border-color: #d8b36a;
          background: rgba(216,179,106,0.1);
        }
        .testimonials-swiper .swiper-button-prev::after,
        .testimonials-swiper .swiper-button-next::after {
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .testimonials-swiper .swiper-button-prev,
          .testimonials-swiper .swiper-button-next {
            display: none;
          }
        }
        .testimonials-swiper {
          overflow: visible !important;
        }
        /* Coverflow shadow */
        .testimonials-swiper .swiper-slide-shadow-left,
        .testimonials-swiper .swiper-slide-shadow-right {
          background: rgba(0,0,0,0.4);
        }
        /* Animation for rings */
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        /* Line clamp */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .group-hover\\:max-h-24 {
          max-height: 6rem;
        }
      `}</style>
    </section>
  );
}