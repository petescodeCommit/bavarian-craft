"use client";

import { useState, Suspense } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/konto";

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("E-Mail oder Passwort falsch.");
      setLoading(false);
    } else {
      router.push(next);
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">E-Mail</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
          className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
          placeholder="deine@email.de" />
      </div>
      <div>
        <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Passwort</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
          className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
          placeholder="••••••••" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full bg-bc-brown text-white py-3 font-bold tracking-wide hover:bg-bc-brown-dark transition-colors disabled:opacity-50">
        {loading ? "Anmelden…" : "Anmelden"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bc-cream flex items-center justify-center px-4">
      <div className="bg-white border border-bc-border p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-bc-gold font-bold tracking-widest uppercase text-lg mb-2">Bavarian Craft</div>
          <h1 className="text-2xl font-bold">Anmelden</h1>
          <p className="text-bc-muted text-sm mt-1">
            Noch kein Konto? <Link href="/auth/registrieren" className="text-bc-brown hover:underline">Jetzt registrieren</Link>
          </p>
        </div>
        <Suspense fallback={<div className="text-center text-bc-muted text-sm">Laden…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
