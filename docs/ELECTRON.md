# Electron

## Window

`src/main/window.ts` creates one `BrowserWindow`:

- `fullscreen: true`, `frame: false`, `autoHideMenuBar: true`, `backgroundColor: '#120A1F'`, `show: false`, shown on `ready-to-show`.
- `webPreferences`: `preload` from the built preload, `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`, `spellcheck: false`.
- In development load `process.env.ELECTRON_RENDERER_URL`, in production load the built `index.html`.
- Do not use kiosk mode. She must always be able to leave the app.

## Single instance

`app.requestSingleInstanceLock()`. If a second instance starts, quit it and restore and focus the existing window.

## Security

`src/main/security.ts`:

- `setWindowOpenHandler` returns `{ action: 'deny' }`.
- `will-navigate` is prevented for any URL that is not the app itself.
- No remote content is ever loaded.
- Renderer `index.html` has a CSP: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; media-src 'self' blob:; connect-src 'self'`. In development electron-vite needs the dev server origin; follow the template's approach for dev.

## Keyboard shortcuts

F11 and Ctrl+Q are handled in `src/main/shortcuts.ts` with `webContents.on('before-input-event')`, so they only work while the app is focused (no global shortcuts). Esc is handled in the renderer by `hooks/useAppShortcuts.ts`, so an open overlay such as the gallery lightbox can consume it first (it calls `preventDefault`); otherwise the hook calls `window.api.leaveFullscreen()`.

| Keys     | Action                                              |
| -------- | --------------------------------------------------- |
| `Esc`    | close the open overlay, otherwise leave full screen |
| `F11`    | toggle full screen                                  |
| `Ctrl+Q` | quit                                                |

## IPC contract

`src/shared/ipc.ts` is the single source of truth:

```ts
export const IpcChannel = {
  Quit: 'app:quit',
  ToggleFullscreen: 'window:toggle-fullscreen',
  LeaveFullscreen: 'window:leave-fullscreen',
  GetAppVersion: 'app:get-version'
} as const
```

Preload exposes:

```ts
type AppApi = {
  quit: () => Promise<void>
  toggleFullscreen: () => Promise<boolean>
  leaveFullscreen: () => Promise<void>
  getAppVersion: () => Promise<string>
}
```

Every channel uses `ipcMain.handle` and `ipcRenderer.invoke`. Adding a capability means updating `shared/ipc.ts`, `main/ipc.ts`, `preload/index.ts` and `preload/index.d.ts` together.

## Autostart

`src/main/autostart.ts` calls `app.setLoginItemSettings({ openAtLogin: true })` only when `app.isPackaged && process.platform === 'win32'`. In development on Linux it does nothing. The installer sets it on first launch, so the app opens at every Windows login.

## Audio

Music is a bundled file in `src/renderer/src/assets/music/`. It plays only after she presses the music button, so no autoplay switch is needed. If `config.musicAutoplay` is ever set to true, add `app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required')` in `main/index.ts` before `app.whenReady()`.

## Packaging

`electron-builder.yml`:

- `appId: com.milan.bebatacije`
- `productName: Beba Tacije`
- `directories.buildResources: build`, icon `build/icon.ico` (256×256, a filled heart in `#C9A7FF` on `#120A1F`)
- `win.target: nsis`, arch `x64`
- `nsis`: `oneClick: true`, `perMachine: false`, `createDesktopShortcut: true`, `createStartMenuShortcut: true`, `runAfterFinish: true`, `shortcutName: Beba Tacije`
- `artifactName: ${productName}-${version}-setup.${ext}`
- Keep the template's Linux target for local testing (`npm run build:linux` produces an AppImage).

Build on Windows for the most reliable result: `npm ci` then `npm run build:win`, output in `dist/`. Building the Windows target on Linux works only with Wine installed and is a fallback.

## Linux development notes

- Electron runs on Fedora KDE under Wayland through XWayland by default, no flags needed.
- If Electron fails to start with a sandbox error, report the exact error instead of disabling the sandbox in code.
