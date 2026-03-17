export const dynamic = "force-dynamic";

import { getAdminDb } from "@/lib/db";
import AnfragenList from "@/components/admin/AnfragenList";

export default async function AdminAnfragenPage() {
  const db = getAdminDb();
  const { data: requests = [] } = await db
    .from("custom_requests")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Design-Anfragen ({requests?.length ?? 0})</h1>
        <div className="flex gap-2 text-xs">
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 font-semibold">Offen: {requests?.filter((r) => r.status === "OPEN").length ?? 0}</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 font-semibold">In Arbeit: {requests?.filter((r) => r.status === "IN_PROGRESS").length ?? 0}</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 font-semibold">Erledigt: {requests?.filter((r) => r.status === "DONE").length ?? 0}</span>
        </div>
      </div>
      <AnfragenList requests={requests ?? []} />
    </div>
  );
}
