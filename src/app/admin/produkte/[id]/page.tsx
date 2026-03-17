import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";

export default async function ProduktBearbeitenPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id: Number(id) } });
  if (!product) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Produkt bearbeiten</h1>
      <ProductForm product={{
        ...product,
        price: Number(product.price),
        tag: product.tag ?? "",
        emoji: product.emoji ?? "",
        imageUrl: product.imageUrl ?? "",
      }} />
    </div>
  );
}
