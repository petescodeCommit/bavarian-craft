import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-bc-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="label">Handgefertigt in Bayern</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.08]">
            Leder-Schlüssel&shy;anhänger
            <br />
            <span className="text-bc-brown">für dein Fahrzeug</span>
          </h1>
          <p className="text-bc-muted text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
            Wähle dein Fahrzeug, personalisiere die Rückseite mit deinem Namen
            oder Text – und erhalte ein einzigartiges Lederstück aus Bayern.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/konfigurieren" className="bg-bc-brown text-white px-7 py-3.5 font-bold tracking-wide hover:bg-bc-brown-dark transition-colors text-center text-sm sm:text-base">
              Fahrzeug wählen & gestalten
            </Link>
            <Link href="/produkte" className="border border-bc-border text-bc-muted px-7 py-3.5 font-semibold tracking-wide hover:border-bc-brown hover:text-bc-text transition-colors text-center text-sm sm:text-base">
              Alle Modelle ansehen
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-bc-muted text-xs sm:text-sm">
            <span><span className="text-bc-gold mr-1.5">✓</span>Echtleder aus Bayern</span>
            <span><span className="text-bc-gold mr-1.5">✓</span>Versand ab 30 € kostenlos</span>
            <span><span className="text-bc-gold mr-1.5">✓</span>2–4 Werktage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
