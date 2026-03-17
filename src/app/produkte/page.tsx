export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAdminDb } from "@/lib/db";

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
    <div>
      {/* Page Header */}
      <div className="bg-bc-cream-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center gap-12">
          <div className="flex-1">
            <span className="text-bc-gold text-xs font-semibold tracking-widest uppercase mb-3 block">Lederware</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Leder-Schlüsselanhänger<br />für dein Fahrzeug
            </h1>
            <p className="text-bc-muted text-lg max-w-2xl">
              Handgefertigte Lederanhänger mit über 25 Fahrzeug-Motiven. Rückseite personalisiert mit deinem Namen oder Text.
            </p>
          </div>
          <div className="hidden md:block w-72 flex-shrink-0">
            <Image
              src="/images/banner-leder.png"
              alt="Leder-Schlüsselanhänger von Bavarian Craft"
              width={288}
              height={220}
              className="rounded-sm object-cover w-full"
            />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {products.map((p) => (
              <div key={p.id} className="card group">
                <div className="bg-bc-cream h-52 flex items-center justify-center overflow-hidden">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-7xl">{p.emoji}</span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="font-bold text-xl">{p.name}</h2>
                    {p.tag && <span className="text-xs font-semibold text-bc-gold">{p.tag}</span>}
                  </div>
                  <div className="text-xs text-bc-muted mb-3">{p.material} · {p.size}</div>
                  <p className="text-bc-muted text-sm mb-5 leading-relaxed">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{Number(p.price).toFixed(2).replace(".", ",")} €</span>
                    <Link href={`/konfigurieren?modell=${p.id}`} className="bg-bc-brown text-white px-4 py-2 text-sm font-semibold hover:bg-bc-brown-dark transition-colors">
                      Personalisieren
                    </Link>
                  </div>
                </div>
              </div>
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
    </div>
  );
}
