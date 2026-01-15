import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Admin authentication check
    const adminSession = cookies().get("admin_session")?.value;

    if (!adminSession) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Fetch job applications from MySQL
    const [rows] = await db.execute(`
      SELECT
        id,
        name,
        email,
        phone,
        job_title,
        status,
        cover_letter,
        linkedin_url,
        portfolio_url,
        created_at
      FROM job_applications
      ORDER BY created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
