import { useMemo } from 'react'
import { parseLocalDateTime } from '@renderer/lib/dateSr'
import { getTogetherTime, type TogetherTime } from '@renderer/lib/togetherTime'
import { useNow } from './useNow'

export function useTogetherTime(start: string): TogetherTime {
  const startDate = useMemo(() => parseLocalDateTime(start), [start])
  const now = useNow(1000)
  return getTogetherTime(startDate, now)
}
