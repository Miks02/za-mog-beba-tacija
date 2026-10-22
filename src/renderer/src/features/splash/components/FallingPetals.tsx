import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { fallingPetals, PETAL_HEIGHT_RATIO } from '../layout'

export function FallingPetals(): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      {fallingPetals.map((petal) => (
        <div
          key={petal.id}
          className={cn(
            'absolute -top-10 rounded-[70%_0_70%_0] bg-linear-135 from-haze to-lilac shadow-splash-petal [animation-delay:var(--delay)] [animation-duration:var(--duration)]',
            petal.direction === 'left' ? 'animate-splash-fall-left' : 'animate-splash-fall-right'
          )}
          style={
            {
              left: `${petal.leftPct}%`,
              width: petal.widthPx,
              height: Math.round(petal.widthPx * PETAL_HEIGHT_RATIO),
              '--delay': `${petal.delayS}s`,
              '--duration': `${petal.durationS}s`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
