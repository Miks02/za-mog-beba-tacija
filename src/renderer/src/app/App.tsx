import { Outlet } from 'react-router'
import { useAppShortcuts } from '@renderer/hooks/useAppShortcuts'

export function App(): React.JSX.Element {
  useAppShortcuts()
  return <Outlet />
}
