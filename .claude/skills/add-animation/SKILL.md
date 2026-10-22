---
name: add-animation
description: Add or change an animation or visual effect following the project's animation system. Use whenever keyframes, transitions or motion effects are added or modified.
---

# Add or change an animation

1. Read `docs/ANIMATION_GUIDELINES.md`.
2. Decide where it belongs:
   - used on two or more screens: `styles/theme.css` as `--animate-<name>` with its `@keyframes`
   - one screen only: `styles/animations/<feature>.css` inside its `@theme` block, name prefixed with the feature
   - mount or unmount choreography: `motion` with `AnimatePresence`
3. Animate only transform, opacity, filter or SVG stroke properties.
4. Timings needed in TypeScript go into the feature `constants.ts`.
5. Stagger with CSS variables, restart with a React `key`.
6. Add the reduced-motion behavior with `motion-reduce:` or `useReducedMotion`.
7. Check smoothness in `npm run dev`. If frames drop, reduce element count or remove `filter` from looping animations first.
8. Run the `quality-check` skill.
