import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";

async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.email === process.env.ADMIN_EMAIL;
}

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });

  const data = await request.json();
  const product = await prisma.product.create({
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      price: data.price,
      material: data.material,
      size: data.size,
      tag: data.tag || null,
      emoji: data.emoji || null,
      imageUrl: data.imageUrl || null,
      active: data.active ?? true,
    },
  });
  return NextResponse.json(product, { status: 201 });
}
