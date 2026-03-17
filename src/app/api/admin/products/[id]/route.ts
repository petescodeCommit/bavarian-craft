import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";

async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.email === process.env.ADMIN_EMAIL;
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  const { id } = await params;
  const data = await request.json();
  const db = getAdminDb();
  const { data: product, error } = await db.from("products").update({
    name: data.name, slug: data.slug, description: data.description,
    price: data.price, material: data.material, size: data.size,
    tag: data.tag || null, emoji: data.emoji || null,
    imageUrl: data.imageUrl || null, active: data.active ?? true,
  }).eq("id", Number(id)).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(product);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  const { id } = await params;
  const db = getAdminDb();
  const { error } = await db.from("products").delete().eq("id", Number(id));
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
