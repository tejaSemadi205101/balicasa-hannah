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
      <div className="flex flex-col justify-center items-center gap-2 max-w-3xl text-center">
        <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold font-['Libre_Baskerville'] leading-8 md:leading-9">
          Secure Your Dates Before They Go
        </h2>
        <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-6">
          Casa Hannah is a single private villa. Once a date is confirmed for another group, it is gone
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
            className="rounded-xl border shadow-sm p-4 text-gray-900"
            classNames={{
              today: "bg-mahogany-50 text-mahogany-600 font-bold",
              selected: "bg-mahogany-700 text-white hover:bg-mahogany-800 focus:bg-mahogany-800 rounded-md",
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
            className="rounded-xl border shadow-sm p-4 text-gray-900"
            classNames={{
              today: "bg-mahogany-50 text-mahogany-600 font-bold",
              selected: "bg-mahogany-700 text-white hover:bg-mahogany-800 focus:bg-mahogany-800 rounded-md",
            }}
          />
        </div>

        {/* Actions */}
        <div className="w-full max-w-[768px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mt-2">
          {/* Clear Dates */}
          <div className="flex justify-center w-full md:w-auto order-2 md:order-1">
            <Button
              variant="ghost"
              className="text-mahogany-600 text-sm font-medium hover:bg-mahogany-50 hover:text-mahogany-700"
              onClick={() => setDate(undefined)}
            >
              <Icon icon="lucide:x" className="w-4 h-4 mr-2" />
              Clear dates
            </Button>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col w-full md:w-auto md:flex-row justify-start items-center gap-4 order-1 md:order-2">
            <Button
              variant="outline"
              className="w-full md:w-auto h-10 px-4 py-2.5 bg-white border-mahogany-700 text-mahogany-700 hover:bg-mahogany-50 font-medium text-sm gap-2"
            >
              <Icon icon="lucide:message-circle" className="w-4 h-4" />
              Ask about specific date
            </Button>
            <Button
              className="w-full md:w-auto h-10 px-4 py-2.5 bg-mahogany-700 hover:bg-mahogany-800 text-white font-medium text-sm gap-2"
            >
              <Icon icon="lucide:calendar-check" className="w-4 h-4" />
              Book your date
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
