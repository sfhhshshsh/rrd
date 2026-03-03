import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { MatchupSection } from "@/components/landing/matchup-section"
import { PlayerSpotlight } from "@/components/landing/player-spotlight"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MatchupSection />
      <PlayerSpotlight />
      <Footer />
    </main>
  )
}
