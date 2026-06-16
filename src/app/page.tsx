import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <HeroSection />
      <Footer />
    </div>
  )
}
