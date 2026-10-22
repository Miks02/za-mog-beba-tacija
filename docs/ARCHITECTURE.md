# Architecture

## Layers

```
┌────────────────────────── Electron main (Node) ──────────────────────────┐
│ window lifecycle · single instance · autostart · keyboard shortcuts · IPC │
└───────────────▲──────────────────────────────────────────────────────────┘
                │ typed IPC channels from src/shared/ipc.ts
┌───────────────┴──────── preload (isolated, sandboxed) ───────────────────┐
│ contextBridge exposes window.api with a small typed surface              │
└───────────────▲──────────────────────────────────────────────────────────┘
                │ window.api
┌───────────────┴──────────────── renderer (React) ────────────────────────┐
│ app shell → router → feature screens → shared components                 │
│ content/ (data) · store/ (zustand) · hooks/ · lib/ (pure functions)      │
└──────────────────────────────────────────────────────────────────────────┘
```

Dependencies point downward only:

- `features/*` may import from `components/`, `hooks/`, `lib/`, `store/`, `content/`, `types/`, `assets/`.
- `components/` may import from `hooks/`, `lib/`, `types/`. Never from `features/`, `content/` or `store/`.
- `lib/` is pure TypeScript with no React and no side effects.
- One feature never imports from another feature. Shared pieces move to `components/` or `hooks/`.

## Folder structure

```
.
├── CLAUDE.md
├── SUMMARY.md                    written at the end of the build
├── electron.vite.config.ts       main, preload, renderer builds and Tailwind plugin
├── electron-builder.yml          Windows installer config
├── build/icon.ico                app and installer icon
├── design/                       design spec, never imported by code
├── docs/
├── .claude/                      project settings and skills
└── src/
    ├── shared/
    │   └── ipc.ts                channel names and payload types used by main and preload
    ├── main/
    │   ├── index.ts              app lifecycle, single instance lock, wiring
    │   ├── window.ts             createMainWindow
    │   ├── autostart.ts          login item on packaged Windows builds
    │   ├── shortcuts.ts          Esc, F11, Ctrl+Q through before-input-event
    │   ├── security.ts           navigation and window-open guards
    │   └── ipc.ts                ipcMain handlers
    ├── preload/
    │   ├── index.ts              contextBridge.exposeInMainWorld('api', api)
    │   └── index.d.ts            Window['api'] typing
    └── renderer/
        ├── index.html            strict CSP
        └── src/
            ├── main.tsx
            ├── app/
            │   ├── App.tsx               providers, AudioController, router outlet
            │   ├── router.tsx            createHashRouter with all routes
            │   ├── paths.ts              route path constants
            │   └── RouteTransition.tsx   motion based page transition wrapper
            ├── styles/
            │   ├── index.css             imports tailwind, fonts, theme, base, animations
            │   ├── theme.css             @theme tokens: colors, fonts, shared animations
            │   ├── base.css              html, body, focus, selection, scrollbar
            │   └── animations/
            │       ├── shared.css
            │       ├── splash.css
            │       ├── home.css
            │       ├── reasons.css
            │       ├── letter.css
            │       ├── gallery.css
            │       ├── story.css
            │       ├── open-when.css
            │       └── sky.css
            ├── content/
            │   ├── config.ts             names, relationship start, signature, splash duration
            │   ├── reasons.ts
            │   ├── letter.ts
            │   ├── openWhen.ts
            │   ├── timeline.ts
            │   └── photos.ts
            ├── assets/
            │   ├── photos/
            │   └── music/
            ├── store/
            │   ├── audioStore.ts         isPlaying, volume, toggle
            │   └── preferencesStore.ts   persisted: opened notes, last reason index
            ├── components/
            │   ├── layout/               PageShell, PageHeader, Backdrop
            │   ├── ui/                   IconButton, PillButton, BackLink, NavTile
            │   └── decor/                HeartIcon, GlowOrbs, Sparkles, FloatingHearts, HeartBurst, Ring
            ├── features/
            │   ├── splash/
            │   ├── home/
            │   ├── reasons/
            │   ├── letter/
            │   ├── gallery/
            │   ├── story/
            │   ├── open-when/
            │   └── sky/
            ├── hooks/                useNow, useInterval, useReducedMotion, useAppShortcuts
            ├── lib/                  cn, dateSr, togetherTime, seededRandom, clamp
            └── types/                content.ts, api.ts
```

## Feature folder shape

Every feature uses the same layout so they are predictable:

```
features/gallery/
├── GalleryScreen.tsx       the route component, composes the rest, no heavy logic
├── components/
│   ├── Collage.tsx
│   ├── Polaroid.tsx
│   ├── PhotoPlaceholder.tsx
│   ├── Lightbox.tsx
│   └── FairyLights.tsx
├── hooks/
│   └── useLightbox.ts      selected index, next, prev, close, keyboard arrows
├── layout.ts               static positions and rotations for the collage
└── index.ts                export { GalleryScreen }
```

`constants.ts` or `layout.ts` hold timings, positions and other static numbers of that feature. Components read them instead of inlining magic numbers.

## Data flow

1. `content/*.ts` exports typed, immutable data (`as const satisfies …`).
2. Screens read content directly and pass plain props down.
3. Time-based values come from hooks (`useNow`, `useTogetherTime`, `useLoadingProgress`), which use `lib/` pure functions that are unit tested.
4. Cross-screen state lives in zustand stores. `preferencesStore` uses the `persist` middleware with localStorage, which Electron keeps in the app's userData folder.
5. Native actions go through `window.api` only.

## Startup sequence

1. Main acquires the single instance lock, registers IPC and security guards, enables autostart on packaged Windows builds.
2. Main creates a frameless full-screen window with background `#120A1F`, shown on `ready-to-show` so there is no white flash.
3. Renderer mounts at `#/` which is the splash. The loading bar runs for `config.splashSeconds`, the heart burst plays at 100 percent, then the app navigates to `#/home` after a short pause or when the button is pressed.
4. Home links to the six sections. Every section has a back link to home.

## Libraries and why

| Library | Role |
|---|---|
| electron, electron-vite, electron-builder | runtime, build tooling, Windows installer |
| @electron-toolkit/utils, @electron-toolkit/preload | helpers that come with the electron-vite template |
| react, react-dom | UI |
| react-router (v7) | `createHashRouter`, works under `file://` |
| tailwindcss v4, @tailwindcss/vite | styling |
| clsx, tailwind-merge | the `cn()` helper for conditional classes |
| zustand | audio and persisted preferences |
| motion | route transitions, lightbox and envelope presence animations only |
| lucide-react | stroke icons (x, music, arrows, mail, image, moon, sparkles) |
| @fontsource/great-vibes, @fontsource-variable/fraunces, @fontsource-variable/manrope | bundled fonts |
| vitest | unit tests for `lib/` and hooks |
| eslint, prettier, prettier-plugin-tailwindcss | quality and class ordering |

Do not add other dependencies without asking. Specifically not needed: Redux, styled-components, CSS-in-JS, date-fns, react-query, howler, GSAP.
