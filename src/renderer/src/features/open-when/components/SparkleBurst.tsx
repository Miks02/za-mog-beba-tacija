import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { sparkleRays } from '../layout'

export function SparkleBurst(): React.JSX.Element {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      {sparkleRays.map((ray) => (
        <div
          key={ray.id}
          className="absolute top-1/2 left-1/2 size-0 rotate-(--angle)"
          style={{ '--angle': `${ray.angleDeg}deg` } as CSSProperties}
        >
          <span
            className={cn(
              'absolute -top-[5px] -left-[5px] size-2.5 animate-open-when-ray rounded-full bg-current shadow-open-when-ray [animation-delay:var(--delay)]',
              ray.colorClassName
            )}
            style={{ '--delay': `${ray.delayS}s` } as CSSProperties}
          />
        </div>
      ))}
    </div>
  )
}
