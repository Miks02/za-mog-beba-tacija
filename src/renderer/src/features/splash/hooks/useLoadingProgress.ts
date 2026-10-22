import { useCallback, useState } from 'react'
import { useInterval } from '@renderer/hooks/useInterval'
import { PROGRESS_TICK_MS } from '../constants'
import { easedPercent, statusIndexFor } from '../progress'

type LoadingProgress = {
  percent: number
  isDone: boolean
  statusIndex: number
}

export function useLoadingProgress(seconds: number): LoadingProgress {
  const [startedAt] = useState(() => Date.now())
  const [percent, setPercent] = useState(0)
  const isDone = percent >= 100

  const tick = useCallback(() => {
    setPercent(easedPercent(Date.now() - startedAt, seconds * 1000))
  }, [startedAt, seconds])

  useInterval(tick, isDone ? null : PROGRESS_TICK_MS)
  return { percent, isDone, statusIndex: statusIndexFor(percent) }
}
