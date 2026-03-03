import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-group.png"
          alt="HSFL Roblox football players lineup"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-24 pt-32 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Season Active
            </span>
          </div>

          <h1 className="text-balance text-5xl font-black uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Your Game.{" "}
            <span className="text-primary">Your Film.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            The ultimate film and stat hub for HSFL. Upload highlights, track your performance, and scout the competition. Built by players, for players.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-12 px-8 text-base font-bold uppercase tracking-wide" asChild>
              <Link href="/auth/sign-up">Join the League</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-bold uppercase tracking-wide border-foreground/20 text-foreground hover:bg-foreground/5" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
