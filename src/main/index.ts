import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { enableAutostart } from './autostart'
import { registerIpcHandlers } from './ipc'
import { applySecurityGuards } from './security'
import { registerShortcuts } from './shortcuts'
import { createMainWindow, restoreAndFocus } from './window'

const APP_USER_MODEL_ID = 'com.milan.bebatacije'

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required')

let mainWindow: BrowserWindow | null = null

function openMainWindow(): void {
  const window = createMainWindow()
  applySecurityGuards(window)
  registerShortcuts(window)
  window.on('closed', () => {
    mainWindow = null
  })
  mainWindow = window
}

function startApp(): void {
  app.on('second-instance', () => {
    if (mainWindow) restoreAndFocus(mainWindow)
  })

  app.on('window-all-closed', () => app.quit())

  app.whenReady().then(() => {
    electronApp.setAppUserModelId(APP_USER_MODEL_ID)
    app.on('browser-window-created', (_, window) => optimizer.watchWindowShortcuts(window))
    enableAutostart()
    registerIpcHandlers(() => mainWindow)
    openMainWindow()
  })
}

if (app.requestSingleInstanceLock()) {
  startApp()
} else {
  app.quit()
}
