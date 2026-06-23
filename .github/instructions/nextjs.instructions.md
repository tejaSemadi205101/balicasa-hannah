---
applyTo: '**/*.ts,**/*.tsx'
---

# Next.js Development Rules

Use Server Components by default.

Only use client components when:

- Browser APIs are required.
- Local interaction requires state.
- Third-party libraries require client rendering.

Prefer:

- Async server components.
- Route-based architecture.
- Static rendering when possible.
- Component composition.

Avoid:

- Unnecessary useEffect.
- Unnecessary useState.
- Client-side data fetching when server rendering is possible.
- Deep prop drilling.

Page requirements:

- Export metadata when applicable.
- Use semantic HTML.
- Keep page files focused on page composition.

Component requirements:

- Keep components small and reusable.
- Prefer shared sections over page-specific duplicates.
- Extract reusable UI when duplication appears.

Performance requirements:

- Minimize JavaScript shipped to the browser.
- Avoid unnecessary client boundaries.
- Avoid large dependencies for small problems.

Architecture requirements:

- Follow docs/architecture/frontend.md.
- Follow docs/architecture/components.md.
- Follow docs/architecture/folder-structure.md.

Never:

- Create duplicate page layouts.
- Create duplicate section components.
- Introduce new architectural patterns without approval.
