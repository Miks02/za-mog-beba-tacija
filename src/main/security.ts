import { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'

export function applySecurityGuards(window: BrowserWindow): void {
  const { webContents } = window
  webContents.setWindowOpenHandler(() => ({ action: 'deny' }))
  webContents.on('will-navigate', (event, url) => {
    if (!isAppUrl(url)) event.preventDefault()
  })
}

function isAppUrl(url: string): boolean {
  const devServerUrl = process.env['ELECTRON_RENDERER_URL']
  if (is.dev && devServerUrl) return url.startsWith(devServerUrl)
  return url.startsWith('file://')
}
