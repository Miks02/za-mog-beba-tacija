import type { CSSProperties } from 'react'
import { wishStreaks } from '../layout'

export function WishShower(): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      {wishStreaks.map((streak) => (
        <span
          key={streak.id}
          className="absolute top-(--top) left-(--left) h-[2.5px] w-[220px] origin-left animate-sky-wish rounded-[2px] bg-linear-90 from-honey/0 to-honey opacity-0 shadow-sky-wish [animation-delay:var(--delay)]"
          style={
            {
              '--top': `${streak.topPct}%`,
              '--left': `${streak.leftPct}%`,
              '--delay': `${streak.delayS}s`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
