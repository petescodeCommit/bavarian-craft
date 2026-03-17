"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, remove, update, total, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="text-5xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold mb-2">Dein Warenkorb ist leer</h1>
        <p className="text-bc-muted mb-8">Füge Produkte hinzu, um sie zu bestellen.</p>
        <Link href="/produkte" className="bg-bc-brown text-white px-8 py-3 font-bold hover:bg-bc-brown-dark transition-colors">
          Zu den Produkten
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-10">Warenkorb</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-bc-border p-5 flex gap-5">
              {/* Image */}
              <div className="w-20 h-20 bg-bc-cream flex-shrink-0 flex items-center justify-center overflow-hidden">
                {item.productImage ? (
                  <img src={item.productImage} alt={item.productName} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl">🟫</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-base mb-1">{item.productName}</div>
                <div className="text-xs text-bc-muted space-y-0.5">
                  {item.size && <div>Größe: {item.size}</div>}
                  {item.color && <div>Farbe: {item.color}</div>}
                  {item.backText && <div>Rückseite: <span className="font-medium text-bc-text">„{item.backText}"</span></div>}
                </div>
              </div>

              {/* Quantity + price */}
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <div className="font-bold">{(item.price * item.quantity).toFixed(2).replace(".", ",")} €</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => update(item.id, item.quantity - 1)}
                    className="w-7 h-7 border border-bc-border text-bc-muted hover:border-bc-brown flex items-center justify-center text-lg leading-none">−</button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => update(item.id, item.quantity + 1)}
                    className="w-7 h-7 border border-bc-border text-bc-muted hover:border-bc-brown flex items-center justify-center text-lg leading-none">+</button>
                </div>
                <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-600 hover:underline">Entfernen</button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white border border-bc-border p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-bc-muted">Zwischensumme</span>
            <span className="font-bold text-xl">{total.toFixed(2).replace(".", ",")} €</span>
          </div>
          <div className="flex items-center justify-between mb-6 text-sm text-bc-muted">
            <span>Versand</span>
            <span>{total >= 30 ? "Kostenlos" : "4,90 €"}</span>
          </div>
          <div className="flex items-center justify-between mb-6 font-bold text-lg border-t border-bc-border pt-4">
            <span>Gesamt</span>
            <span>{(total >= 30 ? total : total + 4.90).toFixed(2).replace(".", ",")} €</span>
          </div>
          <button className="w-full bg-bc-brown text-white py-3 font-bold hover:bg-bc-brown-dark transition-colors">
            Zur Kasse (demnächst verfügbar)
          </button>
          <div className="flex items-center justify-between mt-4">
            <Link href="/produkte" className="text-sm text-bc-muted hover:text-bc-text">← Weiter einkaufen</Link>
            <button onClick={clear} className="text-sm text-red-400 hover:underline">Warenkorb leeren</button>
          </div>
        </div>
      </div>
    </div>
  );
}
