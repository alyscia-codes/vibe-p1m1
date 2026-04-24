# RUNBOOK — Claude API Sandbox

## Setup

1. Clone the repo
2. Confirm Node.js is installed: `node --version` (v18+ recommended)

No package installation required — the sandbox has no dependencies.

## Run Commands

```bash
# Verify sandbox is running
node index.js

# Print a greeting before the OK line
node index.js --name Alys

# Print timestamp in UTC (ISO 8601)
node index.js --utc
```

## Feature Usage Examples

| Flag | Example | Result |
| ------ | --------- | -------- |
| _(none)_ | `node index.js` | Prints title, timestamp, and `OK: sandbox running` |
| `--name <value>` | `node index.js --name Alys` | Prints `Hello, Alys!` before `OK: sandbox running` |
| `--name` _(no value)_ | `node index.js --name` | Prints usage hint and exits with code 1 |
| `--utc` | `node index.js --utc` | Prints timestamp as UTC ISO 8601 string instead of local time |

## Safety Rules

1. **Allowed by default:** Claude may edit only `./` (this repo folder) and only the files we explicitly ask it to touch; it should propose a plan before multi-file edits.
2. **Never without explicit permission:** Claude must not run destructive commands (`rm`, `reset`, rewrite history), modify global/system files, access other directories, or install/execute new tools without asking.
3. **Secrets prevention:** No keys/tokens in files; use `.env` (git-ignored), never paste secrets into chat or output, and run a quick `grep` scan before commits.
