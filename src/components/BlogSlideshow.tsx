"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readingTime: string;
}

export default function BlogSlideshow({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState(0);
  const post = posts[active];

  return (
    <section className="py-16 sm:py-24 bg-bc-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <span className="label">Ratgeber</span>
            <h2 className="section-title mb-0">Aus unserem Blog</h2>
          </div>
          <Link href="/blog" className="text-sm text-bc-muted hover:text-bc-text transition-colors">
            Alle →
          </Link>
        </div>

        {/* Mobile: simple stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {posts.slice(0, 2).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white border border-bc-border overflow-hidden">
              <div className="h-40 overflow-hidden bg-bc-cream">
                <Image src={p.image} alt={p.title} width={400} height={160}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-bc-muted mb-1">{p.readingTime}</div>
                <h3 className="font-bold text-sm leading-snug group-hover:text-bc-brown transition-colors line-clamp-2">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: featured + sidebar */}
        <div className="hidden lg:grid grid-cols-2 gap-8 items-start">
          <Link href={`/blog/${post.slug}`} className="group block">
            <div className="overflow-hidden bg-bc-cream h-64">
              <Image src={post.image} alt={post.title} width={700} height={256}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="mt-4">
              <div className="text-xs text-bc-muted mb-1">
                {new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })} · {post.readingTime}
              </div>
              <h3 className="text-xl font-bold leading-snug mb-2 group-hover:text-bc-brown transition-colors">{post.title}</h3>
              <p className="text-bc-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="mt-3 text-sm font-semibold text-bc-brown">Weiterlesen →</div>
            </div>
          </Link>

          <div className="space-y-2">
            {posts.map((p, i) => (
              <button key={p.slug} onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 p-3 text-left transition-colors ${
                  i === active ? "bg-white border border-bc-brown/20" : "hover:bg-white/60"
                }`}>
                <div className="w-16 h-14 flex-shrink-0 overflow-hidden bg-bc-cream">
                  <Image src={p.image} alt={p.title} width={64} height={56} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-bc-muted mb-0.5">{p.readingTime}</div>
                  <div className={`text-sm font-semibold leading-snug line-clamp-2 ${i === active ? "text-bc-brown" : "text-bc-text"}`}>
                    {p.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
