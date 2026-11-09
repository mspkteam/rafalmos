**Last updated:** 2026-11-09 by Claude
**Phase:** all 5 pages built (Astro 7, static, no CMS yet) — not yet pushed since client Revision 03

**Done recently:**
- Home page from Claude Design "ARTE ALGO Home" (revision 03) + client revisions 02 and 03 (`src/pages/index.astro`, `src/components/home/*`).
- 2026-11-09 inner pages in the home style: `/about`, `/studio`, `/media`, `/contact` (`src/components/{about,studio,media,shared}`). Shared: `PageHero`, `Lightbox` (prev/next, browses visible items), `VideoPlayer` (click-to-play), `SplitHeading as="h1"`.
- Motion (`src/scripts/motion.ts`, GSAP + ScrollTrigger + Flip): reveals, split titles, floaters, parallax (`data-parallax`, `data-speed`, `data-hero-bg`), pinned horizontal timeline (`data-hscroll`, desktop ≥900px only), stacking cards (`data-stack-card`), Flip gallery filter, hover photo preview (`data-hover-reveal`), batch grid reveal (`data-batch`), page-transition curtain (`data-curtain`, CSS safety net). Mouse effects desktop/fine pointer only. All respects prefers-reduced-motion.
- Media library: `src/data/media.ts` is generated from `images/WEBSITE/MEDIA` (titles restored from Drive filenames, category stage/tv/photoshoot). Videos in `public/video/` (113 MB total).
- Client rule: never repeat an image on the home page. Founder photos = "Moño pulido…" (Rafa), "Persona invertida…" (Paco).
- Scoped-style gotcha: a class passed into a child component (e.g. `SplitHeading class="title"`) needs `:global(.title)` in the parent's styles.

**Next up:**
- Client review of inner-page copy (About/Studio/Contact use their existing text + titles; placeholder-free but short).
- Push to GitHub (→ Vercel deploy) once approved.
- Run **kickoff** to fill AGENTS.md (CMS, hosting, domain → set `site` in astro.config.mjs).

**Blockers / waiting on client:**
- Instagram URL (`src/data/site.ts`), confirm media caption titles, "ZIRCUS_FLASHDAY 2026" red photo looks rotated in the source file, Spanish version, real About page copy (ClickUp not connected to this session).
