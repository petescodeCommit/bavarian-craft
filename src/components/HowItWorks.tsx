const steps = [
  { step: "01", title: "Fahrzeug eingeben", description: "Gib dein Fahrzeug ein – z.B. BMW, Porsche, Harley-Davidson oder Traktor. Das passende Design erscheint automatisch." },
  { step: "02", title: "Rückseite personalisieren", description: "Gib deinen Namen, ein Datum oder einen Wunschtext für die Rückseite ein." },
  { step: "03", title: "Vorschau & Bestellen", description: "Sieh Vorder- und Rückseite in der Live-Vorschau und bestelle sicher online." },
  { step: "04", title: "Lieferung nach Hause", description: "Wir fertigen deinen Lederanhänger von Hand und liefern ihn in 2–4 Werktagen." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bc-brown-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-bc-gold text-xs font-semibold tracking-widest uppercase mb-3 block">Prozess</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">So funktioniert&apos;s</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, i) => (
            <div key={i}>
              <div className="text-bc-gold text-4xl font-bold mb-4">{item.step}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
