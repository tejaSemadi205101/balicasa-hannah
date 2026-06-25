"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Icon } from "@iconify-icon/react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function QuickBookingSection() {
  const [checkInDate, setCheckInDate] = React.useState<Date | undefined>()
  const [checkOutDate, setCheckOutDate] = React.useState<Date | undefined>()
  const [guests, setGuests] = React.useState<number>(0)

  return (
    <section className="w-full bg-[var(--color-surface-main)] px-6 py-16 md:px-14 flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col items-center gap-10 md:gap-16">
        
        <h2 className="text-(--color-text-neutral-primary) text-h2 md:text-h2 font-semibold text-center">
          Find Your Best Dates
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-center items-end gap-10">
          
          <div className="w-full md:w-auto md:flex-1 flex flex-col md:flex-row justify-start items-center gap-10">
            
            {/* Check-In */}
            <div className="w-full md:flex-1 flex flex-col items-start gap-2.5">
              <label className="text-gray-900 text-sm font-semibold font-['Inter'] tracking-wider">
                CHECK-IN
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full py-2 border-b border-gray-400 md:border-gray-200 flex justify-between items-center group transition-colors hover:border-gray-900 outline-none">
                    <span
                      className={cn(
                        "text-sm font-normal font-['Inter'] leading-6 text-left",
                        checkInDate ? "text-gray-900" : "text-gray-500"
                      )}
                    >
                      {checkInDate ? format(checkInDate, "MMM d, yyyy") : "Add date"}
                    </span>
                    <Icon icon="lucide:calendar-days" className="w-5 h-5 text-gray-900 group-hover:text-mahogany-700 transition-colors" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[var(--color-surface-main)] border border-[var(--color-border-neutral-default)] shadow-lg z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    classNames={{
                      today: "bg-[var(--color-mahogany-50)] text-[var(--color-mahogany-600)] font-bold",
                      selected: "bg-[var(--color-mahogany-700)] text-[var(--color-neutral-0)] hover:bg-[var(--color-mahogany-800)] focus:bg-[var(--color-mahogany-800)]",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-Out */}
            <div className="w-full md:flex-1 flex flex-col items-start gap-2.5">
              <label className="text-gray-900 text-sm font-semibold font-['Inter'] tracking-wider">
                CHECK-OUT
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full py-2 border-b border-gray-400 md:border-gray-200 flex justify-between items-center group transition-colors hover:border-gray-900 outline-none">
                    <span
                      className={cn(
                        "text-sm font-normal font-['Inter'] leading-6 text-left",
                        checkOutDate ? "text-gray-900" : "text-gray-500"
                      )}
                    >
                      {checkOutDate ? format(checkOutDate, "MMM d, yyyy") : "Add date"}
                    </span>
                    <Icon icon="lucide:calendar-days" className="w-5 h-5 text-gray-900 group-hover:text-mahogany-700 transition-colors" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[var(--color-surface-main)] border border-[var(--color-border-neutral-default)] shadow-lg z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    disabled={(date) => (checkInDate ? date <= checkInDate : false)}
                    classNames={{
                      today: "bg-[var(--color-mahogany-50)] text-[var(--color-mahogany-600)] font-bold",
                      selected: "bg-[var(--color-mahogany-700)] text-[var(--color-neutral-0)] hover:bg-[var(--color-mahogany-800)] focus:bg-[var(--color-mahogany-800)]",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="w-full md:flex-1 flex flex-col items-start gap-2.5">
              <label className="text-gray-900 text-sm font-semibold font-['Inter'] tracking-wider">
                GUESTS
              </label>
              <div className="w-full py-1 border-b border-gray-400 md:border-gray-200 flex justify-between items-center transition-colors hover:border-gray-900">
                <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-6">
                  {guests}
                </span>
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    onClick={() => setGuests(Math.max(0, guests - 1))}
                    disabled={guests <= 0}
                    className="p-1.5 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors outline-none"
                    aria-label="Decrease guests"
                  >
                    <Icon icon="lucide:minus" className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="p-1.5 rounded-full border border-gray-900 hover:bg-gray-100 transition-colors outline-none"
                    aria-label="Increase guests"
                  >
                    <Icon icon="lucide:plus" className="w-4 h-4 text-gray-900" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <button className="w-full md:w-auto px-8 py-3 bg-[var(--color-button-primary-brand-default)] hover:bg-[var(--color-button-primary-brand-hover)] text-[var(--color-button-primary-label-default)] rounded-[var(--radius-1)] text-label-md font-semibold transition-colors flex justify-center items-center gap-2.5 shrink-0 outline-none">
            Find the Best Rate
          </button>
          
        </div>
      </div>
    </section>
  )
}
