import { useCallback, useEffect, useState } from 'react'
import { ENVELOPE_SWAP_MS } from '../constants'

export type EnvelopePhase = 'closed' | 'opening' | 'open'

type Envelope = {
  phase: EnvelopePhase
  open: () => void
  close: () => void
}

export function useEnvelope(): Envelope {
  const [phase, setPhase] = useState<EnvelopePhase>('closed')

  useEffect(() => {
    if (phase !== 'opening') return
    const id = window.setTimeout(() => setPhase('open'), ENVELOPE_SWAP_MS)
    return () => window.clearTimeout(id)
  }, [phase])

  const open = useCallback(() => setPhase('opening'), [])
  const close = useCallback(() => setPhase('closed'), [])
  return { phase, open, close }
}
