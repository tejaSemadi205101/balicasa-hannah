"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Icon } from '@iconify-icon/react'

interface FacilityItem {
  icon: string
  title: string
}

const facilities: FacilityItem[] = [
  { icon: "hugeicons:bed-double", title: "5 Private Bedroom Suites" },
  { icon: "hugeicons:pool", title: "Olympic-Length Private Pool" },
  { icon: "hugeicons:sofa-02", title: "Spacious Living & Dining Areas" },
  { icon: "hugeicons:user-group", title: "Up to 10 Guests" },
  { icon: "hugeicons:bbq-grill", title: "BBQ & Outdoor Areas" },
  { icon: "hugeicons:baby-bottle", title: "Family-Friendly Comforts" },
  { icon: "hugeicons:router", title: "High-Speed Wi-Fi" },
  { icon: "hugeicons:projector", title: "Entertainment Experience" }, 
  { icon: "hugeicons:hotel-bell", title: "Dedicated Villa Staff" },
  { icon: "hugeicons:grid-view", title: "Other spacious facilities" },
]

export function FacilitiesOverviewSection() {
  return (
    <section className="bg-surface-main py-16 md:py-24" aria-labelledby="facilities-heading">
      <div className="max-w-web-2xl mx-auto px-4 md:px-14 flex flex-col items-center gap-10 md:gap-24">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 text-center max-w-[1088px] mx-auto w-full px-4 md:px-0">
          <h2
            id="facilities-heading"
            className="text-h2 text-text-neutral-primary"
          >
            The Difference Is in the Details
          </h2>
          <p className="text-body-sm text-text-neutral-secondary max-w-2xl mx-auto">
            Every space and service is shaped around how groups actually stay.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="flex flex-col items-center gap-10 w-full">
          <div
            className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4"
            role="list"
            aria-label="Villa facilities and amenities"
          >
            {facilities.map((facility, index) => (
              <article
                key={index}
                className="flex flex-col items-center gap-4 text-center"
                role="listitem"
              >
                <div
                  className="relative flex items-center justify-center text-icon-brand"
                  aria-hidden="true"
                >
                  <Icon icon={facility.icon} className="icon-2xl" />
                </div>
                <h3 className="text-label-md text-text-neutral-secondary max-w-40">
                  {facility.title}
                </h3>
              </article>
            ))}
          </div>

          {/* View Full Facilities Button */}
          <Button
            asChild
            className="h-10 px-6 bg-button-primary-brand-default hover:bg-button-primary-brand-hover text-button-primary-label-default rounded-sm border border-border-brand-default flex items-center gap-2 transition-colors"
          >
            <Link href="/facilities">
              <span className="text-label-md font-semibold">
                View Full Facilities List
              </span>
              <Icon icon="hugeicons:arrow-up-right-01" className="icon-sm" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}