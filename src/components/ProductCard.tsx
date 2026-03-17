"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

interface Product {
  id: number;
  name: string;
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

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  const sizeOptions = product.sizes
    ? product.sizes.split(",").map((s) => s.trim()).filter(Boolean)
    : [product.size];

  const colorOptions = product.colors
    ? product.colors.split(",").map((c) => c.trim()).filter(Boolean)
    : [];

  const [expanded, setExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0] ?? "");
  const [backText, setBackText] = useState("");
  const [added, setAdded] = useState(false);

  const descShort = product.description.length > 100 && !expanded
    ? product.description.slice(0, 100) + "…"
    : product.description;

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
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="card flex flex-col">
      {/* Image */}
      <div className="bg-bc-cream h-52 flex items-center justify-center overflow-hidden flex-shrink-0">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-7xl">{product.emoji}</span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-bold text-lg leading-tight">{product.name}</h2>
          {product.tag && <span className="text-xs font-semibold text-bc-gold whitespace-nowrap">{product.tag}</span>}
        </div>

        <div className="text-xs text-bc-muted">{product.material} · {product.size}</div>

        {/* Description with expand */}
        <div>
          <p className="text-bc-muted text-sm leading-relaxed">{descShort}</p>
          {product.description.length > 100 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-bc-brown hover:underline mt-1"
            >
              {expanded ? "Weniger anzeigen" : "Mehr lesen"}
            </button>
          )}
        </div>

        {/* Size selector */}
        {sizeOptions.length > 1 && (
          <div>
            <div className="text-xs font-semibold text-bc-muted tracking-wide mb-1.5">Größe</div>
            <div className="flex flex-wrap gap-1.5">
              {sizeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-2.5 py-1 text-xs border transition-colors ${
                    selectedSize === s
                      ? "border-bc-brown bg-bc-brown text-white"
                      : "border-bc-border text-bc-muted hover:border-bc-brown"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color selector */}
        {colorOptions.length > 0 && (
          <div>
            <div className="text-xs font-semibold text-bc-muted tracking-wide mb-1.5">Farbe</div>
            <div className="flex flex-wrap gap-1.5">
              {colorOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-2.5 py-1 text-xs border transition-colors ${
                    selectedColor === c
                      ? "border-bc-brown bg-bc-brown text-white"
                      : "border-bc-border text-bc-muted hover:border-bc-brown"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Back text */}
        <div>
          <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">
            Rückseitentext <span className="font-normal">(Name, Datum, Spruch…)</span>
          </label>
          <input
            type="text"
            value={backText}
            onChange={(e) => setBackText(e.target.value)}
            maxLength={30}
            placeholder="z.B. Max Mustermann"
            className="w-full border border-bc-border px-3 py-2 text-sm focus:border-bc-brown focus:outline-none"
          />
          {backText && (
            <div className="text-xs text-bc-muted mt-1">{backText.length}/30 Zeichen</div>
          )}
        </div>

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between pt-1 mt-auto">
          <span className="text-2xl font-bold">{Number(product.price).toFixed(2).replace(".", ",")} €</span>
          <button
            onClick={handleAdd}
            disabled={added}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              added
                ? "bg-green-600 text-white"
                : "bg-bc-brown text-white hover:bg-bc-brown-dark"
            }`}
          >
            {added ? "✓ Hinzugefügt" : "In den Warenkorb"}
          </button>
        </div>
      </div>
    </div>
  );
}
