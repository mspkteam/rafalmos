# QA review

Work from `git diff`; read only changed files and the lines around changes.

Check against the task requirements for:
- Broken responsive layouts (mobile/tablet/desktop)
- Console errors, PHP warnings, type errors
- Edge cases: empty states, long text, missing images, no results
- Anything contradicting `.ai/rules/` or the "Never without asking" list in AGENTS.md

Report as a checklist, max 15 lines: ✅ passed / ⚠️ needs attention / ❌ broken, with file:line. Don't fix anything unless asked.
