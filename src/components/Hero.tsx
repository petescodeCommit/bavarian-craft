import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-bavarian-black text-white min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-bavarian-copper text-bavarian-copper text-xs font-semibold tracking-widest uppercase px-4 py-2 mb-10">
            Handgefertigt in Bayern
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
            Einzigartig.<br />
            <span className="text-bavarian-copper">Personalisiert.</span><br />
            Handgefertigt.
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
            Schlüsselanhänger mit deinem Text, deinem Namen, deinem Moment.
            Gefertigt mit bayerischem Qualitätsanspruch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/konfigurieren"
              className="bg-bavarian-copper text-white px-8 py-4 font-bold tracking-wide hover:bg-bavarian-copper-light transition-colors text-center"
            >
              Jetzt personalisieren
            </Link>
            <Link
              href="/produkte"
              className="border border-gray-600 text-gray-300 px-8 py-4 font-semibold tracking-wide hover:border-white hover:text-white transition-colors text-center"
            >
              Produkte ansehen
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 mt-16 text-gray-500 text-sm tracking-wide">
            <div className="flex items-center gap-2">
              <span className="text-bavarian-copper">—</span> Kostenloser Versand ab 30€
            </div>
            <div className="flex items-center gap-2">
              <span className="text-bavarian-copper">—</span> 2–4 Werktage Lieferzeit
            </div>
            <div className="flex items-center gap-2">
              <span className="text-bavarian-copper">—</span> 100% Zufriedenheitsgarantie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
