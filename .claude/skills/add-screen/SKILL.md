---
name: add-screen
description: Add a brand new screen or section to the app end to end, from route to home tile. Use when the user asks for a new page that has no design file yet.
---

# Add a new screen

1. Agree with the user on the screen name, Serbian title, tile subtitle, content and interactions before coding. Do not invent copy.
2. Choose a kebab-case feature folder and a PascalCase screen name.
3. Add the path constant to `app/paths.ts` and the route to `app/router.tsx`.
4. Create the feature folder with the standard shape from `docs/ARCHITECTURE.md`.
5. Wrap the screen in `PageShell` and use `PageHeader` with a `BackLink` to home.
6. Put its data in a new file in `content/` with a type in `types/content.ts`.
7. Put its keyframes in a new `styles/animations/<feature>.css` and import it from `styles/index.css`.
8. Add a tile to the home navigation grid with a lucide icon that matches the existing tiles, and check the grid still fits at 1366×768.
9. Reuse the existing visual language: night background, glow orbs, script title, Fraunces italic subtitle, haze primary buttons.
10. Update `docs/SCREENS.md` and the screens section of `SUMMARY.md`.
11. Run the `quality-check` skill.
