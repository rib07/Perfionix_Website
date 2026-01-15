import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

function checkAdmin() {
  return cookies().get("admin_session");
}

// 🔹 GET blog post
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  if (!checkAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [rows]: any = await db.execute(
    "SELECT * FROM blog_posts WHERE id = ?",
    [params.id]
  );

  return NextResponse.json(rows[0] || null);
}

// 🔹 UPDATE blog post
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!checkAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  await db.execute(
    `UPDATE blog_posts SET
      title=?, slug=?, excerpt=?, content=?, author=?,
      category=?, read_time=?, image_url=?, is_featured=?, is_published=?,
      updated_at=NOW()
     WHERE id=?`,
    [
      body.title,
      body.slug,
      body.excerpt,
      body.content,
      body.author,
      body.category,
      body.read_time,
      body.image_url || null,
      body.is_featured,
      body.is_published,
      params.id,
    ]
  );

  return NextResponse.json({ success: true });
}

// 🔹 DELETE blog post
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  if (!checkAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await db.execute("DELETE FROM blog_posts WHERE id = ?", [params.id]);

  return NextResponse.json({ success: true });
}
