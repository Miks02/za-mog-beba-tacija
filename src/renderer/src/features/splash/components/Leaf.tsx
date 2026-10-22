import type { CSSProperties } from 'react'
import { cn } from '@renderer/lib/cn'
import { leafFillClassName } from '../palette'
import type { LeafSpec } from '../types'

const LEAF_PATH = 'M0 0 C10 -16 28 -18 40 -12 C28 -2 12 4 0 0Z'

type LeafProps = {
  leaf: LeafSpec
}

export function Leaf({ leaf }: LeafProps): React.JSX.Element {
  return (
    <g transform={leaf.transform}>
      <path
        d={LEAF_PATH}
        className={cn(
          'origin-[0%_80%] animate-splash-leaf [animation-delay:var(--delay)] transform-fill motion-reduce:animate-none',
          leafFillClassName[leaf.tone]
        )}
        style={{ '--delay': `${leaf.delayS}s` } as CSSProperties}
      />
    </g>
  )
}
