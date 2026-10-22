import { app, BrowserWindow, Input } from 'electron'
import { toggleFullscreen } from './window'

export function registerShortcuts(window: BrowserWindow): void {
  window.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return
    if (isToggleFullscreen(input)) {
      event.preventDefault()
      toggleFullscreen(window)
      return
    }
    if (isQuit(input)) {
      event.preventDefault()
      app.quit()
    }
  })
}

function isToggleFullscreen(input: Input): boolean {
  return input.key === 'F11'
}

function isQuit(input: Input): boolean {
  return input.control && input.key.toLowerCase() === 'q'
}
