# Dependency Policy

## Purpose

This document defines rules for managing dependencies in the repository.

Agents must maintain dependency stability and security.

---

## Dependency Changes

Agents must not add, remove, or update dependencies without explicit approval.

---

## Adding Dependencies

If a new dependency is required:

1. Explain why it is needed.
2. Provide the package name and version.
3. Explain any alternatives considered.
4. Request approval.
   Do not install automatically.

---

## Updating Dependencies

Dependency updates require approval.

If an update appears necessary:

1. Report the current version.
2. Report the target version.
3. Explain the reason (security, bug fix, feature).
4. Request approval.

---

## Removing Dependencies

Agents must never remove dependencies without approval.

If removal appears necessary:

1. Explain why.
2. Explain impact on the codebase.
3. Request approval.

---

## Lockfile Integrity

Agents must never modify lockfiles directly.

Lockfiles are managed by the package manager.

---

## Version Pinning

Prefer exact versions over ranges.

Avoid wildcard versions (\*, ^, ~) unless approved.

---

## Security Vulnerabilities

If vulnerabilities are detected:

1. Report the vulnerability.
2. Explain the severity.
3. Propose a remediation plan.
4. Request approval.
   Do not run automated fixes (npm audit fix, pnpm audit fix) without approval.

---

## Peer Dependencies

Respect peer dependency requirements.

Do not force incompatible versions.

---

## Bundle Size Impact

Consider bundle size impact before adding dependencies.

Report estimated size increase for new dependencies.
