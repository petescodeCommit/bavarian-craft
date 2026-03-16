import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bavarian Craft – Personalisierte Schlüsselanhänger",
    template: "%s | Bavarian Craft",
  },
  description:
    "Individuelle Schlüsselanhänger aus Bayern – handgefertigt, personalisiert mit deinem Namen oder Wunschtext. Perfektes Geschenk mit bayerischem Charme.",
  keywords: [
    "Schlüsselanhänger",
    "personalisiert",
    "individuell",
    "Bayern",
    "Geschenk",
    "Gravur",
    "handgefertigt",
  ],
  authors: [{ name: "Bavarian Craft" }],
  creator: "Bavarian Craft",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://bavarian-craft.de",
    siteName: "Bavarian Craft",
    title: "Bavarian Craft – Personalisierte Schlüsselanhänger",
    description:
      "Individuelle Schlüsselanhänger aus Bayern – handgefertigt und personalisiert.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
