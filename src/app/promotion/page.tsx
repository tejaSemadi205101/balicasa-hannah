import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Promotions | ${siteConfig.name}`,
  description: "Find current Casa Hannah promotions, seasonal offers, and direct booking opportunities for private villa stays in Bali.",
}

export default function PromotionPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Promotions"
        summary="Promotions and special offers may be available depending on season, stay length, and booking window."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Promotion content */}
      </div>
    </MainLayout>
  )
}
