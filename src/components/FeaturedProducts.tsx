import Link from "next/link";

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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="label">Unsere Lederware</span>
            <h2 className="section-title mb-0">Beliebteste Modelle</h2>
          </div>
          <Link href="/produkte" className="hidden md:block text-sm text-bc-muted hover:text-bc-text tracking-wide transition-colors">
            Alle ansehen →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="card group">
              <div className="bg-bc-cream h-52 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg tracking-tight">{p.name}</h3>
                  <span className="text-xs font-semibold text-bc-gold tracking-wide">{p.tag}</span>
                </div>
                <p className="text-bc-muted text-sm mb-6 leading-relaxed">{p.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{p.price}</span>
                  <Link href={`/konfigurieren?modell=${p.id}`} className="bg-bc-brown text-white px-4 py-2 text-sm font-semibold hover:bg-bc-brown-dark transition-colors">
                    Gestalten
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
