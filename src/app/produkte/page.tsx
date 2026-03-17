export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { getAdminDb } from "@/lib/db";
import ProduktGrid from "@/components/ProduktGrid";

export const metadata: Metadata = {
  title: "Leder-Schlüsselanhänger für Fahrzeuge – Bavarian Craft",
  description: "Personalisierte Leder-Schlüsselanhänger mit Fahrzeug-Motiv – VW Golf, VW Käfer, BMW und mehr. Handgefertigt in Bayern, mit Gravur auf der Rückseite.",
  alternates: { canonical: "https://bavarian-craft.vercel.app/produkte" },
  openGraph: {
    type: "website",
    url: "https://bavarian-craft.vercel.app/produkte",
    title: "Leder-Schlüsselanhänger für Fahrzeuge – Bavarian Craft",
    description: "Personalisierte Leder-Schlüsselanhänger mit Fahrzeug-Motiv. Handgefertigt in Bayern.",
  },
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

        {/* Header */}
        <div className="mb-12">
          <span className="text-bc-gold text-xs font-semibold tracking-widest uppercase mb-3 block">Lederware</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Leder-Schlüsselanhänger<br />für dein Fahrzeug
          </h1>
          <p className="text-bc-muted text-lg max-w-2xl">
            Handgefertigt in Bayern. Wähle dein Modell und personalisiere es mit deinem Namen.
          </p>
        </div>

        {/* Product grid with filter */}
        <ProduktGrid products={products} />

        {/* Vehicles */}
        <div className="mt-20 bg-white border border-bc-border p-8">
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
