export const siteConfig = {
  name: "Bali Casa Hannah",
  url: "https://balicasahannah.com",
  description:
    "Casa Hannah is a private luxury villa in Seminyak, Bali for families and groups seeking space, comfort, and direct booking support.",
  ogImage: "/og-image.jpg",
}

export interface SitePage {
  slug: string
  title: string
  navigationLabel: string
  description: string
  summary: string
  highlights: string[]
  primaryCta: {
    label: string
    href: string
  }
}

export const sitePages: SitePage[] = [
  {
    slug: "about",
    title: "About Casa Hannah",
    navigationLabel: "About",
    description:
      "Learn about Casa Hannah, a private luxury villa in Seminyak, Bali designed for families, groups, and relaxed tropical stays.",
    summary:
      "Casa Hannah brings together generous villa spaces, a central Seminyak location, and the privacy groups need for an easy Bali escape.",
    highlights: [
      "Private five-bedroom villa for families and groups",
      "Located in Seminyak near dining, shopping, and beach clubs",
      "Designed around comfort, privacy, and shared moments",
    ],
    primaryCta: { label: "Contact Casa Hannah", href: "/contact-us" },
  },
  {
    slug: "gallery",
    title: "Casa Hannah Villa Gallery",
    navigationLabel: "Gallery",
    description:
      "Browse the Casa Hannah villa gallery with photos of bedrooms, living spaces, pool areas, gardens, and gathering spaces in Seminyak.",
    summary:
      "Explore a visual preview of the villa, from the pool and garden to bedroom suites and relaxed spaces for gathering.",
    highlights: [
      "Villa bedrooms and private guest spaces",
      "Pool, garden, and outdoor lounging areas",
      "Indoor and outdoor spaces for group stays",
    ],
    primaryCta: { label: "Ask About Availability", href: "/availability" },
  },
  {
    slug: "facilities",
    title: "Casa Hannah Villa Facilities",
    navigationLabel: "Facilities",
    description:
      "See the facilities at Casa Hannah, including the private pool, five bedroom suites, shared living areas, Wi-Fi, and villa comforts.",
    summary:
      "Casa Hannah includes practical and premium villa facilities that help groups stay together without giving up personal comfort.",
    highlights: [
      "Five private bedroom suites",
      "Olympic-length private swimming pool",
      "Spacious living, dining, Wi-Fi, and outdoor areas",
    ],
    primaryCta: { label: "Check Villa Rates", href: "/rates" },
  },
  {
    slug: "services",
    title: "Casa Hannah Villa Services",
    navigationLabel: "Services",
    description:
      "Discover villa services at Casa Hannah in Seminyak, including dedicated staff support and guest assistance for a smooth Bali stay.",
    summary:
      "Villa services are arranged to make group travel feel simple, from arrival support to help during the stay.",
    highlights: [
      "Dedicated villa staff support",
      "Guest assistance for practical stay needs",
      "Service designed for families, groups, and long stays",
    ],
    primaryCta: { label: "Contact the Villa Team", href: "/contact-us" },
  },
  {
    slug: "local-excursions",
    title: "Local Excursions Near Casa Hannah",
    navigationLabel: "Local Excursions",
    description:
      "Plan local excursions from Casa Hannah in Seminyak, with easy access to Bali beaches, restaurants, cultural sites, and day trips.",
    summary:
      "Use Casa Hannah as a base for Seminyak dining, beach clubs, local culture, and relaxed day trips around Bali.",
    highlights: [
      "Seminyak restaurants, shops, and beach clubs nearby",
      "Day trip ideas for families and groups",
      "Convenient base for exploring Bali",
    ],
    primaryCta: { label: "Ask for Local Suggestions", href: "/contact-us" },
  },
  {
    slug: "rates",
    title: "Casa Hannah Villa Rates",
    navigationLabel: "Rates",
    description:
      "Review Casa Hannah villa rates and booking details for private group stays in Seminyak, Bali.",
    summary:
      "Rates vary by season, stay length, and group requirements. Contact the villa team for accurate direct booking details.",
    highlights: [
      "Private villa rates for group stays",
      "Seasonal booking information",
      "Direct inquiry support for accurate pricing",
    ],
    primaryCta: { label: "Check Availability", href: "/availability" },
  },
  {
    slug: "availability",
    title: "Casa Hannah Availability",
    navigationLabel: "Availability",
    description:
      "Check Casa Hannah villa availability for your preferred Bali travel dates and group stay requirements.",
    summary:
      "Share your travel dates and group details to confirm whether Casa Hannah is available for your Seminyak stay.",
    highlights: [
      "Availability inquiries for preferred travel dates",
      "Support for family and group bookings",
      "Direct booking guidance from the villa team",
    ],
    primaryCta: { label: "Contact Us", href: "/contact-us" },
  },
  {
    slug: "promotion",
    title: "Casa Hannah Promotions",
    navigationLabel: "Promotion",
    description:
      "Find current Casa Hannah promotions, seasonal offers, and direct booking opportunities for private villa stays in Bali.",
    summary:
      "Promotions and special offers may be available depending on season, stay length, and booking window.",
    highlights: [
      "Seasonal villa stay offers",
      "Direct booking opportunities",
      "Promotion details confirmed by inquiry",
    ],
    primaryCta: { label: "Ask About Promotions", href: "/contact-us" },
  },
  {
    slug: "contact-us",
    title: "Contact Casa Hannah",
    navigationLabel: "Contact Us",
    description:
      "Contact Casa Hannah for villa availability, rates, booking questions, services, and travel planning support in Seminyak, Bali.",
    summary:
      "Reach the Casa Hannah team for booking questions, availability requests, villa details, or help planning your Bali stay.",
    highlights: [
      "Availability and booking inquiries",
      "Questions about rates, services, and facilities",
      "Support before and during your stay",
    ],
    primaryCta: { label: "View Location", href: "/location-surrounding" },
  },
  {
    slug: "location-surrounding",
    title: "Casa Hannah Location and Surrounding",
    navigationLabel: "Location & Surrounding",
    description:
      "Explore Casa Hannah's Seminyak location near restaurants, beaches, shops, beach clubs, and Bali attractions.",
    summary:
      "Casa Hannah is positioned for easy access to Seminyak while still giving guests the privacy of a private villa setting.",
    highlights: [
      "Located in Seminyak, Bali",
      "Close to restaurants, beaches, and shopping",
      "Convenient access to local attractions",
    ],
    primaryCta: { label: "Plan Local Excursions", href: "/local-excursions" },
  },
  {
    slug: "travel-note",
    title: "Casa Hannah Travel Notes",
    navigationLabel: "Travel Note",
    description:
      "Read travel notes for staying at Casa Hannah, including Bali arrival tips, villa stay guidance, and practical trip information.",
    summary:
      "Travel notes help guests prepare for a smoother villa stay, from arrival planning to practical Bali considerations.",
    highlights: [
      "Arrival and stay preparation notes",
      "Practical information for Bali travelers",
      "Helpful guidance for families and groups",
    ],
    primaryCta: { label: "Contact the Villa Team", href: "/contact-us" },
  },
  {
    slug: "waiver",
    title: "Casa Hannah Waiver",
    navigationLabel: "Waiver",
    description:
      "Review Casa Hannah waiver information and guest responsibilities before confirming a private villa stay in Bali.",
    summary:
      "This page will hold important waiver and responsibility information for guests staying at Casa Hannah.",
    highlights: [
      "Guest responsibility information",
      "Villa stay terms and safety notes",
      "Pre-arrival review for confirmed guests",
    ],
    primaryCta: { label: "Contact Us With Questions", href: "/contact-us" },
  },
  {
    slug: "testimonials",
    title: "Casa Hannah Testimonials",
    navigationLabel: "Testimonials",
    description:
      "Read Casa Hannah guest testimonials and reviews from families and groups who stayed at the private villa in Seminyak.",
    summary:
      "Guest testimonials will help future visitors understand the Casa Hannah experience from people who have stayed before.",
    highlights: [
      "Guest feedback from villa stays",
      "Family and group travel experiences",
      "Trust signals for direct booking inquiries",
    ],
    primaryCta: { label: "Ask About Your Stay", href: "/contact-us" },
  },
]

export const footerNavigationGroups = {
  "The Villa": [
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location & Surrounding", href: "/location-surrounding" },
  ],
  Experiences: [
    { label: "Facilities", href: "/facilities" },
    { label: "Services", href: "/services" },
    { label: "Local Excursions", href: "/local-excursions" },
  ],
  "Plan Your Stay": [
    { label: "Rates", href: "/rates" },
    { label: "Availability", href: "/availability" },
    { label: "Promotion", href: "/promotion" },
    { label: "Travel Note", href: "/travel-note" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact-us" },
    { label: "Waiver", href: "/waiver" },
    { label: "Testimonials", href: "/testimonials" },
  ],
}

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug)
}

export function getPageUrl(slug: string) {
  return `${siteConfig.url}/${slug}`
}
