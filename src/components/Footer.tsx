import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bavarian-black text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-bavarian-copper font-bold tracking-widest uppercase text-lg mb-4">
              Bavarian Craft
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Personalisierte Schlüsselanhänger – handgefertigt in Bayern mit
              Liebe zum Detail.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/produkte" className="hover:text-white transition-colors">Alle Produkte</Link></li>
              <li><Link href="/konfigurieren" className="hover:text-white transition-colors">Personalisieren</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Bavarian Craft. Alle Rechte vorbehalten.</span>
          <span className="text-bavarian-copper tracking-widest uppercase text-xs">Made in Bavaria</span>
        </div>
      </div>
    </footer>
  );
}
