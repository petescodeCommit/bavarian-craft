import Link from "next/link";

const ETSY_URL = "https://www.etsy.com/de/shop/Bavariancraft";

const reviews = [
  {
    name: "Markus R.",
    location: "München",
    text: "Einfach perfekt. Das Leder fühlt sich hochwertig an und die Prägung ist sehr sauber. Mein Schlüsselanhänger ist ein echter Hingucker.",
    date: "März 2025",
  },
  {
    name: "Sandra K.",
    location: "Stuttgart",
    text: "Schnelle Lieferung, schöne Verpackung. Der Lederanhänger mit persönlichem Text ist genau das was ich gesucht habe – perfektes Geschenk!",
    date: "Februar 2025",
  },
  {
    name: "Georg F.",
    location: "Straubing",
    text: "Als Landwirt war ich skeptisch – aber die Qualität hat mich überzeugt. Der Anhänger ist robust und sieht klasse aus!",
    date: "Januar 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bc-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="label">Kundenstimmen</span>
            <h2 className="section-title mb-0">Was unsere Kunden sagen</h2>
          </div>

          {/* Etsy Trust Badge */}
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-bc-border px-5 py-3 hover:border-bc-brown transition-colors self-start sm:self-auto"
          >
            <EtsyIcon />
            <div>
              <div className="text-[11px] text-bc-muted leading-none mb-1">Bewertet auf</div>
              <div className="font-bold text-sm leading-none">Etsy Shop</div>
            </div>
            <div className="border-l border-bc-border pl-3 text-center">
              <div className="text-bc-gold text-base leading-none">★★★★★</div>
              <div className="text-[11px] text-bc-muted mt-1 leading-none">5,0 / 5</div>
            </div>
          </a>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-bc-border p-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="text-bc-gold text-base">★★★★★</div>
                <span className="text-[10px] font-semibold text-bc-brown bg-bc-cream px-2 py-0.5 tracking-wide uppercase flex items-center gap-1">
                  <EtsyIcon small /> Etsy
                </span>
              </div>
              <p className="text-bc-muted text-sm leading-relaxed flex-1 mb-6">&ldquo;{r.text}&rdquo;</p>
              <div className="border-t border-bc-border pt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-bc-muted text-xs mt-0.5">{r.location}</div>
                </div>
                <div className="text-xs text-bc-muted">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-bc-border px-6 py-3 text-sm font-semibold text-bc-muted hover:border-bc-brown hover:text-bc-text transition-colors"
          >
            <EtsyIcon />
            Alle Bewertungen auf Etsy ansehen →
          </a>
        </div>

      </div>
    </section>
  );
}

function EtsyIcon({ small }: { small?: boolean }) {
  const size = small ? 14 : 18;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11.536 0C5.161 0 0 5.161 0 11.536c0 6.374 5.161 11.535 11.536 11.535 6.374 0 11.535-5.161 11.535-11.535C23.071 5.161 17.91 0 11.536 0zm4.08 16.93c-.93.155-3.099.31-4.7.31-1.6 0-3.614-.155-4.389-.31l-.155-.93c.62-.155 1.085-.465 1.085-1.24V8.592c0-.775-.465-1.085-1.085-1.24l.155-.93c.775-.155 2.789-.31 4.389-.31 1.601 0 3.77.155 4.7.31v2.014h-1.085c-.31-1.085-.62-1.24-2.014-1.24H9.832v3.1h2.014c.775 0 .93-.31 1.085-1.085h1.085v3.1h-1.085c-.155-.775-.31-1.085-1.085-1.085H9.832v3.1h2.634c1.394 0 1.704-.155 2.014-1.24h1.085l.051 2.044z"
        fill="#F1641E"
      />
    </svg>
  );
}
