import { useCallback, useEffect, useState } from 'react'
import { ENVELOPE_RETURN_MS, ENVELOPE_SWAP_MS } from '../constants'

export type EnvelopePhase = 'closed' | 'opening' | 'open' | 'closing'

type Envelope = {
  phase: EnvelopePhase
  open: () => void
  close: () => void
}

const SETTLED_PHASE = { opening: 'open', closing: 'closed' } as const

const SETTLE_DELAY_MS = { opening: ENVELOPE_SWAP_MS, closing: ENVELOPE_RETURN_MS } as const

export function useEnvelope(): Envelope {
  const [phase, setPhase] = useState<EnvelopePhase>('closed')

  useEffect(() => {
    if (phase !== 'opening' && phase !== 'closing') return
    const id = window.setTimeout(() => setPhase(SETTLED_PHASE[phase]), SETTLE_DELAY_MS[phase])
    return () => window.clearTimeout(id)
  }, [phase])

  const open = useCallback(
    () => setPhase((current) => (current === 'closed' ? 'opening' : current)),
    []
  )
  const close = useCallback(
    () =>
      setPhase((current) => (current === 'open' || current === 'opening' ? 'closing' : current)),
    []
  )
  return { phase, open, close }
}
