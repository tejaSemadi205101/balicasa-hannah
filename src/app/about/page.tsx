import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `About Casa Hannah | ${siteConfig.name}`,
  description: "Learn about Casa Hannah, a private luxury villa in Seminyak, Bali designed for families, groups, and relaxed tropical stays.",
}

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="About Casa Hannah"
        summary="Casa Hannah brings together generous villa spaces, a central Seminyak location, and the privacy groups need for an easy Bali escape."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for About content */}
      </div>
    </MainLayout>
  )
}
