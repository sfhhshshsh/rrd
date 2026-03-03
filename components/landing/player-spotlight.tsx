import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PlayerSpotlight() {
  return (
    <section id="players" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Player Spotlight
            </span>
            <h2 className="mt-3 text-balance text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              Build Your Profile
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Create your player card, upload your best highlights, and let coaches and players see what you bring to the table. Your stats. Your film. Your legacy.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-12 px-8 text-base font-bold uppercase tracking-wide" asChild>
                <Link href="/auth/sign-up">Create Your Profile</Link>
              </Button>
            </div>
          </div>

          {/* Player card image */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50">
            <img
              src="/images/player-card.png"
              alt="Haced Brown #09 player card - HSFL Knight quarterback"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
