import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Holz-Klassiker",
    description: "Natürliches Buchenholz mit persönlicher Gravur",
    price: "19,90 €",
    emoji: "🪵",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Leder-Edition",
    description: "Echtes Rindsleder, geprägt mit deinem Text",
    price: "24,90 €",
    emoji: "🟫",
    tag: "Neu",
  },
  {
    id: 3,
    name: "Bayern-Wappen",
    description: "Mit traditionellem Rautenmuster und Wunschgravur",
    price: "22,90 €",
    emoji: "🏰",
    tag: "Beliebt",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-bavarian-copper text-xs font-semibold tracking-widest uppercase mb-3">Unsere Modelle</p>
            <h2 className="section-title mb-0">Beliebteste Designs</h2>
          </div>
          <Link href="/produkte" className="hidden md:block text-sm text-gray-400 hover:text-bavarian-black tracking-wide transition-colors">
            Alle ansehen →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="bg-gray-50 h-56 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">
                {product.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg tracking-tight">{product.name}</h3>
                  <span className="text-xs font-semibold text-bavarian-copper tracking-wide">
                    {product.tag}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{product.price}</span>
                  <Link
                    href={`/konfigurieren?modell=${product.id}`}
                    className="bg-bavarian-black text-white px-4 py-2 text-sm font-semibold tracking-wide hover:bg-bavarian-copper transition-colors"
                  >
                    Gestalten
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/produkte" className="btn-secondary text-sm">Alle Produkte ansehen</Link>
        </div>
      </div>
    </section>
  );
}
