import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { name, email, company, subject, message } = await req.json()

    await db.execute(
      `INSERT INTO contact_messages 
       (name, email, company, subject, message)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, company, subject, message]
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 }
    )
  }
}
