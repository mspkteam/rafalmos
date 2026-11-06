**Last updated:** 2026-11-06 by Claude
**Phase:** home page built (Astro 7, static, no CMS yet)

**Done recently:**
- Home page implemented from Claude Design "ARTE ALGO Home" (revision 03) + client notes "Revision 02 — Direct Changes" (`src/pages/index.astro`, `src/components/home/*`).
- Motion uses GSAP + ScrollTrigger (`src/scripts/motion.ts`, client approved the dependency): header solid after 80px, scroll-scrubbed floaters/parallax, reveals, drag/swipe strips, media lightbox. Respects prefers-reduced-motion (video still loops).
- Mouse effects (desktop/fine pointer only): custom cursor (`data-cursor` = label), magnetic `.btn`/`.line-link`, `data-tilt` 3D tilt, per-section `<Spotlight>`, `data-depth` mouse parallax. Studio: outlined bg word, split-letter title (`SplitHeading`), photo wipes, numbered frames, strip progress line.
- Founder photos = "Moño pulido…" (Rafa) and "Persona invertida…" (Paco). Client rule: never repeat an image on the page, so only 2 floaters remain (Rafa jump, Paco flip).
- Teaser starts at 0:06 of the original: `public/video/teaser.mp4` (1080p CRF 23, 32 MB) + `teaser-sm.mp4` (mobile, 1080p CRF 28, 19 MB) + poster.

**Next up:**
- Run **kickoff** to fill AGENTS.md (CMS, hosting, domain → set `site` in astro.config.mjs).
- About / Studio / Media / Contact pages (nav currently uses home anchors).

**Blockers / waiting on client:**
- Instagram URL (`src/data/site.ts`), final media selection + any video stills, CV links, Spanish version.
