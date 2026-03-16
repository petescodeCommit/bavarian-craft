import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-bavarian-blue to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            🇩🇪 Handgefertigt in Bayern
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Schlüsselanhänger,{" "}
            <span className="text-yellow-300">so einzigartig</span> wie du
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Gestalte deinen persönlichen Schlüsselanhänger mit eigenem Text,
            Namen oder Datum. Perfekt als Geschenk oder für dich selbst –
            handgefertigt mit bayerischem Qualitätsanspruch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/konfigurieren"
              className="bg-yellow-400 text-bavarian-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
            >
              Jetzt personalisieren
            </Link>
            <Link
              href="/produkte"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
            >
              Produkte ansehen
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span> Kostenloser Versand ab 30€
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> 2–4 Werktage Lieferzeit
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> 100% Zufriedenheitsgarantie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
