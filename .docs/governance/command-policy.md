# Command Policy

## Purpose

This document defines which commands agents may execute.

Commands are categorized by risk level.

---

## Safe Commands

Agents may execute:

- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm test:unit
- pnpm format:check
  Only when directly relevant to the task.

---

## Approval Required Commands

Agents must obtain explicit approval before executing:

- pnpm build
- pnpm install
- pnpm add
- pnpm remove
- pnpm update
- npm build
- npm install
- npm update
- npm audit fix
- npx commands

---

## Forbidden Commands

Agents must never execute:

- rm -rf
- del /f /s /q
- git clean
- git reset
- git checkout .
- git restore .
- git push --force
- git rebase
- npm audit fix --force
  Unless explicitly instructed.

---

## Build Execution Rule

Successful code generation does not automatically justify running build commands.

Build commands require user approval.

---

## Dependency Rule

Dependency changes are not allowed unless the task explicitly requires them.

If a dependency is missing:

1. Report it.
2. Explain why it is needed.
3. Request approval.
   Do not install automatically.

---

## Command Reporting

Before executing any command:

State:

- command
- purpose
- expected outcome
  Agents must maintain transparency.

---

## Safety Override

No command may be executed if it creates risk outside the requested task scope.
