# Build "Beba Tacije"

This repository was just scaffolded with `npm create @quick-start/electron@latest -- --template react-ts` and the handoff files were copied in. Your job is to turn the design in `design/` into a polished, well-structured Electron app.

## Step 0: read, do not code yet

1. Read `CLAUDE.md` and every file in `docs/`.
2. Read all eight files in `design/`. They are written in a design-tool format (`<x-dc>`, `<sc-for>`, `<sc-if>`, `{{holes}}`, a `DCLogic` class with `renderVals()`). They are the spec for visuals, copy, timing and behavior, not code to copy. Never ship `support.js`, `x-dc`, `sc-*` tags or `{{}}` syntax.
3. Look at the scaffold that exists now.
4. Reply with a short plan per phase and any questions. Wait for my go.

## Phases

Stop after every phase, tell me what to look at in `npm run dev`, and wait for my approval. Run the `quality-check` skill and commit at the end of each phase.

1. **Foundation.** Install the libraries listed in `docs/ARCHITECTURE.md`. Tailwind v4 with the Vite plugin, `theme.css` tokens, bundled fonts, `cn()`. Create the full folder structure. Main process: window, single instance, security, shortcuts, IPC, autostart, preload API with typings. Hash router with all eight routes as simple placeholders, `PageShell` and `PageHeader`. Vitest and prettier-plugin-tailwindcss configured, `test` and `format` scripts added. The app opens full screen on Fedora.
2. **Shared layer.** `lib/` with tests, `hooks/`, both zustand stores, `AudioController`, all shared components, all `content/` files with copy taken exactly from the design.
3. **Splash and Home**, using the `port-design-screen` skill for each.
4. **Reasons and Letter.**
5. **Gallery and Story.**
6. **Open when and Sky.**
7. **Polish.** Route transitions, reduced motion everywhere, keyboard behavior in the lightbox, music button, app icon, `electron-builder.yml` as in `docs/ELECTRON.md`, verify at 1366×768 and 1920×1080.
8. **Documentation.** Write `SUMMARY.md` and replace the template `README.md`.

## SUMMARY.md must contain

1. What the app is, in two sentences.
2. How to run it on Fedora and how to build the installer on Windows, with exact commands.
3. The folder tree with one line per folder explaining its purpose.
4. The app flow from Windows login to each screen.
5. Main, preload and renderer: responsibilities and the IPC table.
6. State: each zustand store, what it holds, what is persisted and where.
7. How to edit content: every file in `content/`, how to add real photos, change the music, change the start date, rewrite the letter and the notes.
8. The styling system: tokens, where keyframes live, how to add an animation.
9. Each screen: its components, hooks and key animations in a few lines.
10. Keyboard shortcuts and autostart behavior.
11. Troubleshooting for the common problems you hit during the build.
12. Ideas for future improvements, clearly marked as not implemented.

## Constraints

- Follow every rule in `CLAUDE.md` and `docs/`. No comments in code.
- Do not add screens, features, copy or dependencies that are not in the spec. Ask instead.
- Keep placeholder content (letter body, middle timeline milestones, photo captions) as visible bracketed placeholders until I provide the real content.
- If something in the design cannot be reproduced exactly, tell me and propose the closest option.
