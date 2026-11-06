# Project: [NAME]

> Works with Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI and any agent that reads AGENTS.md.
> Not set up yet? If this file still has [placeholders], tell the user to say **kickoff** before starting work.

## Overview
[One line: what it is, who it's for] · Live: [url] · Staging: [url]

## Stack
- Framework: Astro [version]
- CMS: [Sanity | EmDash] · Content model: [main types and how they relate]
- Styling: [Tailwind / plain CSS / ...] · UI islands: [none / React / ...]
- Hosting: [Vercel / Netlify / Cloudflare] · Rebuild on publish: [webhook / live, n/a] · Repo: [remote] · Branches: [main = prod, dev = staging]

## Commands
- Install: `[...]` · Dev: `[...]` · Build: `[...]` · Test/lint: `[...]`

## Scope & priorities
- Current scope: [new build / redesign / fixes / feature]
- Deadline: [...] · Definition of done: [...]

## Never without asking
- Push to production / deploy (`sanity deploy`, `wrangler deploy`, hosting deploys) · Change forms that email clients
- Delete files, content or datasets · Run remote DB commands · Add new dependencies, plugins or apps · Force-push or hard-reset git
- [project-specific items]

## Do not touch
- [fragile files/areas]

## Never read (wastes tokens, no useful info)
`node_modules/`, `dist/`, `.astro/`, `.wrangler/`, `.sanity/`, `studio/dist/`, `*.min.js`, `*.map`, lockfiles. Never read `.env*` or `.dev.vars`.

## Working style (keeps token use low)
- Search first (grep/find), then read only the relevant line ranges. Never read a whole large file to find one thing.
- Don't re-read files already in context unless they changed.
- Ask one short question when requirements are unclear instead of guessing and redoing.
- Plan in 3-5 lines before any multi-file change; batch related edits together.
- Replies: brief. Show only changed code, no restating unchanged code, no long summaries.

## Style rules (read only the one you need)
Before editing a file type for the first time in a session, read its rule file in `.ai/rules/`:
`general.md` (always) · `astro.md` (all Astro work) · `sanity.md` (Sanity projects) · `emdash.md` (EmDash projects) · `frontend.md` (JS/TS and framework islands)
Read only the CMS file for this project's CMS.

## Project memory
- At the start of a session, read `.ai/memory/STATUS.md` (short) before the first task.
- Read `.ai/memory/DECISIONS.md` and `.ai/memory/SESSIONS.md` only when you need history.
- If `.ai/memory/NOTES.local.md` exists, it holds the current developer's personal notes.
- Never write secrets, passwords, API keys or client personal data into memory files.

## Commands the user can type
When the user's message is one of these words, follow the matching file exactly:
- **kickoff** → `.ai/prompts/kickoff.md` (first-time project setup)
- **resume** → `.ai/prompts/resume.md` (start of a session)
- **wrap** → `.ai/prompts/wrap.md` (end of a session; saves memory)
- **deploy check** → `.ai/prompts/deploy-check.md`
- **qa review** → `.ai/prompts/qa-review.md`
- **style review** → `.ai/prompts/style-review.md`
