"use client";

import { useRef, useEffect, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F6F8] py-10 lg:py-12"
    >
      {/* Cinematic background */}
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400">Get in Touch</span>
        </div>

        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1F33] leading-[1.1]">
            Let's <span className="text-[#D8B36A]">Talk</span>
          </h2>
          <p className="text-[#0B1F33] text-base sm:text-lg max-w-xl mt-3">
            Have a project in mind? Reach out – we'd love to hear from you.
          </p>
        </div>

        {/* Split layout: Image left, Form right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image with overlay */}
          <div
            className={`
              relative rounded-2xl overflow-hidden
              border border-[#0B1F33] bg-[#D8B36A]/5 backdrop-blur-sm
               duration-700
             
              
            `}
            
          >
            <div className="relative h-[500px] lg:h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop"
                alt="ACTPL Contact"
                className="w-full h-full object-cover  duration-700 "
              />
            
              
             

             
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`
              relative rounded-2xl
              border border-white bg-[#0B1F33] backdrop-blur-sm
              p-6 lg:p-8
              transition-all duration-700
              hover:border-gold-400/30 hover:shadow-[0_0_60px_rgba(216,179,106,0.05)]
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Decorative gold lines */}
            <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-gold-400/60 to-transparent" />
            <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-gold-400/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/4 h-px bg-gradient-to-r from-gold-400/30 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/4 h-px bg-gradient-to-l from-gold-400/30 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-white group-focus-within:text-gold-400 transition-colors mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/20 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-white group-focus-within:text-gold-400 transition-colors mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/20 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="ACTPL"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-white group-focus-within:text-gold-400 transition-colors mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/20 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-[0.15em] text-white group-focus-within:text-gold-400 transition-colors mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/20 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-[0.15em] text-white group-focus-within:text-gold-400 transition-colors mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/20 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-[0.15em] text-white group-focus-within:text-gold-400 transition-colors mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/20 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full py-3.5 rounded-xl bg-[#F28C28] text-white font-semibold text-sm uppercase tracking-[0.15em] shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>


      
      </div>
    </section>
  );
}