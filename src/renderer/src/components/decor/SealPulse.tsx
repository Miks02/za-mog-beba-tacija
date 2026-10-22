import type { CSSProperties } from 'react'

type SealPulseProps = {
  ringScale: number
  durationS: number
}

export function SealPulse({ ringScale, durationS }: SealPulseProps): React.JSX.Element {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 animate-seal-ring rounded-full bg-orchid/55 [animation-duration:var(--duration)] motion-reduce:hidden"
      style={{ '--ring-scale': ringScale, '--duration': `${durationS}s` } as CSSProperties}
    />
  )
}
