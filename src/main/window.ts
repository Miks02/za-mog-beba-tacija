import { BrowserWindow } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

const WINDOW_BACKGROUND = '#120A1F'

export function createMainWindow(): BrowserWindow {
  const window = new BrowserWindow({
    fullscreen: true,
    frame: false,
    autoHideMenuBar: true,
    backgroundColor: WINDOW_BACKGROUND,
    show: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false
    }
  })

  window.once('ready-to-show', () => window.show())
  loadRenderer(window)
  return window
}

function loadRenderer(window: BrowserWindow): void {
  const devServerUrl = process.env['ELECTRON_RENDERER_URL']
  if (is.dev && devServerUrl) {
    window.loadURL(devServerUrl)
    return
  }
  window.loadFile(join(__dirname, '../renderer/index.html'))
}

export function toggleFullscreen(window: BrowserWindow): boolean {
  const next = !window.isFullScreen()
  window.setFullScreen(next)
  return next
}

export function leaveFullscreen(window: BrowserWindow): void {
  if (window.isFullScreen()) window.setFullScreen(false)
}

export function restoreAndFocus(window: BrowserWindow): void {
  if (window.isMinimized()) window.restore()
  window.show()
  window.focus()
}
