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

          <a
            href="https://www.etsy.com/de/shop/Bavariancraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-bc-border px-4 py-2.5 mt-6 hover:border-bc-brown transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11.536 0C5.161 0 0 5.161 0 11.536c0 6.374 5.161 11.535 11.536 11.535 6.374 0 11.535-5.161 11.535-11.535C23.071 5.161 17.91 0 11.536 0zm4.08 16.93c-.93.155-3.099.31-4.7.31-1.6 0-3.614-.155-4.389-.31l-.155-.93c.62-.155 1.085-.465 1.085-1.24V8.592c0-.775-.465-1.085-1.085-1.24l.155-.93c.775-.155 2.789-.31 4.389-.31 1.601 0 3.77.155 4.7.31v2.014h-1.085c-.31-1.085-.62-1.24-2.014-1.24H9.832v3.1h2.014c.775 0 .93-.31 1.085-1.085h1.085v3.1h-1.085c-.155-.775-.31-1.085-1.085-1.085H9.832v3.1h2.634c1.394 0 1.704-.155 2.014-1.24h1.085l.051 2.044z" fill="#F1641E" />
            </svg>
            <div className="text-xs">
              <div className="text-bc-muted leading-none mb-0.5">Bewertet auf Etsy</div>
              <div className="flex items-center gap-1">
                <span className="text-bc-gold text-sm leading-none">★★★★★</span>
                <span className="font-bold text-bc-text leading-none">5,0</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
