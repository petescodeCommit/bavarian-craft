import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminProduktePage() {
  const products = await prisma.product.findMany({ orderBy: { id: "asc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Produkte</h1>
        <Link href="/admin/produkte/neu" className="bg-bc-brown text-white px-5 py-2.5 text-sm font-semibold hover:bg-bc-brown-dark transition-colors">
          + Neues Produkt
        </Link>
      </div>

      <div className="bg-white border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-bc-muted text-left">
              <th className="p-4 font-medium">Bild</th>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Material</th>
              <th className="p-4 font-medium">Preis</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="p-4">
                  {p.imageUrl ? (
                    <img src={p.imageUrl} alt={p.name} className="w-12 h-12 object-cover" />
                  ) : (
                    <div className="w-12 h-12 bg-bc-cream flex items-center justify-center text-2xl">{p.emoji}</div>
                  )}
                </td>
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-bc-muted">{p.material}</td>
                <td className="p-4 font-semibold">{Number(p.price).toFixed(2).replace(".", ",")} €</td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 text-xs font-semibold ${p.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {p.active ? "Aktiv" : "Inaktiv"}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link href={`/admin/produkte/${p.id}`} className="text-bc-brown hover:underline text-sm">Bearbeiten</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
