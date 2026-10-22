import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { bloomFillClassName } from '../palette'
import type { SprigHead } from '../types'

type SprigProps = {
  head: SprigHead
}

export function Sprig({ head }: SprigProps): React.JSX.Element {
  return (
    <g transform={head.transform}>
      <circle
        r={head.radius}
        className={cn(
          'origin-center animate-splash-bloom [animation-delay:var(--delay)] transform-fill motion-reduce:animate-none',
          bloomFillClassName[head.color]
        )}
        style={{ '--delay': `${head.delayS}s` } as CSSProperties}
      />
    </g>
  )
}
