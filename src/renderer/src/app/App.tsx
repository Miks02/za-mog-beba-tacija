import { MotionConfig } from 'motion/react'
import { Outlet } from 'react-router'
import { useAppShortcuts } from '@renderer/hooks/useAppShortcuts'
import { AudioController } from './AudioController'

export function App(): React.JSX.Element {
  useAppShortcuts()
  return (
    <MotionConfig reducedMotion="user">
      <AudioController />
      <Outlet />
    </MotionConfig>
  )
}
