import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-black text-primary-foreground">HS</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              HSFL <span className="text-primary">Hub</span>
            </span>
          </Link>
        </div>

        <Card className="border-border/50 bg-card text-center">
          <CardHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Mail className="size-7 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Check Your Email</CardTitle>
            <CardDescription className="text-muted-foreground">
              We sent you a confirmation link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Click the link in your email to verify your account and get started. Once confirmed, you can{" "}
              <Link href="/auth/login" className="font-medium text-primary hover:underline">
                log in
              </Link>{" "}
              to your HSFL Hub dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
