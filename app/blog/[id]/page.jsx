import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Helper to fetch related blogs (excluding current)
async function fetchRelatedBlogs(currentId) {
  try {
    const res = await fetch("http://localhost:4000/api/blog/getallblogs", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const all = await res.json();
    const others = all.filter((post) => post._id !== currentId);
    // Shuffle and pick up to 3
    const shuffled = others.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/api/blog/getblog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();
  const relatedPosts = await fetchRelatedBlogs(id);

  // Image URL with fallback
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `http://localhost:4000/${post.image || "default.jpg"}`;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const category = "Technology";
  const readTime = "5 min read";

  // Split content into paragraphs for better display
  const paragraphs = post.content.split("\n").filter((p) => p.trim() !== "");

  return (
    <>
      <Navbar />

      {/* HERO SECTION – light background with gold accent */}
      <section className="relative overflow-hidden bg-[#faf8f5] pt-24 pb-16 lg:pt-32 lg:pb-20">
        {/* Decorative subtle pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-200/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-300/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10 text-center max-w-4xl">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-800 transition-colors mb-8 text-sm uppercase tracking-wider font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          <div className="flex justify-center mb-6">
            <span className="w-16 h-0.5 bg-gold-500/60" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-[#1a1a1a] leading-[1.1] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 font-light">
            <time dateTime={post.date} className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {formattedDate}
            </time>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {readTime}
            </span>
            <span className="text-gray-300">•</span>
            <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium">
              {category}
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT – light background */}
      <main className="bg-[#faf8f5] py-12 px-6 lg:px-12">
        <article className="max-w-3xl mx-auto">
          {/* Featured Image with subtle shadow */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5 mb-12">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          {/* Content with refined typography */}
          <div className="prose prose-lg prose-gold-light max-w-none">
            {paragraphs.map((paragraph, idx) => {
              // Apply drop cap to the first paragraph
              if (idx === 0) {
                return (
                  <p key={idx} className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold-600 first-letter:mr-2 first-letter:float-left leading-relaxed text-gray-700 text-lg">
                    {paragraph}
                  </p>
                );
              }
              return (
                <p key={idx} className="leading-relaxed text-gray-700 text-lg">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Divider with share */}
          <div className="my-16 border-t border-gray-200 pt-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm text-gray-400 font-light">Share this article</span>
            <div className="flex gap-2">
              {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
                <button
                  key={platform}
                  className="px-4 py-2 rounded-full border border-gray-200 hover:border-gold-400 hover:bg-gold-50 transition-all text-xs uppercase tracking-wider text-gray-500 hover:text-gold-600"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </article>

        {/* RELATED BLOGS – light background, elegant cards */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto mt-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-gold-400/60" />
              <h2 className="text-2xl font-serif font-light text-[#1a1a1a]">You might also like</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => {
                const relatedImage = related.image?.startsWith("http")
                  ? related.image
                  : `http://localhost:4000/${related.image || "default.jpg"}`;
                const relatedExcerpt = related.content.slice(0, 100) + "…";

                return (
                  <Link
                    key={related._id}
                    href={`/blog/${related._id}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={relatedImage}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-serif font-light text-[#1a1a1a] leading-tight mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {relatedExcerpt}
                      </p>
                      <div className="mt-4 flex items-center text-xs text-gold-600 group-hover:text-gold-800 transition-colors">
                        Read More
                        <svg className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h13M13 6l6 6-6 6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}