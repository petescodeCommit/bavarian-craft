import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-bc-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der DSGVO ist:<br />
              Bavarian Craft, [Name, Adresse] – siehe Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Dienstleistungen erforderlich ist. Dazu gehören:
            </p>
            <ul className="list-disc ml-4 mt-2 space-y-1">
              <li>Name und E-Mail-Adresse bei Registrierung oder Bestellung</li>
              <li>Lieferadresse bei Bestellungen</li>
              <li>Technische Daten (IP-Adresse, Browser) beim Besuch der Website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">3. Zweck der Datenverarbeitung</h2>
            <p>Deine Daten werden ausschließlich zur Bestellabwicklung, Kundenbetreuung und zur Bereitstellung des Onlineshops verwendet.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">4. Weitergabe an Dritte</h2>
            <p>Deine Daten werden nicht ohne deine ausdrückliche Zustimmung an Dritte weitergegeben, außer soweit dies zur Vertragserfüllung notwendig ist (z.B. Versanddienstleister).</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">5. Hosting & Dienste</h2>
            <p>Diese Website wird über <strong>Vercel Inc.</strong> gehostet. Die Datenbank wird von <strong>Supabase</strong> betrieben. Beide Anbieter verarbeiten Daten nach DSGVO-konformen Datenschutzvereinbarungen.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">6. Cookies</h2>
            <p>Wir verwenden technisch notwendige Cookies für die Authentifizierung und den Warenkorb (localStorage). Es werden keine Tracking-Cookies eingesetzt.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">7. Deine Rechte</h2>
            <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten sowie das Recht auf Datenübertragbarkeit. Wende dich dazu an: [deine@email.de]</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-bc-text mb-2">8. Beschwerderecht</h2>
            <p>Du hast das Recht, dich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.</p>
          </div>

          <div className="border-t border-bc-border pt-6 text-xs text-bc-muted">
            <p className="font-semibold text-bc-brown">⚠️ Hinweis: Diese Datenschutzerklärung ist ein Muster und muss von einem Rechtsanwalt geprüft und auf deine tatsächliche Situation angepasst werden.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
