"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify-icon/react"
import { cn } from "@/lib/utils"

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  // State for language dropdown on mobile
  const [isMobileLangOpen, setIsMobileLangOpen] = React.useState(false)

  // State for mobile nav dropdowns
  const [mobileOpenMenus, setMobileOpenMenus] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    // Initial check in case page is already scrolled on load
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "The Villa", 
      href: "#the-villa",
      items: [
        { label: "About Casa Hannah", href: "/about" },
        { label: "Location & Surrounding", href: "/location" },
      ]
    },
    { label: "Gallery", href: "/gallery" },
    { 
      label: "Experiences", 
      href: "#experiences",
      items: [
        { label: "Facilities", href: "/facilities" },
        { label: "Services", href: "/villa-services" },
      ]
    },
    { 
      label: "Plan Stay", 
      href: "#plan-stay",
      items: [
        { label: "Availability", href: "/availability" },
        { label: "Rates", href: "/rates" },
        { label: "Promotion", href: "/promotion" },
      ]
    },
  ]

  const isLight = isScrolled || isMobileMenuOpen

  const toggleMobileMenu = (label: string) => {
    setMobileOpenMenus(prev => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isLight ? "bg-white shadow-xs" : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-14 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <div className="relative w-24 h-12 md:w-28 md:h-12">
            <Image
              src={
                isLight
                  ? "/images/logos/logo-casa-hannah-primary.png"
                  : "/images/logos/logo-casa-hannah-light.png"
              }
              alt="Casa Hannah Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex justify-center items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.items ? (
                <button
                  className={cn(
                    "px-4 py-3 text-body-md transition-all duration-300 flex items-center gap-1",
                    isLight
                      ? "text-text-neutral-primary hover:text-text-brand hover:shadow-[inset_0_-2px_0_0_currentColor]"
                      : "text-white hover:bg-white/40 hover:shadow-[inset_0_-2px_0_0_currentColor]"
                  )}
                >
                  {link.label}
                  <Icon icon="lucide:chevron-down" className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-body-md transition-all duration-300 flex items-center",
                    isLight
                      ? "text-text-neutral-primary hover:text-text-brand hover:shadow-[inset_0_-2px_0_0_currentColor]"
                      : "text-white hover:bg-white/40 hover:shadow-[inset_0_-2px_0_0_currentColor]"
                  )}
                >
                  {link.label}
                </Link>
              )}
              
              {/* Desktop Dropdown */}
              {link.items && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white shadow-md py-2 min-w-56 z-50 gap-1">
                  {link.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="px-4 py-2 text-body-md text-center text-text-neutral-secondary hover:bg-transparent hover:text-text-brand transition-all duration-300"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Side (Language & Button) */}
        <div className="hidden lg:flex justify-end items-center gap-6">
          
          {/* Language Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1.5 transition-all duration-300 px-3 py-2 text-body-md",
                isLight
                  ? "text-text-neutral-primary hover:text-text-brand"
                  : "text-white hover:bg-white/40"
              )}
            >
              <Icon icon="lucide:globe" className="text-lg" />
              <span>English</span>
              <Icon icon="lucide:chevron-down" className="text-base transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white shadow-md py-2 min-w-40 z-50">
              <button className="text-center px-4 py-2 text-body-md text-text-neutral-secondary hover:bg-transparent hover:text-text-brand transition-all duration-300">
                English
              </button>
              <button className="text-center px-4 py-2 text-body-md text-text-neutral-secondary hover:bg-transparent hover:text-text-brand transition-all duration-300">
                Français
              </button>
            </div>
          </div>
          
          <Link
            href="#check-availability"
            className={cn(
              "h-10 px-6 py-2.5 flex justify-center items-center gap-2 rounded-xs transition-all duration-300 text-body-md",
              isLight
                ? "bg-button-primary-brand-default text-button-primary-label-default outline  outline-transparent hover:bg-white hover:text-text-brand hover:outline-border-brand-default"
                : "bg-white/30 outline  outline-white/50 text-white hover:bg-white hover:text-text-brand hover:outline-white"
            )}
          >
            Check Availability
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <Icon icon="lucide:x" className={cn("w-6 h-6", isLight ? "text-gray-900" : "text-white")} />
          ) : (
            <Icon icon="lucide:menu" className={cn("w-6 h-6", isLight ? "text-gray-900" : "text-white")} />
          )}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-18 lg:hidden bg-white p-4 flex flex-col gap-6 border-t border-gray-200 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col border-b border-gray-200">
                {link.items ? (
                  <>
                    <button
                      onClick={() => toggleMobileMenu(link.label)}
                      className="flex justify-between items-center w-full px-4 py-4 text-lg font-semibold text-gray-900"
                    >
                      {link.label}
                      <Icon icon="lucide:chevron-down"
                        className={cn(
                          "w-5 h-5 transition-transform",
                          mobileOpenMenus[link.label] ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {mobileOpenMenus[link.label] && (
                      <div className="flex flex-col bg-gray-50 px-4 py-2 rounded-md mb-2">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="py-3 text-base font-medium text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-4 text-lg font-semibold text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 mt-4">
             {/* Mobile Language Selector */}
             <div className="flex flex-col border-b border-gray-900 pb-2">
               <button 
                 onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                 className="flex items-center justify-between w-full px-4 text-gray-900 font-semibold text-lg"
               >
                 <div className="flex items-center gap-2">
                   <Icon icon="lucide:globe" className="text-xl" />
                   English
                 </div>
                 {isMobileLangOpen ? (
                   <Icon icon="lucide:chevron-up" className="text-xl" />
                 ) : (
                   <Icon icon="lucide:chevron-down" className="text-xl" />
                 )}
               </button>
               
               {isMobileLangOpen && (
                 <div className="flex flex-col px-10 py-2 gap-4 mt-2">
                   <button className="text-left text-base text-gray-700 font-medium">English</button>
                   <button className="text-left text-base text-gray-700 font-medium">Français</button>
                 </div>
               )}
             </div>
             
             <Link
                href="#check-availability"
                className="h-12 w-full flex justify-center items-center gap-2 rounded-sm bg-mahogany-700 text-white text-base font-semibold hover:bg-mahogany-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Check Availability
              </Link>
          </div>
        </div>
      )}
    </nav>
  )
}