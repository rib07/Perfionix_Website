import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  if (!cookies().get("admin_session")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [[contacts]]: any = await db.execute("SELECT COUNT(*) c FROM contact_messages");
  const [[subscribers]]: any = await db.execute("SELECT COUNT(*) c FROM subscribers");
  const [[applications]]: any = await db.execute("SELECT COUNT(*) c FROM applications");
  const [[blogPosts]]: any = await db.execute("SELECT COUNT(*) c FROM blog_posts");

  return NextResponse.json({
    contacts: contacts.c,
    subscribers: subscribers.c,
    applications: applications.c,
    blogPosts: blogPosts.c,
  });
}
