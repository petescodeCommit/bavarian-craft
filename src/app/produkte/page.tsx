import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leder-Schlüsselanhänger für Fahrzeuge",
  description:
    "Alle Leder-Schlüsselanhänger von Bavarian Craft – Klassiker, Premium und Vintage. Mit Fahrzeug-Motiv und persönlicher Gravur auf der Rückseite.",
};

const products = [
  {
    id: 1,
    name: "Leder-Klassiker",
    description: "Glattes Rindsleder aus Bayern. Die Vorderseite zeigt dein Fahrzeug-Motiv, die Rückseite wird mit deinem Text geprägt.",
    price: "24,90 €",
    emoji: "🟫",
    material: "Rindsleder",
    size: "7 × 4 cm",
    tag: "Bestseller",
    features: ["Heißprägung", "Rindsleder", "2 Zeilen Text"],
  },
  {
    id: 2,
    name: "Leder-Premium",
    description: "Genarbtes Büffelleder mit natürlicher Textur. Tiefere Prägung, edles Finish – für Anspruchsvolle.",
    price: "34,90 €",
    emoji: "🏅",
    material: "Büffelleder",
    size: "7 × 4 cm",
    tag: "Premium",
    features: ["Tiefprägung", "Büffelleder", "2 Zeilen Text"],
  },
  {
    id: 3,
    name: "Leder-Vintage",
    description: "Antik-behandeltes Leder mit natürlichem Used-Look. Jedes Stück ist ein Unikat mit einzigartiger Patina.",
    price: "29,90 €",
    emoji: "⌚",
    material: "Antik-Leder",
    size: "7 × 4 cm",
    tag: "Beliebt",
    features: ["Heißprägung", "Antik-Leder", "Unikat"],
  },
];

const vehicles = [
  "BMW", "Mercedes-Benz", "Porsche", "Audi", "Volkswagen",
  "Harley-Davidson", "Ducati", "KTM", "BMW Motorrad",
  "Ferrari", "Lamborghini", "Alfa Romeo",
  "Fendt", "John Deere", "Claas",
  "Ford", "Chevrolet", "Jeep", "Toyota", "Honda",
];

export default function ProduktePage() {
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

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((p) => (
            <div key={p.id} className="card group">
              <div className="bg-bc-cream h-52 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-bold text-xl">{p.name}</h2>
                  <span className="text-xs font-semibold text-bc-gold">{p.tag}</span>
                </div>
                <div className="text-xs text-bc-muted mb-3">{p.material} · {p.size}</div>
                <p className="text-bc-muted text-sm mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.features.map((f) => (
                    <span key={f} className="bg-bc-cream text-bc-muted text-xs px-2 py-1">{f}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{p.price}</span>
                  <Link href={`/konfigurieren?modell=${p.id}`} className="bg-bc-brown text-white px-4 py-2 text-sm font-semibold hover:bg-bc-brown-dark transition-colors">
                    Personalisieren
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle list for SEO */}
        <div className="bg-white border border-bc-border p-8">
          <h2 className="font-bold text-xl mb-4">Verfügbare Fahrzeug-Motive</h2>
          <p className="text-bc-muted text-sm mb-6">Wir bieten Designs für alle gängigen Marken – darunter:</p>
          <div className="flex flex-wrap gap-2">
            {vehicles.map((v) => (
              <Link
                key={v}
                href={`/konfigurieren?fahrzeug=${encodeURIComponent(v)}`}
                className="text-sm px-3 py-1.5 border border-bc-border text-bc-muted hover:border-bc-brown hover:text-bc-text transition-colors"
              >
                {v}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
