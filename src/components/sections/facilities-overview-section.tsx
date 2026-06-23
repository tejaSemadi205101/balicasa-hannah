"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Users,
  BedDouble,
  Waves,
  Music,
  UserCheck,
  Baby,
  Wifi,
  UtensilsCrossed,
  Grid,
} from "lucide-react"
import { Icon } from '@iconify-icon/react';


interface FacilityItem {
  icon: React.ReactNode
  title: string
}

const facilities: FacilityItem[] = [
  { icon: <Users className="w-[24px] h-[20px]" />, title: "Up to 10 Guests" },
  { icon: <BedDouble className="w-[26px] h-[21px]" />, title: "5 Private Bedroom Suites" },
  { icon: <Waves className="w-[26px] h-[21px]" />, title: "Olympic-Length Private Pool" },
  { icon: <Music className="w-[26px] h-[21px]" />, title: "Entertainment Experience" },
  { icon: <UserCheck className="w-[26px] h-[21px]" />, title: "Dedicated Villa Staff" },
  { icon: <Baby className="w-[28px] h-[28px]" />, title: "Family-Friendly Comforts" },
  { icon: <Wifi className="w-[26px] h-[21px]" />, title: "High-Speed Wi-Fi" },
  { icon: <UtensilsCrossed className="w-[26px] h-[21px]" />, title: "Spacious Living & Dining Areas" },
  { icon: <Icon icon="hugeicons:bbq-grill" className="icon-2xl" />, title: "BBQ & Outdoor Areas" },
  { icon: <Grid className="w-[26px] h-[26px]" />, title: "Other Spacious Facilities" },
]

export function FacilitiesOverviewSection() {
  return (
    <section className="bg-white" aria-labelledby="facilities-heading">
      <div className="max-w-[1200px] mx-auto px-[56px] py-[96px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[8px] px-[216px] text-center max-w-[1088px] mx-auto">
          <h2
            id="facilities-heading"
            className="font-[Libre_Baskerville] text-[24px] font-semibold leading-[34px] tracking-[-1.5%] text-[#1C1917]"
          >
            The Difference Is in the Details
          </h2>
          <p className="font-inter text-[14px] leading-[24px] tracking-[-2%] text-[#57534E] w-full">
            Every space and service is shaped around how groups actually stay.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-[40px] flex flex-col items-center gap-[40px] w-full">
          <div className="w-full">
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[40px] [&>*:nth-child(-n+5)]:mb-[40px]"
              role="list"
              aria-label="Villa facilities and amenities"
            >
              {facilities.map((facility, index) => (
                <article
                  key={index}
                  className="flex flex-col items-center gap-[16px] text-center"
                  role="listitem"
                >
                  <div
                    className="relative w-[32px] h-[32px] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="text-[#55270B]">{facility.icon}</span>
                  </div>
                  <h3 className="font-inter text-[14px] font-medium leading-[24px] tracking-[-2%] text-[#57534E]">
                    {facility.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          {/* View Full Facilities Button */}
          <Button
            variant="default"
            size="sm"
            asChild
            className="h-[40px] px-[24px] bg-[#55270B] hover:bg-[#55270B]/90 text-white rounded-[2px] border-[1.5px] border-[#55270B] gap-[8px]"
          >
            <Link href="/facilities">
              <span className="font-inter text-[14px] font-medium tracking-[-2%]">
                View Full Facilities List
              </span>
              <Icon icon="lucide:arrow-right" className="icon-md" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}