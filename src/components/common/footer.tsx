"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FaFacebook , FaLinkedin } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";

import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navigationLinks = {
  "The Villa": [
    { label: "Villa Gallery", href: "/villa-gallery" },
    { label: "Location & Surrounding", href: "/location-surrounding" },
  ],
  Experiences: [
    { label: "Villa Facilities", href: "/villa-facilities" },
    { label: "Villa Services", href: "/villa-services" },
  ],
  "Plan Your Stay": [
    { label: "Villa Rates", href: "/villa-rates" },
    { label: "Check Availability", href: "/check-availability" },
    { label: "Promotion", href: "/promotion" },
    { label: "Travel Note", href: "/travel-note" },
  ],
  About: [
    { label: "About Us", href: "/about-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Waiver", href: "/waiver" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white">
      <div className="max-w-[1200px] mx-auto px-[56px] py-[50px]">
        {/* Top Section - 5 columns */}
        <div className="flex gap-[96px] mb-[16px]">
          {/* Column 1: Logo + Address + Get Direction */}
          <div className="flex flex-col gap-[32px] w-[156px]">
            {/* Logo */}
            <div className="w-[192.92px] h-[88.88px]">
              {/* Replace with actual logo image */}
              <svg
                width="192.92"
                height="88.88"
                viewBox="0 0 192.92 88.88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <text
                  x="0"
                  y="50"
                  fontFamily="Libre Baskerville, serif"
                  fontSize="32"
                  fontWeight="500"
                  fill="white"
                >
                  Casa Hannah
                </text>
              </svg>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[14px] leading-[24px] tracking-[-2%] text-white">
                Jl. Beraban Banjar Taman - Kerobokan No.102 X, Seminyak, Kec.
                Kuta, Badung Utara, Bali 80361
              </p>
              {/* Get Direction Button */}
              <Button
                variant="ghost"
                size="sm"
                className="gap-[8px] px-0 h-auto bg-transparent hover:bg-transparent text-white"
              >
                <span className="text-[14px] leading-[24px] tracking-[-2%] font-semibold">
                  Get direction
                </span>
                <ArrowRight className="w-[24px] h-[24px]" />
              </Button>
            </div>
          </div>

          {/* Columns 2-5: Navigation Links */}
          <div className="flex gap-[32px] flex-1">
            {Object.entries(navigationLinks).map(([title, links]) => (
              <div key={title} className="w-[156px]">
                <h2 className="font-[Libre_Baskerville] text-[16px] font-medium tracking-[-1.5%] mb-[16px]">
                  {title}
                </h2>
                <nav className="flex flex-col gap-[4px]">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-[10px] px-0 py-[10px] text-[14px] leading-[20px] text-white hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright + Terms + Social Icons */}
        <Separator className="border-[#292524] my-[16px]" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[16px]">
          <div className="flex flex-col md:flex-row gap-[16px] items-center">
            <p className="text-[14px] leading-[16px] text-white text-center md:text-left">
              © 2026 Villa Casa Hannah. All rights reserved
            </p>
            <p className="text-[14px] leading-[16px] text-white text-center md:text-left">
              Term & conditions
            </p>
          </div>
          <div className="flex gap-[16px]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[4px] p-[8px] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <AiFillInstagram className="w-[20px] h-[20px]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[4px] p-[8px] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook  className="w-[20px] h-[20px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[4px] p-[8px] hover:bg-white/10 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin  className="w-[20px] h-[20px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[4px] p-[8px] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}