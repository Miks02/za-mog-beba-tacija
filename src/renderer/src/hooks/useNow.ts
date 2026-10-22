import { useCallback, useState } from 'react'
import { useInterval } from './useInterval'

export function useNow(intervalMs = 1000): Date {
  const [now, setNow] = useState(() => new Date())
  const tick = useCallback(() => setNow(new Date()), [])
  useInterval(tick, intervalMs)
  return now
}
