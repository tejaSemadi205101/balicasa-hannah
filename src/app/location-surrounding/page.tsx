import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Location and Surrounding | ${siteConfig.name}`,
  description: "Explore Casa Hannah's Seminyak location near restaurants, beaches, shops, beach clubs, and Bali attractions.",
}

export default function LocationSurroundingPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Location and Surrounding"
        summary="Casa Hannah is positioned for easy access to Seminyak while still giving guests the privacy of a private villa setting."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Location and Surrounding content */}
      </div>
    </MainLayout>
  )
}
