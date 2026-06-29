import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Villa Gallery | ${siteConfig.name}`,
  description: "Browse the Casa Hannah villa gallery with photos of bedrooms, living spaces, pool areas, gardens, and gathering spaces in Seminyak.",
}

export default function GalleryPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Villa Gallery"
        summary="Explore a visual preview of the villa, from the pool and garden to bedroom suites and relaxed spaces for gathering."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Gallery content */}
      </div>
    </MainLayout>
  )
}
