export function MatchupSection() {
  return (
    <section id="matchups" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Matchup poster */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50">
            <img
              src="/images/matchup-poster.png"
              alt="CEG vs MGV matchup poster - Caston Eagles vs Mary G. Montgomery Vikings, Week One on HSFLTV"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Game Night
            </span>
            <h2 className="mt-3 text-balance text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              Never Miss a Matchup
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Stay on top of every game with real-time schedules, live scores, and post-game breakdowns. Whether it{"'"}s Week One or the championship — HSFL Hub has you covered.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-black text-primary">16+</div>
                <div className="mt-1 text-sm text-muted-foreground">Active Teams</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">100+</div>
                <div className="mt-1 text-sm text-muted-foreground">Players</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">8</div>
                <div className="mt-1 text-sm text-muted-foreground">Week Season</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
