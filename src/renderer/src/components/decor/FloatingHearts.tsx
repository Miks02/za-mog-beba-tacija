import type { CSSProperties } from 'react'
import type { Floater } from '@renderer/types/decor'
import { HeartIcon } from './HeartIcon'

type FloatingHeartsProps = {
  floaters: ReadonlyArray<Floater>
}

export function FloatingHearts({ floaters }: FloatingHeartsProps): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      {floaters.map((floater) => (
        <HeartIcon
          key={floater.id}
          className="absolute -bottom-[30px] animate-float-up fill-amethyst/45 [animation-delay:var(--delay)] [animation-duration:var(--duration)]"
          style={
            {
              left: `${floater.leftPct}%`,
              width: floater.sizePx,
              height: floater.sizePx,
              '--delay': `${floater.delayS}s`,
              '--duration': `${floater.durationS}s`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
