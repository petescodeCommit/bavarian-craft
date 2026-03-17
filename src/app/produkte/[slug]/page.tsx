export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAdminDb } from "@/lib/db";
import ProductDetail from "@/components/ProductDetail";

const BASE = "https://bavarian-craft.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const db = getAdminDb();
  const { data: product } = await db.from("products").select("*").eq("slug", slug).single();
  if (!product) return {};

  const description = product.description.replace(/\n+/g, " ").slice(0, 155);
  const url = `${BASE}/produkte/${slug}`;

  return {
    title: product.name,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.name} | Bavarian Craft`,
      description,
      images: product.imageUrl ? [{ url: product.imageUrl, alt: product.name }] : [],
    },
  };
}

export default async function ProduktDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = getAdminDb();
  const { data: product } = await db.from("products").select("*").eq("slug", slug).single();
  if (!product) notFound();

  const url = `${BASE}/produkte/${slug}`;
  const description = product.description.replace(/\n+/g, " ").slice(0, 155);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description,
    image: product.imageUrl ?? undefined,
    url,
    brand: { "@type": "Brand", name: "Bavarian Craft" },
    material: product.material,
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url,
      seller: { "@type": "Organization", name: "Bavarian Craft" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
