import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bavarian Craft – Personalisierte Schlüsselanhänger aus Bayern",
  description:
    "Gestalte deinen einzigartigen Schlüsselanhänger mit persönlichem Text oder Namen. Handgefertigt in Bayern, schnell geliefert. Jetzt konfigurieren!",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
