import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-background">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">Perfionix</span>
            </Link>
          </div>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Check your email</CardTitle>
              <CardDescription>We sent you a confirmation link</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Please check your email and click the confirmation link to activate your admin account. Once confirmed,
                you can sign in to access the dashboard.
              </p>
            </CardContent>
          </Card>
          <div className="text-center">
            <Link href="/auth/login" className="text-sm text-primary hover:underline">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
