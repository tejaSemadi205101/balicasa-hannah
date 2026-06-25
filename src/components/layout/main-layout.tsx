import { ReactNode } from "react"
import { NavigationMenu } from "@/components/common/navigation-menu"
import { Footer } from "@/components/common/footer"
import { PreCTA } from "@/components/sections/pre-cta-section"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col flex-1 w-full bg-surface-main">
      <NavigationMenu />
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
      <PreCTA />
      <Footer />
    </div>
  )
}
