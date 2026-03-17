import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login?next=/admin");
  if (user.email !== process.env.ADMIN_EMAIL) redirect("/");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-bc-brown-dark text-white flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="text-bc-gold font-bold tracking-widest uppercase text-sm">Bavarian Craft</div>
          <div className="text-white/50 text-xs mt-1">Admin Panel</div>
        </div>
        <nav className="p-4 space-y-1">
          <Link href="/admin" className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded">Dashboard</Link>
          <Link href="/admin/produkte" className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded">Produkte</Link>
          <Link href="/admin/bestellungen" className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded">Bestellungen</Link>
          <div className="border-t border-white/10 mt-4 pt-4">
            <Link href="/" className="block px-4 py-2.5 text-sm text-white/50 hover:text-white transition-colors">← Zum Shop</Link>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
