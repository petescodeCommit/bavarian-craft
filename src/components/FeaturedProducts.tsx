import Link from "next/link";
// Homepage uses static data – synced with real products in /produkte

const products = [
  {
    id: 1,
    name: "Leder-Klassiker",
    description: "Glattes Rindsleder, schlicht und zeitlos. Vorderseite mit Fahrzeug-Motiv, Rückseite personalisiert.",
    price: "24,90 €",
    emoji: "🟫",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Leder-Premium",
    description: "Genarbtes Büffelleder mit besonderer Textur. Tiefere Prägung, edles Finish.",
    price: "34,90 €",
    emoji: "🏅",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Leder-Vintage",
    description: "Antik-behandeltes Leder mit natürlichem Used-Look. Jedes Stück ein Unikat.",
    price: "29,90 €",
    emoji: "⌚",
    tag: "Beliebt",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="label">Unsere Lederware</span>
            <h2 className="section-title mb-0">Beliebteste Modelle</h2>
          </div>
          <Link href="/produkte" className="text-sm text-bc-muted hover:text-bc-text tracking-wide transition-colors">
            Alle →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {products.map((p) => (
            <Link key={p.id} href="/produkte" className="group bg-white border border-bc-border hover:border-bc-brown transition-colors overflow-hidden">
              <div className="bg-bc-cream h-44 sm:h-48 flex items-center justify-center text-6xl sm:text-7xl group-hover:scale-105 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-base sm:text-lg">{p.name}</h3>
                  <span className="text-xs font-bold text-bc-gold">{p.tag}</span>
                </div>
                <p className="text-bc-muted text-sm mb-4 leading-relaxed line-clamp-2">{p.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{p.price}</span>
                  <span className="text-xs font-semibold text-bc-brown bg-bc-cream px-3 py-1.5 group-hover:bg-bc-brown group-hover:text-white transition-colors">
                    Ansehen →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
