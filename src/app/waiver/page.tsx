import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Waiver | ${siteConfig.name}`,
  description: "Review Casa Hannah waiver information and guest responsibilities before confirming a private villa stay in Bali.",
}

export default function WaiverPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Waiver"
        summary="This page will hold important waiver and responsibility information for guests staying at Casa Hannah."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Waiver content */}
      </div>
    </MainLayout>
  )
}
