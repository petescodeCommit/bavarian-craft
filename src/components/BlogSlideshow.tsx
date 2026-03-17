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
    <section className="py-24 bg-bc-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="label">Ratgeber</span>
            <h2 className="section-title mb-0">Aus unserem Blog</h2>
          </div>
          <Link href="/blog" className="hidden md:block text-sm text-bc-muted hover:text-bc-text tracking-wide transition-colors">
            Alle Beiträge →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main featured post */}
          <Link href={`/blog/${post.slug}`} className="group block">
            <div className="overflow-hidden rounded-sm bg-bc-cream h-72">
              <Image
                src={post.image}
                alt={post.title}
                width={700}
                height={288}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-5">
              <div className="text-xs text-bc-muted mb-2">
                {new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })} · {post.readingTime}
              </div>
              <h3 className="text-xl font-bold leading-snug mb-2 group-hover:text-bc-brown transition-colors">{post.title}</h3>
              <p className="text-bc-muted text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-3 text-sm font-semibold text-bc-brown">Weiterlesen →</div>
            </div>
          </Link>

          {/* Thumbnail list */}
          <div className="space-y-3">
            {posts.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 p-3 text-left transition-colors rounded-sm ${
                  i === active ? "bg-white border border-bc-brown/20" : "hover:bg-white/60"
                }`}
              >
                <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-sm bg-bc-cream">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={80}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-bc-muted mb-1">{p.readingTime} Lesezeit</div>
                  <div className={`text-sm font-semibold leading-snug line-clamp-2 ${i === active ? "text-bc-brown" : "text-bc-text"}`}>
                    {p.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-bc-brown" : "bg-bc-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
