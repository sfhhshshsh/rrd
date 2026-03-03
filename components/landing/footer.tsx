import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-xs font-black text-primary-foreground">HS</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              HSFL <span className="text-primary">Hub</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#matchups" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Matchups
            </Link>
            <Link href="#players" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Players
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            HSFL Hub {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
