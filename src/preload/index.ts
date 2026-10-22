import { contextBridge, ipcRenderer } from 'electron'
import { IpcChannel, type AppApi } from '../shared/ipc'

const api: AppApi = {
  quit: () => ipcRenderer.invoke(IpcChannel.Quit),
  toggleFullscreen: () => ipcRenderer.invoke(IpcChannel.ToggleFullscreen),
  leaveFullscreen: () => ipcRenderer.invoke(IpcChannel.LeaveFullscreen),
  getAppVersion: () => ipcRenderer.invoke(IpcChannel.GetAppVersion)
}

contextBridge.exposeInMainWorld('api', api)
