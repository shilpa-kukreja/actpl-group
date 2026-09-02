"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "About", id: "about" },
  { name: "Group", id: "group" },
  { name: "Industries", id: "industries" },
  { name: "Capabilities", id: "capabilities" },
  { name: "Global", id: "global" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Blogs", id: "blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 60);

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0
      );

      // Detect active section
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "about";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed 
          z-[100] w-full
          
          transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
        `}
      >
        <div
          className={`
            relative overflow-hidden
            
            border
            transition-all duration-700
            ${
              scrolled
                ? "border-white/[0.12] bg-[#0B1F33] "
                : "border-white/[0.10] bg-[#0B1F33]"
            }
          `}
        >
          {/* Top gradient glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F28C28]/70 to-transparent" />

          {/* Scroll progress */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F28C28] via-[#F28C28] to-[#F28C28] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />

         

          <div className="relative flex h-[68px] items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-7">
            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="group relative flex items-center gap-3"
              onClick={closeMobile}
            >
              {/* Logo mark */}
              <div className="relative flex h-10 w-10 items-center justify-center">
                {/* Orbit */}
                <span className="absolute inset-0 rounded-full border border-white/20 transition-all duration-700 group-hover:rotate-180 group-hover:border-[#F28C28]/60" />

                <span className="absolute -inset-[3px] rounded-full border border-transparent border-t-[#F28C28]/80 opacity-0 transition-all duration-700 group-hover:rotate-[260deg] group-hover:opacity-100" />

                {/* Core */}
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06]">
                  <span className="text-lg font-light tracking-wider text-white transition-colors duration-500 group-hover:text-[#F28C28]">
                    A
                  </span>
                </span>

              </div>

              {/* Brand */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium tracking-[0.28em] text-white">
                    ACTPL
                  </span>

               
                </div>

                <span className="text-[8px] font-light uppercase tracking-[0.42em] text-white/35">
                  Group
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/[0.07] bg-white/[0.025] p-1 md:flex">
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      group relative rounded-full px-3 py-2.5
                      text-[10px] font-medium uppercase tracking-[0.13em]
                      transition-all duration-300
                      lg:px-3.5
                      ${
                        active
                          ? "text-white"
                          : "text-white/45 hover:text-white/90"
                      }
                    `}
                  >
                    {/* Active background */}
                    <span
                      className={`
                        absolute inset-0 rounded-full
                        bg-white/[0.07]
                        transition-all duration-300
                        ${
                          active
                            ? "scale-100 opacity-100"
                            : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }
                      `}
                    />

                    <span className="relative z-10">{item.name}</span>

                    {/* Active dot */}
                    <span
                      className={`
                        absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2
                        rounded-full bg-[#F28C28]
                        shadow-[0_0_8px_rgba(226,189,112,.7)]
                        transition-all duration-300
                        ${active ? "w-3" : "w-0"}
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-2">
              {/* Availability */}
            

              {/* CTA */}
              <Link
                href="#contact"
                className="
                  group relative hidden items-center gap-3
                  overflow-hidden rounded-full
                  border border-white/15
                  bg-white/[0.05]
                  px-5 py-2.5
                  text-[10px] font-medium uppercase tracking-[0.16em]
                  text-white
                  transition-all duration-500
                  hover:border-[#d8b36a]/50
                  hover:bg-[#d8b36a]
                  hover:text-black
                  md:flex
                "
              >
                <span className="relative z-10">Let's Talk</span>

                <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-black/10">
                  <svg
                    className="h-3 w-3 transition-transform duration-300 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M5 12h13M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
                className="
                  relative flex h-10 w-10
                  items-center justify-center
                  rounded-full border border-white/10
                  bg-white/[0.04]
                  transition-all duration-300
                  hover:border-[#d8b36a]/50
                  md:hidden
                "
              >
                <div className="flex w-4 flex-col gap-1.5">
                  <span className="h-px w-full bg-white" />
                  <span className="ml-auto h-px w-3/4 bg-white/60" />
                  <span className="h-px w-full bg-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-[200] md:hidden
          transition-all duration-500
          ${
            mobileOpen
              ? "pointer-events-auto bg-black/80 backdrop-blur-xl"
              : "pointer-events-none bg-transparent"
          }
        `}
        onClick={closeMobile}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute bottom-0 left-0 w-full
            rounded-t-[32px]
            border-t border-white/10
            bg-[#080808]
            px-6 pb-8 pt-5
            shadow-[0_-30px_100px_rgba(0,0,0,.7)]
            transition-transform duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            ${mobileOpen ? "translate-y-0" : "translate-y-full"}
          `}
        >
          {/* Handle */}
          <div className="mx-auto mb-8 h-1 w-10 rounded-full bg-white/15" />

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#d8b36a]">
                Navigation
              </p>

              <p className="mt-1 text-xl font-light text-white">
                Explore ACTPL
              </p>
            </div>

            <button
              onClick={closeMobile}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <svg
                className="h-4 w-4 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMobile}
                className="
                  group relative overflow-hidden
                  rounded-2xl border border-white/[0.07]
                  bg-white/[0.025]
                  px-4 py-4
                  transition-all duration-300
                  hover:border-[#d8b36a]/30
                  hover:bg-[#d8b36a]/10
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/55 transition-colors group-hover:text-white">
                    {item.name}
                  </span>

                  <span className="text-[9px] text-white/15">
                    0{index + 1}
                  </span>
                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#d8b36a] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <Link
            href="#contact"
            onClick={closeMobile}
            className="
              mt-3 flex items-center justify-between
              rounded-2xl
              bg-[#d8b36a]
              px-5 py-4
              text-[10px] font-semibold uppercase tracking-[0.2em]
              text-black
            "
          >
            <span>Start a Conversation</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
              ↗
            </span>
          </Link>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
              ACTPL Group
            </span>

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
              © 2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
}