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
      <div className="flex flex-wrap gap-2 mb-10">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/produkte/${p.slug}`}
            className="group card flex flex-col hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="bg-bc-cream h-52 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-7xl">{p.emoji}</span>
              )}
              {p.tag && (
                <span className="absolute top-3 left-3 bg-white text-bc-gold text-xs font-bold px-2 py-0.5 tracking-wide">
                  {p.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="font-bold text-lg mb-1 group-hover:text-bc-brown transition-colors">{p.name}</h2>
              <div className="text-xs text-bc-muted mb-3">{p.material} · {p.size}</div>
              <p className="text-bc-muted text-sm leading-relaxed line-clamp-2 flex-1">{p.description}</p>

              {/* Personalization hint */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-bc-brown font-semibold">
                <span>✦</span>
                <span>Mit deinem Namen personalisierbar</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold">{Number(p.price).toFixed(2).replace(".", ",")} €</span>
                <span className="text-sm font-semibold text-bc-brown group-hover:underline">
                  Ansehen →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
