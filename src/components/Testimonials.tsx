const reviews = [
  { name: "Markus R.", location: "München", vehicle: "BMW M3", text: "Einfach perfekt. Das Leder fühlt sich hochwertig an und die Prägung ist sehr sauber. Mein BMW-Schlüsselanhänger ist ein echter Hingucker." },
  { name: "Sandra K.", location: "Stuttgart", vehicle: "Porsche 911", text: "Schnelle Lieferung, schöne Verpackung. Der Vintage-Lederanhänger mit Porsche-Motiv ist genau das was ich gesucht habe." },
  { name: "Georg F.", location: "Straubing", vehicle: "Fendt Traktor", text: "Als Landwirt war ich skeptisch – aber die Qualität hat mich überzeugt. Der Traktor-Anhänger ist robust und sieht klasse aus!" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bc-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="label">Kundenstimmen</span>
          <h2 className="section-title mb-0">Was unsere Kunden sagen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-bc-border p-8">
              <div className="text-bc-gold text-lg mb-4">★★★★★</div>
              <p className="text-bc-muted text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
              <div className="border-t border-bc-border pt-5">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-bc-muted text-xs mt-0.5">{r.location} · {r.vehicle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
