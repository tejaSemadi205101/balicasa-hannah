# File Modification Policy

## Purpose

This document defines file modification boundaries.

Agents must preserve repository integrity.

---

## Modification Scope

Only modify files required to complete the assigned task.

Agents must avoid touching unrelated files.

---

## Protected Files

The following files require explicit approval:

- package.json
- pnpm-lock.yaml
- package-lock.json
- yarn.lock
- tsconfig.json
- next.config.ts
- vercel.json
- eslint.config.\*
- prettier.config.\*
- .env\*
- github workflows
- CI/CD configuration

---

## File Creation

New files may be created only when:

- Required by the task
- Consistent with project architecture
  Avoid unnecessary file creation.

---

## File Deletion

Agents must never delete files without explicit approval.

If deletion appears necessary:

1. Explain why.
2. Explain impact.
3. Request approval.

---

## File Renaming

Agents must never rename files automatically.

Renaming requires approval.

---

## Refactoring Restrictions

Agents may not perform opportunistic refactoring.

Examples:

Not Allowed:

- Renaming unrelated variables
- Reorganizing folders
- Replacing architecture patterns
- Formatting unrelated files
  Allowed:

- Direct fixes required for the requested task

---

## Change Minimization

Prefer:

- Small diffs
- Targeted edits
- Incremental improvements
  Avoid:

- Large repository-wide changes

---

## Traceability

Every modified file must have a clear relationship to the requested task.

If a relationship cannot be justified:

Do not modify the file.
