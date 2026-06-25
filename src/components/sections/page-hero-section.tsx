import * as React from "react"
import Image from "next/image"

interface PageHeroSectionProps {
  title: string
  summary: string
  backgroundImage?: string
}

export function PageHeroSection({
  title,
  summary,
  backgroundImage = "/images/hero/hero-image-1.png",
}: PageHeroSectionProps) {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex flex-col justify-end"
      aria-labelledby="page-hero-heading"
      role="banner"
    >
      {/* Background Image & Main Overlay */}
      <div className="absolute inset-0 z-0 bg-surface-inverse">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 mix-blend-multiply bg-linear-to-b from-gray-900/80 via-gray-900/30 via-20% to-gray-900/90 to-[92%]" aria-hidden="true" />
      </div>

      {/* Bottom Content Container */}
      <div className="relative z-10 w-full mt-auto">
        {/* Backdrop Blur Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-80 lg:h-52 bg-linear-to-b from-gray-900/0 to-gray-900/80 backdrop-blur-md [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_75%)] [mask-image:linear-gradient(to_bottom,transparent,black_75%)]" aria-hidden="true" />

        {/* Text Content */}
        <div className="relative mx-auto w-full max-w-[1200px] px-4 py-12 lg:px-14 flex flex-col lg:flex-row justify-start lg:items-center gap-2 lg:gap-12">
          <div className="w-full lg:max-w-[511px]">
            <h1 id="page-hero-heading" className="text-h1 lg:text-display-md text-(--color-text-inverse)">
              {title}
            </h1>
          </div>
          <div className="w-full lg:flex-1">
            <p className="text-body-md text-(--color-text-inverse)">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
