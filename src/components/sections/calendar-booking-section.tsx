"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify-icon/react"

export function CalendarBookingSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <section className="w-full py-16 md:py-24 bg-white flex flex-col items-center gap-10 md:gap-12 px-4 md:px-32">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4 max-w-3xl text-center">
        <h2 className="text-h2 text-gray-900">
          Secure Your Dates Before They Go
        </h2>
        <p className="text-body-md text-gray-600">
          Casa Hannah is a single private villa. Once a date is confirmed for another group, it is gone.
        </p>
      </div>

      {/* Calendar and Actions Container */}
      <div className="w-full max-w-[1088px] flex flex-col items-center gap-6 md:gap-12">
        {/* Mobile Calendar (1 month) */}
        <div className="flex md:hidden w-full overflow-hidden justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="p-6 text-gray-900"
            classNames={{
              today: "bg-mahogany-50 text-mahogany-600 font-bold rounded-full",
              selected: "bg-mahogany-700 text-white hover:bg-mahogany-800 focus:bg-mahogany-800 rounded-full",
            }}
          />
        </div>

        {/* Desktop Calendar (2 months) */}
        <div className="hidden md:flex w-full justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="p-8 text-gray-900"
            classNames={{
              today: "bg-mahogany-50 text-mahogany-600 font-bold rounded-full",
              selected: "bg-mahogany-700 text-white hover:bg-mahogany-800 focus:bg-mahogany-800 rounded-full",
            }}
          />
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mt-6">
          {/* Clear Dates */}
          <div className="flex justify-center w-full md:w-auto order-2 md:order-1">
            <Button
              variant="ghost"
              className="text-mahogany-600 rounded-sm text-body-md font-medium hover:bg-mahogany-50 hover:text-mahogany-700"
              onClick={() => setDate(undefined)}
            >
              <Icon icon="hugeicons:cancel-01" className="icon-md 2xl:icon-lg mr-2" />
              Clear dates
            </Button>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col w-full md:w-auto md:flex-row justify-start items-center gap-4 order-1 md:order-2">
            <Button
              variant="outline"
              className="w-full md:w-auto h-11 px-6 rounded-sm bg-white border-mahogany-700 text-mahogany-700 hover:bg-mahogany-50 font-medium text-body-md gap-2"
            >
              <Icon icon="hugeicons:message-02" className="icon-md 2xl:icon-lg" />
              Ask about specific date
            </Button>
            <Button
              className="w-full md:w-auto h-11 px-6 rounded-sm bg-mahogany-700 hover:bg-mahogany-800 text-white font-medium text-body-md gap-2"
            >
              <Icon icon="hugeicons:calendar-favorite-01" className="icon-md 2xl:icon-lg" />
              Book your date
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
