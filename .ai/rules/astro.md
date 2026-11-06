# Astro
Applies to: `**/*.astro`, `astro.config.*`, `src/**`

- Zero JS by default. Use `.astro` components; add a framework island (`client:visible` preferred over `client:load`) only where interactivity is needed.
- Every component has a typed `Props` interface. No `any`.
- Pages in `src/pages/`, layouts in `src/layouts/`, components in `src/components/` (grouped by section: `home/`, `blog/`, `shared/`).
- One `BaseLayout` with a shared `<SEO>` component: title, description, canonical, Open Graph, per-page values from the CMS.
- Local images through `astro:assets` `<Image />`; CMS images through the CMS image helper with explicit width, height and modern format. Always set `alt`.
- CMS fetching lives in `src/lib/` (one file of queries/helpers), never inline in pages.
- Every list page handles empty state; every dynamic route handles not-found (404).
- Styling: use the project's tokens (CSS variables or Tailwind theme). No hardcoded colours or spacing.
- Run `npx astro check` before marking a task done.
