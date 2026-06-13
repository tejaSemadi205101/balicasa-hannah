export interface LodgingBusinessSchema {
  "@context": "https://schema.org"
  "@type": "LodgingBusiness"
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address: {
    "@type": "PostalAddress"
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    "@type": "GeoCoordinates"
    latitude: number
    longitude: number
  }
  priceRange: string
  currenciesAccepted: string
  paymentAccepted: string
  amenities?: string[]
  photos?: string[]
  checkinTime: string
  checkoutTime: string
  starRating?: {
    "@type": "Rating"
    ratingValue: number
    bestRating: number
  }
  aggregateRating?: {
    "@type": "AggregateRating"
    ratingValue: number
    reviewCount: number
    bestRating: number
  }
}

export interface ProductSchema {
  "@context": "https://schema.org"
  "@type": "Product"
  name: string
  description: string
  url: string
  image?: string[]
  brand: {
    "@type": "Brand"
    name: string
  }
  offers: {
    "@type": "Offer"
    url: string
    priceCurrency: string
    price: number
    availability: "https://schema.org/InStock" | "https://schema.org/OutOfStock"
    seller: {
      "@type": "Organization"
      name: string
    }
  }
  aggregateRating?: {
    "@type": "AggregateRating"
    ratingValue: number
    reviewCount: number
    bestRating: number
  }
}

export function generateLodgingBusinessSchema(data: Partial<LodgingBusinessSchema> & { name: string; description: string; url: string; address: LodgingBusinessSchema["address"]; geo: LodgingBusinessSchema["geo"]; priceRange: string }): LodgingBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: data.address,
    geo: data.geo,
    priceRange: data.priceRange,
    currenciesAccepted: data.currenciesAccepted ?? "IDR",
    paymentAccepted: data.paymentAccepted ?? "Cash, Credit Card, Bank Transfer",
    amenities: data.amenities,
    photos: data.photos,
    checkinTime: data.checkinTime ?? "14:00",
    checkoutTime: data.checkoutTime ?? "11:00",
    starRating: data.starRating,
    aggregateRating: data.aggregateRating,
  }
}

export function generateProductSchema(data: Partial<ProductSchema> & { name: string; description: string; url: string; brand: ProductSchema["brand"]; offers: ProductSchema["offers"] }): ProductSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    brand: data.brand,
    offers: data.offers,
    aggregateRating: data.aggregateRating,
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateWebsiteSchema(name: string, url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateOrganizationSchema(data: {
  name: string
  url: string
  logo: string
  telephone?: string
  email?: string
  address?: LodgingBusinessSchema["address"]
  sameAs?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    telephone: data.telephone,
    email: data.email,
    address: data.address,
    sameAs: data.sameAs,
  }
}
