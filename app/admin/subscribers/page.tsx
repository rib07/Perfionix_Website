import { cookies } from "next/headers";
import { db } from "@/lib/db";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Subscription = {
  id: number;
  email: string;
  is_active: boolean;
  subscribed_at: string;
};

// 🔐 Server-side MySQL fetch
async function getSubscriptions(): Promise<Subscription[]> {
  const adminSession = cookies().get("admin_session")?.value;

  if (!adminSession) {
    return [];
  }

  const [rows] = await db.execute<Subscription[]>(
    `
    SELECT
      id,
      email,
      is_active,
      subscribed_at
    FROM subscriptions
    ORDER BY subscribed_at DESC
    `
  );

  return rows;
}

export default async function SubscriptionPage() {
  const subscriptions = await getSubscriptions();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-foreground">
        Subscriptions
      </h1>

      {/* Empty State */}
      {subscriptions.length === 0 ? (
        <Card className="bg-card">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              No subscriptions yet.
            </p>
          </CardContent>
        </Card>
      ) : (
        /* Table */
        <Card className="bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subscribed At</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {subscriptions.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">
                    {subscriber.email}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        subscriber.is_active
                          ? "default"
                          : "secondary"
                      }
                    >
                      {subscriber.is_active
                        ? "Active"
                        : "Inactive"}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {new Date(
                      subscriber.subscribed_at
                    ).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
}
