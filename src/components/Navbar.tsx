import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";

export default async function Navbar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-bc-border sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold tracking-[0.18em] uppercase text-bc-brown text-base sm:text-lg hover:text-bc-brown-light transition-colors">
            Bavarian Craft
          </Link>

          <div className="hidden md:flex items-center gap-7">
            <Link href="/produkte" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Produkte</Link>
            <Link href="/konfigurieren" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Konfigurator</Link>
            <Link href="/blog" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Blog</Link>
            {isAdmin && (
              <Link href="/admin" className="text-bc-gold text-sm tracking-wide font-semibold">Admin</Link>
            )}
            {user ? (
              <Link href="/konto" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Mein Konto</Link>
            ) : (
              <Link href="/auth/login" className="text-bc-muted hover:text-bc-text text-sm tracking-wide transition-colors">Anmelden</Link>
            )}
            <CartIcon />
            <Link href="/konfigurieren" className="bg-bc-brown text-white px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-bc-brown-dark transition-colors">
              Jetzt gestalten
            </Link>
          </div>

          <MobileMenu user={user ? { email: user.email ?? "", isAdmin } : null} />
        </div>
      </nav>
    </header>
  );
}
