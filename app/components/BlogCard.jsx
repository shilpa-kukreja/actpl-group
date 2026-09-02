"use client";

import { useRef } from "react";
import Link from "next/link";

export default function BlogCard({ post, index, isVisible }) {
  const cardRef = useRef(null);
  const delay = 150 + index * 80;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    cardRef.current.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  // Build image URL (adjust base URL if needed)
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://actpl-group.onrender.com/${post.image}`;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Derive excerpt from content (first 120 chars)
  const excerpt = post.content.slice(0, 120) + (post.content.length > 120 ? "…" : "");

  // Temporary fallbacks – you can add these fields to your schema later
  const category = "Technology";
  const readTime = "5 min read";

  return (
    <div
      className={`
        h-full transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={cardRef}
        className="group relative h-full rounded-2xl overflow-hidden border border-white/10 bg-[#F28C28] backdrop-blur-sm transition-all duration-500 hover:border-gold-400/40"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.2em] text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            {category}
          </span>
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold-400 to-gold-600" />
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-white leading-tight mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-white leading-relaxed flex-1 line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.1em] text-white">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
            <Link
              href={`/blog/${post._id}`}
              className="flex items-center gap-1.5 text-xs font-medium text-gold-400/70 hover:text-gold-400 transition-colors group/btn"
            >
              <span className="text-white">Read More</span>
              <svg className="w-3 h-3 text-white transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute -inset-[1px] rounded-2xl border-2 border-gold-400/0 transition-all duration-700 pointer-events-none group-hover:border-gold-400/20" />
      </div>
    </div>
  );
}