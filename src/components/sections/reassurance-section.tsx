import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface ReassuranceSectionProps extends React.HTMLAttributes<HTMLElement> {
  headline: string | React.ReactNode
  imageUrl: string
  imageAlt: string
}

export function ReassuranceSection({
  headline,
  imageUrl,
  imageAlt,
  className,
  ...props
}: ReassuranceSectionProps) {
  return (
    <section 
      className={cn(
        "w-full px-6 md:px-14 lg:px-32 py-16 md:py-24 bg-surface-main flex flex-col justify-center items-center gap-10 md:gap-14",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1088px] md:px-10 lg:px-20 flex flex-col justify-center items-center text-center">
        <h2 className="w-full text-2xl leading-loose font-semibold md:text-h3 text-gray-900 font-[Libre_Baskerville]">
          {headline}
        </h2>
      </div>
      <div className="w-full max-w-[1088px] relative h-[300px] md:h-[612px] rounded-sm overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          unoptimized={imageUrl.includes("placehold")}
          className="object-cover"
          sizes="(max-width: 1088px) 100vw, 1088px"
        />
      </div>
    </section>
  )
}
