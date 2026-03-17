import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-bc-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl">
          <span className="label">Handgefertigt in Bayern</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.08]">
            Leder-Schlüsselanhänger<br />
            <span className="text-bc-brown">für dein Fahrzeug</span>
          </h1>
          <p className="text-bc-muted text-lg mb-10 leading-relaxed max-w-lg">
            Wähle dein Fahrzeug, personalisiere die Rückseite mit deinem Namen
            oder Text – und erhalte ein einzigartiges Lederstück aus Bayern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/konfigurieren" className="bg-bc-brown text-white px-8 py-4 font-bold tracking-wide hover:bg-bc-brown-dark transition-colors text-center">
              Fahrzeug wählen & gestalten
            </Link>
            <Link href="/produkte" className="border border-bc-border text-bc-muted px-8 py-4 font-semibold tracking-wide hover:border-bc-brown hover:text-bc-text transition-colors text-center">
              Alle Modelle ansehen
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 mt-14 text-bc-muted text-sm">
            <span><span className="text-bc-gold mr-2">✓</span>Echtleder aus Bayern</span>
            <span><span className="text-bc-gold mr-2">✓</span>Kostenloser Versand ab 30€</span>
            <span><span className="text-bc-gold mr-2">✓</span>2–4 Werktage Lieferzeit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
