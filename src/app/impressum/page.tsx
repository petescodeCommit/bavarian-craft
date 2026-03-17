import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="prose-custom space-y-6 text-bc-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Bavarian Craft<br />
              {/* ⚠️ Hier deinen Namen, Adresse und Kontaktdaten eintragen */}
              [Vorname Nachname]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">Kontakt</h2>
            <p>
              E-Mail: [deine@email.de]<br />
              {/* Telefon optional: Tel.: +49 ... */}
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [USt-IdNr. eintragen oder Kleinunternehmerregelung § 19 UStG]
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">Verantwortlich für den Inhalt</h2>
            <p>[Vorname Nachname], [Adresse]</p>
          </div>

          <div className="border-t border-bc-border pt-6 text-xs text-bc-muted">
            <p className="font-semibold text-bc-brown">⚠️ Hinweis: Bitte dieses Impressum mit deinen echten Daten befüllen und rechtlich prüfen lassen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
