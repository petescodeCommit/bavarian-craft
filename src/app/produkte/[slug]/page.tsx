export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAdminDb } from "@/lib/db";
import ProductDetail from "@/components/ProductDetail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const db = getAdminDb();
  const { data: product } = await db.from("products").select("*").eq("slug", slug).single();
  if (!product) return {};
  return {
    title: product.name + " | Handgefertigt in Bayern – Bavarian Craft",
    description: product.description.slice(0, 155),
  };
}

export default async function ProduktDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = getAdminDb();
  const { data: product } = await db.from("products").select("*").eq("slug", slug).single();
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
