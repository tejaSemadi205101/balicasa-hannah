---
applyTo: 'src/lib/sanity/**/*.ts,src/components/**/*.tsx'
---

# Sanity CMS Rules

Sanity is the content source for this project.

Content fetching:

- Use GROQ queries for all data fetching.
- Keep queries in dedicated files.
- Use typed queries with TypeScript.
- Prefer static queries for static content.

Image handling:

- Use Sanity image URL builder.
- Specify dimensions when possible.
- Use WebP format.
- Implement responsive images.

Schema compliance:

- Follow schema definitions in docs/architecture/sanity-schema.md.
- Validate content structure before rendering.
- Handle missing content gracefully.

Caching:

- Use Next.js cache for static content.
- Revalidate on content changes via webhooks.
- Avoid client-side fetching for static content.

Portable Text:

- Use Portable Text serializer for rich text.
- Follow component mapping for custom blocks.
- Maintain consistent styling.

Required references:

- docs/architecture/sanity-schema.md
- docs/architecture/content-modeling.md

Never:

- Hardcode content that should come from Sanity.
- Fetch unnecessary fields.
- Skip error handling for content fetching.
