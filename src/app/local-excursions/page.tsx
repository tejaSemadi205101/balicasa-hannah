import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Local Excursions Near Casa Hannah | ${siteConfig.name}`,
  description: "Plan local excursions from Casa Hannah in Seminyak, with easy access to Bali beaches, restaurants, cultural sites, and day trips.",
}

export default function LocalExcursionsPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Local Excursions Near Casa Hannah"
        summary="Use Casa Hannah as a base for Seminyak dining, beach clubs, local culture, and relaxed day trips around Bali."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Local Excursions content */}
      </div>
    </MainLayout>
  )
}
