import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bc-brown-dark text-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-bc-gold font-bold tracking-[0.2em] uppercase text-lg mb-4">Bavarian Craft</div>
            <p className="text-sm leading-relaxed mb-5">
              Personalisierte Leder-Schlüsselanhänger für dein Fahrzeug – handgefertigt in Bayern.
            </p>
            <a
              href="https://www.etsy.com/de/shop/Bavariancraft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs border border-white/20 px-3 py-2 hover:border-bc-gold/50 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11.536 0C5.161 0 0 5.161 0 11.536c0 6.374 5.161 11.535 11.536 11.535 6.374 0 11.535-5.161 11.535-11.535C23.071 5.161 17.91 0 11.536 0zm4.08 16.93c-.93.155-3.099.31-4.7.31-1.6 0-3.614-.155-4.389-.31l-.155-.93c.62-.155 1.085-.465 1.085-1.24V8.592c0-.775-.465-1.085-1.085-1.24l.155-.93c.775-.155 2.789-.31 4.389-.31 1.601 0 3.77.155 4.7.31v2.014h-1.085c-.31-1.085-.62-1.24-2.014-1.24H9.832v3.1h2.014c.775 0 .93-.31 1.085-1.085h1.085v3.1h-1.085c-.155-.775-.31-1.085-1.085-1.085H9.832v3.1h2.634c1.394 0 1.704-.155 2.014-1.24h1.085l.051 2.044z" fill="#F1641E"/>
              </svg>
              Etsy Shop besuchen ★★★★★
            </a>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/produkte" className="hover:text-white transition-colors">Alle Produkte</Link></li>
              <li><Link href="/konfigurieren" className="hover:text-white transition-colors">Konfigurator</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Über uns</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über Bavarian Craft</Link></li>
              <li>
                <a href="https://www.etsy.com/de/shop/Bavariancraft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Etsy Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Bavarian Craft. Alle Rechte vorbehalten.</span>
          <span className="text-bc-gold/70 tracking-[0.2em] uppercase text-[10px]">Handmade in Bavaria</span>
        </div>
      </div>
    </footer>
  );
}
