import { app, BrowserWindow, ipcMain } from 'electron'
import { IpcChannel } from '../shared/ipc'
import { leaveFullscreen, toggleFullscreen } from './window'

export function registerIpcHandlers(getWindow: () => BrowserWindow | null): void {
  ipcMain.handle(IpcChannel.Quit, () => app.quit())
  ipcMain.handle(IpcChannel.ToggleFullscreen, () => {
    const window = getWindow()
    return window ? toggleFullscreen(window) : false
  })
  ipcMain.handle(IpcChannel.LeaveFullscreen, () => {
    const window = getWindow()
    if (window) leaveFullscreen(window)
  })
  ipcMain.handle(IpcChannel.GetAppVersion, () => app.getVersion())
}
