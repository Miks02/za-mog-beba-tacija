import type { CSSProperties } from 'react'
import { HeartIcon } from '@renderer/components/decor/HeartIcon'
import { cn } from '@renderer/lib/cn'
import { risingHearts } from '../layout'

export function RisingHearts(): React.JSX.Element {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 bottom-1/2 left-0 h-0 motion-reduce:hidden"
    >
      {risingHearts.map((heart) => (
        <HeartIcon
          key={heart.id}
          className={cn(
            'absolute bottom-0 left-1/2 animate-reasons-burst opacity-0 [animation-delay:var(--delay)]',
            heart.colorClassName
          )}
          style={
            {
              width: heart.sizePx,
              height: heart.sizePx,
              marginLeft: heart.offsetPx,
              '--delay': `${heart.delayS}s`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
