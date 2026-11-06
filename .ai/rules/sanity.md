# Sanity (Astro + Sanity projects)
Applies to: `studio/**`, `src/lib/sanity*`, `src/lib/queries*`

- Schemas live in `studio/schemaTypes/`, one file per type, written with `defineType` / `defineField`.
- Every field a client edits needs a `title`, a `description` if not obvious, and `validation` where it matters (required, max length, slug unique).
- Use `reference` for relations (e.g. property → agent). Never duplicate data across documents.
- Global content (header, footer, contact details, SEO defaults) goes in a `siteSettings` singleton.
- Homepage sections: an array of section objects so editors can reorder and toggle them.
- Give every document type a `preview` so the Studio list is readable for non-developers.
- GROQ: project only the fields the page needs (`{title, "slug": slug.current, ...}`); never fetch whole documents. Keep all queries in `src/lib/queries.ts`.
- After schema changes, regenerate types (`npx sanity schema extract` then `npx sanity typegen generate` in `studio/`) and use the generated types.
- Rich text is Portable Text; render it with a shared component, not ad-hoc HTML.
- The read token (if any) stays server-side. Never put a write token in client code or `PUBLIC_` env vars.
- Ask before running `sanity deploy`, `sanity dataset` commands, or anything that deletes content.
