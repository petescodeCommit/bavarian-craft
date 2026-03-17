import Link from "next/link";
import Image from "next/image";

const PRODUCT_IMG = "https://ripqjgdqxblyqdzkyigt.supabase.co/storage/v1/object/public/products/products/vw-kaefer.png";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh]">
      {/* Left – dark content */}
      <div className="bg-bc-brown-dark flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 md:py-0">
        <div className="max-w-lg">
          <span className="anim-up inline-block text-bc-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Handgefertigt in Bayern
          </span>
          <h1 className="anim-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">
            Leder-Schlüssel&shy;anhänger
            <br />
            <span className="text-bc-gold">für dein Fahrzeug</span>
          </h1>
          <p className="anim-up delay-200 text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Wähle dein Fahrzeug, personalisiere die Rückseite mit deinem Namen – und erhalte ein einzigartiges Lederstück aus Bayern.
          </p>
          <div className="anim-up delay-300 flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/konfigurieren" className="bg-bc-gold text-bc-brown-dark px-7 py-3.5 font-bold tracking-wide hover:bg-bc-gold-light transition-colors text-center text-sm">
              Fahrzeug wählen & gestalten
            </Link>
            <Link href="/produkte" className="border border-white/30 text-white/80 px-7 py-3.5 font-semibold tracking-wide hover:border-white hover:text-white transition-colors text-center text-sm">
              Alle Modelle ansehen
            </Link>
          </div>

          <div className="anim-up delay-400 flex flex-wrap gap-x-5 gap-y-2 text-white/50 text-xs mb-8">
            <span><span className="text-bc-gold mr-1.5">✓</span>Echtleder aus Bayern</span>
            <span><span className="text-bc-gold mr-1.5">✓</span>Versand ab 30 € frei</span>
            <span><span className="text-bc-gold mr-1.5">✓</span>2–4 Werktage</span>
          </div>

          <a
            href="https://www.etsy.com/de/shop/Bavariancraft"
            target="_blank"
            rel="noopener noreferrer"
            className="anim-up delay-500 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2.5 hover:border-bc-gold/50 hover:bg-white/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11.536 0C5.161 0 0 5.161 0 11.536c0 6.374 5.161 11.535 11.536 11.535 6.374 0 11.535-5.161 11.535-11.535C23.071 5.161 17.91 0 11.536 0zm4.08 16.93c-.93.155-3.099.31-4.7.31-1.6 0-3.614-.155-4.389-.31l-.155-.93c.62-.155 1.085-.465 1.085-1.24V8.592c0-.775-.465-1.085-1.085-1.24l.155-.93c.775-.155 2.789-.31 4.389-.31 1.601 0 3.77.155 4.7.31v2.014h-1.085c-.31-1.085-.62-1.24-2.014-1.24H9.832v3.1h2.014c.775 0 .93-.31 1.085-1.085h1.085v3.1h-1.085c-.155-.775-.31-1.085-1.085-1.085H9.832v3.1h2.634c1.394 0 1.704-.155 2.014-1.24h1.085l.051 2.044z" fill="#F1641E"/>
            </svg>
            <div className="text-xs">
              <div className="text-white/50 leading-none mb-0.5">Bewertet auf Etsy</div>
              <div className="flex items-center gap-1">
                <span className="text-bc-gold text-sm leading-none">★★★★★</span>
                <span className="font-bold text-white leading-none">5,0</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Right – product image */}
      <div className="bg-bc-cream relative flex items-center justify-center overflow-hidden min-h-[50vw] md:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bc-cream via-bc-cream-dark to-bc-cream opacity-60" />
        <div className="anim-right delay-200 relative z-10 w-[75%] max-w-sm aspect-square">
          <Image
            src={PRODUCT_IMG}
            alt="VW Käfer Leder-Schlüsselanhänger personalisiert – Bavarian Craft"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        {/* Decorative label */}
        <div className="absolute bottom-8 right-8 bg-bc-brown-dark text-white text-xs px-3 py-2 font-semibold tracking-wide z-10">
          Ab 14,99 €
        </div>
      </div>
    </section>
  );
}
