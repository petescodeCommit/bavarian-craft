"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  imageUrl: string | null;
  emoji: string | null;
  tag: string | null;
  material: string;
  size: string;
}

export default function ProduktGrid({ products }: { products: Product[] }) {
  const tags = ["Alle", ...Array.from(new Set(products.map((p) => p.tag).filter(Boolean) as string[]))];
  const [activeTag, setActiveTag] = useState("Alle");
  const filtered = activeTag === "Alle" ? products : products.filter((p) => p.tag === activeTag);

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 text-sm font-semibold border transition-colors ${
              activeTag === tag
                ? "bg-bc-brown text-white border-bc-brown"
                : "border-bc-border text-bc-muted hover:border-bc-brown hover:text-bc-text"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/produkte/${p.slug}`}
            className="group bg-white border border-bc-border hover:border-bc-brown transition-colors duration-200 flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative bg-bc-cream h-48 sm:h-52 overflow-hidden flex-shrink-0">
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">{p.emoji}</div>
              )}
              {p.tag && (
                <span className="absolute top-3 left-3 bg-bc-brown text-white text-[11px] font-bold px-2 py-0.5 tracking-wide uppercase">
                  {p.tag}
                </span>
              )}
            </div>

            {/* Content – feste Höhe, alles bündig */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h2 className="font-bold text-base sm:text-lg leading-snug mb-1 group-hover:text-bc-brown transition-colors line-clamp-1">
                {p.name}
              </h2>
              <div className="text-xs text-bc-muted mb-3">{p.material} · {p.size}</div>

              <p className="text-bc-muted text-sm leading-relaxed line-clamp-2 flex-1 min-h-[2.5rem]">
                {p.description}
              </p>

              <div className="mt-4 pt-4 border-t border-bc-border flex items-center justify-between">
                <span className="text-lg font-bold">{Number(p.price).toFixed(2).replace(".", ",")} €</span>
                <span className="text-xs font-semibold text-bc-brown bg-bc-cream px-3 py-1.5 group-hover:bg-bc-brown group-hover:text-white transition-colors">
                  Ansehen →
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-xs text-bc-brown/80 font-medium">
                <span>✦</span>
                <span>Personalisierbar mit deinem Text</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
