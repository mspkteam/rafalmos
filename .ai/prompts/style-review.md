# Style review

1. Get changed files with `git diff --name-only` (plus staged).
2. Read only the `.ai/rules/` files that match those file types.
3. Check the changed lines (not whole files) for naming, formatting, security and leftover debug code.
4. Report violations as `file:line — issue — fix`, max 15 lines. Don't edit files unless told to auto-fix.
