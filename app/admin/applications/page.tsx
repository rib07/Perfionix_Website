import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { JobApplication } from "@/lib/types";

async function getApplications() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/admin/applications`,
    {
      cache: "no-store", // always fresh data for admin
      credentials: "include",
    }
  );

  if (!res.ok) {
    return null;
  }

  return (await res.json()) as JobApplication[] | null;
}

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Job Applications
      </h1>

      {!applications || applications.length === 0 ? (
        <Card className="bg-card">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              No job applications yet.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {applications.map((application) => (
            <Card key={application.id} className="bg-card">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {application.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {application.email}
                  </p>
                  {application.phone && (
                    <p className="text-sm text-muted-foreground">
                      {application.phone}
                    </p>
                  )}
                </div>

                <Badge
                  variant={
                    application.status === "pending"
                      ? "default"
                      : application.status === "accepted"
                      ? "default"
                      : "secondary"
                  }
                >
                  {application.status}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="font-medium text-primary mb-2">
                  Applied for: {application.job_title}
                </p>

                {application.cover_letter && (
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap mb-4">
                    {application.cover_letter}
                  </p>
                )}

                <div className="flex gap-4 text-sm">
                  {application.linkedin_url && (
                    <a
                      href={application.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                  {application.portfolio_url && (
                    <a
                      href={application.portfolio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Portfolio
                    </a>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Applied:{" "}
                  {new Date(application.created_at).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
