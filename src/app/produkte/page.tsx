export const dynamic = "force-dynamic";

import Link from "next/link";
import type { Metadata } from "next";
import { getAdminDb } from "@/lib/db";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Leder-Schlüsselanhänger für Fahrzeuge",
  description: "Alle Leder-Schlüsselanhänger von Bavarian Craft – Klassiker, Premium und Vintage. Mit Fahrzeug-Motiv und persönlicher Gravur auf der Rückseite.",
};

const vehicles = [
  "BMW", "Mercedes-Benz", "Porsche", "Audi", "Volkswagen",
  "Harley-Davidson", "Ducati", "KTM", "BMW Motorrad",
  "Ferrari", "Lamborghini", "Alfa Romeo",
  "Fendt", "John Deere", "Claas",
  "Ford", "Chevrolet", "Jeep", "Toyota", "Honda",
];

export default async function ProduktePage() {
  const db = getAdminDb();
  const { data: productsRaw } = await db
    .from("products")
    .select("*")
    .eq("active", true)
    .order("id");

  const products = productsRaw ?? [];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-bc-gold text-xs font-semibold tracking-widest uppercase mb-3 block">Lederware</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Leder-Schlüsselanhänger<br />für dein Fahrzeug
          </h1>
          <p className="text-bc-muted text-lg max-w-2xl">
            Handgefertigte Lederanhänger mit über 25 Fahrzeug-Motiven. Rückseite personalisiert mit deinem Namen oder Text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="bg-white border border-bc-border p-8">
          <h2 className="font-bold text-xl mb-4">Verfügbare Fahrzeug-Motive</h2>
          <p className="text-bc-muted text-sm mb-6">Wir bieten Designs für alle gängigen Marken:</p>
          <div className="flex flex-wrap gap-2">
            {vehicles.map((v) => (
              <Link key={v} href={`/konfigurieren?fahrzeug=${encodeURIComponent(v)}`}
                className="text-sm px-3 py-1.5 border border-bc-border text-bc-muted hover:border-bc-brown hover:text-bc-text transition-colors">
                {v}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
