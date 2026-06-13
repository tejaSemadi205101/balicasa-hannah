"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <Slot
      ref={ref}
      asChild
      {...props}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
    />
  )
)
Separator.displayName = "Separator"

export { Separator }
