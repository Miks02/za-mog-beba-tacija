export const IpcChannel = {
  Quit: 'app:quit',
  ToggleFullscreen: 'window:toggle-fullscreen',
  LeaveFullscreen: 'window:leave-fullscreen',
  GetAppVersion: 'app:get-version'
} as const

export type AppApi = {
  quit: () => Promise<void>
  toggleFullscreen: () => Promise<boolean>
  leaveFullscreen: () => Promise<void>
  getAppVersion: () => Promise<string>
}
