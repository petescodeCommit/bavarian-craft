import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen",
  robots: { index: false },
};

export default function AgbPage() {
  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="space-y-8 text-bc-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 1 Geltungsbereich</h2>
            <p>Diese AGB gelten für alle Verträge zwischen Bavarian Craft ([Name, Adresse]) und Kunden über den Onlineshop bavarian-craft.de.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 2 Vertragsschluss</h2>
            <p>Die Präsentation der Produkte im Shop stellt kein rechtlich bindendes Angebot dar. Mit dem Absenden der Bestellung gibst du ein verbindliches Angebot ab. Der Vertrag kommt durch unsere Auftragsbestätigung per E-Mail zustande.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 3 Preise und Zahlung</h2>
            <p>Alle Preise sind Endpreise in Euro inkl. der gesetzlichen Mehrwertsteuer. Versandkosten werden separat ausgewiesen. Die Zahlung erfolgt per [Zahlungsmethoden ergänzen].</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 4 Lieferung</h2>
            <p>Die Lieferzeit beträgt 2–4 Werktage nach Zahlungseingang. Kostenloser Versand ab einem Bestellwert von 30 €.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 5 Widerrufsrecht</h2>
            <p>
              Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.<br /><br />
              <strong>Ausnahme:</strong> Personalisierte Produkte (mit individuellem Rückseitentext) sind vom Widerrufsrecht ausgenommen, sofern die Personalisierung bereits ausgeführt wurde (§ 312g Abs. 2 Nr. 1 BGB).
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 6 Gewährleistung</h2>
            <p>Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln wende dich an [deine@email.de].</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">§ 7 Streitbeilegung</h2>
            <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-bc-brown hover:underline" target="_blank" rel="noopener">ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet, an einem Streitbeilegungsverfahren teilzunehmen.</p>
          </div>

          <div className="border-t border-bc-border pt-6 text-xs text-bc-muted">
            <p className="font-semibold text-bc-brown">⚠️ Hinweis: Diese AGB sind ein Muster und müssen von einem Rechtsanwalt geprüft und vervollständigt werden.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
