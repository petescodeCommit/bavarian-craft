export const dynamic = "force-dynamic";

import { getAdminDb } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
  const db = getAdminDb();

  const [{ count: productCount }, { count: orderCount }, { data: revenue }, { data: recentOrders }] = await Promise.all([
    db.from("products").select("*", { count: "exact", head: true }).eq("active", true),
    db.from("orders").select("*", { count: "exact", head: true }),
    db.from("orders").select("total_amount").in("status", ["PAID", "SHIPPED", "DELIVERED"]),
    db.from("orders").select("*, order_items(*, products(*))").order("created_at", { ascending: false }).limit(5),
  ]);

  const totalRevenue = (revenue ?? []).reduce((sum, o) => sum + Number(o.total_amount), 0);

  const stats = [
    { label: "Aktive Produkte", value: productCount ?? 0, href: "/admin/produkte" },
    { label: "Bestellungen gesamt", value: orderCount ?? 0, href: "/admin/bestellungen" },
    { label: "Umsatz", value: `${totalRevenue.toFixed(2).replace(".", ",")} €`, href: "/admin/bestellungen" },
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
        {!recentOrders?.length ? (
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
              {recentOrders.map((o: any) => (
                <tr key={o.id}>
                  <td className="py-3 font-mono text-xs">#{o.order_number}</td>
                  <td className="py-3">{o.order_items?.[0]?.products?.name}</td>
                  <td className="py-3"><span className="bg-gray-100 px-2 py-0.5 text-xs">{o.status}</span></td>
                  <td className="py-3 text-right font-semibold">{Number(o.total_amount).toFixed(2).replace(".", ",")} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
