import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface OverviewSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description: string | React.ReactNode
  imageUrl: string
  imageAlt: string
  imagePosition?: "left" | "right"
}

export function OverviewSection({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition = "right",
  className,
  ...props
}: OverviewSectionProps) {
  return (
    <section 
      className={cn(
        "w-full px-6 md:px-14 lg:px-24 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 bg-white",
        imagePosition === "left" && "md:flex-row-reverse",
        className
      )}
      {...props}
    >
      <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
        <h2 className="w-full text-h2 md:text-h2 text-gray-900 font-semibold">
          {title}
        </h2>
        <p className="w-full text-body-md text-gray-600 font-normal">
          {description}
        </p>
      </div>
      <div className="flex-1 w-full relative h-[400px] md:h-[625px] rounded-sm overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          unoptimized={imageUrl.includes("placehold")}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
