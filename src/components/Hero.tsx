import Link from "next/link";
import Image from "next/image";

const PRODUCT_IMG =
  "https://ripqjgdqxblyqdzkyigt.supabase.co/storage/v1/object/public/products/products/vw-kaefer.png";

export default function Hero() {
  return (
    <section className="relative bg-bc-brown-dark overflow-hidden min-h-[92vh] flex items-center">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-bc-brown/20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-bc-brown-light/10 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-white/5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* Left – text */}
          <div className="lg:pr-12">
            <span className="anim-up inline-flex items-center gap-2 text-bc-gold text-xs font-semibold tracking-[0.22em] uppercase mb-8">
              <span className="w-8 h-px bg-bc-gold/60" />
              Handgefertigt in Bayern
            </span>

            <h1 className="anim-up delay-100 text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight text-white leading-[1.04] mb-6">
              Leder-Schlüssel&shy;anhänger
              <span className="block text-bc-gold mt-1">für dein Fahrzeug.</span>
            </h1>

            <p className="anim-up delay-200 text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Wähle dein Fahrzeug, personalisiere die Rückseite mit deinem Namen –
              und erhalte ein einzigartiges Lederstück aus Bayern.
            </p>

            <div className="anim-up delay-300 flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="/konfigurieren"
                className="bg-bc-gold text-bc-brown-dark px-8 py-4 font-bold tracking-wide hover:bg-bc-gold-light transition-colors text-center text-sm"
              >
                Fahrzeug wählen & gestalten
              </Link>
              <Link
                href="/produkte"
                className="border border-white/25 text-white/75 px-8 py-4 font-semibold tracking-wide hover:border-bc-gold/60 hover:text-white transition-colors text-center text-sm"
              >
                Alle Modelle ansehen
              </Link>
            </div>

            <div className="anim-up delay-400 flex flex-wrap gap-x-6 gap-y-2 text-white/40 text-xs mb-8">
              <span><span className="text-bc-gold mr-1.5">✓</span>Echtleder aus Bayern</span>
              <span><span className="text-bc-gold mr-1.5">✓</span>Versand ab 30 € frei</span>
              <span><span className="text-bc-gold mr-1.5">✓</span>2–4 Werktage</span>
            </div>

            <a
              href="https://www.etsy.com/de/shop/Bavariancraft"
              target="_blank"
              rel="noopener noreferrer"
              className="anim-up delay-500 inline-flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-3 hover:border-bc-gold/40 hover:bg-white/8 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11.536 0C5.161 0 0 5.161 0 11.536c0 6.374 5.161 11.535 11.536 11.535 6.374 0 11.535-5.161 11.535-11.535C23.071 5.161 17.91 0 11.536 0zm4.08 16.93c-.93.155-3.099.31-4.7.31-1.6 0-3.614-.155-4.389-.31l-.155-.93c.62-.155 1.085-.465 1.085-1.24V8.592c0-.775-.465-1.085-1.085-1.24l.155-.93c.775-.155 2.789-.31 4.389-.31 1.601 0 3.77.155 4.7.31v2.014h-1.085c-.31-1.085-.62-1.24-2.014-1.24H9.832v3.1h2.014c.775 0 .93-.31 1.085-1.085h1.085v3.1h-1.085c-.155-.775-.31-1.085-1.085-1.085H9.832v3.1h2.634c1.394 0 1.704-.155 2.014-1.24h1.085l.051 2.044z" fill="#F1641E" />
              </svg>
              <div className="text-xs">
                <div className="text-white/45 leading-none mb-0.5">Bewertet auf Etsy</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-bc-gold leading-none">★★★★★</span>
                  <span className="font-bold text-white/90 leading-none">5,0</span>
                </div>
              </div>
            </a>
          </div>

          {/* Right – product showcase */}
          <div className="anim-right delay-200 flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing circle bg */}
              <div className="absolute inset-0 rounded-full bg-bc-brown/40 blur-3xl scale-110" />

              {/* Product image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
                <Image
                  src={PRODUCT_IMG}
                  alt="VW Käfer Leder-Schlüsselanhänger personalisiert – Bavarian Craft"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Price tag */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-bc-gold text-bc-brown-dark text-xs font-bold px-4 py-2.5 tracking-wide shadow-lg">
                Ab 14,99 €
              </div>

              {/* Personalized badge */}
              <div className="absolute -top-2 -left-2 sm:top-4 sm:left-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold px-3 py-2 tracking-widest uppercase">
                Personalisierbar
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bc-brown-dark/50 to-transparent pointer-events-none" />
    </section>
  );
}
