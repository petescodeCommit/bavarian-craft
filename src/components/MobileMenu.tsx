"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  user: { email: string; isAdmin: boolean } | null;
}

export default function MobileMenu({ user }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="md:hidden p-2 text-bc-muted" onClick={() => setOpen(!open)} aria-label="Menü">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-bc-border md:hidden px-4 py-4 flex flex-col gap-4 z-50">
          <Link href="/produkte" className="text-bc-muted text-sm" onClick={() => setOpen(false)}>Produkte</Link>
          <Link href="/konfigurieren" className="text-bc-muted text-sm" onClick={() => setOpen(false)}>Konfigurator</Link>
          <Link href="/blog" className="text-bc-muted text-sm" onClick={() => setOpen(false)}>Blog</Link>
          {user?.isAdmin && <Link href="/admin" className="text-bc-gold text-sm font-semibold" onClick={() => setOpen(false)}>Admin</Link>}
          {user ? (
            <Link href="/konto" className="text-bc-muted text-sm" onClick={() => setOpen(false)}>Mein Konto</Link>
          ) : (
            <Link href="/auth/login" className="text-bc-muted text-sm" onClick={() => setOpen(false)}>Anmelden</Link>
          )}
          <Link href="/konfigurieren" className="bg-bc-brown text-white px-5 py-2 text-sm font-semibold text-center" onClick={() => setOpen(false)}>Jetzt gestalten</Link>
        </div>
      )}
    </>
  );
}
