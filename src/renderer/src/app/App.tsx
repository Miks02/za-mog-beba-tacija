import { Outlet } from 'react-router'
import { useAppShortcuts } from '@renderer/hooks/useAppShortcuts'
import { AudioController } from './AudioController'

export function App(): React.JSX.Element {
  useAppShortcuts()
  return (
    <>
      <AudioController />
      <Outlet />
    </>
  )
}
