import { cookies } from "next/headers";
import { db } from "@/lib/db";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  company?: string | null;
  subject: string;
  message: string;
  status: "new" | "read";
  created_at: string;
};

// 🔐 Server-side fetch from MySQL
async function getContacts(): Promise<ContactSubmission[]> {
  const adminSession = cookies().get("admin_session")?.value;

  if (!adminSession) {
    return [];
  }

  const [rows] = await db.execute<ContactSubmission[]>(
    `
    SELECT
      id,
      name,
      email,
      company,
      subject,
      message,
      status,
      created_at
    FROM contact_submissions
    ORDER BY created_at DESC
    `
  );

  return rows;
}

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-foreground">
        Contact Submissions
      </h1>

      {/* Empty State */}
      {contacts.length === 0 ? (
        <Card className="bg-card">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              No contact submissions yet.
            </p>
          </CardContent>
        </Card>
      ) : (
        /* List */
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card key={contact.id} className="bg-card">
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">
                    {contact.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {contact.email}
                  </p>
                  {contact.company && (
                    <p className="text-sm text-muted-foreground">
                      {contact.company}
                    </p>
                  )}
                </div>

                <Badge
                  variant={
                    contact.status === "new"
                      ? "default"
                      : "secondary"
                  }
                >
                  {contact.status}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="mb-2 font-medium text-foreground">
                  {contact.subject}
                </p>

                <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                  {contact.message}
                </p>

                <p className="mt-4 text-xs text-muted-foreground">
                  {new Date(contact.created_at).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
