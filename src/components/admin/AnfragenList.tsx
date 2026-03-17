"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Request {
  id: number;
  name: string;
  email: string;
  vehicle: string;
  design_wish: string;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

const statusConfig = {
  OPEN: { label: "Offen", color: "bg-yellow-100 text-yellow-800" },
  IN_PROGRESS: { label: "In Arbeit", color: "bg-blue-100 text-blue-800" },
  DONE: { label: "Erledigt", color: "bg-green-100 text-green-800" },
};

function AnfrageCard({ request }: { request: Request }) {
  const router = useRouter();
  const [status, setStatus] = useState(request.status);
  const [notes, setNotes] = useState(request.admin_notes ?? "");
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState(request.status === "OPEN");

  async function save() {
    setSaving(true);
    await fetch(`/api/anfragen/${request.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, adminNotes: notes }),
    });
    setSaving(false);
    router.refresh();
  }

  const cfg = statusConfig[status as keyof typeof statusConfig] ?? statusConfig.OPEN;

  return (
    <div className={`bg-white border ${status === "DONE" ? "border-gray-100 opacity-70" : "border-gray-200"}`}>
      {/* Header */}
      <div
        className="p-5 flex items-start justify-between cursor-pointer hover:bg-gray-50"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 ${cfg.color}`}>{cfg.label}</span>
            <span className="font-bold">{request.vehicle}</span>
            <span className="text-bc-muted text-sm">von {request.name || "Anonym"}</span>
          </div>
          <div className="text-bc-muted text-xs">{request.email} · {new Date(request.created_at).toLocaleDateString("de-DE")}</div>
        </div>
        <span className="text-bc-muted text-sm ml-4">{expanded ? "▲" : "▼"}</span>
      </div>

      {/* Details */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
          <div>
            <div className="text-xs font-semibold text-bc-muted tracking-wide mb-1">Designwunsch</div>
            <p className="text-sm leading-relaxed bg-bc-cream p-3">{request.design_wish}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Status ändern</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-200 px-3 py-2 text-sm focus:border-bc-brown focus:outline-none"
              >
                <option value="OPEN">Offen</option>
                <option value="IN_PROGRESS">In Arbeit</option>
                <option value="DONE">Erledigt</option>
              </select>
            </div>
            <div className="flex items-end gap-2">
              <a
                href={`mailto:${request.email}?subject=Deine Design-Anfrage: ${request.vehicle}&body=Hallo ${request.name},%0D%0A%0D%0Avielen Dank für deine Anfrage zu einem ${request.vehicle}-Schlüsselanhänger.%0D%0A%0D%0A`}
                className="flex-1 border border-bc-brown text-bc-brown px-4 py-2 text-sm font-semibold hover:bg-bc-brown hover:text-white transition-colors text-center"
              >
                E-Mail senden
              </a>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Interne Notizen</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Notizen zum Design, Preis, Status..."
              className="w-full border border-gray-200 px-3 py-2 text-sm focus:border-bc-brown focus:outline-none resize-none"
            />
          </div>

          <button
            onClick={save}
            disabled={saving}
            className="bg-bc-brown text-white px-6 py-2 text-sm font-semibold hover:bg-bc-brown-dark transition-colors disabled:opacity-50"
          >
            {saving ? "Speichern…" : "Speichern"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function AnfragenList({ requests }: { requests: Request[] }) {
  if (requests.length === 0) {
    return (
      <div className="bg-white border border-gray-200 p-10 text-center text-bc-muted">
        Noch keine Anfragen eingegangen.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {requests.map((r) => (
        <AnfrageCard key={r.id} request={r} />
      ))}
    </div>
  );
}
