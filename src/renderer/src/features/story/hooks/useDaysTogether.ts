import { useState } from 'react'
import { parseLocalDateTime } from '@renderer/lib/dateSr'
import { getTogetherTime } from '@renderer/lib/togetherTime'

export function useDaysTogether(start: string): number {
  const [days] = useState(() => getTogetherTime(parseLocalDateTime(start), new Date()).days)
  return days
}
