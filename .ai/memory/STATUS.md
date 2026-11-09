**Last updated:** 2026-11-09 by Claude
**Phase:** all 5 pages built (Astro 7, static, no CMS yet) and pushed to Vercel. Bricks port live on staging (usama.mssoftsites.com/rafaolmos), matching Vercel incl. motion.

**Done recently:**
- 2026-11-09 About rethink: founders as alternating rows with a sticky 4:5 portrait (`AboutFounders.astro`); Creations + Collaborations rows no longer pin the page — they are drifting drag/swipe strips (`ProjectCards.astro`, `data-strip`; drift pauses while a card is open). Same change applied to the Bricks About page.
- 2026-11-09 cleanup: removed unused components (Timeline, WhatWeDo, Collaborations, StudioHero, Uses, Gallery, FlashDay, Videos, VideoPlayer), their only-used assets and unused videos (flashday, merchandise, studio-vertical, teaser-full); removed dead motion code (pinned hscroll, Flip filter, video player, stacking cards, hover preview). They remain in git history.
- 2026-11-09 client briefs from ClickUp task "rafaolmos - Details" applied to About (approved copy in `src/data/about.ts`), Studio and Media (Instagram invite hero + one continuous mosaic).
- Selected CVs are compiled only from facts in the About brief — ask the client to confirm/extend.
- Home page from Claude Design "ARTE ALGO Home" (revision 03) + client revisions 02 and 03 (`src/pages/index.astro`, `src/components/home/*`).
- Motion (`src/scripts/motion.ts`, GSAP + ScrollTrigger): reveals, split titles, floaters, parallax (`data-parallax`, `data-speed`, `data-hero-bg`), sideways strips (`data-strip`), batch grid reveal (`data-batch`), lightbox, page-transition curtain (`data-curtain`, CSS safety net). Mouse effects desktop/fine pointer only. All respects prefers-reduced-motion.
- Bricks staging gets the same motion via the child theme (`bricks-child/aa/aa-site.js` = a small prelude + this `motion.ts`); after changing `motion.ts`, the staging bundle must be rebuilt and re-uploaded.
- Media library: `src/data/media.ts` is generated from `images/WEBSITE/MEDIA`. Videos in `public/video/` (hero teaser only).
- Client rule: never repeat an image on the home page. Founder photos = "Moño pulido…" (Rafa), "Persona invertida…" (Paco).
- Scoped-style gotcha: a class passed into a child component (e.g. `SplitHeading class="title"`) needs `:global(.title)` in the parent's styles.

**Next up:**
- Client review of the site (Vercel) and staging.
- Contact form on staging: confirm SMTP before relying on email to info@artealgo.com (submissions are also saved in WP).
- Run **kickoff** to fill AGENTS.md (CMS, hosting, domain → set `site` in astro.config.mjs).

**Blockers / waiting on client:**
- Instagram URLs — company AND separate Studio account (`src/data/site.ts`), confirm media caption titles, "ZIRCUS_FLASHDAY 2026" red photo looks rotated in the source file, Spanish version, confirm founder CVs.
