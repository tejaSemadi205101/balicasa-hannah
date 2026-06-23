# Git Policy

## Purpose

This document defines repository safety rules.

Agents must treat source control as protected infrastructure.

---

## Read Access

Agents may inspect git history when necessary for understanding context.

---

## Restricted Actions

The following actions require explicit approval:

- git add
- git commit
- git push
- git merge
- git pull
- git fetch
- git rebase

---

## Forbidden Actions

Agents must never execute:

- git reset --hard
- git clean -fd
- git clean -fdx
- git push --force
- git branch -D
- git checkout .
- git restore .
  Unless explicitly instructed.

---

## Commit Responsibility

Agents may propose commit messages.

Agents may not create commits automatically.

---

## Branch Safety

Agents may not:

- create branches
- delete branches
- switch branches
  Without approval.

---

## Repository Recovery

If repository issues are detected:

1. Stop execution.
2. Report issue.
3. Explain potential impact.
4. Await instructions.
   Do not attempt automatic recovery.

---

## Principle

Protect repository integrity above task completion.

A delayed task is preferable to irreversible repository damage.
