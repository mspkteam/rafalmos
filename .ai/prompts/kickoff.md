# Kickoff: project setup

Set this project up with as few tokens and round-trips as possible.

1. **Detect first (cheap reads only).** List the top level of the repo and read only manifest files that exist: `package.json`, `astro.config.*`, `studio/sanity.config.*`, `studio/package.json`, `wrangler.*`, `tsconfig.json`, `.git/config` remote. From these, detect the Astro version, the CMS (Sanity or EmDash), the styling setup and the hosting adapter. Run `git branch -a` if git exists. Do not open source files.

2. **Ask everything still unknown in ONE message**, numbered, skipping what you detected (state what you detected in one line so the user can correct it):
   1. Project name, client, one-line purpose, live and staging URLs
   2. CMS: Sanity or EmDash (confirm detected); styling: Tailwind or plain CSS; any UI framework islands
   3. Content model: main content types, their fields, and how they relate (e.g. property → agent)
   4. What we're doing: new build, redesign, fixes, or feature? List the pages/features in scope
   5. Design source: Figma link, reference sites, or none
   6. Hosting (Vercel / Netlify / Cloudflare), how the site updates when content is published, branch rules
   7. Commands for install, dev, build, test/lint (confirm detected)
   8. Anything off-limits, and actions that need approval first
   9. Deadline, priorities, and what "done" means for this phase
   10. Client constraints (revision limits, brand rules, things they're sensitive about)

3. **Write once the user answers:**
   - Fill every placeholder in `AGENTS.md`. Keep it under 80 lines; drop lines that don't apply. Don't touch the sections below "Working style", except: in "Style rules", remove the CMS rule file this project doesn't use.
   - Set `.ai/memory/STATUS.md`: phase and the next 3-5 steps from the scope.
   - Add first entries to `.ai/memory/DECISIONS.md` for choices made (CMS, hosting, styling, content model).
   - Put the agreed content model as the first steps in STATUS.md "Next up" (schemas/collections before pages).
   - If the stack isn't covered by `.ai/rules/`, say so in one line; don't create rule files unless asked.

4. Finish with a 3-line summary and the first suggested task. Nothing else.
