import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bavarian-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚓</span>
              <span className="text-xl font-bold font-serif text-white">
                Bavarian Craft
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Personalisierte Schlüsselanhänger – handgefertigt in Bayern mit
              Liebe zum Detail.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produkte" className="hover:text-white transition-colors">
                  Alle Produkte
                </Link>
              </li>
              <li>
                <Link href="/konfigurieren" className="hover:text-white transition-colors">
                  Personalisieren
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bavarian Craft. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
