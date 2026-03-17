"use client";

import { useState } from "react";

export default function CustomRequestForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", vehicle: "", designWish: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/anfragen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", vehicle: "", designWish: "" });
    } else {
      const data = await res.json();
      setError(data.error ?? "Fehler beim Senden.");
    }
  }

  if (!open) {
    return (
      <div className="mt-10 border-t border-bc-border pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Fahrzeug nicht dabei?</h3>
            <p className="text-bc-muted text-sm mt-1">
              Kein Problem – schreib uns deinen Wunsch, wir setzen es um.
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="border border-bc-brown text-bc-brown px-5 py-2.5 text-sm font-semibold hover:bg-bc-brown hover:text-white transition-colors whitespace-nowrap ml-4"
          >
            Wunsch anfragen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 border-t border-bc-border pt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-lg">Wunsch-Design anfragen</h3>
          <p className="text-bc-muted text-sm mt-1">
            Beschreibe dein Fahrzeug und deinen Designwunsch – wir melden uns.
          </p>
        </div>
        <button onClick={() => setOpen(false)} className="text-bc-muted hover:text-bc-text text-sm">✕ Schließen</button>
      </div>

      {success ? (
        <div className="bg-green-50 border border-green-200 p-6 text-center">
          <div className="text-3xl mb-3">✓</div>
          <div className="font-bold text-green-800 mb-1">Anfrage erhalten!</div>
          <p className="text-green-700 text-sm">
            Wir melden uns so schnell wie möglich bei dir unter <strong>{form.email || "deiner E-Mail"}</strong>.
          </p>
          <button
            onClick={() => { setSuccess(false); setOpen(false); }}
            className="mt-4 text-sm text-green-700 hover:underline"
          >
            Weitere Anfrage stellen
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Dein Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Max Mustermann"
                className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">E-Mail *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="deine@email.de"
                className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Fahrzeug / Marke *</label>
            <input
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              required
              placeholder="z.B. Lamborghini Urus, Kawasaki Ninja, Unimog..."
              className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Designwunsch *</label>
            <textarea
              name="designWish"
              value={form.designWish}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Beschreibe wie du dir das Design vorstellst – Farben, Symbole, Stil, Gravurtext auf der Rückseite..."
              className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors text-sm resize-none"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-bc-brown text-white px-8 py-3 font-bold tracking-wide hover:bg-bc-brown-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Wird gesendet…" : "Anfrage senden"}
          </button>
        </form>
      )}
    </div>
  );
}
