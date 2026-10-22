---
name: port-design-screen
description: Convert one design/*.dc.html screen into a React feature folder with Tailwind and ported animations. Use when building or rebuilding a screen from the design spec.
---

# Port a design screen

Input: the screen name, for example `Gallery`.

1. Read `design/<Screen>.dc.html` completely, then the matching section of `docs/SCREENS.md`.
2. List, before coding:
   - every visual element and its copy, exactly as written
   - every `@keyframes` with duration, delay, easing and fill mode
   - the logic in `renderVals()` and lifecycle methods, and which parts become hooks or pure functions
   - static numbers (positions, rotations, coordinates, delays) that belong in `layout.ts` or `constants.ts`
3. Create `src/renderer/src/features/<feature>/` with `<Screen>Screen.tsx`, `components/`, `hooks/` if needed, `layout.ts` or `constants.ts`, and `index.ts`.
4. Translate the markup:
   - inline styles become Tailwind utilities using tokens from `styles/theme.css`
   - `sc-for` becomes `.map` over typed data with stable `id` keys
   - `sc-if` becomes conditional rendering
   - handlers from `renderVals()` become component handlers or hook actions
   - duplicated `-a` and `-b` keyframes collapse into one, restarted with a React `key`
   - per-item delays and positions become CSS variables in `style`
5. Move keyframes into `styles/animations/<feature>.css` following `docs/ANIMATION_GUIDELINES.md`, and import the file from `styles/index.css` if it is not imported yet.
6. Personal text and data go into `content/`, not the component.
7. Add the reduced-motion behavior.
8. Register the route in `app/router.tsx` with the path from `app/paths.ts` if it is not there yet.
9. Run `npm run dev`, compare side by side with the design at 1366×768 and 1920×1080, and fix differences.
10. Run the `quality-check` skill.
