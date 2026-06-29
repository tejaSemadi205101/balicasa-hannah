import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Villa Rates | ${siteConfig.name}`,
  description: "Review Casa Hannah villa rates and booking details for private group stays in Seminyak, Bali.",
}

export default function RatesPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Villa Rates"
        summary="Rates vary by season, stay length, and group requirements. Contact the villa team for accurate direct booking details."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Rates content */}
      </div>
    </MainLayout>
  )
}
