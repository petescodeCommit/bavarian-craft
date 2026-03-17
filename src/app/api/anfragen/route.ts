import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/db";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.email || !data.vehicle || !data.designWish) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const db = getAdminDb();
  const { error } = await db.from("custom_requests").insert({
    name: data.name || "Anonym",
    email: data.email,
    vehicle: data.vehicle,
    design_wish: data.designWish,
    status: "OPEN",
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
