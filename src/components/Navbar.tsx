"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-bc-border sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold tracking-widest uppercase text-bc-brown text-lg">
            Bavarian Craft
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/produkte" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Produkte</Link>
            <Link href="/konfigurieren" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Konfigurator</Link>
            <Link href="/ueber-uns" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Über uns</Link>
            <Link href="/konfigurieren" className="bg-bc-brown text-white px-5 py-2 text-sm font-semibold tracking-wide hover:bg-bc-brown-dark transition-colors">
              Jetzt gestalten
            </Link>
          </div>
          <button className="md:hidden p-2 text-bc-muted" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-bc-border flex flex-col gap-4">
            <Link href="/produkte" className="text-bc-muted text-sm" onClick={() => setMenuOpen(false)}>Produkte</Link>
            <Link href="/konfigurieren" className="text-bc-muted text-sm" onClick={() => setMenuOpen(false)}>Konfigurator</Link>
            <Link href="/ueber-uns" className="text-bc-muted text-sm" onClick={() => setMenuOpen(false)}>Über uns</Link>
            <Link href="/konfigurieren" className="bg-bc-brown text-white px-5 py-2 text-sm font-semibold text-center" onClick={() => setMenuOpen(false)}>Jetzt gestalten</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
