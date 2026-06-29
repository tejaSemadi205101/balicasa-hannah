import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Testimonials | ${siteConfig.name}`,
  description: "Read Casa Hannah guest testimonials and reviews from families and groups who stayed at the private villa in Seminyak.",
}

export default function TestimonialsPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Testimonials"
        summary="Guest testimonials will help future visitors understand the Casa Hannah experience from people who have stayed before."
      />
      <div className="bg-surface-main w-full py-20 px-6 md:px-10 lg:px-14 min-h-[50vh]">
        {/* Placeholder for Testimonials content */}
      </div>
    </MainLayout>
  )
}
