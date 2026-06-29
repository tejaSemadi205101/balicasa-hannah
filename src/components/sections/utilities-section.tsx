import * as React from "react"
import { Icon } from "@iconify-icon/react"
import { cn } from "@/lib/utils"

export interface UtilityItem {
  icon: string
  title: string
  features: string[]
}

export interface UtilitiesSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  items: UtilityItem[]
}

export function UtilitiesSection({
  title,
  description,
  items,
  className,
  ...props
}: UtilitiesSectionProps) {
  return (
    <section 
      className={cn(
        "w-full px-6 md:px-14 lg:px-32 py-16 md:py-24 bg-white flex flex-col justify-start items-center gap-10 md:gap-14",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-4xl px-4 flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="w-full text-h2 md:text-h2 text-gray-900 font-semibold">
          {title}
        </h2>
        {description && (
          <p className="w-full text-body-md text-gray-600 font-normal">
            {description}
          </p>
        )}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        {items.map((item, index) => (
          <div key={index} className="w-full p-6 flex flex-col justify-start items-start gap-6 bg-surface-main h-full">
            <div className="w-12 h-12 bg-white flex items-center justify-center text-gray-900">
              <Icon icon={item.icon} className="icon-2xl text-mahogany-700"/> 
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h3 className="w-full text-gray-900 text-h4 font-semibold font-body">
                {item.title}
              </h3>
              <ul className="w-full flex flex-col gap-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 text-body-md font-normal flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
