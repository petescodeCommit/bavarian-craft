export const dynamic = "force-dynamic";

import { getAdminDb } from "@/lib/db";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";

export default async function ProduktBearbeitenPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getAdminDb();
  const { data: product } = await db.from("products").select("*").eq("id", Number(id)).single();
  if (!product) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Produkt bearbeiten</h1>
      <ProductForm product={{
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: Number(product.price),
        material: product.material,
        size: product.size,
        tag: product.tag ?? "",
        emoji: product.emoji ?? "",
        imageUrl: product.imageUrl ?? "",
        sizes: product.sizes ?? "",
        colors: product.colors ?? "",
        active: product.active,
      }} />
    </div>
  );
}
