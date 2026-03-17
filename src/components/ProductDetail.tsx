"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

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
  sizes: string | null;
  colors: string | null;
}

export default function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart();

  const sizeOptions = product.sizes
    ? product.sizes.split(",").map((s) => s.trim()).filter(Boolean)
    : [product.size];

  const colorOptions = product.colors
    ? product.colors.split(",").map((c) => c.trim()).filter(Boolean)
    : [];

  const [selectedSize, setSelectedSize] = useState(sizeOptions[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0] ?? "");
  const [backText, setBackText] = useState("");
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({
      productId: product.id,
      productName: product.name,
      productImage: product.imageUrl,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      backText,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="py-8 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link href="/produkte" className="inline-flex items-center gap-1 text-sm text-bc-muted hover:text-bc-text mb-6 sm:mb-8">
          ← Alle Modelle
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Image */}
          <div className="bg-bc-cream w-full aspect-square flex items-center justify-center overflow-hidden">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-8xl sm:text-9xl">{product.emoji}</span>
            )}
          </div>

          {/* Right column */}
          <div>
            {/* Header */}
            <div className="mb-4">
              {product.tag && (
                <span className="inline-block text-[11px] font-bold text-white bg-bc-brown px-2 py-0.5 tracking-widest uppercase mb-2">
                  {product.tag}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-1">{product.name}</h1>
              <div className="text-sm text-bc-muted">{product.material} · {product.size}</div>
            </div>

            {/* Price */}
            <div className="text-2xl sm:text-3xl font-bold mb-4">
              {Number(product.price).toFixed(2).replace(".", ",")} €
            </div>

            {/* Description */}
            <p className="text-bc-muted text-sm leading-relaxed mb-6 whitespace-pre-line">
              {product.description}
            </p>

            <div className="border-t border-bc-border pt-5 space-y-5">

              {/* Size */}
              {sizeOptions.length > 1 && (
                <div>
                  <div className="text-xs font-semibold text-bc-muted tracking-wide mb-2">
                    Größe: <span className="text-bc-text">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((s) => (
                      <button key={s} onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 text-sm border transition-colors ${
                          selectedSize === s ? "border-bc-brown bg-bc-brown text-white" : "border-bc-border text-bc-muted hover:border-bc-brown"
                        }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color */}
              {colorOptions.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-bc-muted tracking-wide mb-2">
                    Farbe: <span className="text-bc-text">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((c) => (
                      <button key={c} onClick={() => setSelectedColor(c)}
                        className={`px-3 py-1.5 text-sm border transition-colors ${
                          selectedColor === c ? "border-bc-brown bg-bc-brown text-white" : "border-bc-border text-bc-muted hover:border-bc-brown"
                        }`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Back text */}
              <div>
                <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-2">
                  Rückseitentext <span className="font-normal">(Name, Datum, Spruch …)</span>
                </label>
                <input
                  type="text"
                  value={backText}
                  onChange={(e) => setBackText(e.target.value)}
                  maxLength={30}
                  placeholder="z.B. Max · 2024"
                  className="w-full border border-bc-border px-4 py-3 text-sm focus:border-bc-brown focus:outline-none"
                />
                <div className="text-xs text-bc-muted mt-1 text-right">{backText.length}/30</div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                disabled={added}
                className={`w-full py-3.5 font-bold tracking-wide text-sm transition-colors ${
                  added ? "bg-green-600 text-white" : "bg-bc-brown text-white hover:bg-bc-brown-dark"
                }`}
              >
                {added ? "✓ Hinzugefügt" : "In den Warenkorb"}
              </button>

              <Link href="/warenkorb" className="block text-center text-sm text-bc-muted hover:text-bc-text">
                Zum Warenkorb →
              </Link>
            </div>

            {/* Trust */}
            <div className="mt-6 pt-5 border-t border-bc-border grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-bc-muted">
              <div><span className="text-bc-gold mr-1">✓</span>Handgefertigt</div>
              <div><span className="text-bc-gold mr-1">✓</span>Versand ab 30 € frei</div>
              <div><span className="text-bc-gold mr-1">✓</span>2–4 Werktage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
