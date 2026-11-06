# Wrap: end of session

1. **Overwrite** `.ai/memory/STATUS.md` (max 25 lines): today's date and the developer's name if known, phase, done recently, next up, blockers/waiting on client.
2. **Append** to `.ai/memory/SESSIONS.md`, max 5 lines:
   `### YYYY-MM-DD` then what changed (files/areas) and what's unfinished.
   If the log has more than ~40 entries, collapse the oldest into one summary line per month.
3. **Append** to `.ai/memory/DECISIONS.md` only if a real decision was made: `date — decision — reason`.
4. Never write secrets, passwords, API keys or client personal data into memory files.
5. If there are uncommitted changes, suggest a commit message in `[area] short description` format. Don't commit unless asked.

Reply: "Saved." plus the suggested commit message. Nothing else.
