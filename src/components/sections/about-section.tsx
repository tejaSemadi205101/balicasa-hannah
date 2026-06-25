import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify-icon/react"
import { Button } from "@/components/ui/button"

export function AboutHomeSection() {
  return (
    <section className="bg-(--color-surface-main)" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 md:px-8 lg:px-14 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex w-full lg:flex-1 flex-col lg:justify-between gap-12">
          {/* Text & Button */}

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-2">
              <h2
                id="about-heading"
                className="text-h2 font-semibold text-(--color-text-neutral-primary)"
              >
                Welcome to Casa Hannah Villa Seminyak
              </h2>
              <p className="text-body-sm leading-6 text-(--color-text-neutral-secondary)">
                Located in the heart of Seminyak, Casa Hannah is a private 5-bedroom villa
                created for families and groups seeking space, comfort, and a seamless Bali
                escape.
                <br />
                <br />
                Featuring a 20-metre swimming pool, generous living areas, dedicated villa
                staff, and accommodation for up to 10 guests, every detail is designed to
                make staying together feel effortless.
              </p>
            </div>

            <Button
              asChild
              className="h-10 px-6 py-2.5 rounded-[2px] bg-(--color-button-primary-brand-default) hover:bg-(--color-button-primary-brand-hover) text-white"
            >
              <Link href="/about" className="inline-flex items-center gap-2.5">
                <span className="text-body-sm font-semibold">
                  Read More About the Villa
                </span>
                <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* 2 Small Images */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="relative w-full h-96 lg:h-auto lg:aspect-[293/253] rounded-[2px] overflow-hidden">
              <Image
                src="/images/hero/hero-image-1.png"
                alt="Casa Hannah Villa exterior view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-full h-96 lg:h-auto lg:aspect-[293/253] rounded-[2px] overflow-hidden">
              <Image
                src="/images/hero/hero-image-2.png"
                alt="Casa Hannah Villa interior living area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Right Column / Large Image */}
        <div className="relative w-full lg:w-[384px] h-96 lg:h-[549px] shrink-0 rounded-[2px] overflow-hidden">
          <Image
            src="/images/hero/hero-image-3.png"
            alt="Casa Hannah Villa swimming pool area"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 384px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
