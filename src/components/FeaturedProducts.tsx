import Link from "next/link";
import { getAdminDb } from "@/lib/db";
import AnimateIn from "./AnimateIn";

export default async function FeaturedProducts() {
  const db = getAdminDb();
  const { data } = await db
    .from("products")
    .select("id, name, slug, description, price, imageUrl, tag, material, size")
    .eq("active", true)
    .not("imageUrl", "is", null)
    .order("id")
    .limit(3);

  const products = data ?? [];

  return (
    <section className="py-16 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <AnimateIn>
            <span className="label">Unsere Lederware</span>
            <h2 className="section-title mb-0">Beliebteste Modelle</h2>
          </AnimateIn>
          <Link href="/produkte" className="text-sm text-bc-muted hover:text-bc-brown transition-colors font-semibold shrink-0 ml-4">
            Alle ansehen →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {products.map((p, i) => (
            <AnimateIn key={p.id} delay={i * 120}>
              <Link
                href={`/produkte/${p.slug}`}
                className="group block bg-white border border-bc-border hover:border-bc-brown transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                <div className="relative bg-bc-cream h-52 sm:h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imageUrl!}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-bc-brown text-white text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg leading-snug mb-1 group-hover:text-bc-brown transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <div className="text-xs text-bc-muted mb-3">{p.material} · {p.size}</div>
                  <p className="text-bc-muted text-sm leading-relaxed line-clamp-2 mb-5 min-h-[2.5rem]">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-bc-border">
                    <span className="text-xl font-bold">{Number(p.price).toFixed(2).replace(".", ",")} €</span>
                    <span className="text-xs font-bold text-bc-brown border border-bc-brown px-3 py-1.5 group-hover:bg-bc-brown group-hover:text-white transition-colors">
                      Ansehen →
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
