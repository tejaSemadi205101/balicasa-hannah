import type { Metadata, Viewport } from "next"
import { Libre_Baskerville, Inter } from "next/font/google"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Bali Casa Hannah | Boutique Villa in Bali",
  description: "Experience tranquil luxury at Bali Casa Hannah — a boutique villa nestled in the heart of Bali. Private pool, tropical garden, and personalized service.",
  keywords: ["boutique villa bali", "private pool villa", "bali accommodation", "luxury villa rental"],
  authors: [{ name: "Bali Casa Hannah" }],
  creator: "Bali Casa Hannah",
  publisher: "Bali Casa Hannah",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balicasahannah.com",
    siteName: "Bali Casa Hannah",
    title: "Bali Casa Hannah | Boutique Villa in Bali",
    description: "Experience tranquil luxury at Bali Casa Hannah — a boutique villa with private pool and tropical garden.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Casa Hannah - Boutique Villa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Casa Hannah | Boutique Villa in Bali",
    description: "Experience tranquil luxury at Bali Casa Hannah — a boutique villa with private pool and tropical garden.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1C2E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
