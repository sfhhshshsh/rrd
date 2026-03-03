import { Film, BarChart3, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: Film,
    title: "Film Room",
    description: "Upload and review game film. Break down plays like the pros and share clips with your team.",
    image: "/images/scoreboard.png",
    imageAlt: "HSFL scoreboard during a game",
  },
  {
    icon: BarChart3,
    title: "Player Stats",
    description: "Track every stat that matters. Passing yards, rushing touchdowns, tackles — all in one place.",
    image: "/images/helmet-closeup.png",
    imageAlt: "HSFL player in yellow helmet close-up",
  },
  {
    icon: Users,
    title: "Team Hub",
    description: "Connect with your squad. Share game plans, coordinate practice, and build team chemistry.",
    image: null,
    imageAlt: "",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Rise to the top. See how you stack up against the best players across every HSFL team.",
    image: null,
    imageAlt: "",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Built for Ballers
          </span>
          <h2 className="mt-3 text-balance text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Everything You Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From film review to stat tracking, HSFL Hub has all the tools to take your game to the next level.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/30"
            >
              {feature.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <div className={`p-8 ${!feature.image ? "py-12" : ""}`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
