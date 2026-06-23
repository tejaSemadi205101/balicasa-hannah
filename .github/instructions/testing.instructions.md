---
applyTo: '**/*'
---

# Validation Rules

Do not automatically execute validation commands.

Validation commands require explicit approval unless specifically requested.

Allowed without approval:

- Static code analysis.
- Code review.
- Type inspection.

Requires approval:

- Build execution.
- Test execution.
- Performance audits.
- Dependency updates.

When implementation is complete:

Provide:

1. Files created.
2. Files modified.
3. Potential risks.
4. Recommended validation commands.

Example:

Files Modified:

- component-a.tsx
- page.tsx

Recommended Validation:

- pnpm lint
- pnpm build

Do not run them automatically.

Never:

- Fix unrelated issues.
- Expand task scope.
- Refactor unrelated files during validation.
