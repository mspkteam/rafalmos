# EmDash (Astro + EmDash projects)
Applies to: `astro.config.*`, `src/**`, `plugins/**`, `wrangler.*`

- EmDash is in **beta**. Do not guess APIs from WordPress habits or memory. If unsure, check the official EmDash docs/repo (or the project's EmDash MCP server if connected) and say what you checked.
- Pin the `emdash` version in `package.json`; don't upgrade without asking. Log any bug or workaround in `.ai/memory/DECISIONS.md`.
- EmDash is an Astro integration configured in `astro.config.*`. Don't restructure that config without asking.
- Collections can be created in the admin UI. After any collection change, run `npx emdash types` and commit the generated types; code must use them.
- Query content with EmDash's helpers (e.g. `getEmDashCollection`) inside `src/lib/` wrappers, not inline in pages.
- Rich text is Portable Text; render it with one shared component.
- Plugins: request only the capabilities the plugin actually needs; keep each plugin small and single-purpose.
- Local secrets go in `.dev.vars` / `.env` (gitignored), never in code or memory files.
- Ask before any remote/production action: `wrangler deploy`, D1 commands with `--remote`, R2 deletes, migrations on production data.
