"use client"

import Image from "next/image"

interface USPItem {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

interface USPVillaSectionProps {
  items?: USPItem[]
  sectionTitle?: string
  sectionSubtitle?: string
}

const defaultItems: USPItem[] = [
  {
    id: "stay-together",
    imageSrc: "/images/usp/stay-together.jpg",
    imageAlt: "Spacious villa bedroom with comfortable beds",
    title: "Stay Together, Stay Comfortable",
    description:
      "Five bedrooms and spacious shared areas give everyone room to connect without sacrificing personal space",
  },
  {
    id: "prime-location",
    imageSrc: "/images/usp/prime-location.jpg",
    imageAlt: "Seminyak area with restaurants and beach clubs",
    title: "Prime Location in Seminyak",
    description:
      "Minutes from renowned restaurants, beach clubs, shopping, and Bali's most sought-after attractions",
  },
  {
    id: "family-gatherings",
    imageSrc: "/images/usp/family-gatherings.jpg",
    imageAlt: "Large indoor and outdoor dining area",
    title: "Built for Family Gatherings",
    description:
      "Large indoor and outdoor spaces make every meal, celebration, and holiday feel effortless",
  },
  {
    id: "private-resort",
    imageSrc: "/images/usp/private-resort.jpg",
    imageAlt: "Private villa with tropical garden and pool",
    title: "Private Resort Feel",
    description:
      "Enjoy dedicated villa service, tropical surroundings, and resort-style amenities in complete privacy",
  },
]

export function USPVillaSection({
  items = defaultItems,
  sectionTitle = "Why Groups Keep Coming Back",
  sectionSubtitle = "Everything your group needs for a relaxed Bali stay",
}: USPVillaSectionProps) {
  return (
    <section
      className="w-full bg-white px-6 py-20 md:px-10 md:py-24 lg:px-14"
      aria-labelledby="usp-section-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <header className="mx-auto mb-[50px] flex max-w-[656px] flex-col items-center gap-2 text-center">
          <h2
            id="usp-section-heading"
            className="text-h2 text-gray-900"
          >
            {sectionTitle}
          </h2>
          <p className="text-body-md text-gray-600 max-w-[656px]">
            {sectionSubtitle}
          </p>
        </header>

        {/* USP Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col gap-4"
            >
              {/* Image */}
              <div className="relative aspect-[524/365] w-full overflow-hidden rounded-[6px]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-h3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-body-md text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
