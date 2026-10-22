import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { GARDEN_BASELINE_Y } from '../constants'
import { stemStrokeClassName } from '../palette'
import type { PlantSpec } from '../types'
import { Leaf } from './Leaf'
import { PlantHead } from './PlantHead'

type PlantProps = {
  plant: PlantSpec
}

export function Plant({ plant }: PlantProps): React.JSX.Element {
  const { stem } = plant
  return (
    <g transform={`translate(${plant.x} ${GARDEN_BASELINE_Y})`}>
      <g
        className="origin-top-left animate-splash-sway [animation-delay:var(--delay)] transform-view motion-reduce:animate-none"
        style={{ '--delay': `${plant.swayDelayS}s` } as CSSProperties}
      >
        <path
          d={stem.d}
          fill="none"
          strokeWidth={stem.width}
          strokeLinecap="round"
          className={cn(
            'splash-stem animate-splash-draw [animation-delay:var(--delay)] motion-reduce:animate-none',
            stemStrokeClassName[stem.tone]
          )}
          style={{ '--delay': `${stem.delayS}s` } as CSSProperties}
        />
        {plant.leaves.map((leaf) => (
          <Leaf key={leaf.id} leaf={leaf} />
        ))}
        <PlantHead head={plant.head} />
      </g>
    </g>
  )
}
