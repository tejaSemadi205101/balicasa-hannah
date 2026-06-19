"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  backgroundImage?: string
}

export function HeroSection({ backgroundImage = "/images/hero/hero-image-3.png" }: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-end overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[56px] pb-[50px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[212px] bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" aria-hidden="true" />
          
          <div className="flex lg:flex-row gap-[50px]">
            <div className="max-w-[511px]">
              <h1
                id="hero-heading"
                className="font-serif text-[40px] font-semibold leading-[56px] tracking-tight text-white"
              >
                Casa Hannah Luxury Private Villa Seminyak
              </h1>
            </div>
            <div className="flex-1 max-w-[589px]">
              <p className="font-sans text-[16px] font-normal leading-[24px] text-white">
                A spacious 5-bedroom villa with room to gather, unwind, and create meaningful moments in one of Balis most sought-after destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}