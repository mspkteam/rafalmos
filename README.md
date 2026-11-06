# AI Coding Starter Template: Astro + Sanity / Astro + EmDash (Morosoft / Web Techies)

One setup that works with **Claude Code, Codex, Cursor, GitHub Copilot and Gemini CLI**.
All instructions live in one place (`AGENTS.md` + `.ai/`); small adapter files point each tool to it.

**New developer? Follow `DEVELOPER-GUIDE.md` step by step.** This README is the quick reference.

## First time on a project
1. Copy everything (including hidden folders and dotfiles) into the project root.
2. Open the project in your AI tool and type **`kickoff`** (in Claude Code you can also use `/kickoff`).
   It detects the stack, asks the missing setup questions in one message, then fills `AGENTS.md` and the memory files.
3. Commit the result so the whole team, whatever tool they use, shares the same context.

## Every working session
| When | Type this |
|---|---|
| Start of session | `resume` |
| Switching to an unrelated task | `wrap`, then start a new chat/session |
| End of session | `wrap`, then commit |
| Before marking a task done | `qa review` |
| Before committing | `style review` |
| Before deploying | `deploy check` |

## Folder layout
```
AGENTS.md                      ← main instructions (the only file you edit by hand)
.ai/
  memory/   STATUS.md          ← current status, read at session start (kept short)
            DECISIONS.md       ← why things are the way they are (read on demand)
            SESSIONS.md        ← session log (read on demand)
            NOTES.local.md     ← your personal notes (gitignored; rename the .example)
  rules/    general, astro, sanity, emdash, frontend   ← read only when relevant (delete the CMS you don't use)
  prompts/  kickoff, resume, wrap, deploy-check, qa-review, style-review
CLAUDE.md                      ← Claude Code: imports AGENTS.md + STATUS.md
GEMINI.md                      ← Gemini CLI: imports AGENTS.md
.github/copilot-instructions.md← Copilot: points to AGENTS.md
.claude/                       ← Claude-only extras: /commands, review subagents, permissions
.cursorignore, .geminiignore   ← stop those tools reading heavy or secret files
```
Codex, Cursor and Copilot read `AGENTS.md` natively.

## Tool notes
- **Claude Code:** slash commands and two review subagents (style review runs on the cheaper Haiku model). `settings.json` blocks secrets, `rm -rf` and force-push, and asks before `git push`.
- **Cursor:** `.cursorignore` keeps build folders, lockfiles and secrets out of its index.
- **Copilot:** reads `AGENTS.md` and `.github/copilot-instructions.md`. Content exclusion for secrets is set in the GitHub repo/org settings.
- **Codex:** reads `AGENTS.md`. Approval behaviour is set in your Codex config, not in this repo.
- **Gemini CLI:** reads `GEMINI.md` (imports `AGENTS.md`) and respects `.geminiignore`.

## Token-saving habits (all tools)
- One task per chat/session. Start fresh for unrelated tasks instead of continuing a long chat.
- Give precise prompts: file names, page names, exact expected behaviour.
- Paste only the relevant error lines, not entire logs.
- Point the AI to the file instead of letting it search the whole repo.
- Never paste passwords or API keys into the chat or memory files.
