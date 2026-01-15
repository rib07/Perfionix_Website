import { db } from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const admin = verifyAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [rows] = await db.execute(
    "SELECT * FROM contact_messages ORDER BY created_at DESC"
  );

  return NextResponse.json(rows);
}
