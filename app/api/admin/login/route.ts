import { db } from "@/lib/db";
import { createAdminToken } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const [rows]: any = await db.execute(
    "SELECT * FROM admins WHERE email = ?",
    [email]
  );

  if (!rows.length) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const admin = rows[0];
  const match = await bcrypt.compare(password, admin.password_hash);

  if (!match) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = createAdminToken(admin.id);

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_session", token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  return res;
}
