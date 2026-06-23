# Execution Policy

## Purpose

This document defines the operational boundaries for all AI agents working within this repository.

The primary objective is to ensure predictable, minimal, and safe changes.

Agents must prioritize task completion while minimizing unintended side effects.

---

## Core Principle

Implement only what is requested.

Do not expand scope.

Do not introduce unrelated improvements.

Do not perform speculative refactoring.

---

## Scope Control

Agents may only modify files directly related to the assigned task.

Before making changes:

1. Identify the requested outcome.
2. Identify the minimum required files.
3. Restrict modifications to those files.
   Changes outside the immediate task scope require explicit approval.

---

## Safe Operation Mode

Default execution mode is Safe Mode.

In Safe Mode:

Allowed:

- Read files
- Create required files
- Edit requested files
- Update direct dependencies of the task
  Not Allowed:

- Delete files
- Rename files
- Move files
- Install dependencies
- Upgrade dependencies
- Modify infrastructure
- Modify deployment configuration
- Modify CI/CD configuration
  Unless explicitly requested.

---

## Architecture Preservation

Agents must preserve the existing architecture.

When architecture issues are discovered:

- Report them
- Explain impact
- Suggest improvements
  Do not automatically apply architectural changes.

---

## Error Handling

When an issue is encountered:

1. Explain the issue.
2. Explain root cause.
3. Propose a fix.
   Do not execute corrective actions beyond task scope.

---

## Principle of Least Change

Prefer:

- Smaller changes
- Localized changes
- Existing patterns
  Avoid:

- Broad refactors
- Cross-feature modifications
- Unnecessary abstractions

---

## Decision Rule

When uncertain:

Stop.

Ask for clarification.

Never assume intent.
