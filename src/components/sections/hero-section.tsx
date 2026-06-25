"use client"

import * as React from "react"

interface HeroSectionProps {
  backgroundImage?: string
}

export function HeroSection({ backgroundImage = "/videos/casa hannah herro.mp4" }: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex flex-col justify-end"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Invisible H1 for SEO */}
      <h1 id="hero-heading" className="sr-only">
        Casa Hannah Luxury Private Villa Seminyak
      </h1>

      {/* Background Video & Main Overlay */}
      <div className="absolute inset-0 z-0 bg-surface-inverse">
        <video
          src={backgroundImage}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
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
            <h2 className="text-h1 lg:text-display-md text-(--color-text-inverse)">
              Casa Hannah Luxury Private Villa Seminyak
            </h2>
          </div>
          <div className="w-full lg:flex-1">
            <p className="text-body-md text-(--color-text-inverse)">
              A spacious 5-bedroom villa with room to gather, unwind, and create meaningful moments in one of Bali&apos;s most sought-after destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}