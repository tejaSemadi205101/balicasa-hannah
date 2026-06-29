import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Contact Casa Hannah | ${siteConfig.name}`,
  description: "Contact Casa Hannah for villa availability, rates, booking questions, services, and travel planning support in Seminyak, Bali.",
}

export default function ContactUsPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Contact Casa Hannah"
        summary="Reach the Casa Hannah team for booking questions, availability requests, villa details, or help planning your Bali stay."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Contact Us content */}
      </div>
    </MainLayout>
  )
}
