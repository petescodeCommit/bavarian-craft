import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  const [productCount, orderCount, revenue] = await Promise.all([
    prisma.product.count({ where: { active: true } }),
    prisma.order.count(),
    prisma.order.aggregate({ _sum: { totalAmount: true }, where: { status: { in: ["PAID", "SHIPPED", "DELIVERED"] } } }),
  ]);

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: { orderItems: { include: { product: true } } },
  });

  const stats = [
    { label: "Aktive Produkte", value: productCount, href: "/admin/produkte" },
    { label: "Bestellungen gesamt", value: orderCount, href: "/admin/bestellungen" },
    { label: "Umsatz", value: `${Number(revenue._sum.totalAmount ?? 0).toFixed(2).replace(".", ",")} €`, href: "/admin/bestellungen" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="bg-white border border-gray-200 p-6 hover:border-bc-brown transition-colors">
            <div className="text-bc-muted text-sm mb-1">{s.label}</div>
            <div className="text-3xl font-bold">{s.value}</div>
          </Link>
        ))}
      </div>

      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-lg">Letzte Bestellungen</h2>
          <Link href="/admin/bestellungen" className="text-sm text-bc-brown hover:underline">Alle ansehen</Link>
        </div>
        {recentOrders.length === 0 ? (
          <p className="text-bc-muted text-sm">Noch keine Bestellungen.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-bc-muted text-left">
                <th className="pb-3 font-medium">Nummer</th>
                <th className="pb-3 font-medium">Produkt</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Betrag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td className="py-3 font-mono text-xs">#{o.orderNumber}</td>
                  <td className="py-3">{o.orderItems[0]?.product.name}</td>
                  <td className="py-3"><span className="bg-gray-100 px-2 py-0.5 text-xs">{o.status}</span></td>
                  <td className="py-3 text-right font-semibold">{Number(o.totalAmount).toFixed(2).replace(".", ",")} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
