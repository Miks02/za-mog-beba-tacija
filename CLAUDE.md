# Beba Tacije

Full-screen desktop love app built with Electron, React 18, TypeScript (strict) and Tailwind CSS v4, scaffolded with electron-vite. It starts with Windows, plays an animated splash, then opens a home screen with six interactive sections. Development happens on Fedora Linux, the shipped build is a Windows NSIS installer.

## Read before working

| Topic | File |
|---|---|
| Folder structure, layers, data flow | `docs/ARCHITECTURE.md` |
| TypeScript, React, naming, state, git | `docs/CODE_GUIDELINES.md` |
| Tailwind, tokens, typography, accessibility | `docs/STYLE_GUIDELINES.md` |
| Keyframes, SVG motion, reduced motion | `docs/ANIMATION_GUIDELINES.md` |
| What every screen does, component breakdown | `docs/SCREENS.md` |
| Main process, preload, IPC, autostart, packaging | `docs/ELECTRON.md` |
| Visual source of truth | `design/*.dc.html` |
| How the finished app works | `SUMMARY.md` (written at the end of the build) |

## Hard rules

- No comments anywhere in source code: no `//`, no `/* */`, no JSX comments, no CSS comments. Names and small functions carry the meaning. The only exception is the `/// <reference …>` directive in `env.d.ts`.
- Personal text, dates, photos and music live only in `src/renderer/src/content/` and `src/renderer/src/assets/`. Components never hardcode them.
- Styling is Tailwind utilities plus tokens from `src/renderer/src/styles/theme.css`. No raw hex values in `className` or `style`; add a token first.
- One component per file, PascalCase file name, under ~150 lines. Split when it grows.
- The renderer never touches Node. Every native capability is an IPC channel declared in `src/shared/ipc.ts`, handled in `src/main/ipc.ts` and exposed through `src/preload/index.ts`.
- Zustand only for state shared across screens or persisted between launches. Everything else is local state.
- Every infinite or decorative animation stops under `prefers-reduced-motion`.
- UI copy is Serbian Latin with full diacritics (č, ć, š, ž, đ) and must match the design exactly.
- Fonts are bundled through @fontsource packages. Nothing loads from the network at runtime.
- Before every commit run the `quality-check` skill. Commit messages follow Conventional Commits.

## Commands

```
npm run dev          start with hot reload
npm run typecheck    TypeScript for main, preload and renderer
npm run lint         ESLint
npm run format       Prettier with the Tailwind class sorter
npm run test         Vitest
npm run build        typecheck and production build
npm run build:win    Windows NSIS installer in dist/
```

## Project skills

- `port-design-screen` turn a `design/*.dc.html` file into a React feature
- `add-screen` add a brand new screen end to end
- `edit-content` change texts, dates, photos or music
- `add-animation` add or change an animation the right way
- `quality-check` the gate before every commit
- `build-installer` produce and verify the Windows installer
