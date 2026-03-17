import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Ratgeber & Ideen – Bavarian Craft Blog",
  description: "Tipps rund um personalisierte Geschenke, handgemachtes Leder und Fahrzeug-Accessoires. Lass dich inspirieren vom Bavarian Craft Blog.",
};

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-bc-gold text-xs font-semibold tracking-widest uppercase mb-3 block">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ratgeber & Ideen</h1>
          <p className="text-bc-muted text-lg max-w-2xl">
            Inspiration, Handwerk und alles rund um personalisierte Geschenke aus Bayern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group card overflow-hidden">
              <div className="h-52 overflow-hidden bg-bc-cream">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={208}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-bc-muted mb-3">
                  <span>{new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.readingTime} Lesezeit</span>
                </div>
                <h2 className="font-bold text-lg leading-snug mb-2 group-hover:text-bc-brown transition-colors">{post.title}</h2>
                <p className="text-bc-muted text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-bc-brown">Weiterlesen →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
