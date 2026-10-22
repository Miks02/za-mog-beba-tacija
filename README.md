# Beba Tacije

Full-screen desktop love app for Windows, built with Electron, React 19, TypeScript and Tailwind CSS v4. It starts with Windows, plays an animated splash and opens a home screen with six sections: a letter, reasons, a photo collage, our story timeline, open-when notes and a night sky.

## Quick start

```bash
npm install
npm run dev
```

## Commands

| Command                | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start with hot reload                     |
| `npm run typecheck`    | TypeScript for main, preload and renderer |
| `npm run lint`         | ESLint                                    |
| `npm run format`       | Prettier with the Tailwind class sorter   |
| `npm run test`         | Vitest                                    |
| `npm run build`        | Typecheck and production build            |
| `npm run build:unpack` | Unpacked app in `dist/` for local testing |
| `npm run build:win`    | Windows NSIS installer in `dist/`         |
| `npm run build:linux`  | Linux AppImage in `dist/`                 |

## Documentation

| File            | Contents                                                              |
| --------------- | --------------------------------------------------------------------- |
| `SUMMARY.md`    | How the finished app works, how to edit content, troubleshooting      |
| `POKRETANJE.md` | Setup on Fedora and building the installer on Windows                 |
| `CLAUDE.md`     | Hard rules for working on the code                                    |
| `docs/`         | Architecture, code, style, animation, screens and Electron guidelines |
| `design/`       | The original design spec                                              |

Personal content lives in `src/renderer/src/content/` and `src/renderer/src/assets/`.
