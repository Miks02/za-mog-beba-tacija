import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { bloomFillClassName } from '../palette'
import type { DaisyHead } from '../types'

const PETAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315] as const

type DaisyProps = {
  head: DaisyHead
}

export function Daisy({ head }: DaisyProps): React.JSX.Element {
  return (
    <g transform={head.transform}>
      <g
        className={cn(
          'origin-center animate-splash-bloom [animation-delay:var(--delay)] transform-fill motion-reduce:animate-none',
          bloomFillClassName[head.color]
        )}
        style={{ '--delay': `${head.delayS}s` } as CSSProperties}
      >
        {PETAL_ANGLES.map((angle) => (
          <ellipse
            key={angle}
            cx={0}
            cy={-head.petalRy}
            rx={head.petalRx}
            ry={head.petalRy}
            transform={angle === 0 ? undefined : `rotate(${angle})`}
          />
        ))}
        <circle r={head.centerRadius} className="fill-honey" />
      </g>
    </g>
  )
}
