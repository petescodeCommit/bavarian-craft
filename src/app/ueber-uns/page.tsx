import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns – Bavarian Craft",
  description: "Bavarian Craft steht für handgefertigte Leder-Schlüsselanhänger aus Bayern. Erfahre mehr über unsere Geschichte und unser Handwerk.",
};

export default function UeberUnsPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="label">Über uns</span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Handwerk aus Bayern</h1>
          <p className="text-bc-muted text-lg leading-relaxed">
            Bavarian Craft steht für personalisierte Leder-Schlüsselanhänger, die täglich begeistern –
            weil jedes Stück ein Unikat ist.
          </p>
        </div>

        <div className="space-y-10 text-bc-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-bc-text mb-3">Unsere Geschichte</h2>
            <p>
              Was als Idee für ein persönliches Geschenk begann, ist heute ein kleines Manufaktur-Projekt aus Bayern.
              Wir wollten etwas schaffen, das nicht im nächsten Laden aus der Massenproduktion stammt –
              sondern wirklich etwas bedeutet. Ein Schlüsselanhänger, der dein Fahrzeug zeigt und deinen Namen trägt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-bc-text mb-3">Unser Handwerk</h2>
            <p>
              Jeder Anhänger wird von Hand gefertigt. Das Leder wird sorgfältig ausgewählt, zugeschnitten
              und mit Laser-Gravur versehen. Die Fahrzeug-Motive auf der Vorderseite und dein persönlicher
              Text auf der Rückseite – präzise, tief und dauerhaft.
            </p>
            <p className="mt-3">
              Wir verwenden pflanzlich gegerbtes Echtleder und hochwertiges Kunstleder – langlebig,
              angenehm in der Hand und mit der Zeit noch schöner durch natürliche Patina.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-bc-text mb-3">Warum Bavarian Craft?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                ["✦", "Handgefertigt", "Kein Fließband. Jedes Stück entsteht mit Sorgfalt."],
                ["✦", "Personalisiert", "Dein Name, dein Datum, dein Text auf der Rückseite."],
                ["✦", "Made in Bavaria", "Kurze Wege, lokales Handwerk, regionale Wertschöpfung."],
                ["✦", "Langlebig", "Qualität, die täglich genutzt wird – und mit der Zeit besser wird."],
              ].map(([icon, title, text]) => (
                <div key={title} className="bg-bc-cream p-4">
                  <div className="text-bc-gold font-bold mb-1">{icon} {title}</div>
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-bc-text mb-3">Kontakt</h2>
            <p>
              Fragen, Wünsche oder ein besonderes Anliegen?
              Schreib uns einfach – wir melden uns schnell.
            </p>
            <p className="mt-2">
              E-Mail: <a href="mailto:info@bavarian-craft.de" className="text-bc-brown hover:underline">info@bavarian-craft.de</a>
            </p>
          </div>
        </div>

        <div className="mt-12 bg-bc-cream-dark p-8 text-center">
          <h3 className="font-bold text-xl mb-2">Überzeuge dich selbst</h3>
          <p className="text-bc-muted text-sm mb-5">Gestalte deinen eigenen Anhänger in wenigen Minuten.</p>
          <Link href="/konfigurieren" className="bg-bc-brown text-white px-8 py-3 font-bold hover:bg-bc-brown-dark transition-colors inline-block">
            Jetzt gestalten
          </Link>
        </div>

      </div>
    </div>
  );
}
