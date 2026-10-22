import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import type { BurstRay } from '@renderer/types/decor'
import { HeartIcon } from './HeartIcon'

type HeartBurstProps = {
  rays: ReadonlyArray<BurstRay>
  heartSizePx?: number
}

export function HeartBurst({ rays, heartSizePx = 18 }: HeartBurstProps): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      {rays.map((ray) => (
        <div
          key={ray.id}
          className="absolute top-1/2 left-1/2 size-0 rotate-(--angle)"
          style={{ '--angle': `${ray.angleDeg}deg` } as CSSProperties}
        >
          <HeartIcon
            className={cn(
              'absolute -top-(--half) -left-(--half) size-(--size) animate-burst-ray [animation-delay:var(--delay)]',
              ray.colorClassName
            )}
            style={
              {
                '--size': `${heartSizePx}px`,
                '--half': `${heartSizePx / 2}px`,
                '--delay': `${ray.delayS}s`,
                '--burst-distance': `${ray.distancePx}px`,
                '--burst-scale': ray.scale
              } as CSSProperties
            }
          />
        </div>
      ))}
    </div>
  )
}
