import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { GlowOrb, GlowTone } from '@renderer/types/decor'

const toneClassName: Record<GlowTone, string> = {
  iris: 'from-iris',
  orchid: 'from-orchid-deep'
}

type GlowOrbsProps = {
  orbs: ReadonlyArray<GlowOrb>
  durationS?: number
}

export function GlowOrbs({ orbs, durationS = 18 }: GlowOrbsProps): React.JSX.Element {
  return (
    <>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          aria-hidden
          className={cn(
            'pointer-events-none absolute animate-drift rounded-full bg-radial to-transparent to-65% [animation-delay:var(--delay)] [animation-duration:var(--duration)] motion-reduce:animate-none',
            toneClassName[orb.tone]
          )}
          style={
            {
              width: orb.size,
              height: orb.size,
              left: orb.left,
              right: orb.right,
              top: orb.top,
              bottom: orb.bottom,
              opacity: orb.opacity,
              '--delay': `${orb.delayS ?? 0}s`,
              '--duration': `${durationS}s`
            } as CSSProperties
          }
        />
      ))}
    </>
  )
}
