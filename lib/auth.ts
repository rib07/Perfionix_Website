import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = process.env.ADMIN_JWT_SECRET!;

export function createAdminToken(adminId: number) {
  return jwt.sign({ adminId }, SECRET, { expiresIn: "1d" });
}

export function verifyAdmin() {
  const token = cookies().get("admin_session")?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, SECRET) as { adminId: number };
  } catch {
    return null;
  }
}
