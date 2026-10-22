import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { FAIRY_WIRE_PATH, fairyBulbs } from '../layout'

const BULB_RADIUS = 5.5

export function FairyLights(): React.JSX.Element {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 110"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute top-0 left-0 h-[110px] w-full overflow-visible"
    >
      <path
        d={FAIRY_WIRE_PATH}
        fill="none"
        strokeWidth={1.5}
        className="gallery-wire animate-gallery-wire stroke-grass motion-reduce:animate-none"
      />
      <g className="drop-shadow-gallery-bulbs">
        {fairyBulbs.map((bulb) => (
          <circle
            key={bulb.id}
            cx={bulb.cx}
            cy={bulb.cy}
            r={BULB_RADIUS}
            className={cn(
              'animate-gallery-bulb [animation-delay:var(--delay)] motion-reduce:animate-none',
              bulb.className
            )}
            style={{ '--delay': `${bulb.delayS}s` } as CSSProperties}
          />
        ))}
      </g>
    </svg>
  )
}
