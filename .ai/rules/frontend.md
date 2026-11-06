# Frontend (JS/TS, React islands)
Applies to: `**/*.ts`, `**/*.tsx`, `**/*.js`, `**/*.jsx`, `**/*.astro`, `**/*.vue`

- 2-space indent, semicolons, single quotes (unless the project's formatter says otherwise).
- React: functional components and hooks only; split components past ~200 lines.
- Use existing design tokens/theme variables; no hardcoded colours, spacing or font sizes.
- Interactive elements must be keyboard-accessible (real buttons and links, not clickable divs).
- Follow the project's existing data-fetching pattern; no new libraries without asking.
- No `any` in TypeScript without a comment explaining why.
