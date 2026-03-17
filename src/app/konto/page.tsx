import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mein Konto" };

export default async function KontoPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { orderItems: { include: { product: true } } },
    orderBy: { createdAt: "desc" },
  });

  const statusLabel: Record<string, string> = {
    PENDING: "Ausstehend", PAID: "Bezahlt", PROCESSING: "In Bearbeitung",
    SHIPPED: "Versendet", DELIVERED: "Geliefert", CANCELLED: "Storniert",
  };
  const statusColor: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-800", PAID: "bg-blue-100 text-blue-800",
    PROCESSING: "bg-orange-100 text-orange-800", SHIPPED: "bg-purple-100 text-purple-800",
    DELIVERED: "bg-green-100 text-green-800", CANCELLED: "bg-red-100 text-red-800",
  };

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="label">Mein Konto</span>
          <h1 className="text-3xl font-bold">Willkommen, {user.user_metadata?.first_name ?? user.email}</h1>
        </div>
        <form action="/auth/logout" method="POST">
          <button className="border border-bc-border text-bc-muted px-4 py-2 text-sm hover:border-bc-brown hover:text-bc-text transition-colors">
            Abmelden
          </button>
        </form>
      </div>

      <div className="bg-white border border-bc-border p-6 mb-6">
        <h2 className="font-bold text-lg mb-1">Kontodaten</h2>
        <p className="text-bc-muted text-sm">{user.email}</p>
      </div>

      <div>
        <h2 className="font-bold text-xl mb-5">Bestellungen</h2>
        {orders.length === 0 ? (
          <div className="bg-white border border-bc-border p-10 text-center text-bc-muted">
            Du hast noch keine Bestellungen.
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border border-bc-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-bold">Bestellung #{order.orderNumber}</div>
                    <div className="text-bc-muted text-sm">{new Date(order.createdAt).toLocaleDateString("de-DE")}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[order.status]}`}>
                      {statusLabel[order.status]}
                    </span>
                    <span className="font-bold text-lg">{Number(order.totalAmount).toFixed(2).replace(".", ",")} €</span>
                  </div>
                </div>
                <div className="space-y-2 border-t border-bc-border pt-4">
                  {order.orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-bc-muted">{item.product.name} · {item.vehicle} · {item.backLine1}</span>
                      <span>{Number(item.price).toFixed(2).replace(".", ",")} €</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
