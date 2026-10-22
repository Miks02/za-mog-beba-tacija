import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { STAR_COUNT, STAR_SEED } from '../constants'
import { createStarField } from '../starField'

const stars = createStarField(STAR_COUNT, STAR_SEED)

export function StarField(): React.JSX.Element {
  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className={cn(
            'absolute top-(--top) left-(--left) size-(--size) animate-sky-twinkle rounded-full bg-haze [animation-delay:var(--delay)] [animation-duration:var(--duration)] motion-reduce:animate-none motion-reduce:opacity-60',
            star.isBig ? 'shadow-sky-star-big' : 'shadow-sky-star'
          )}
          style={
            {
              '--top': `${star.topPct}%`,
              '--left': `${star.leftPct}%`,
              '--size': `${star.sizePx}px`,
              '--delay': `${star.delayS}s`,
              '--duration': `${star.durationS}s`
            } as CSSProperties
          }
        />
      ))}
    </>
  )
}
