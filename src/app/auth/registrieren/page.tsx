"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-bc-cream flex items-center justify-center px-4">
        <div className="bg-white border border-bc-border p-10 w-full max-w-md text-center">
          <div className="text-4xl mb-4">✉️</div>
          <h2 className="text-xl font-bold mb-2">Bestätigungs-E-Mail gesendet</h2>
          <p className="text-bc-muted text-sm">Bitte prüfe deine E-Mails und klicke auf den Bestätigungslink um dein Konto zu aktivieren.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bc-cream flex items-center justify-center px-4">
      <div className="bg-white border border-bc-border p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-bc-gold font-bold tracking-widest uppercase text-lg mb-2">Bavarian Craft</div>
          <h1 className="text-2xl font-bold">Konto erstellen</h1>
          <p className="text-bc-muted text-sm mt-1">Bereits registriert? <Link href="/auth/login" className="text-bc-brown hover:underline">Anmelden</Link></p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Vorname</label>
              <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required
                className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
                placeholder="Max" />
            </div>
            <div>
              <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Nachname</label>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required
                className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
                placeholder="Mustermann" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">E-Mail</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
              placeholder="deine@email.de" />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Passwort</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8}
              className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
              placeholder="min. 8 Zeichen" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-bc-brown text-white py-3 font-bold tracking-wide hover:bg-bc-brown-dark transition-colors disabled:opacity-50">
            {loading ? "Registrieren…" : "Konto erstellen"}
          </button>
        </form>
      </div>
    </div>
  );
}
