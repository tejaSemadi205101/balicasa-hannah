import { HeroSection } from "@/components/sections/hero-section"
import { Footer } from "@/components/common/footer"
import { AboutHomeSection } from "@/components/sections/about-section"
import { FacilitiesOverviewSection } from "@/components/sections/facilities-overview-section"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/common/navigation-menu"
import { USPVillaSection } from "@/components/sections/usp-villa-section"
import { GalleryOverviewSection } from "@/components/sections/gallery-overview-section"
import { TestimonialsOverview } from "@/components/sections/testimonials-overview-section"
import { FAQSection } from "@/components/sections/faq-section"
import { PreCTA } from "@/components/sections/pre-cta-section"


export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <NavigationMenu className="container mx-auto px-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <HeroSection />
      <AboutHomeSection />
      <FacilitiesOverviewSection />
      <GalleryOverviewSection />
      <USPVillaSection />
      <TestimonialsOverview />
      <FAQSection />
      <PreCTA />
      <Footer />
    </div>
  )
}
