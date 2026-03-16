import type { Metadata } from "next";
import Configurator from "@/components/Configurator";

export const metadata: Metadata = {
  title: "Schlüsselanhänger personalisieren",
  description:
    "Gestalte deinen individuellen Schlüsselanhänger mit eigenem Text oder Namen. Echtzeit-Vorschau inklusive. Jetzt konfigurieren!",
};

export default function KonfigurierenPage() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="section-title">Deinen Anhänger gestalten</h1>
          <p className="text-gray-500 text-lg">
            Wähle dein Modell, gib deinen Text ein und sieh das Ergebnis live.
          </p>
        </div>
        <Configurator />
      </div>
    </div>
  );
}
