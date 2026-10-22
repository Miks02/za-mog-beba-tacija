import type { CSSProperties } from 'react'
import { WISH_STREAK_COUNT, WISH_STREAK_SEED } from '../constants'
import { createWishStreaks } from '../wishEffects'
import { WishSparkles } from './WishSparkles'

const streaks = createWishStreaks(WISH_STREAK_COUNT, WISH_STREAK_SEED)

export function WishShower(): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      <div className="sky-wish-flash absolute inset-0 animate-sky-wish-flash" />
      {streaks.map((streak) => (
        <span
          key={streak.id}
          className="absolute top-(--top) left-(--left) h-(--thickness) w-(--length) origin-left animate-sky-wish rounded-full bg-linear-90 from-honey/0 via-honey/70 to-honey opacity-0 shadow-sky-wish [animation-delay:var(--delay)] [animation-duration:var(--duration)]"
          style={
            {
              '--top': `${streak.topPct}%`,
              '--left': `${streak.leftPct}%`,
              '--length': `${streak.lengthPx}px`,
              '--thickness': `${streak.thicknessPx}px`,
              '--delay': `${streak.delayS}s`,
              '--duration': `${streak.durationS}s`
            } as CSSProperties
          }
        >
          <span className="absolute top-1/2 right-0 size-[7px] translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sky-wish-head" />
        </span>
      ))}
      <WishSparkles />
    </div>
  )
}
