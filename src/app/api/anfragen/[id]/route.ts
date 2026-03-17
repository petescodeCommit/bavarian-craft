import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";

async function isAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.email === process.env.ADMIN_EMAIL;
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  const { id } = await params;
  const data = await request.json();
  const db = getAdminDb();
  const { error } = await db.from("custom_requests").update({
    status: data.status,
    admin_notes: data.adminNotes ?? null,
  }).eq("id", Number(id));
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
