import type { Metadata } from "next";
import Image from "next/image";
import Configurator from "@/components/Configurator";
import CustomRequestForm from "@/components/CustomRequestForm";

export const metadata: Metadata = {
  title: "Schlüsselanhänger personalisieren",
  description:
    "Gestalte deinen individuellen Leder-Schlüsselanhänger mit Fahrzeug-Motiv. Echtzeit-Vorschau inklusive. Fahrzeug nicht dabei? Einfach anfragen!",
};

export default function KonfigurierenPage() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="label">Konfigurator</span>
          <h1 className="section-title">Deinen Anhänger gestalten</h1>
          <p className="text-bc-muted text-lg">
            Wähle dein Fahrzeug, personalisiere die Rückseite und sieh das Ergebnis live.
          </p>
          <div className="mt-8 max-w-3xl mx-auto overflow-hidden rounded-sm">
            <Image
              src="/images/banner-konfigurator.png"
              alt="Bavarian Craft Konfigurator – Schlüsselanhänger personalisieren"
              width={900}
              height={300}
              className="w-full object-cover"
            />
          </div>
        </div>
        <Configurator />
        <CustomRequestForm />
      </div>
    </div>
  );
}
