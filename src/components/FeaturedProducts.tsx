import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Holz-Klassiker",
    description: "Natürliches Buchenholz mit persönlicher Gravur",
    price: "19,90 €",
    emoji: "🪵",
    tag: "Bestseller",
    tagColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    name: "Leder-Edition",
    description: "Echtes Rindsleder, geprägt mit deinem Text",
    price: "24,90 €",
    emoji: "🟫",
    tag: "Neu",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Bayern-Wappen",
    description: "Mit traditionellem Rautenmuster und Wunschgravur",
    price: "22,90 €",
    emoji: "🏰",
    tag: "Beliebt",
    tagColor: "bg-blue-100 text-blue-800",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Unsere beliebtesten Modelle</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Jeder Anhänger wird individuell für dich gefertigt – mit Liebe zum
            Detail und bayerischer Handwerkskunst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              {/* Product image placeholder */}
              <div className="bg-bavarian-cream h-52 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-bavarian-blue">
                    {product.price}
                  </span>
                  <Link
                    href={`/konfigurieren?modell=${product.id}`}
                    className="btn-primary text-sm"
                  >
                    Gestalten
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/produkte" className="btn-secondary">
            Alle Produkte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
