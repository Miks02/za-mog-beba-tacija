import { MotionConfig } from 'motion/react'
import { useAppShortcuts } from '@renderer/hooks/useAppShortcuts'
import { AudioController } from './AudioController'
import { RouteTransition } from './RouteTransition'

export function App(): React.JSX.Element {
  useAppShortcuts()
  return (
    <MotionConfig reducedMotion="user">
      <AudioController />
      <RouteTransition />
    </MotionConfig>
  )
}
