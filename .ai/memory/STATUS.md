**Last updated:** 2026-11-09 by Claude
**Phase:** all 5 pages built (Astro 7, static, no CMS yet) — About/Studio/Media rebuilt from the client's ClickUp briefs and pushed 2026-11-09. Next: Bricks port on staging.

**Done recently:**
- 2026-11-09 client briefs from ClickUp task "rafaolmos - Details" applied: About (approved copy in `src/data/about.ts`; Creations + Collaborations as `ProjectCards` with pinned horizontal scroll + click/tap reveal; founder bios + "View selected CV" dialogs; Next Chapter closing), Studio (door hero, Training Space with auto-drifting Home studio strip, Life at the Studio, Community, Merchandise, Follow on Instagram), Media (Instagram invite hero + one continuous mosaic; filters and videos removed). Old components Timeline, WhatWeDo, Collaborations, StudioHero, Uses, Gallery, FlashDay, Videos are now unused (not deleted).
- Selected CVs are compiled only from facts in the About brief — ask the client to confirm/extend.
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
- Instagram URLs — company AND separate Studio account (`src/data/site.ts`), confirm media caption titles, "ZIRCUS_FLASHDAY 2026" red photo looks rotated in the source file, Spanish version, real About page copy (ClickUp not connected to this session).
