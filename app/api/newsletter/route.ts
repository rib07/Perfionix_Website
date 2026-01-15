import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      )
    }

    await db.execute(
      "INSERT INTO newsletter_subscribers (email) VALUES (?)",
      [email]
    )

    return NextResponse.json({ success: true })
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { message: "Database error" },
      { status: 500 }
    )
  }
}
