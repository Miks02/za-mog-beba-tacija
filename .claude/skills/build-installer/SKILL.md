---
name: build-installer
description: Produce and verify the Windows NSIS installer for the app. Use when the user wants an installer, a release build, or to test the packaged app.
---

# Build the Windows installer

Preferred: run on Windows.

1. Check `electron-builder.yml` matches `docs/ELECTRON.md` (appId, productName, icon, nsis options, artifactName).
2. Check `build/icon.ico` exists and is 256×256.
3. Bump `version` in `package.json` if this is a new release for the user.
4. Run the `quality-check` skill.
5. On Windows: `npm ci`, then `npm run build:win`.
   On Fedora as a fallback: Wine must be installed (`wine --version`), then `npm run build:win`.
6. The installer is `dist/Beba Tacije-<version>-setup.exe`.
7. Tell the user to verify on Windows:
   - install runs and the app opens full screen right after
   - Esc leaves full screen, Ctrl+Q and the close button quit
   - after signing out and in, or restarting, the app starts by itself
   - fonts render without internet (turn Wi-Fi off and restart the app)
   - music plays after pressing the music button
8. Never commit `dist/` or `out/`.
