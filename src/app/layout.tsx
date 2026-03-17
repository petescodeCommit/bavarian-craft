import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";

export const metadata: Metadata = {
  title: {
    default: "Bavarian Craft – Personalisierte Leder-Schlüsselanhänger für dein Fahrzeug",
    template: "%s | Bavarian Craft",
  },
  description:
    "Individuelle Leder-Schlüsselanhänger mit Fahrzeug-Motiv – BMW, Porsche, Harley-Davidson, Fendt und mehr. Rückseite personalisiert mit deinem Namen. Handgefertigt in Bayern.",
  keywords: [
    "Leder Schlüsselanhänger personalisiert",
    "Schlüsselanhänger Fahrzeug",
    "BMW Schlüsselanhänger Leder",
    "Porsche Schlüsselanhänger",
    "Harley Davidson Schlüsselanhänger",
    "Traktor Schlüsselanhänger",
    "Gravur Schlüsselanhänger Bayern",
    "Geschenk Autofahrer",
  ],
  authors: [{ name: "Bavarian Craft" }],
  creator: "Bavarian Craft",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://bavarian-craft.vercel.app",
    siteName: "Bavarian Craft",
    title: "Bavarian Craft – Leder-Schlüsselanhänger für dein Fahrzeug",
    description:
      "Individuelle Leder-Schlüsselanhänger mit Fahrzeug-Motiv, handgefertigt in Bayern. Jetzt personalisieren.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://bavarian-craft.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bavarian Craft",
              url: "https://bavarian-craft.vercel.app",
              description: "Handgefertigte Leder-Schlüsselanhänger mit Fahrzeug-Motiv aus Bayern",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
                addressRegion: "Bayern",
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
