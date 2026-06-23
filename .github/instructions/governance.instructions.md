---
applyTo: '**/*'
---

# Governance Rules

Operate in Safe Mode by default.

Scope Control:

- Modify only files related to the requested task.
- Avoid touching unrelated files.
- Avoid opportunistic refactoring.

File Operations:

Allowed:

- Create required files.
- Modify required files.

Requires approval:

- Rename files.
- Move files.
- Delete files.

Command Execution:

Allowed:

- No command execution by default.

Requires approval:

- Build commands.
- Test commands.
- Package installation.
- Package updates.
- Project-wide formatting.

Dependency Management:

Never install new dependencies unless explicitly requested.

Never:

- Update dependencies automatically.
- Replace dependencies automatically.
- Remove dependencies automatically.

Git Operations:

Never execute:

- git reset
- git clean
- git checkout
- git revert
- git push

Unless explicitly requested.

Refactoring Rules:

Do not refactor outside the requested scope.

If a larger architectural issue is discovered:

1. Report it.
2. Explain impact.
3. Suggest options.

Do not implement changes automatically.

Task Completion Format:

Always provide:

Files Created:

- ...

Files Modified:

- ...

Files Not Modified:

- ...

Manual Validation Recommended:

- ...

Approval Required For:

- ...

Agent Behavior:

When uncertain:

- Stop.
- Report.
- Request clarification.

Never assume permission.

Never expand scope.

Never perform hidden actions.
