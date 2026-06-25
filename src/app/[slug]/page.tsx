import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { getPageUrl, getSitePage, siteConfig, sitePages } from "@/lib/site-pages"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return sitePages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getSitePage(slug)

  if (!page) {
    return {}
  }

  const canonicalUrl = getPageUrl(page.slug)

  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${page.title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  }
}

function generateWebPageSchema(page: NonNullable<ReturnType<typeof getSitePage>>) {
  return {
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: getPageUrl(page.slug),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "LodgingBusiness",
      name: "Casa Hannah",
      url: siteConfig.url,
    },
  }
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function SitePage({ params }: PageProps) {
  const { slug } = await params
  const page = getSitePage(slug)

  if (!page) {
    notFound()
  }

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.navigationLabel,
        item: getPageUrl(page.slug),
      },
    ],
  }

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [generateWebPageSchema(page), breadcrumbSchema],
  }

  return (
    <MainLayout>
      <JsonLd data={pageSchema} />
      <PageHeroSection
        title={page.title}
        summary={page.summary}
        backgroundImage={page.heroImage}
      />
      <div className="bg-surface-main flex-1 w-full">
        <article className="mx-auto max-w-[960px] px-6 py-20 md:px-10 md:py-24 lg:px-14">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-body-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-mahogany-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">
                {page.navigationLabel}
              </li>
            </ol>
          </nav>

          <section aria-labelledby="page-overview-heading">
            <h2 id="page-overview-heading" className="text-h4 text-gray-900">
              Page overview
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-body-md text-gray-600">
              {page.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <div className="mt-10">
            <Link
              href={page.primaryCta.href}
              className="text-label-md font-semibold text-mahogany-700 hover:text-mahogany-800"
            >
              {page.primaryCta.label}
            </Link>
          </div>
        </article>
      </div>
    </MainLayout>
  )
}
