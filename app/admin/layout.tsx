import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = cookies().get("admin_session");

  if (!session) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
