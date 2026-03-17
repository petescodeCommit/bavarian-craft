import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bc-brown-dark text-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-bc-gold font-bold tracking-widest uppercase text-lg mb-4">Bavarian Craft</div>
            <p className="text-sm leading-relaxed">
              Personalisierte Leder-Schlüsselanhänger für dein Fahrzeug – handgefertigt in Bayern.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/produkte" className="hover:text-white transition-colors">Alle Produkte</Link></li>
              <li><Link href="/konfigurieren" className="hover:text-white transition-colors">Konfigurator</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} Bavarian Craft. Alle Rechte vorbehalten.</span>
          <span className="text-bc-gold tracking-widest uppercase">Made in Bavaria</span>
        </div>
      </div>
    </footer>
  );
}
