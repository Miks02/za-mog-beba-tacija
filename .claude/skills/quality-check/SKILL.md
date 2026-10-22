---
name: quality-check
description: Run the full quality gate (format, lint, typecheck, tests, build, no-comments check, structure rules) before every commit or when the user asks to verify the project.
---

# Quality check

Run in order and fix every failure before continuing:

1. `npm run format`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test`
5. `npm run build`
6. No comments in source:
   `rg -n --glob '!**/env.d.ts' -e '^\s*//' -e '\s//\s' -e '^\s*/\*' -e '\{/\*' src`
   must print nothing.
7. No raw hex colors outside the theme:
   `rg -n --glob '!**/styles/theme.css' -e '#[0-9A-Fa-f]{3,8}\b' src/renderer/src`
   must print nothing. SVG fills and strokes use `fill-*` and `stroke-*` utilities or `var(--color-*)`.
8. Component size: list `.tsx` files over 150 lines with
   `find src -name '*.tsx' -exec wc -l {} + | sort -n | tail -n 10`
   and split any that are over the limit.
9. No cross-feature imports:
   `rg -n "from '@renderer/features/" src/renderer/src/features`
   must print nothing. Features are imported only by `app/router.tsx`.
10. `git status` and review the diff. Commit with a Conventional Commits message.

Report the result of each step in one line.
