"use client"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Icon } from '@iconify-icon/react';
import { footerNavigationGroups } from "@/lib/site-pages"

export function Footer() {
  return (
    <footer className="bg-surface-inverse text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-14 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Column 1: Logo + Address + Get Direction */}
          <div className="flex flex-col gap-8 lg:w-72">
            {/* Logo */}
            <div className="relative w-40 h-16 md:w-48 md:h-20">
              <Image
                src="/images/logos/logo-casa-hannah-light.png"
                alt="Casa Hannah Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-4">
              <p className="text-body-sm text-white">
                Jl. Beraban Banjar Taman - Kerobokan No.102 X, Seminyak, Kec.
                Kuta, Badung Utara, Bali 80361
              </p>
              {/* Get Direction Button */}
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 px-0 h-auto bg-transparent hover:bg-transparent text-white w-fit"
              >
                <span className="text-label-md font-semibold">
                  Get direction
                </span>
                <Icon icon="hugeicons:arrow-right-01" className="icon-lg" />
              </Button>
            </div>
          </div>

          {/* Columns 2-5: Navigation Links */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 flex-1 lg:pl-16">
            {Object.entries(footerNavigationGroups).map(([title, links]) => (
              <div key={title} className="w-40">
                <h2 className="text-h6 text-white mb-4">
                  {title}
                </h2>
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2.5 py-2.5 text-body-sm text-white hover:text-white/70 transition-colors"
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full border-t border-border-inverse-default pt-4">
          <div className="flex flex-col md:flex-row justify-between md:justify-start gap-4 md:gap-8 items-center w-full md:w-auto">
            <p className="text-label-sm text-white text-center md:text-left">
              © 2026 Villa Casa Hannah. All rights reserved
            </p>
            <p className="text-label-sm text-white text-center md:text-left">
              Term & conditions
            </p>
          </div>
          <div className="flex justify-between md:justify-end gap-4 w-full md:w-auto">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Icon icon="hugeicons:instagram" className="icon-lg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Icon icon="hugeicons:facebook-01" className="icon-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Icon icon="hugeicons:linkedin-01" className="icon-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Icon icon="hugeicons:new-twitter" className="icon-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
