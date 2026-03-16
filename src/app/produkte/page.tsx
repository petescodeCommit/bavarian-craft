import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alle Schlüsselanhänger",
  description:
    "Entdecke unsere handgefertigten Schlüsselanhänger aus Bayern – Holz, Leder und traditionelle Designs, alle personalisierbar mit deinem Text.",
};

const products = [
  {
    id: 1,
    name: "Holz-Klassiker",
    description:
      "Aus nachhaltigem Buchenholz gefertigt. Die Gravur wird mit einem Laser präzise eingearbeitet und ist dauerhaft haltbar.",
    price: "19,90 €",
    emoji: "🪵",
    material: "Buchenholz",
    size: "6 × 3 cm",
    tag: "Bestseller",
    tagColor: "bg-yellow-100 text-yellow-800",
    features: ["Lasergravur", "Nachhaltig", "Bis 30 Zeichen"],
  },
  {
    id: 2,
    name: "Leder-Edition",
    description:
      "Echtes Rindsleder aus Bayern, langlebig und mit natürlicher Patina. Die Prägung verleiht deinem Text eine edle Optik.",
    price: "24,90 €",
    emoji: "🟫",
    material: "Echtleder",
    size: "7 × 3,5 cm",
    tag: "Neu",
    tagColor: "bg-green-100 text-green-800",
    features: ["Heißprägung", "Echtleder", "Bis 25 Zeichen"],
  },
  {
    id: 3,
    name: "Bayern-Wappen",
    description:
      "Das traditionelle bayerische Rautenmuster als Hintergrund, kombiniert mit deiner persönlichen Gravur. Ein echter Hingucker.",
    price: "22,90 €",
    emoji: "🏰",
    material: "Ahornholz",
    size: "6 × 4 cm",
    tag: "Beliebt",
    tagColor: "bg-blue-100 text-blue-800",
    features: ["Lasergravur", "Bayerndesign", "Bis 20 Zeichen"],
  },
  {
    id: 4,
    name: "Mini-Herz",
    description:
      "Herzförmiger Holzanhänger – perfekt als romantisches Geschenk oder Valentinstag-Überraschung mit persönlicher Note.",
    price: "17,90 €",
    emoji: "❤️",
    material: "Kirschholz",
    size: "5 × 5 cm",
    tag: "Geschenk-Tipp",
    tagColor: "bg-pink-100 text-pink-800",
    features: ["Lasergravur", "Herzform", "Bis 15 Zeichen"],
  },
  {
    id: 5,
    name: "Edelstahl-Pro",
    description:
      "Robuster Edelstahlanhänger für alle, die Langlebigkeit schätzen. Wetterfest und kratzresistent.",
    price: "29,90 €",
    emoji: "🔩",
    material: "Edelstahl V2A",
    size: "6 × 2,5 cm",
    tag: "Premium",
    tagColor: "bg-gray-100 text-gray-800",
    features: ["Lasergravur", "Edelstahl", "Bis 30 Zeichen"],
  },
  {
    id: 6,
    name: "Weihnachts-Edition",
    description:
      "Tannenbaumförmiger Anhänger aus Fichtenholz – das ideale Weihnachtsgeschenk mit persönlichem Touch.",
    price: "18,90 €",
    emoji: "🎄",
    material: "Fichtenholz",
    size: "4 × 6 cm",
    tag: "Saisonal",
    tagColor: "bg-red-100 text-red-800",
    features: ["Lasergravur", "Weihnachtsform", "Bis 15 Zeichen"],
  },
];

export default function ProduktePage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Alle Schlüsselanhänger</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Handgefertigt in Bayern, personalisiert für dich. Wähle dein
            Lieblingsmodell und gestalte es nach deinen Wünschen.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="bg-bavarian-cream h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-bold text-xl">{product.name}</h2>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mb-3">
                  {product.material} · {product.size}
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="bg-bavarian-cream text-bavarian-dark text-xs px-2 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-bavarian-blue">
                    {product.price}
                  </span>
                  <Link
                    href={`/konfigurieren?modell=${product.id}`}
                    className="btn-primary text-sm"
                  >
                    Personalisieren
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
