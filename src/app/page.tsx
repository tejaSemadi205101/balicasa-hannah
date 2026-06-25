import { HeroSection } from "@/components/sections/hero-section"
import { AboutHomeSection } from "@/components/sections/about-section"
import { FacilitiesOverviewSection } from "@/components/sections/facilities-overview-section"
import { USPVillaSection } from "@/components/sections/usp-villa-section"
import { GalleryOverviewSection } from "@/components/sections/gallery-overview-section"
import { QuickBookingSection } from "@/components/sections/quick-booking-section"
import { TestimonialsOverview } from "@/components/sections/testimonials-overview-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CalendarBookingSection } from "@/components/sections/calendar-booking-section"
import { MainLayout } from "@/components/layout/main-layout"


export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <QuickBookingSection />
      <AboutHomeSection />
      <FacilitiesOverviewSection />
      <GalleryOverviewSection />
      <USPVillaSection />
      <CalendarBookingSection />
      <TestimonialsOverview />
      <FAQSection />
    </MainLayout>
  )
}
