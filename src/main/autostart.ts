import { app } from 'electron'

export function enableAutostart(): void {
  if (!app.isPackaged || process.platform !== 'win32') return
  app.setLoginItemSettings({ openAtLogin: true })
}
