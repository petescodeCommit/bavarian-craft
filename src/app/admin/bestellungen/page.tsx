import { prisma } from "@/lib/prisma";

const statusLabel: Record<string, string> = {
  PENDING: "Ausstehend", PAID: "Bezahlt", PROCESSING: "In Bearbeitung",
  SHIPPED: "Versendet", DELIVERED: "Geliefert", CANCELLED: "Storniert",
};
const statusColor: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-800", PAID: "bg-blue-100 text-blue-800",
  PROCESSING: "bg-orange-100 text-orange-800", SHIPPED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-100 text-green-800", CANCELLED: "bg-red-100 text-red-800",
};

export default async function AdminBestellungenPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { orderItems: { include: { product: true } } },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Bestellungen ({orders.length})</h1>
      <div className="bg-white border border-gray-200">
        {orders.length === 0 ? (
          <div className="p-10 text-center text-bc-muted">Noch keine Bestellungen.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-bc-muted text-left">
                <th className="p-4 font-medium">Nummer</th>
                <th className="p-4 font-medium">Datum</th>
                <th className="p-4 font-medium">Produkte</th>
                <th className="p-4 font-medium">Lieferadresse</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Betrag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="p-4 font-mono text-xs">#{o.orderNumber}</td>
                  <td className="p-4 text-bc-muted">{new Date(o.createdAt).toLocaleDateString("de-DE")}</td>
                  <td className="p-4">
                    {o.orderItems.map((item, i) => (
                      <div key={i} className="text-xs">
                        {item.product.name} · {item.vehicle} · <span className="text-bc-muted">{item.backLine1}</span>
                      </div>
                    ))}
                  </td>
                  <td className="p-4 text-xs text-bc-muted">
                    {o.shippingName}<br />{o.shippingZip} {o.shippingCity}
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${statusColor[o.status]}`}>
                      {statusLabel[o.status]}
                    </span>
                  </td>
                  <td className="p-4 text-right font-bold">{Number(o.totalAmount).toFixed(2).replace(".", ",")} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
