import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify-icon/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GalleryImage {
  id: string
  src: string
  alt: string
  size: "large" | "small"
}

interface GalleryOverviewSectionProps {
  images?: GalleryImage[]
  sectionTitle?: string
  sectionSubtitle?: string
  galleryHref?: string
}

const defaultImages: GalleryImage[] = [
  {
    id: "villa-bedroom-suite",
    src: "/images/hero/hero-image-1.png",
    alt: "Casa Hannah bedroom suite with wood feature wall and villa artwork",
    size: "large",
  },
  {
    id: "villa-garden-pool",
    src: "/images/hero/hero-image-3.png",
    alt: "Casa Hannah garden and swimming pool surrounded by tropical greenery",
    size: "small",
  },
  {
    id: "open-living-lounge",
    src: "/images/hero/hero-image-2.png",
    alt: "Open-air Casa Hannah living lounge with garden views",
    size: "small",
  },
  {
    id: "private-bedroom",
    src: "/images/usp/private-resort.jpg",
    alt: "Private Casa Hannah bedroom with resort-style bathroom details",
    size: "large",
  },
  {
    id: "primary-bedroom",
    src: "/images/usp/stay-together.jpg",
    alt: "Casa Hannah outdoor poolside area for guests staying together",
    size: "large",
  },
  {
    id: "villa-sundeck",
    src: "/images/usp/family-gatherings.jpg",
    alt: "Casa Hannah outdoor dining and gathering space for groups",
    size: "small",
  },
]

export function GalleryOverviewSection({
  images = defaultImages,
  sectionTitle = "A Glimpse Inside Casa Hannah",
  sectionSubtitle = "Some places look better in photos. Casa Hannah feels better in person.",
  galleryHref = "/gallery",
}: GalleryOverviewSectionProps) {
  const columns = [
    images.slice(0, 2),
    images.slice(2, 4),
    images.slice(4, 6),
  ].filter((column) => column.length > 0)

  return (
    <section
      className="w-full bg-white px-6 py-20 md:px-10 md:py-24 lg:px-14"
      aria-labelledby="gallery-overview-heading"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[50px]">
        <header className="mx-auto flex max-w-[656px] flex-col items-center gap-2 text-center">
          <h2
            id="gallery-overview-heading"
            className="text-h2 text-gray-900"
          >
            {sectionTitle}
          </h2>
          <p className="text-body-md text-gray-600">{sectionSubtitle}</p>
        </header>

        <div
          className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Casa Hannah villa gallery preview"
        >
          {columns.map((column, columnIndex) => (
            <div
              key={`gallery-column-${columnIndex}`}
              className={cn(
                "flex flex-col gap-5",
                columnIndex === 1 && "md:col-span-2 lg:col-span-1"
              )}
            >
              {column.map((image) => (
                <figure
                  key={image.id}
                  className={cn(
                    "relative w-full overflow-hidden rounded-[2px] bg-gray-100",
                    image.size === "large"
                      ? "aspect-349/410"
                      : "aspect-349/196"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>

        <Button
          variant="default"
          size="sm"
          asChild
          className="h-10 gap-2 rounded-[2px] border border-mahogany-700 bg-mahogany-700 px-6 text-button-primary-label-default hover:bg-mahogany-800"
        >
          <Link href={galleryHref} aria-label="Browse the full Casa Hannah villa gallery">
            <span className="text-label-md font-semibold">
              Browse the Full Gallery
            </span>
            <Icon icon="hugeicons:arrow-up-right-01" className="icon-sm" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
