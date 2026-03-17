import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";

async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.email === process.env.ADMIN_EMAIL;
}

export async function GET() {
  const db = getAdminDb();
  const { data, error } = await db.from("products").select("*").order("id");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  const data = await request.json();
  const db = getAdminDb();
  const { data: product, error } = await db.from("products").insert({
    name: data.name, slug: data.slug, description: data.description,
    price: data.price, material: data.material, size: data.size,
    tag: data.tag || null, emoji: data.emoji || null,
    image_url: data.imageUrl || null, active: data.active ?? true,
  }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(product, { status: 201 });
}
