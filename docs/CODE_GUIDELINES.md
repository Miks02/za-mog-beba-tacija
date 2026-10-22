# Code guidelines

## General

- No comments in code. If something needs explaining, rename it or extract a well-named function or constant.
- Small units: components under ~150 lines, functions under ~40 lines, at most 3 levels of JSX nesting before extracting a component.
- No dead code, no commented-out code, no `console.log` in committed code.
- Prefer early returns over nested conditionals.
- No magic numbers in components. Timings, sizes and positions go into the feature's `constants.ts` or `layout.ts`.

## TypeScript

- `strict: true`. No `any`, no `@ts-ignore`, no `as unknown as`. Non-null assertions only when the value is guaranteed by construction.
- Use `type` for props and data shapes. Use `interface` only when declaration merging is required (the `Window` augmentation in preload typings).
- Content files use `as const satisfies ReadonlyArray<OpenWhenNote>` so data is both literal and validated.
- Shared domain types live in `src/renderer/src/types/`. Feature-local types stay in the feature.
- Exhaustive `switch` with a `never` check where a union is switched on.

## React

- Function components only, named exports only. No `export default` except where a tool requires it.
- Props: `type PolaroidProps = { … }` declared right above the component. No `React.FC`.
- Destructure props in the signature.
- Event handlers named `handleX` inside components, props named `onX`.
- Keep screens thin: a screen composes components and wires hooks, it does not contain long JSX trees or calculations.
- Logic that touches time, intervals or the DOM lives in a hook. Every effect cleans up its timers and listeners.
- Use `key` to restart CSS animations when content changes (a new reason, a new photo in the lightbox). Do not toggle duplicate class names.
- Lists rendered from content always use the item `id` as `key`, never the index.
- `useMemo` and `useCallback` only for real costs or stable identities passed to memoized children. Generated star fields and petal lists are memoized once.
- Accessibility is part of correctness: real `button` and `a` elements, `aria-label` on icon-only buttons, `aria-live="polite"` where text changes in place, `role="dialog"` with `aria-modal` and focus handling for the lightbox.

## State

| Kind | Where |
|---|---|
| UI state of one component | `useState` in that component |
| State of one screen | the screen or a feature hook |
| Shared across screens | zustand store in `store/` |
| Survives restarts | zustand with `persist`, key prefixed `beba-tacije:` |

Stores expose actions, components never call `setState` on a store directly. Select narrowly: `useAudioStore((s) => s.isPlaying)`.

## Naming

| Thing | Convention | Example |
|---|---|---|
| Component file | PascalCase | `LoadingBar.tsx` |
| Hook | camelCase with `use` | `useTogetherTime.ts` |
| Store | camelCase with `Store` | `audioStore.ts`, hook `useAudioStore` |
| Pure module | camelCase | `dateSr.ts` |
| Feature folder | kebab-case | `open-when/` |
| Constants | SCREAMING_SNAKE_CASE for primitives, camelCase for objects | `SPLASH_EXIT_DELAY_MS`, `collageLayout` |
| CSS class for keyframe helpers | kebab-case with feature prefix | `splash-stem`, `sky-shooting-star` |

## Imports

- Use the `@renderer/*` alias inside the renderer, relative imports only within the same feature.
- Order: node and electron, external packages, `@renderer/*`, relative, then styles. Prettier and ESLint enforce this.
- No barrel files except `features/<name>/index.ts`.

## Main and preload

- Channel names and payload types come from `src/shared/ipc.ts`. No string literals for channels anywhere else.
- `ipcMain.handle` for request/response, never `sendSync`.
- Preload exposes functions only, never `ipcRenderer` itself.

## Tests

- Vitest for `lib/` (date formatting, together-time math, seeded random) and for hooks with fake timers.
- File next to the unit: `togetherTime.test.ts`.
- Visual behavior is verified by running the app, not by snapshot tests.

## Git

- Conventional Commits: `feat:`, `fix:`, `refactor:`, `style:`, `chore:`, `docs:`, `test:`.
- One logical change per commit. The `quality-check` skill must pass before committing.
- Never commit `dist/`, `out/`, `node_modules/`, real personal photos are fine to commit only if the user says so.
