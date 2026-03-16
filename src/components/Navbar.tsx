"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚓</span>
            <span className="text-xl font-bold font-serif text-bavarian-blue">
              Bavarian Craft
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/produkte"
              className="text-gray-600 hover:text-bavarian-blue font-medium transition-colors"
            >
              Produkte
            </Link>
            <Link
              href="/konfigurieren"
              className="text-gray-600 hover:text-bavarian-blue font-medium transition-colors"
            >
              Personalisieren
            </Link>
            <Link
              href="/ueber-uns"
              className="text-gray-600 hover:text-bavarian-blue font-medium transition-colors"
            >
              Über uns
            </Link>
            <Link href="/konfigurieren" className="btn-primary text-sm">
              Jetzt gestalten
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-4">
            <Link
              href="/produkte"
              className="text-gray-600 hover:text-bavarian-blue font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Produkte
            </Link>
            <Link
              href="/konfigurieren"
              className="text-gray-600 hover:text-bavarian-blue font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Personalisieren
            </Link>
            <Link
              href="/ueber-uns"
              className="text-gray-600 hover:text-bavarian-blue font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              href="/konfigurieren"
              className="btn-primary text-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              Jetzt gestalten
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
