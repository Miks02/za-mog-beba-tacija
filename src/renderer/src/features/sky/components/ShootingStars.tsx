import type { CSSProperties } from 'react'
import { shootingStars } from '../layout'

export function ShootingStars(): React.JSX.Element {
  return (
    <>
      {shootingStars.map((star) => (
        <span
          key={star.id}
          className="absolute top-(--top) left-(--left) h-0.5 w-[170px] origin-left animate-sky-shoot rounded-[2px] bg-linear-90 from-haze/0 to-haze shadow-sky-shoot [animation-delay:var(--delay)] [animation-duration:var(--duration)] motion-reduce:hidden"
          style={
            {
              '--top': `${star.topPct}%`,
              '--left': `${star.leftPct}%`,
              '--delay': `${star.delayS}s`,
              '--duration': `${star.durationS}s`
            } as CSSProperties
          }
        />
      ))}
    </>
  )
}
