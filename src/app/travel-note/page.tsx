import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Travel Notes | ${siteConfig.name}`,
  description: "Read travel notes for staying at Casa Hannah, including Bali arrival tips, villa stay guidance, and practical trip information.",
}

export default function TravelNotePage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Travel Notes"
        summary="Travel notes help guests prepare for a smoother villa stay, from arrival planning to practical Bali considerations."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Travel Note content */}
      </div>
    </MainLayout>
  )
}
