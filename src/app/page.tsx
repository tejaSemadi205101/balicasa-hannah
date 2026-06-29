import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-pages"
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

export const metadata: Metadata = {
  title: `${siteConfig.name} | Private Luxury Villa in Bali`,
  description: siteConfig.description,
  keywords: [
    "luxury villa seminyak", 
    "bali family villa", 
    "private pool villa", 
    "casa hannah bali",
    "seminyak accommodation"
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Private Luxury Villa in Bali`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Boutique Villa`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Private Luxury Villa in Bali`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}


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
