# Deploy check

Use commands and `git diff`, not whole-file reads:
1. `git status`: all uncommitted changes are intentional
2. The build command from AGENTS.md passes
3. No debug output in the diff (`console.log`, `var_dump`, `print_r`, `dd(`)
4. Environment values (API keys, URLs) suit the target environment; don't print their values
5. Run the QA review (`.ai/prompts/qa-review.md`) on changed files

Output one line per item: ✅ / ⚠️ / ❌ + short reason.
