# Developer Guide: Starting an Astro Project with This Template

Follow these steps in order for every new Astro + Sanity or Astro + EmDash project.
This template is the starting point; don't skip steps, even on small builds.

---

## Part 1 · One-time machine setup (do once)

1. Install **Node.js LTS** and **Git**. Check with `node -v` and `git --version`.
2. Install your AI tool: Claude Code, Codex, Cursor, or VS Code with GitHub Copilot.
3. Create the accounts you need:
   - **Sanity** account (sanity.io) for Sanity projects
   - **Cloudflare** account for EmDash projects (or a Node host with SQLite)
   - **GitHub** access to the team organisation
4. Set your Git identity: `git config --global user.name "Your Name"` and `user.email`.

---

## Part 2 · Create the project

Pick **one** track.

### Track A: Astro + Sanity

1. Create the Astro site:
   ```
   npm create astro@latest <project-name>
   ```
   Choose the minimal/empty template, TypeScript **strict**, install dependencies, initialise git.
2. `cd <project-name>` and create the Studio inside it:
   ```
   npm create sanity@latest -- --output-path studio
   ```
   Choose "create new project", dataset `production`, TypeScript, clean template.
3. Connect Astro to Sanity:
   ```
   npx astro add @sanity/astro
   ```
   Put the project ID and dataset in `.env` (copy to `.env.example` with values blanked).
4. In sanity.io/manage → your project → API → CORS origins, add `http://localhost:4321` (and the live URL later).
5. Install the Portable Text renderer: `npm i astro-portabletext` and `@sanity/image-url` for images.
6. Run both:
   - Site: `npm run dev` (root)
   - Studio: `cd studio && npm run dev`

### Track B: Astro + EmDash

1. Create the project with EmDash's scaffolder:
   ```
   npm create emdash@latest
   ```
   Pick a starter template. EmDash is an Astro integration, so this **is** your Astro project.
2. `cd` into it and follow the starter's README for local dev (it runs locally on SQLite).
3. Open the admin panel, create your collections, then generate types:
   ```
   npx emdash types
   ```
4. **Pin the EmDash version** in `package.json` (remove `^`). It's beta; surprise upgrades break things.
5. Keep local secrets in `.dev.vars` / `.env`, never in code.

---

## Part 3 · Add the AI template

1. Copy **everything** from this template into the project root, including hidden folders (`.ai/`, `.claude/`, `.github/`) and dotfiles.
2. If the project already has a `.gitignore`, **merge** ours into it instead of overwriting.
3. Delete the CMS rule file you are not using (`.ai/rules/sanity.md` or `.ai/rules/emdash.md`).
4. Make the first commit: `git add . && git commit -m "[setup] astro + <cms> + ai template"`.

---

## Part 4 · Kickoff with your AI tool

1. Open the project in your AI tool and type: **`kickoff`** (Claude Code: `/kickoff`).
2. It reads your config files, then asks the missing questions **in one message**. Answer all of them in one reply. Have these ready:
   - Project/topic name and one-line purpose
   - Content model: types, fields, relations (e.g. Property → Agent, Treatment → Practitioner)
   - Pages in scope and design references
   - Hosting and how the site updates on publish
   - Deadline and definition of done
3. Review the filled-in `AGENTS.md`. Fix anything wrong by hand; this file drives everything.
4. Commit: `[setup] project brief and memory`.

---

## Part 5 · Build order (follow this sequence)

Content first, pages second. Building pages before the content model causes rework.

1. **Content model:** Sanity schemas or EmDash collections, with validation and previews. Regenerate types.
2. **Seed content:** enough realistic sample content for every type (at least 3 items each).
3. **Layout & SEO base:** `BaseLayout`, header, footer, `<SEO>` component, site settings from the CMS.
4. **Pages:** homepage sections, list pages, detail pages, 404, empty states.
5. **Forms:** contact/enquiry form with validation and a success state.
6. **Polish:** responsive check at 375px, 768px and 1440px, accessibility, images, Lighthouse.
7. **Deploy:** staging first, then live (ask the team lead before any production deploy).

---

## Part 6 · Daily workflow

| When | Type this |
|---|---|
| Start of day/session | `resume` |
| Finished a feature | `qa review`, then fix |
| Before committing | `style review` |
| End of session | `wrap`, then commit (include `.ai/memory/`) |
| Switching to an unrelated task | `wrap`, then start a fresh chat |
| Before deploying | `deploy check` |

Commit messages: `[area] short description`, e.g. `[schema] add agent reference to property`.

---

## Part 7 · Token-saving habits

- One task per chat. Start a fresh chat for unrelated work instead of continuing a long one.
- Be specific: name the file, page or component and the exact expected result.
- Paste only the relevant error lines, not entire logs.
- Point the AI to the file instead of letting it search the whole repo.
- Never paste passwords, tokens or API keys into the chat or memory files.

---

## Part 8 · Definition of done (check before submitting)

- [ ] Every client-facing text, image and section is editable in the CMS
- [ ] Non-developer handoff test: someone else can make 5 content changes without help
- [ ] Responsive at mobile, tablet and desktop; no console errors
- [ ] `npx astro check` and the build pass
- [ ] Lighthouse: Performance, Accessibility, SEO and Best Practices all 90+
- [ ] SEO fields per page, sitemap, Open Graph images
- [ ] Forms work and show success/error states
- [ ] `.env.example` lists every variable; no secrets committed
- [ ] `.ai/memory/` is up to date (`wrap` run) and DECISIONS.md explains key choices
- [ ] Short project README: how to run it, how to deploy, which CMS and why

---

## If something goes wrong

- **EmDash bug or missing feature:** check the EmDash docs/repo issues first, note the workaround in `.ai/memory/DECISIONS.md`, and tell the team; others will hit it too.
- **AI going in circles:** run `wrap`, start a fresh chat, and give it a more specific instruction.
- **Unsure about a deploy, data deletion or anything on production:** stop and ask the team lead.
