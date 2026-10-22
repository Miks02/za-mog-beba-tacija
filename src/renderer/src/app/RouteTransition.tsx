import { AnimatePresence, motion } from 'motion/react'
import { useLocation, useOutlet } from 'react-router'
import { useReducedMotion } from '@renderer/hooks/useReducedMotion'

const ROUTE_TRANSITION_S = 0.45
const ROUTE_BLUR = 'blur(8px)'
const ROUTE_ENTER_SCALE = 0.985
const ROUTE_EXIT_SCALE = 1.01
const easeRoute = [0.2, 0.7, 0.2, 1] as const

export function RouteTransition(): React.JSX.Element {
  const location = useLocation()
  const outlet = useOutlet()
  const isReducedMotion = useReducedMotion()
  const blur = isReducedMotion ? 'none' : ROUTE_BLUR

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: blur, scale: ROUTE_ENTER_SCALE }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, transitionEnd: { filter: 'none' } }}
        exit={{ opacity: 0, filter: blur, scale: ROUTE_EXIT_SCALE }}
        transition={{ duration: ROUTE_TRANSITION_S, ease: easeRoute }}
        className="min-h-dvh"
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}
