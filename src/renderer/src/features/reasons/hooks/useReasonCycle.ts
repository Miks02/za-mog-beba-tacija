import { useState } from 'react'
import { usePreferencesStore } from '@renderer/store/preferencesStore'

type ReasonCycle = {
  index: number
  burstCount: number
  next: () => void
}

export function useReasonCycle(count: number): ReasonCycle {
  const storedIndex = usePreferencesStore((s) => s.lastReasonIndex)
  const setLastReasonIndex = usePreferencesStore((s) => s.setLastReasonIndex)
  const [burstCount, setBurstCount] = useState(0)
  const index = storedIndex % count

  const next = (): void => {
    setLastReasonIndex((index + 1) % count)
    setBurstCount((value) => value + 1)
  }

  return { index, burstCount, next }
}
