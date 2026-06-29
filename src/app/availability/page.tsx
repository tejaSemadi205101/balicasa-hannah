import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Availability | ${siteConfig.name}`,
  description: "Check Casa Hannah villa availability for your preferred Bali travel dates and group stay requirements.",
}

export default function AvailabilityPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Availability"
        summary="Share your travel dates and group details to confirm whether Casa Hannah is available for your Seminyak stay."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Availability content */}
      </div>
    </MainLayout>
  )
}
