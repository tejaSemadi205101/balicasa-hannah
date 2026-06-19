"use client"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutHomeSection() {
  return (
    <section className="bg-white" aria-labelledby="hero-heading">
      <div className="max-w-[1200px] mx-auto px-[56px] py-[96px]">
        <div className="flex gap-[32px]">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-[24px] flex-1">
            <div className="flex flex-col gap-[8px]">
              <h2
                id="hero-heading"
                className="font-[Libre_Baskerville] text-[24px] font-semibold tracking-[-1.5%] text-[#1C1917]"
              >
                Welcome to Casa Hannah Villa Seminyak
              </h2>
              <p className="text-[14px] leading-[24px] tracking-[-2%] text-[#57534E]">
                Located in the heart of Seminyak, Casa Hannah is a private 5-bedroom villa
                created for families and groups seeking space, comfort, and a seamless Bali
                escape.
                <br /><br />
                Featuring a 20-metre swimming pool, generous living areas, dedicated villa
                staff, and accommodation for up to 10 guests, every detail is designed to
                make staying together feel effortless.
              </p>
            </div>
            <Button
              variant="default"
              size="sm"
              asChild
              className="gap-[10px] px-[24px] h-[40px] bg-[#55270B] hover:bg-[#55270B]/90 text-white rounded-[2px]"
            >
              <Link href="/villa-gallery">
                <span className="font-inter text-[14px] font-semibold tracking-[-2%]">
                  Read More About the Villa
                </span>
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </Link>
            </Button>
          </div>

          {/* Right Column: Images */}
          <div className="flex flex-col gap-[32px] flex-1">
            {/* Top row: Two images side by side */}
            <div className="flex gap-[32px]">
              <div className="flex-1 rounded-[2px] overflow-hidden">
                <img
                  src="/images/hero/hero-image-1.png"
                  alt="Casa Hannah Villa exterior view"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex-1 rounded-[2px] overflow-hidden">
                <img
                  src="/images/hero/hero-image-2.png"
                  alt="Casa Hannah Villa interior living area"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Large feature image */}
            <div className="rounded-[2px] overflow-hidden">
              <img
                src="/images/hero/hero-image-3.png"
                alt="Casa Hannah Villa swimming pool area"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}